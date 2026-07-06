import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../styles/player.css";

const Player = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    document.title = "Player | Summarist";
    window.scrollTo(0, 0);
    async function getBook() {
      const response = await fetch(
        `https://us-central1-summaristt.cloudfunctions.net/getBook?id=${id}`
      );

      const data = await response.json();
      setBook(data);
    }

    getBook();
  }, [id]);

  if (!book) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="player">
      <div className="player__content">
        <img
          src={book.imageLink}
          alt={book.title}
          className="player__image"
        />

        <h1>{book.title}</h1>

        <h2>{book.author}</h2>

        <p>{book.summary}</p>
        <audio controls src={book.audioLink} className="player__audio" />
      </div>
    </div>
  );
};

export default Player;