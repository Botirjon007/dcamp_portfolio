import { useState } from "react";
import LoginPage from "./../login/page";

export default function LoginModal({ onClose }) {
  const handleClose = () => {
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      {/* Blurred background */}
      <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-lg"></div>

      {/* Modal content */}
      <div className="relative bg-white p-8 rounded-lg z-10">
        <LoginPage />
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute bottom-64 left-56 mb-4 p-0 text-gray-500 hover:text-gray-700"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
}
