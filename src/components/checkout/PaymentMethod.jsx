import { useState } from "react";
import Paypal from "./Paypal";
import Delivery from "./Delivery";

function PaymentMethod({
  submittedData,
  anotherDelieveryFormData,
  setAnotherDelieveryFormData,
}) {
  const [paymentMethod, setPaymentMethod] = useState("online");

  return (
    <div className="flex flex-col gap-3 bg-[#FAFAFA] w-full p-4 rounded-md md:p-14 mt-5">
      <h1 className="font-semibold tracking-widest ml-1 text-lg">
        Payment Method
      </h1>
      <div className="flex gap-20">
        <div>
          <input
            name="online"
            value="online"
            className="ml-1 mr-3 mt-1.5 h-4 w-4 accent-black"
            type="checkbox"
            checked={paymentMethod === "online"}
            onChange={() => setPaymentMethod("online")}
          />
          <span
            className={`${paymentMethod === "online" ? "font-semibold" : ""}`}
          >
            Online Payment
          </span>
        </div>
        <div>
          <input
            name="onDelivery"
            value="onDelivery"
            className="ml-1 mr-3 mt-1.5 h-4 w-4 accent-black"
            type="checkbox"
            checked={paymentMethod === "onDelivery"}
            onChange={() => setPaymentMethod("onDelivery")}
          />

          <span
            className={`${
              paymentMethod === "onDelivery" ? "font-semibold" : ""
            }`}
          >
            Cash on Delivery
          </span>
        </div>
      </div>

      <div className="w-full ">
        {paymentMethod === "online" && <Paypal submittedData={submittedData} />}
        {paymentMethod === "onDelivery" && (
          <Delivery
            anotherDelieveryFormData={anotherDelieveryFormData}
            setAnotherDelieveryFormData={setAnotherDelieveryFormData}
          />
        )}
      </div>
    </div>
  );
}

export default PaymentMethod;
