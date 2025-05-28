import { useState } from "react";
import AcceptTerms from "../components/checkout/AcceptTerms";
import BillingSummary from "../components/checkout/BillingSummary";
import CheckoutItems from "../components/checkout/CheckoutItems";
import Delivery from "../components/checkout/Delivery";
import ShippingMethod from "../components/checkout/ShippingMethod";
import PlaceOrder from "../components/checkout/PlaceOrder";
import InformationForm from "../components/checkout/InformationForm";
import Paypal from "../components/checkout/Paypal";
import { useCart } from "../Contexts/CartContext";

function CheckoutPage() {
  const [shippingMethod, setShippingMethod] = useState("0");

  const { productArr } = useCart();

  // const totalPriceWithoutVAT = productArr.reduce(
  //   (accum, current) => accum + current.total * current.quantity,
  //   0
  // );

  const totalPriceWithoutVAT = productArr.reduce((accum, current) => {
    const total = Number(current.price) || 0;
    const quantity = Number(current.quantity) || 0;
    return accum + total * quantity;
  }, 0);

  const totalPrice = totalPriceWithoutVAT + 0.14 * totalPriceWithoutVAT;

  return (
    <div className="flex flex-col items-center gap-5">
      <div className="grid grid-cols-1 w-[400px] gap-y-3 p-4 px-10 md:hidden">
        <h1 className="font-semibold tracking-widest">ORDER SUMMARY</h1>
        <hr className="text-[#d9d9d9]"></hr>
        <CheckoutItems productArr={productArr} totalPrice={totalPrice} />
      </div>
      <div className="hidden md:mt-8  md:flex md:flex-col md:gap-3 md:w-[800px]">
        <div className="flex">
          <p className="w-6/12 font-semibold tracking-widest">ORDER SUMMARY</p>
          <p className="w-2/12 font-semibold tracking-widest">QUANTITY</p>
          <p className="w-2/12 font-semibold tracking-widest">PRICE</p>
          <p className="w-2/12 font-semibold tracking-widest text-center">
            TOTAL + VAT
          </p>
        </div>
        <hr className="text-[#d9d9d9]"></hr>

        <CheckoutItems productArr={productArr} totalPrice={totalPrice} />
      </div>
      {/* PAYPAL AND CREDIT CARD GO HERE */}

      <Paypal />

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
