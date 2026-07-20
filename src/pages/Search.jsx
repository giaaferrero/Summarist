import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import BookCard from "../components/BookCard";
import "../styles/search.css";

const Search = () => {
  const [search, setSearch] = useState("");
  const [books, setBooks] = useState([]);
  const [debouncedSearch, setDebouncedSearch] = useState("");

  useEffect(() => {
    document.title = "Search | Summarist";
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search);
    }, 300);

    return () => clearTimeout(timer);
  }, [search]);

  useEffect(() => {
    async function searchBooks() {
      if (debouncedSearch.trim() === "") {
        setBooks([]);
        return;
      }

      const response = await fetch(
        `https://us-central1-summaristt.cloudfunctions.net/getBooksByAuthorOrTitle?search=${debouncedSearch}`
      );

      const data = await response.json();

      setBooks(data);
    }

    searchBooks();
  }, [debouncedSearch]);

  return (
    <div className="search-page">
      <Sidebar />

      <main className="search-page__main">
        <div className="search-page__content">
          <h1>Search</h1>

          <div className="search-bar">
            <input
              type="text"
              placeholder="Search by title or author"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          {search === "" ? (
            <div className="search-placeholder">
              <h2>Discover your next read</h2>

              <p>
                Search thousands of book summaries by title or author.
              </p>
            </div>
          ) : (
            <>
              <h2 className="results-title">
                {books.length} Result{books.length !== 1 && "s"}
              </h2>

              <div className="books__row">
                {books.map((book) => (
                  <BookCard
                    key={book.id}
                    book={book}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </main>
    </div>
  );
};

export default Search;