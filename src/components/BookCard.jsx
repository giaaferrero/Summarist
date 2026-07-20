import { useNavigate } from "react-router-dom";

const BookCard = ({ book }) => {
  const navigate = useNavigate();

  const openBook = () => {
    navigate(`/book/${book.id}`);
  };

  const duration =
    book.duration ||
    book.audioLength ||
    book.readingTime ||
    "03:24";

  return (
    <div
      className="book-card"
      onClick={openBook}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          openBook();
        }
      }}
      role="button"
      tabIndex={0}
    >
      <img
        src={book.imageLink}
        alt={book.title}
        className="book-card__image"
      />

      <div className="book-card__info">
        <h3 className="book-card__title">
          {book.title}
        </h3>

        <p className="book-card__author">
          {book.author}
        </p>

        <p className="book-card__subtitle">
          {book.subTitle}
        </p>

        <div className="book-card__details">
          <span className="book-card__detail">
            <svg
              viewBox="0 0 24 24"
              className="book-card__icon"
            >
              <circle
                cx="12"
                cy="12"
                r="8"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              />
              <path
                d="M12 7v5l3 2"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>

            {duration}
          </span>

          <span className="book-card__detail">
            <svg
              viewBox="0 0 24 24"
              className="book-card__icon"
            >
              <path
                d="M12 3.5l2.8 5.7 6.2.9-4.5 4.4 1.1 6.2L12 17.8 6.4 20.7l1.1-6.2L3 10.1l6.2-.9z"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              />
            </svg>

            {book.averageRating}
          </span>
        </div>
      </div>
    </div>
  );
};

export default BookCard;