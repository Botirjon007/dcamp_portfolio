import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; // Import Firestore

const firebaseConfig = {
  apiKey: "AIzaSyCTmxULf2Ov_UtpwzJ-P0kRFHw_5t4A6lQ",
  authDomain: "dcamp-portfolio.firebaseapp.com",
  databaseURL: "https://dcamp-portfolio-default-rtdb.firebaseio.com",
  projectId: "dcamp-portfolio",
  storageBucket: "dcamp-portfolio.appspot.com",
  messagingSenderId: "652848831637",
  appId: "1:652848831637:web:cedf3d9416deb5e10b0f9c",
  measurementId: "G-W9299K170X",
  // Your Firebase configuration
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

// Initialize Firebase authentication
const auth = getAuth(app);
const firestore = getFirestore(app);

export { auth, firestore }; // Export auth and firestore objects


export { db}; // Export Firestore database and authentication

export default firebaseConfig; // Export Firebase configuration
