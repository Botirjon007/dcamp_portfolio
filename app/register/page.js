"use client";
import React, { useState } from "react";
import { auth } from "../../components/firebaseConfig"; // Import the Firebase auth module

export default function RegisterPage() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      // Create user with email and password using Firebase Authentication
      await auth.createUserWithEmailAndPassword(email, password);
      // Update user's display name (optional)
      await auth.currentUser.updateProfile({
        displayName: fullName,
      });
      // Optionally, you can redirect users to another page upon successful registration
      // window.location.href = '/dashboard';
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="mt-10 mb-20 p-4 md:p-7 rounded bg-white shadow-lg max-w-md w-full">
        <form className="space-y-6" onSubmit={handleRegister}>
          <h2 className="text-2xl font-semibold mb-5">Register Account</h2>
          <div className="mb-4">
            <label className="block mb-1">Full Name</label>
            <input
              className="w-full px-3 py-2 border rounded-md"
              type="text"
              placeholder="Type your name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1">Email</label>
            <input
              className="w-full px-3 py-2 border rounded-md"
              type="email"
              placeholder="Type your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
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
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-300"
          >
            Register
          </button>
          {error && <p className="text-red-500">{error}</p>}
          <hr className="mt-4" />
          <p className="text-center mt-5">
            Already have an account?{" "}
            <a className="text-blue-500" href="/login">
              Sign in
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}
