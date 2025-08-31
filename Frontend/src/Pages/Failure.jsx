import React from "react";
import { Link } from "react-router-dom";

const Failure = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-red-100">
      <div className="bg-white p-10 rounded-2xl shadow-xl text-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="mx-auto h-16 w-16 text-red-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
        <h1 className="mt-4 text-2xl font-bold text-red-600">Login Failed ❌</h1>
        <p className="mt-2 text-gray-600">
          Invalid username or password. Please try again.
        </p>
        <Link
          to="/"
          className="mt-6 inline-block bg-red-500 text-white px-6 py-2 rounded-xl hover:bg-red-600 transition"
        >
          Back to Login
        </Link>
      </div>
    </div>
  );
};

export default Failure;
