import React from "react";
import { Link } from "react-router-dom";

const Success = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-green-100">
      <div className="bg-white p-10 rounded-2xl shadow-xl text-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="mx-auto h-16 w-16 text-green-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 13l4 4L19 7"
          />
        </svg>
        <h1 className="mt-4 text-2xl font-bold text-green-600">Login Successful 🎉</h1>
        <p className="mt-2 text-gray-600">
          Welcome back! You have logged in successfully.
        </p>
        <Link
          to="/"
          className="mt-6 inline-block bg-green-500 text-white px-6 py-2 rounded-xl hover:bg-green-600 transition"
        >
          Go to Home
        </Link>
      </div>
    </div>
  );
};

export default Success;
