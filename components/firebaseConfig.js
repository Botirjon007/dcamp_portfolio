
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth"; // Import Firebase auth functions

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCTmxULf2Ov_UtpwzJ-P0kRFHw_5t4A6lQ",
  authDomain: "dcamp-portfolio.firebaseapp.com",
  databaseURL: "https://dcamp-portfolio-default-rtdb.firebaseio.com",
  projectId: "dcamp-portfolio",
  storageBucket: "dcamp-portfolio.appspot.com",
  messagingSenderId: "652848831637",
  appId: "1:652848831637:web:cedf3d9416deb5e10b0f9c",
  measurementId: "G-W9299K170X",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(); // Initialize Firebase authentication


 