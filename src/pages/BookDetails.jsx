import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../styles/book-details.css";

const BookDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [book, setBook] = useState(null);
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    async function getBook() {
      const response = await fetch(
        `https://us-central1-summaristt.cloudfunctions.net/getBook?id=${id}`
      );

      const data = await response.json();
      setBook(data);

      const savedBooks =
        JSON.parse(localStorage.getItem("savedBooks")) || [];

      const bookAlreadySaved = savedBooks.some(
        (savedBook) => savedBook.id === data.id
      );

      setIsSaved(bookAlreadySaved);
    }

    getBook();
  }, [id]);

  function handleSaveBook() {
    const savedBooks =
      JSON.parse(localStorage.getItem("savedBooks")) || [];

    const bookAlreadySaved = savedBooks.some(
      (savedBook) => savedBook.id === book.id
    );

    if (!bookAlreadySaved) {
      const updatedBooks = [...savedBooks, book];

      localStorage.setItem(
        "savedBooks",
        JSON.stringify(updatedBooks)
      );

      setIsSaved(true);
    }
  }

  if (!book) {
  return (
    <div className="book-details__loading">
      <div className="skeleton skeleton__title"></div>
      <div className="skeleton skeleton__text"></div>
      <div className="skeleton skeleton__text"></div>
      <div className="skeleton skeleton__image"></div>
    </div>
  );
}

  return (
    <div className="book-details">
      <div className="book-details__content">
        <div className="book-details__info">
          <h1>
            {book.title}
            {book.subscriptionRequired && " (Premium)"}
          </h1>

          <h2>{book.author}</h2>

          <p className="book-details__subtitle">
            {book.subTitle}
          </p>

          <div className="book-details__stats">
            <div>⭐ {book.averageRating}</div>
            <div>{book.totalRating} ratings</div>
            <div>{book.type}</div>
            <div>{book.keyIdeas} Key Ideas</div>
          </div>

          <div className="book-details__buttons">
            <button
              className="book-details__button"
              onClick={() => navigate(`/player/${book.id}`)}
            >
              Read
            </button>

            <button
              className="book-details__button"
              onClick={() => navigate(`/player/${book.id}`)}
            >
              Listen
            </button>
          </div>

          <button
            className="book-details__library"
            onClick={handleSaveBook}
            disabled={isSaved}
          >
            {isSaved
              ? "Added to My Library"
              : "Add title to My Library"}
          </button>

          <h3>What’s it about?</h3>

          <div className="book-details__tags">
            {book.tags?.map((tag) => (
              <span
                className="book-details__tag"
                key={tag}
              >
                {tag}
              </span>
            ))}
          </div>

          <p className="book-details__description">
            {book.bookDescription}
          </p>

          <h3>About the author</h3>

          <p className="book-details__description">
            {book.authorDescription}
          </p>
        </div>

        <div className="book-details__image--wrapper">
          <img
            src={book.imageLink}
            alt={book.title}
            className="book-details__image"
          />
        </div>
      </div>
    </div>
  );
};

export default BookDetails;