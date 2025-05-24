import { Link } from "react-router";

export default function NavCenter({ isTransparent }) {
  return (
    <div>
      <Link to="/">
        <img
          src={
            isTransparent
              ? "https://images.ctfassets.net/8cd2csgvqd3m/5JjNuV0i5NyE2T8tgBpD9R/e0d44567237e30d5dc250e0fc1477802/BO_Logo_White.svg"
              : "https://images.ctfassets.net/8cd2csgvqd3m/5KPtvnQ0EniDy6b2JYJqFm/56a6177d2a141592c3a6cc3b8d5be44f/BO_Logo_Black.svg"
          }
          alt="B&O Logo"
          className="h-full transition-all duration-300"
        />
      </Link>
    </div>
  );
}
