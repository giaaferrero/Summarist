import { createContext, useContext, useState } from "react";
import { auth } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [authModalOpen, setAuthModalOpen] = useState(false);

  function openAuthModal() {
    setAuthModalOpen(true);
  }

  function closeAuthModal() {
    setAuthModalOpen(false);
  }

  function register(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  function logout() {
    return signOut(auth);
  }

  function guestLogin() {
    return signInWithEmailAndPassword(auth, "guest@gmail.com", "guest123");
  }

  return (
    <AuthContext.Provider
      value={{
        authModalOpen,
        openAuthModal,
        closeAuthModal,
        register,
        login,
        logout,
        guestLogin,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}