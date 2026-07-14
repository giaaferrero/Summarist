import { useEffect, useState } from "react";
import "../styles/for-you.css";
import Sidebar from "../components/Sidebar";
import BookCard from "../components/BookCard";

const ForYou = () => {
  const [selectedBook, setSelectedBook] = useState(null);
  const [recommendedBooks, setRecommendedBooks] = useState([]);
  const [suggestedBooks, setSuggestedBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.title = "For You | Summarist";

    async function getBooks() {
      try {
        const selectedResponse = await fetch(
          "https://us-central1-summaristt.cloudfunctions.net/getBooks?status=selected"
        );

        const recommendedResponse = await fetch(
          "https://us-central1-summaristt.cloudfunctions.net/getBooks?status=recommended"
        );

        const suggestedResponse = await fetch(
          "https://us-central1-summaristt.cloudfunctions.net/getBooks?status=suggested"
        );

        const selectedData = await selectedResponse.json();
        const recommendedData = await recommendedResponse.json();
        const suggestedData = await suggestedResponse.json();

        setSelectedBook(selectedData[0]);
        setRecommendedBooks(recommendedData);
        setSuggestedBooks(suggestedData);
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
        <div className="search__bar">
          <input
            type="text"
            placeholder="Search for books"
            className="search__input"
          />
        </div>

        <h1>For You</h1>

        {loading ? (
          <div className="for-you__loading">
            <div className="skeleton skeleton__title"></div>

            <div className="skeleton__books">
              <div className="skeleton skeleton__book"></div>
              <div className="skeleton skeleton__book"></div>
              <div className="skeleton skeleton__book"></div>
              <div className="skeleton skeleton__book"></div>
            </div>

            <div className="skeleton__books">
              <div className="skeleton skeleton__book"></div>
              <div className="skeleton skeleton__book"></div>
              <div className="skeleton skeleton__book"></div>
              <div className="skeleton skeleton__book"></div>
            </div>
          </div>
        ) : (
          <>
            <section>
              <h2>Selected just for you</h2>
              <h3>{selectedBook?.title}</h3>
            </section>

            <section>
              <h2>Recommended For You</h2>

              <div className="books__row">
                {recommendedBooks.map((book) => (
                  <BookCard book={book} key={book.id} />
                ))}
              </div>
            </section>

            <section>
              <h2>Suggested Books</h2>

              <div className="books__row">
                {suggestedBooks.map((book) => (
                  <BookCard book={book} key={book.id} />
                ))}
              </div>
            </section>
          </>
        )}
      </main>
    </div>
  );
};

export default ForYou;