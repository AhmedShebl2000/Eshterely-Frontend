import EmptyCart from "./EmptyCart";
import CartData from "./CartData";
import { useCart } from "../../Contexts/CartContext";

function CartProducts() {
  const { productArr } = useCart();

  return (
    <div className="relative">
      {productArr.length === 0 ? <EmptyCart /> : <CartData />}
    </div>
  );
}

export default CartProducts;
