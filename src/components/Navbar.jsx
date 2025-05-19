import { Link } from "react-router";

function Navbar() {
  return (
    <div className="flex gap-4">
      <Link to="/">Home</Link>
      <Link to="/products">Products</Link>
    </div>
  );
}

export default Navbar;
