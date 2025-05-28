import CheckoutItem from "./CheckoutItem";
import { v4 as uuidv4 } from "uuid";

function CheckoutItems({ productArr, totalPrice }) {
  const totalQuantity = productArr.reduce(
    (acc, item) => acc + item.quantity,
    0
  );

  return (
    <>
      {productArr?.map((item) => (
        <CheckoutItem key={uuidv4()} item={item} />
      ))}
      <div className="flex justify-between md:hidden">
        <p className="tracking-widest font-semibold">
          Total Items: {totalQuantity}
        </p>
        <p className="font-semibold">€ {Number(totalPrice).toLocaleString()}</p>
      </div>
      <div className="hidden md:flex">
        <div className="w-6/12"></div>
        <p className="w-4/12 tracking-widest font-semibold">
          Total Items: {totalQuantity}
        </p>

        <p className="w-2/12 font-semibold text-center">
          € {Number(totalPrice).toLocaleString()}
        </p>
      </div>
    </>
  );
}

export default CheckoutItems;
