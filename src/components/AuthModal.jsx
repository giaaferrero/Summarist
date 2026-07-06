import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function AuthModal() {
  const { authModalOpen, closeAuthModal, login, register, guestLogin } =
    useAuth();

  const navigate = useNavigate();

  const [isRegistering, setIsRegistering] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  if (!authModalOpen) {
    return null;
  }

async function handleSubmit(event) {
  event.preventDefault();

  try {
    if (isRegistering) {
      await register(email, password);
    } else {
      await login(email, password);
    }

    closeAuthModal();
    navigate("/for-you");
  } catch (error) {
    alert(error.message);
  }
}

  async function handleGuestLogin() {
    await guestLogin();
    closeAuthModal();
    navigate("/for-you");
  }

  return (
    <div className="auth__overlay">
      <div className="auth__modal">
        <button className="auth__close" onClick={closeAuthModal}>
          ×
        </button>

        <h2>{isRegistering ? "Create your account" : "Log in to Summarist"}</h2>

        <button className="auth__guest" onClick={handleGuestLogin}>
          Login as Guest
        </button>

        <div className="auth__divider">or</div>

        <form onSubmit={handleSubmit}>
          <input
            className="auth__input"
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />

          <input
            className="auth__input"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />

          <button className="auth__submit" type="submit">
            {isRegistering ? "Sign Up" : "Login"}
          </button>
        </form>

        <button
          className="auth__switch"
          onClick={() => setIsRegistering(!isRegistering)}
        >
          {isRegistering
            ? "Already have an account? Login"
            : "Don't have an account? Sign up"}
        </button>
      </div>
    </div>
  );
}