import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar__logo">Summarist</div>

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

        <span className="sidebar__link sidebar__link--disabled">
          Search
        </span>

        <Link to="/settings" className="sidebar__link">
          Settings
        </Link>

        <span className="sidebar__link sidebar__link--disabled">
          Help & Support
        </span>
      </nav>
    </aside>
  );
}