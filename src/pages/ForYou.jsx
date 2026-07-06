import { useEffect, useState } from "react";
import "../styles/for-you.css";
import Sidebar from "../components/Sidebar";
import BookCard from "../components/BookCard";

const ForYou = () => {
  const [selectedBook, setSelectedBook] = useState(null);
  const [recommendedBooks, setRecommendedBooks] = useState([]);
  const [suggestedBooks, setSuggestedBooks] = useState([]);

  useEffect(() => {
    document.title = "For You | Summarist";

    async function getSelectedBook() {
      const response = await fetch(
        "https://us-central1-summaristt.cloudfunctions.net/getBooks?status=selected"
      );

      const data = await response.json();
      setSelectedBook(data[0]);
    }

    async function getRecommendedBooks() {
      const response = await fetch(
        "https://us-central1-summaristt.cloudfunctions.net/getBooks?status=recommended"
      );

      const data = await response.json();
      setRecommendedBooks(data);
    }

    async function getSuggestedBooks() {
      const response = await fetch(
        "https://us-central1-summaristt.cloudfunctions.net/getBooks?status=suggested"
      );

      const data = await response.json();
      setSuggestedBooks(data);
    }

    getSelectedBook();
    getRecommendedBooks();
    getSuggestedBooks();
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
      </main>
    </div>
  );
};

export default ForYou;
