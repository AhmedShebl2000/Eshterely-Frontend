import { useState } from "react";
import DiffDeliveryAddress from "./diffDeliveryAddress";

function Delivery({ anotherDelieveryFormData, setAnotherDelieveryFormData }) {
  const [deliveryAddress, setDeliveryAddress] = useState("default");

  return (
    <div className="flex flex-col gap-3 bg-[#FAFAFA] w-full mt-5 rounded-md md:w-[400px]">
      <h1 className="font-semibold tracking-widest ml-1">DELIVERY ADDRESS</h1>
      <div>
        <input
          name="delivery-address"
          value="default"
          className="ml-1 mr-3 mt-1.5 h-4 w-4 accent-black"
          type="checkbox"
          checked={deliveryAddress === "default"}
          onChange={() => setDeliveryAddress("default")}
        />
        <span
          className={`${deliveryAddress === "default" ? "font-semibold" : ""}`}
        >
          Default (same as billing address)
        </span>
      </div>
      <div>
        <input
          name="delivery-address"
          value="add"
          className="ml-1 mr-3 mt-1.5 h-4 w-4 accent-black"
          type="checkbox"
          checked={deliveryAddress === "add"}
          onChange={() => setDeliveryAddress("add")}
        />

        <span className={`${deliveryAddress === "add" ? "font-semibold" : ""}`}>
          Add an alternative delivery address
        </span>
      </div>
      {deliveryAddress === "add" && (
        <DiffDeliveryAddress
          anotherDelieveryFormData={anotherDelieveryFormData}
          setAnotherDelieveryFormData={setAnotherDelieveryFormData}
        />
      )}
    </div>
  );
}

export default Delivery;
