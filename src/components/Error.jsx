import React from "react";
import { useNavigate } from "react-router-dom"; // For navigation

const Error = ({ message }) => {
  const navigate = useNavigate();

  const handleRetry = () => {
    // Handle retry logic (e.g., re-fetch products or reload the page)
    window.location.reload(); // Example reload, can be customized
  };

  const handleHome = () => {
    // Navigate to the home page
    navigate("/");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-red-50 text-center p-6">
      <div className="bg-white p-8 shadow-md rounded-lg">
        {/* Error Icon */}
        <div className="flex justify-center mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-12 w-12 text-red-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v2m0 4h.01M4.93 4.93a10 10 0 0114.14 0m0 14.14a10 10 0 01-14.14 0m2.83-2.83a6 6 0 018.48 0m0-8.48a6 6 0 00-8.48 0"
            />
          </svg>
        </div>

        {/* Error Message */}
        <h2 className="text-2xl font-bold text-red-600 mb-2">
          Oops! Something went wrong
        </h2>
        <p className="text-gray-600 mb-6">
          {message || "An unexpected error occurred. Please try again."}
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button
            onClick={handleRetry}
            className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
          >
            Retry
          </button>
          <button
            onClick={handleHome}
            className="bg-gray-700 text-white py-2 px-4 rounded-md hover:bg-gray-800 transition"
          >
            Go Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default Error;
