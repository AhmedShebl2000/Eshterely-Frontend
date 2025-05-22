import CheckoutItem from "./CheckoutItem";
import { v4 as uuidv4 } from "uuid";

function CheckoutItems({ checkoutItems, totalPrice }) {
  return (
    <>
      {checkoutItems?.map((item) => (
        <CheckoutItem key={uuidv4()} item={item} />
      ))}
      <div className="flex justify-between md:hidden">
        <p className="tracking-widest font-semibold">ITEMS TOTAL</p>
        <p className="font-semibold">€ {totalPrice.toFixed(2)}</p>
      </div>
      <div className="hidden md:flex">
        <div className="w-6/12"></div>
        <p className="w-4/12 tracking-widest font-semibold">ITEMS TOTAL</p>
        <p className="w-2/12 font-semibold ">€ {totalPrice.toFixed(2)}</p>
      </div>
    </>
  );
}

export default CheckoutItems;
