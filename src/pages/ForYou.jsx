import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import BookCard from "../components/BookCard";
import "../styles/for-you.css";

const ForYou = () => {
  const navigate = useNavigate();

  const [selectedBook, setSelectedBook] = useState(null);
  const [recommendedBooks, setRecommendedBooks] = useState([]);
  const [suggestedBooks, setSuggestedBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.title = "For You | Summarist";

    async function getBooks() {
      try {
        const [
          selectedResponse,
          recommendedResponse,
          suggestedResponse,
        ] = await Promise.all([
          fetch(
            "https://us-central1-summaristt.cloudfunctions.net/getBooks?status=selected"
          ),
          fetch(
            "https://us-central1-summaristt.cloudfunctions.net/getBooks?status=recommended"
          ),
          fetch(
            "https://us-central1-summaristt.cloudfunctions.net/getBooks?status=suggested"
          ),
        ]);

        const [
          selectedData,
          recommendedData,
          suggestedData,
        ] = await Promise.all([
          selectedResponse.json(),
          recommendedResponse.json(),
          suggestedResponse.json(),
        ]);

        setSelectedBook(selectedData[0]);
        setRecommendedBooks(recommendedData);
        setSuggestedBooks(suggestedData);
      } catch (error) {
        console.error("Unable to load books:", error);
      } finally {
        setLoading(false);
      }
    }

    getBooks();
  }, []);

  return (
    <div className="for-you__page">
      <Sidebar />

      <main className="for-you__main">
        <header className="for-you__header">
          <div className="search__bar">
            <input
              type="text"
              placeholder="Search for books"
              className="search__input"
              onFocus={() => navigate("/search")}
            />

            <button
              type="button"
              className="search__button"
              aria-label="Search"
              onClick={() => navigate("/search")}
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <circle cx="10.5" cy="10.5" r="6.5" />
                <path d="m16 16 5 5" />
              </svg>
            </button>
          </div>
        </header>

        <div className="for-you__content">
          {loading ? (
            <div className="for-you__loading">
              <div className="skeleton skeleton__title"></div>

              <div className="skeleton skeleton__featured"></div>

              <div className="skeleton skeleton__title"></div>

              <div className="skeleton__books">
                <div className="skeleton skeleton__book"></div>
                <div className="skeleton skeleton__book"></div>
                <div className="skeleton skeleton__book"></div>
                <div className="skeleton skeleton__book"></div>
                <div className="skeleton skeleton__book"></div>
              </div>
            </div>
          ) : (
            <>
              {selectedBook && (
                <section className="featured-book">
                  <h1 className="section__title">
                    Selected just for you
                  </h1>

                  <div
                    className="featured-book__card"
                    onClick={() =>
                      navigate(`/book/${selectedBook.id}`)
                    }
                    onKeyDown={(event) => {
                      if (
                        event.key === "Enter" ||
                        event.key === " "
                      ) {
                        navigate(`/book/${selectedBook.id}`);
                      }
                    }}
                    role="button"
                    tabIndex={0}
                  >
                    <div className="featured-book__description">
                      {selectedBook.subTitle}
                    </div>

                    <div className="featured-book__image">
                      <div className="featured-book__image-background">
                        <img
                          src={selectedBook.imageLink}
                          alt={selectedBook.title}
                        />
                      </div>
                    </div>

                    <div className="featured-book__info">
                      <h2>{selectedBook.title}</h2>

                      <p>{selectedBook.author}</p>

                      <button
                        type="button"
                        className="featured-book__play"
                        onClick={(event) => {
                          event.stopPropagation();

                          navigate(
                            `/player/${selectedBook.id}`
                          );
                        }}
                      >
                        <span className="featured-book__play-icon">
                          ▶
                        </span>

                        <span>
                          {selectedBook.duration ||
                            selectedBook.type ||
                            "Audio & Text"}
                        </span>
                      </button>
                    </div>
                  </div>
                </section>
              )}

              <section className="books-section">
                <h2 className="section__title">
                  Recommended For You
                </h2>

                <p className="section__subtitle">
                  We think you’ll like these
                </p>

                <div className="books__row">
                  {recommendedBooks.map((book) => (
                    <BookCard key={book.id} book={book} />
                  ))}
                </div>
              </section>

              <section className="books-section">
                <h2 className="section__title">
                  Suggested Books
                </h2>

                <p className="section__subtitle">
                  Browse those books
                </p>

                <div className="books__row">
                  {suggestedBooks.map((book) => (
                    <BookCard key={book.id} book={book} />
                  ))}
                </div>
              </section>
            </>
          )}
        </div>
      </main>
    </div>
  );
};

export default ForYou;