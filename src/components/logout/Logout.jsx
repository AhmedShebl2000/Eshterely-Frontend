import { useNavigate } from "react-router";
import { logout } from "../../utils/authHelpers";
import { useCart } from "../../Contexts/CartContext";

function Logout({ children, isTransparent }) {
  const { setProductArr } = useCart();
  const navigate = useNavigate();

  function handleLogout() {
    logout(); // clear token
    setProductArr([]); // reset cart
    navigate("/login"); // navigate after logout
  }

  return (
    <div
      className={`flex items-center transition-colors duration-300 cursor-pointer ${
        isTransparent
          ? "text-white hover:text-gray-200"
          : "text-black hover:text-gray-600"
      }`}
      onClick={handleLogout}
    >
      <svg
        className="w-6 h-6 mr-1"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h6a2 2 0 012 2v1"
        />
      </svg>
      {children}
    </div>
  );
}

export default Logout;
