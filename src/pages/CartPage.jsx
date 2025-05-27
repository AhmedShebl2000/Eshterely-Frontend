import { useCart } from "../Contexts/CartContext";
import Items from "../components/Cart/Items";
import OrderSummary from "../components/Cart/OrderSummary";

function CartPage() {
  const { productArr } = useCart();

  const totalPriceWithoutVAT = productArr.reduce(
    (accum, item) => accum + item.price * item.quantity,
    0
  );

  const vat = totalPriceWithoutVAT * 0.14;

  const totalPrice = totalPriceWithoutVAT + 0.14 * totalPriceWithoutVAT;

  if (productArr.length === 0)
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="font-semibold text-3xl">You have no items in cart yet.</p>
      </div>
    );
  return (
    <div className="flex flex-col items-center lg:flex-row lg:items-stretch justify-center min-h-screen mt-40">
      <Items productArr={productArr} />
      <OrderSummary vat={vat} totalPrice={totalPrice} />
    </div>
  );
}

export default CartPage;
