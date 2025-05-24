import { useState } from "react";
import AcceptTerms from "../components/checkout/AcceptTerms";
import BillingSummary from "../components/checkout/BillingSummary";
import CheckoutItems from "../components/checkout/CheckoutItems";
import Delivery from "../components/checkout/Delivery";
import ShippingMethod from "../components/checkout/ShippingMethod";
import PlaceOrder from "../components/checkout/PlaceOrder";
import InformationForm from "../components/checkout/InformationForm";

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

const totalPrice = totalPriceWithoutVAT + 0.14 * totalPriceWithoutVAT;

function CheckoutPage() {
  const [shippingMethod, setShippingMethod] = useState("0");

  return (
    <div className="flex flex-col items-center gap-5">
      <div className="grid grid-cols-1 w-[400px] gap-y-3 p-4 px-10 md:hidden">
        <h1 className="font-semibold tracking-widest">ORDER SUMMARY</h1>
        <hr className="text-[#d9d9d9]"></hr>
        <CheckoutItems
          checkoutItems={checkoutItemsArr}
          totalPrice={totalPrice}
        />
      </div>
      <div className="hidden md:mt-8  md:flex md:flex-col md:gap-3 md:w-[800px]">
        <div className="flex">
          <p className="w-6/12 font-semibold tracking-widest">ORDER SUMMARY</p>
          <p className="w-2/12 font-semibold tracking-widest">QUANTITY</p>
          <p className="w-2/12 font-semibold tracking-widest">PRICE</p>
          <p className="w-2/12 font-semibold tracking-widest">TOTAL</p>
        </div>
        <hr className="text-[#d9d9d9]"></hr>

        <CheckoutItems
          checkoutItems={checkoutItemsArr}
          totalPrice={totalPrice}
        />
      </div>
      {/* PAYPAL AND CREDIT CARD GO HERE */}

      {/* SEPARATOR IN MEDIUM-LARGE SCREENS ONLY */}
      <div class="inline-flex items-center justify-center w-full text-[#8C8C8C]">
        <hr class="w-[600px] h-px my-8" />
        <span class="absolute px-3 font-medium -translate-x-1/4  bg-white left-1/2 ">
          OR
        </span>
      </div>

      {/* NOW THE DELIVERY PART */}
      <div className="hidden w-[800px] md:flex md:justify-between gap-3">
        <div className=" w-6/12 flex flex-col ">
          <InformationForm showConsent={true}>BILLING ADDRESS</InformationForm>
        </div>
        <div className=" w-6/12">
          <Delivery />
        </div>
      </div>
      <div className="md:hidden flex flex-col gap-4">
        <InformationForm showConsent={true}>BILLING ADDRESS</InformationForm>
        <Delivery />
      </div>
      <ShippingMethod
        shippingMethod={shippingMethod}
        setShippingMethod={setShippingMethod}
      />
      <BillingSummary shippingMethod={shippingMethod} totalPrice={totalPrice} />
      <PlaceOrder />
    </div>
  );
}

export default CheckoutPage;
