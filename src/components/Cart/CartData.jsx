import { Link } from "react-router";
import CartDropdown from "./CartDropdown";
import { useCart } from "../../Contexts/CartContext";

function CartData() {
  const { productArr, setShowCart } = useCart();
  return (
    <div className="flex flex-col" style={{ height: "550px" }}>
      <div className="flex-shrink-0">
        {" "}
        <div
          className="text-right text-2xl cursor-pointer"
          onClick={() => setShowCart(false)}
        >
          &times;
        </div>
        <div
          className="text-center text-sm font-semibold mb-2"
          style={{ textTransform: "uppercase" }}
        >
          you have {productArr.length} item in your shopping cart
        </div>
      </div>

      <div className="flex-grow overflow-y-auto pb-4">
        {productArr.map((product) => (
          <CartDropdown key={product._id} product={product} />
        ))}
      </div>

      <div className="flex-shrink-0 bg-white p-4 shadow-lg rounded-t-md">
        <div className="flex justify-between font-semibold text-md">
          <p>Total of the order</p>
          <p>
            $
            {productArr
              .reduce((acc, product) => acc + Number(product.price), 0)
              .toLocaleString()}
          </p>
        </div>
        <div>
          <Link
            to={"/cart"}
            onClick={() => setShowCart(false)}
            className="flex flex-grow bg-[#FFB800] text-black font-semibold rounded-full hover:bg-[#FFD700] px-5 py-2 justify-center items-center mt-2"
          >
            Open basket
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CartData;
