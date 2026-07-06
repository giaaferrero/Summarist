import { useNavigate } from "react-router-dom";

export default function BookCard({ book }) {
  const navigate = useNavigate();

  return (
    <div
      className="book-card"
      onClick={() => navigate(`/book/${book.id}`)}
    >
      <img
        src={book.imageLink}
        alt={book.title}
        className="book-card__image"
      />

      <div className="book-card__info">
        <h3 className="book-card__title">{book.title}</h3>

        <p className="book-card__author">
          {book.author}
        </p>

        <p className="book-card__subtitle">
          {book.subTitle}
        </p>

        <div className="book-card__details">
          ⭐ {book.averageRating} •{" "}
          {book.subscriptionRequired ? "Premium" : "Free"}
        </div>
      </div>
    </div>
  );
}