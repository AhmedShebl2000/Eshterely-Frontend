import { Link, useNavigation } from "react-router";
import { useCart } from "../Contexts/CartContext";
import Items from "../components/Cart/Items";
import OrderSummary from "../components/Cart/OrderSummary";
import Loader from "../components/Loader";
import { useEffect, useState } from "react";

function CartPage() {
  const { productArr, isLoading } = useCart();
  const [initialLoad, setInitialLoad] = useState(true);

  const totalPriceWithoutVAT = productArr.reduce(
    (accum, item) => accum + item.price * item.quantity,
    0
  );

  const vat = totalPriceWithoutVAT * 0.14;

  const totalPrice = totalPriceWithoutVAT + 0.14 * totalPriceWithoutVAT;

  useEffect(() => {
    if (productArr.length > 0 || !isLoading) {
      setInitialLoad(false);
    }
  }, [productArr, isLoading]);

  if (initialLoad) return <Loader />;

  if (productArr.length === 0 && !isLoading)
    return (
      <div className="flex items-center justify-center min-h-[80vh] flex-col gap-10">
        <p className="font-semibold text-3xl">You have no items in cart yet.</p>
        <Link
          to={"/"}
          className="w-50 px-8 py-2 bg-[#FFB800] text-black font-semibold rounded-full hover:bg-[#FFD700] transition-colors cursor-pointer text-center"
        >
          Back to Home
        </Link>
      </div>
    );

  return (
    <div className="flex flex-col items-center lg:flex-row lg:items-stretch justify-center min-h-screen mt-10">
      <Items productArr={productArr} />
      <OrderSummary vat={vat} totalPrice={totalPrice} />
    </div>
  );
}

export default CartPage;
