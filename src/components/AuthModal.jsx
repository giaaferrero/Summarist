import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function AuthModal() {
  const {
    authModalOpen,
    closeAuthModal,
    login,
    register,
    guestLogin,
  } = useAuth();

  const navigate = useNavigate();

  const [isRegistering, setIsRegistering] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  if (!authModalOpen) {
    return null;
  }

  function resetModal() {
    setEmail("");
    setPassword("");
    setError("");
    setIsLoading(false);
    setIsRegistering(false);
    closeAuthModal();
  }

  function getAuthErrorMessage(error) {
    switch (error.code) {
      case "auth/email-already-in-use":
        return "An account already exists with this email.";

      case "auth/invalid-email":
        return "Please enter a valid email address.";

      case "auth/weak-password":
        return "Password must be at least 6 characters.";

      case "auth/invalid-credential":
      case "auth/user-not-found":
      case "auth/wrong-password":
        return "Incorrect email or password.";

      case "auth/too-many-requests":
        return "Too many attempts. Please try again later.";

      case "auth/network-request-failed":
        return "Network error. Please check your connection.";

      default:
        return "Something went wrong. Please try again.";
    }
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setError("");

    const trimmedEmail = email.trim();

    if (!trimmedEmail) {
      setError("Please enter your email address.");
      return;
    }

    if (!password) {
      setError("Please enter your password.");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    setIsLoading(true);

    try {
      if (isRegistering) {
        await register(trimmedEmail, password);
      } else {
        await login(trimmedEmail, password);
      }

      resetModal();
      navigate("/for-you");
    } catch (error) {
      setError(getAuthErrorMessage(error));
      setIsLoading(false);
    }
  }

  async function handleGuestLogin() {
    setError("");
    setIsLoading(true);

    try {
      await guestLogin();
      resetModal();
      navigate("/for-you");
    } catch (error) {
      setError(getAuthErrorMessage(error));
      setIsLoading(false);
    }
  }

  function switchAuthMode() {
    setIsRegistering((previousValue) => !previousValue);
    setEmail("");
    setPassword("");
    setError("");
  }

  return (
    <div className="auth__overlay">
      <div className="auth__modal">
        <button
          className="auth__close"
          onClick={resetModal}
          aria-label="Close login modal"
          disabled={isLoading}
        >
          ×
        </button>

        <h2 className="auth__title">
          {isRegistering
            ? "Sign up to Summarist"
            : "Log in to Summarist"}
        </h2>

        <button
          className="auth__guest"
          onClick={handleGuestLogin}
          disabled={isLoading}
        >
          {isLoading ? "Please wait..." : "Login as a Guest"}
        </button>

        <div className="auth__divider">
          <span></span>
          <p>or</p>
          <span></span>
        </div>

        <form className="auth__form" onSubmit={handleSubmit}>
          <input
            className="auth__input"
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
              setError("");
            }}
            autoComplete="email"
            disabled={isLoading}
            required
          />

          <input
            className="auth__input"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
              setError("");
            }}
            autoComplete={
              isRegistering ? "new-password" : "current-password"
            }
            minLength={6}
            disabled={isLoading}
            required
          />

          {error && (
            <p className="auth__error" role="alert">
              {error}
            </p>
          )}

          <button
            className="auth__submit"
            type="submit"
            disabled={isLoading}
          >
            {isLoading
              ? "Please wait..."
              : isRegistering
                ? "Sign Up"
                : "Login"}
          </button>
        </form>

        <button
          className="auth__switch"
          onClick={switchAuthMode}
          disabled={isLoading}
        >
          {isRegistering
            ? "Already have an account?"
            : "Don't have an account?"}
        </button>
      </div>
    </div>
  );
}