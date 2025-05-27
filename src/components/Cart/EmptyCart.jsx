import { useCart } from "../../Contexts/CartContext";
import { Link } from "react-router";

function EmptyCart() {
  const { setShowCart } = useCart();

  return (
    <div style={{ height: "550px" }}>
      <p className="font-normal text-gray-500 text-md text-center mt-5">
        Your shopping cart is empty.
      </p>
      <p
        style={{ textTransform: "uppercase" }}
        className="font-semibold text-center text-xl mt-5"
      >
        explore B&O products
      </p>
      <div className="flex flex-wrap justify-center mt-5 gap-y-10 gap-x-2">
        <div className="flex flex-col justify-center items-center">
          <Link to={"/products/speakers"}>
            <img
              src="/Images/speaker-black.webp"
              alt="speakers"
              className="w-35 h-35 object-cover"
            />
          </Link>
          <Link
            to={"/products/speakers"}
            className="font-medium bg-amber-400 px-5 py-1 rounded-md hover:bg-amber-300"
            onClick={() => setShowCart(false)}
          >
            Speakers
          </Link>
        </div>
        <div className="flex flex-col justify-center items-center">
          <Link to={"/products/headphones"}>
            <img
              src="/Images/headphone-black.webp"
              alt="headphone"
              className="w-35 h-35 object-cover"
            />
          </Link>
          <Link
            to={"/products/headphones"}
            className="font-medium bg-amber-400 px-5 py-1 rounded-md hover:bg-amber-300"
            onClick={() => setShowCart(false)}
          >
            Headphones
          </Link>
        </div>
        <div className="flex flex-col justify-center items-center">
          <Link to={"/products/televisions"}>
            <img
              src="/Images/television-black.webp"
              alt="television"
              className="w-35 h-35 object-cover"
            />
          </Link>
          <Link
            to={"/products/televisions"}
            className="font-medium bg-amber-400 px-5 py-1 rounded-md hover:bg-amber-300"
            onClick={() => setShowCart(false)}
          >
            Televisions
          </Link>
        </div>
        <div className="flex flex-col justify-center items-center">
          <Link to={"/products/soundbars"}>
            <img
              src="/Images/soundbar-black.webp"
              alt="soundbar"
              className="w-35 h-35 object-cover"
            />
          </Link>
          <Link
            to={"/products/soundbars"}
            className="font-medium bg-amber-400 px-5 py-1 rounded-md hover:bg-amber-300"
            onClick={() => setShowCart(false)}
          >
            Soundbars
          </Link>
        </div>
      </div>
    </div>
  );
}

export default EmptyCart;
