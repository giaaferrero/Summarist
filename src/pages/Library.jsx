import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import BookCard from "../components/BookCard";
import "../styles/library.css";

const Library = () => {
  const [savedBooks, setSavedBooks] = useState([]);

  useEffect(() => {
    document.title = "My Library | Summarist";
    window.scrollTo(0, 0);

    const books =
      JSON.parse(localStorage.getItem("savedBooks")) || [];

    setSavedBooks(books);
  }, []);

  const handleRemoveBook = (bookId) => {
    const updatedBooks = savedBooks.filter(
      (book) => book.id !== bookId
    );

    setSavedBooks(updatedBooks);

    localStorage.setItem(
      "savedBooks",
      JSON.stringify(updatedBooks)
    );
  };

  return (
    <div className="library">
      <Sidebar />

      <main className="library__main">
        <div className="library__content">
          <div className="library__heading">
            <div>
              <h1>My Library</h1>

              <p>
                {savedBooks.length === 0
                  ? "Your saved books will appear here."
                  : `${savedBooks.length} saved ${
                      savedBooks.length === 1 ? "book" : "books"
                    }`}
              </p>
            </div>
          </div>

          {savedBooks.length === 0 ? (
            <div className="library__empty">
              <div className="library__empty-icon">♡</div>

              <h2>Save your favorite books</h2>

              <p>
                Add books to your library so you can easily find them again.
              </p>

              <Link to="/for-you" className="library__browse-button">
                Browse books
              </Link>
            </div>
          ) : (
            <div className="library__books">
              {savedBooks.map((book) => (
                <div className="library__book-wrapper" key={book.id}>
                  <BookCard book={book} />

                  <button
                    type="button"
                    className="library__remove-button"
                    onClick={() => handleRemoveBook(book.id)}
                  >
                    Remove from library
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Library;