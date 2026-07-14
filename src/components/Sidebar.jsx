import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Sidebar() {
  const { currentUser, logout, openAuthModal } = useAuth();

  async function handleLogout() {
    await logout();
  }

  return (
    <aside className="sidebar">
      <Link to="/for-you" className="sidebar__logo">
        Summarist
      </Link>

      <nav className="sidebar__nav">
        <Link to="/for-you" className="sidebar__link">
          For You
        </Link>

        <Link to="/library" className="sidebar__link">
          My Library
        </Link>

        <span className="sidebar__link sidebar__link--disabled">
          Highlights
        </span>

        <Link to="/search" className="sidebar__link">
          Search
        </Link>

        <Link to="/settings" className="sidebar__link">
          Settings
        </Link>

        <span className="sidebar__link sidebar__link--disabled">
          Help & Support
        </span>

        {currentUser ? (
          <button
            className="sidebar__link sidebar__button"
            onClick={handleLogout}
          >
            Logout
          </button>
        ) : (
          <button
            className="sidebar__link sidebar__button"
            onClick={openAuthModal}
          >
            Login
          </button>
        )}
      </nav>
    </aside>
  );
}