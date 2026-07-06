import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCsde40VgzcQsAGGGS_bD_UXf9Mi3xPyTM",
  authDomain: "summarist-app-f0213.firebaseapp.com",
  projectId: "summarist-app-f0213",
  storageBucket: "summarist-app-f0213.firebasestorage.app",
  messagingSenderId: "722288126101",
  appId: "1:722288126101:web:89c20f8b52da259ccad39c",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);