import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "../styles/sidebar.css";

const HomeIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M3 11.5 12 4l9 7.5" />
    <path d="M5.5 10.5V20h13v-9.5" />
    <path d="M9.5 20v-6h5v6" />
  </svg>
);

const BookmarkIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M6 3.5h12v17l-6-4-6 4z" />
  </svg>
);

const HighlightIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="m5 17 9.5-9.5 3 3L8 20H5z" />
    <path d="m14.5 7.5 2-2 3 3-2 2" />
  </svg>
);

const SearchIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <circle cx="10.5" cy="10.5" r="6.5" />
    <path d="m16 16 5 5" />
  </svg>
);

const SettingsIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <circle cx="12" cy="12" r="3" />
    <path d="M12 2v3M12 19v3M4.9 4.9 7 7M17 17l2.1 2.1M2 12h3M19 12h3M4.9 19.1 7 17M17 7l2.1-2.1" />
  </svg>
);

const HelpIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <circle cx="12" cy="12" r="9" />
    <path d="M9.8 9a2.4 2.4 0 1 1 3.7 2c-.9.6-1.5 1-1.5 2" />
    <path d="M12 17h.01" />
  </svg>
);

const LogoutIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M10 4H5v16h5" />
    <path d="M13 8l4 4-4 4" />
    <path d="M17 12H9" />
  </svg>
);

const LoginIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M14 4h5v16h-5" />
    <path d="m11 8-4 4 4 4" />
    <path d="M7 12h10" />
  </svg>
);

const SidebarLink = ({ to, icon, children }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `sidebar__link ${
          isActive ? "sidebar__link--active" : ""
        }`
      }
    >
      <span className="sidebar__icon">{icon}</span>
      <span>{children}</span>
    </NavLink>
  );
};

export default function Sidebar() {
  const { currentUser, logout, openAuthModal } = useAuth();

  async function handleLogout() {
    try {
      await logout();
    } catch (error) {
      console.error("Unable to log out:", error);
    }
  }

  return (
    <aside className="sidebar">
      <Link to="/" className="sidebar__logo">
        <span className="sidebar__logo-icon">
          <span className="sidebar__logo-page"></span>
        </span>

        <span>Summarist</span>
      </Link>

      <nav className="sidebar__nav sidebar__nav--top">
        <SidebarLink to="/for-you" icon={<HomeIcon />}>
          For You
        </SidebarLink>

        <SidebarLink
          to="/library"
          icon={<BookmarkIcon />}
        >
          My Library
        </SidebarLink>

        <div className="sidebar__link sidebar__link--disabled">
          <span className="sidebar__icon">
            <HighlightIcon />
          </span>
          <span>Highlights</span>
        </div>

        <SidebarLink to="/search" icon={<SearchIcon />}>
          Search
        </SidebarLink>
      </nav>

      <nav className="sidebar__nav sidebar__nav--bottom">
        <SidebarLink
          to="/settings"
          icon={<SettingsIcon />}
        >
          Settings
        </SidebarLink>

        <div className="sidebar__link sidebar__link--disabled">
          <span className="sidebar__icon">
            <HelpIcon />
          </span>
          <span>Help &amp; Support</span>
        </div>

        {currentUser ? (
          <button
            type="button"
            className="sidebar__link sidebar__button"
            onClick={handleLogout}
          >
            <span className="sidebar__icon">
              <LogoutIcon />
            </span>
            <span>Logout</span>
          </button>
        ) : (
          <button
            type="button"
            className="sidebar__link sidebar__button"
            onClick={openAuthModal}
          >
            <span className="sidebar__icon">
              <LoginIcon />
            </span>
            <span>Login</span>
          </button>
        )}
      </nav>
    </aside>
  );
}