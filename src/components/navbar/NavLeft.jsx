import React from "react";

export default function NavLeft({ isTransparent, isMenuOpen, setIsMenuOpen }) {
  return (
    <div>
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className={`transition-colors duration-300 flex flex-row gap-2 cursor-pointer ${
          isTransparent ? "text-white" : "text-black"
        }`}
        aria-label="Menu"
      >
        <svg
          className="w-6 h-6"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4 6H20M4 12H20M4 18H20"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
        <p>Menu</p>
      </button>
    </div>
  );
}
