"use client";
// firebaseConfig.js

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics"; // Import getAnalytics from firebase/analytics
import { useState } from "react";
import { GoogleAuthProvider } from "firebase/auth";
import { signInWithPopup } from "firebase/auth";
import firebaseConfig from '../components/firebaseConfig';

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app); // Export getAnalytics
export const auth = getAuth(); // Initialize Firebase authentication



export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password); // Use signInWithEmailAndPassword from Firebase auth
      // Redirect to the dashboard or another page upon successful login
    } catch (error) {
      setError(error.message);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider); // Use signInWithPopup from Firebase auth
      // Redirect to the dashboard or another page upon successful login
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="mt-5 mb-20 p-4 md:p-7 rounded bg-white shadow-lg max-w-md w-full">
        <form className="space-y-6" onSubmit={handleLogin}>
          <h2 className="text-2xl font-bold text-center">Login</h2>
          <div className="mb-4">
            <label className="block mb-1">Email</label>
            <input
              className="w-full px-3 py-2 border rounded-md"
              type="email"
              placeholder="Type your email"
              minLength="6"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1">Password</label>
            <input
              className="w-full px-3 py-2 border rounded-md"
              type="password"
              placeholder="Type your password"
              minLength="6"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors duration-300"
          >
            Login
          </button>
          <button
            type="button"
            onClick={handleGoogleSignIn}
            className="w-full bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition-colors duration-300"
          >
            Sign in with Google
          </button>

          {error && <div className="text-red-500">{error}</div>}
          <hr className="my-4" />
          <p className="text-center mt-5">
            Don't have an account?{" "}
            <a className="text-blue-500" href="/register">
              Register
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}
