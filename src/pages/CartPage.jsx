import Items from "../components/Cart/Items";
import OrderSummary from "../components/Cart/OrderSummary";

const checkoutItemsArr = [
  {
    title: "Leather pouch for Beoplay H100",
    quantity: 1,
    total: 249.0,
    imgURL:
      "https://images.ctfassets.net/8cd2csgvqd3m/795mywG58CzgspR02njFUB/12ebd4cdc586371eb3a6d0e8009deb1d/Packshot-Beoplay-H100-Pouch-Infinite-Black-Perspective-0048-s1200x1200px.png",
  },
  {
    title: "Bang & Olufsen MagSafe-compatible Leather Case for iPhone 16",
    quantity: 2,
    total: 125.0,
    imgURL:
      "https://images.ctfassets.net/8cd2csgvqd3m/5DBlJmqzsvso5RULuKDl3o/aadc177d33c4a8a828ba0cd313e3142a/Packshot-Iphone-leather-cover-Black-Front-0004-s1200x1200px_2.png",
  },
  {
    title: "Beosound A9 Cover",
    quantity: 1,
    total: 75.0,
    imgURL:
      "https://images.ctfassets.net/8cd2csgvqd3m/2Q210ONMPoLQqM6g1Mjpbo/5f46cf39521ca31376ee3e09125cbab6/a9_cover_white.png",
  },
  {
    title: "Beosound A5",
    quantity: 4,
    total: 249.0,
    imgURL:
      "https://images.ctfassets.net/8cd2csgvqd3m/4RJBK4ay1tqJCkeOXte7nn/1589559d668e1046ee9985d63645d7e6/Beosound_A5_-_PDP_-_Image_1_-_Dark_Oak.png",
  },
];

const totalPriceWithoutVAT = checkoutItemsArr.reduce(
  (accum, current) => accum + current.total * current.quantity,
  0
);

const vat = totalPriceWithoutVAT * 0.14;

const totalPrice = totalPriceWithoutVAT + 0.14 * totalPriceWithoutVAT;

function CartPage() {
  if (checkoutItemsArr.length === 0)
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="font-semibold text-3xl">You have no items in cart yet.</p>
      </div>
    );
  return (
    <div className="flex flex-col items-center lg:flex-row lg:items-stretch justify-center min-h-screen mt-40">
      <Items checkoutItemsArr={checkoutItemsArr} />
      <OrderSummary vat={vat} totalPrice={totalPrice} />
    </div>
  );
}

export default CartPage;
