import { Link } from "react-router";
import Logout from "../logout/Logout";
import { getToken } from "../../utils/authHelpers";

export default function Sidebar({ isOpen, onClose }) {
  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 z-51 bg-black opacity-60 transition-all duration-300 ${
          isOpen ? "visible" : "invisible"
        }`}
        onClick={onClose}
      />
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 z-52 h-full w-80 bg-white transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-6 flex flex-col h-full">
          <div className="flex justify-between items-center mb-8">
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <nav className="space-y-4">
            <Link
              to="/products/speakers"
              className="block py-2 hover:bg-gray-100 transition-colors"
              onClick={onClose}
            >
              Speakers
            </Link>
            <Link
              to="/products/headphones"
              className="block py-2 hover:bg-gray-100 transition-colors"
              onClick={onClose}
            >
              Headphones
            </Link>
            <Link
              to="/products/soundbars"
              className="block py-2 hover:bg-gray-100 transition-colors"
              onClick={onClose}
            >
              Soundbars
            </Link>
            <Link
              to="/products/televisions"
              className="block py-2 hover:bg-gray-100 transition-colors"
              onClick={onClose}
            >
              Televisions
            </Link>
          </nav>

          <div className="mt-auto space-y-4">
            <Link
              to="/order-history"
              className="flex items-center py-2 hover:bg-gray-100 transition-colors"
              onClick={onClose}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                />
              </svg>
              Order History
            </Link>
            <Link
              to="/locations"
              className="flex items-center py-2 hover:bg-gray-100 transition-colors"
              onClick={onClose}
            >
              <svg
                className="w-5 h-5 mr-2"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              Find Store
            </Link>
            {getToken() ? (
              <Logout>Logout</Logout>
            ) : (
              <Link
                to="/login"
                className="flex items-center py-2 hover:bg-gray-100 transition-colors"
                onClick={onClose}
              >
                <svg
                  className="w-5 h-5 mr-2"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
                Account
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
