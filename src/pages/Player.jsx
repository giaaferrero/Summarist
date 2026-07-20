import {
  useEffect,
  useRef,
  useState,
} from "react";
import { useNavigate, useParams } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import "../styles/player.css";

const Player = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const audioRef = useRef(null);

  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [playbackRate, setPlaybackRate] = useState(1);
  const [volume, setVolume] = useState(1);

  useEffect(() => {
    document.title = "Player | Summarist";
    window.scrollTo(0, 0);

    async function getBook() {
      try {
        const response = await fetch(
          `https://us-central1-summaristt.cloudfunctions.net/getBook?id=${id}`
        );

        const data = await response.json();
        setBook(data);
      } catch (error) {
        console.error("Unable to load book:", error);
      } finally {
        setLoading(false);
      }
    }

    getBook();
  }, [id]);

  useEffect(() => {
    const audio = audioRef.current;

    if (!audio) {
      return;
    }

    audio.playbackRate = playbackRate;
  }, [playbackRate]);

  useEffect(() => {
    const audio = audioRef.current;

    if (!audio) {
      return;
    }

    audio.volume = volume;
  }, [volume]);

  const togglePlay = async () => {
    const audio = audioRef.current;

    if (!audio) {
      return;
    }

    try {
      if (audio.paused) {
        await audio.play();
      } else {
        audio.pause();
      }
    } catch (error) {
      console.error("Unable to play audio:", error);
    }
  };

  const skipTime = (seconds) => {
    const audio = audioRef.current;

    if (!audio) {
      return;
    }

    const nextTime = Math.min(
      Math.max(audio.currentTime + seconds, 0),
      audio.duration || 0
    );

    audio.currentTime = nextTime;
    setCurrentTime(nextTime);
  };

  const handleProgressChange = (event) => {
    const audio = audioRef.current;
    const nextTime = Number(event.target.value);

    if (!audio) {
      return;
    }

    audio.currentTime = nextTime;
    setCurrentTime(nextTime);
  };

  const formatTime = (time) => {
    if (!Number.isFinite(time)) {
      return "0:00";
    }

    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60)
      .toString()
      .padStart(2, "0");

    return `${minutes}:${seconds}`;
  };

  if (loading) {
    return (
      <div className="player-page">
        <Sidebar />

        <main className="player">
          <div className="player__loading">
            <div className="player-skeleton player-skeleton__image"></div>
            <div className="player-skeleton player-skeleton__title"></div>
            <div className="player-skeleton player-skeleton__text"></div>
            <div className="player-skeleton player-skeleton__text"></div>
            <div className="player-skeleton player-skeleton__text"></div>
          </div>
        </main>
      </div>
    );
  }

  if (!book) {
    return (
      <div className="player-page">
        <Sidebar />

        <main className="player player__error">
          <h1>Book unavailable</h1>
          <button
            type="button"
            onClick={() => navigate("/for-you")}
          >
            Return to For You
          </button>
        </main>
      </div>
    );
  }

  return (
    <div className="player-page">
      <Sidebar />

      <main className="player">
        <header className="player__header">
          <button
            type="button"
            className="player__back"
            onClick={() => navigate(`/book/${book.id}`)}
          >
            ← Back
          </button>

          <div className="player__header-title">
            {book.title}
          </div>
        </header>

        <div className="player__content">
          <div className="player__book">
            <img
              src={book.imageLink}
              alt={book.title}
              className="player__image"
            />

            <div className="player__book-info">
              <h1>{book.title}</h1>
              <p>{book.author}</p>
            </div>
          </div>

          <article className="player__summary">
            <h2>Key Ideas</h2>

            <p>
              {book.summary ||
                book.bookDescription ||
                "This book summary is currently unavailable."}
            </p>
          </article>
        </div>

        <audio
          ref={audioRef}
          src={book.audioLink}
          onLoadedMetadata={(event) => {
            setDuration(event.currentTarget.duration);
          }}
          onTimeUpdate={(event) => {
            setCurrentTime(event.currentTarget.currentTime);
          }}
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          onEnded={() => setIsPlaying(false)}
        />

        <div className="player__controls">
          <div className="player__progress">
            <span>{formatTime(currentTime)}</span>

            <input
              type="range"
              min="0"
              max={duration || 0}
              step="0.1"
              value={currentTime}
              onChange={handleProgressChange}
              aria-label="Audio progress"
            />

            <span>{formatTime(duration)}</span>
          </div>

          <div className="player__control-row">
            <select
              className="player__speed"
              value={playbackRate}
              onChange={(event) =>
                setPlaybackRate(Number(event.target.value))
              }
              aria-label="Playback speed"
            >
              <option value={0.75}>0.75x</option>
              <option value={1}>1x</option>
              <option value={1.25}>1.25x</option>
              <option value={1.5}>1.5x</option>
              <option value={2}>2x</option>
            </select>

            <div className="player__main-controls">
              <button
                type="button"
                className="player__skip"
                onClick={() => skipTime(-10)}
                aria-label="Rewind 10 seconds"
              >
                ↶ 10
              </button>

              <button
                type="button"
                className="player__play"
                onClick={togglePlay}
                aria-label={isPlaying ? "Pause" : "Play"}
              >
                {isPlaying ? "❚❚" : "▶"}
              </button>

              <button
                type="button"
                className="player__skip"
                onClick={() => skipTime(10)}
                aria-label="Forward 10 seconds"
              >
                10 ↷
              </button>
            </div>

            <div className="player__volume">
              <span aria-hidden="true">🔊</span>

              <input
                type="range"
                min="0"
                max="1"
                step="0.05"
                value={volume}
                onChange={(event) =>
                  setVolume(Number(event.target.value))
                }
                aria-label="Volume"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Player;