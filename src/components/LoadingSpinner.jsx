import React from "react";

const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="flex flex-col items-center">
        {/* Spinner Animation */}
        <div className="w-16 h-16 border-t-4 border-b-4 border-blue-500 rounded-full animate-spin"></div>

        {/* Loading Text */}
        <p className="text-lg text-blue-700 font-semibold mt-4 animate-pulse">
          Loading, please wait...
        </p>
      </div>
    </div>
  );
};

export default LoadingSpinner;
