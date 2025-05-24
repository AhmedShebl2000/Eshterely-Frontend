import { Link } from "react-router";
import { logout } from "../utils/authHelpers";

function Navbar() {
  return (
    <div className="flex gap-4">
      <Link to="/">Home</Link>
      <Link to="/products">Products</Link>
      <Link to={"/login"} onClick={() => logout()}>
        Logout
      </Link>
    </div>
  );
}

export default Navbar;
