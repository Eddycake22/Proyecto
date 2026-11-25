import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAwrIvPjaf5U6c8Xq5Yq6MiFNpY_7o6chA",
  authDomain: "report-app-663d9.firebaseapp.com",
  projectId: "report-app-663d9",
  storageBucket: "report-app-663d9.firebasestorage.app",
  messagingSenderId: "159276139328",
  appId: "1:159276139328:web:62f9d695c99d4ecc6570a5",
  measurementId: "G-Y6EF7LMPC7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)

export (auth)