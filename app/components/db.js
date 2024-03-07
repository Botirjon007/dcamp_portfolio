import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { db } from "./components/firebaseConfig";



const firebaseConfig = {
  // Your Firebase config object
  apiKey: "AIzaSyCTmxULf2Ov_UtpwzJ-P0kRFHw_5t4A6lQ",
  authDomain: "dcamp-portfolio.firebaseapp.com",
  databaseURL: "https://dcamp-portfolio-default-rtdb.firebaseio.com",
  projectId: "dcamp-portfolio",
  storageBucket: "dcamp-portfolio.appspot.com",
  messagingSenderId: "652848831637",
  appId: "1:652848831637:web:cedf3d9416deb5e10b0f9c",
  measurementId: "G-W9299K170X",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
