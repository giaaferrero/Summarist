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
    try {
      await logout();
      navigate("/");
    } catch (error) {
      console.error("Unable to log out:", error);
    }
  }

  return (
    <div className="settings">
      <Sidebar />

      <main className="settings__main">
        <div className="settings__content">
          <h1>Settings</h1>

          <section className="settings__section">
            <h2>Your Account</h2>

            <div className="settings__row">
              <div>
                <h3>Email</h3>
                <p>{currentUser?.email || "Not logged in"}</p>
              </div>
            </div>
          </section>

          <section className="settings__section">
            <h2>Subscription</h2>

            <div className="settings__row settings__subscription">
              <div>
                <h3>Plan</h3>
                <p>Basic</p>
              </div>

              <button
                type="button"
                className="settings__upgrade"
                onClick={() => navigate("/choose-plan")}
              >
                Upgrade
              </button>
            </div>
          </section>

          <button
            type="button"
            className="settings__logout"
            onClick={handleLogout}
          >
            Log out
          </button>
        </div>
      </main>
    </div>
  );
};

export default Settings;