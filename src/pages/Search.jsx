import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import BookCard from "../components/BookCard";

const Search = () => {
  const [search, setSearch] = useState("");
  const [books, setBooks] = useState([]);
  const [debouncedSearch, setDebouncedSearch] = useState("");

  // Debounce
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search);
    }, 300);

    return () => clearTimeout(timer);
  }, [search]);

  // Search API
  useEffect(() => {
    async function searchBooks() {
      if (debouncedSearch === "") {
        setBooks([]);
        return;
      }

      const response = await fetch(
        `https://us-central1-summaristt.cloudfunctions.net/getBooksByAuthorOrTitle?search=${debouncedSearch}`
      );

      const data = await response.json();

      console.log(data);

      setBooks(data);
    }

    searchBooks();
  }, [debouncedSearch]);

  return (
    <div className="search-page">
      <Sidebar />

      <main className="search-page__main">
        <h1>Search</h1>

        <input
          type="text"
          placeholder="Search for books"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />

        <div className="books__row">
          {books.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Search;