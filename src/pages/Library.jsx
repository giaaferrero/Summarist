import { useEffect, useState } from "react";
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

  return (
    <div className="library">
      <Sidebar />

      <main className="library__main">
        <h1>My Library</h1>

        {savedBooks.length === 0 ? (
          <p>You haven't saved any books yet.</p>
        ) : (
          <div className="books__row">
            {savedBooks.map((book) => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default Library;