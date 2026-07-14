import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { useAuth } from "../context/AuthContext";
import "../styles/settings.css";

const Settings = () => {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Settings | Summarist";
    window.scrollTo(0, 0);
  }, []);

  async function handleLogout() {
    await logout();
    navigate("/");
  }

  return (
    <div className="settings">
      <Sidebar />

      <main className="settings__main">
        <h1>Settings</h1>

        <div className="settings__section">
          <h2>Your Account</h2>

          <p>Email</p>

          <div className="settings__box">
            {currentUser ? currentUser.email : "Not logged in"}
          </div>
        </div>

        <div className="settings__section">
          <h2>Subscription</h2>

          <div className="settings__box">
            Basic Plan
          </div>
        </div>

        <button
          className="settings__logout"
          onClick={handleLogout}
        >
          Logout
        </button>
      </main>
    </div>
  );
};

export default Settings;