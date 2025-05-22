function ShippingMethod({ shippingMethod, setShippingMethod }) {
  return (
    <div className="flex md:w-[800px] flex-col gap-3 bg-[#FAFAFA] w-[430px] p-8 rounded-md">
      <h1 className="font-semibold tracking-widest ml-1">SHIPPING METHOD</h1>
      <div
        className={`flex items-center justify-between 
            ${shippingMethod === "0" ? "font-semibold" : ""}`}
      >
        <div className="flex items-center justify-center gap-2">
          <input
            name="shipping-method"
            value="0"
            className="ml-1 accent-black"
            type="radio"
            checked={shippingMethod === "0"}
            onChange={() => setShippingMethod("0")}
          />
          <p>FREE</p>
        </div>
        <div>
          <p>DHL Standard</p>
          <p>2 to 4 business days</p>
        </div>
      </div>

      {/* -------------------- */}

      <div
        className={`flex items-center justify-between 
            ${shippingMethod === "20" ? "font-semibold" : ""}`}
      >
        <div className="flex items-center justify-center gap-2">
          <input
            name="shipping-method"
            value="20"
            className="ml-1 accent-black"
            type="radio"
            checked={shippingMethod === "20"}
            onChange={() => setShippingMethod("20")}
          />
          <p>€ 20.00</p>
        </div>
        <div>
          <p>UPS Standard</p>
          <p>2 to 4 business days</p>
        </div>
      </div>

      {/* -------------------- */}

      <div
        className={`flex items-center justify-between 
            ${shippingMethod === "40" ? "font-semibold" : ""}`}
      >
        <div className="flex items-center justify-center gap-2">
          <input
            name="shipping-method"
            value="40"
            className="ml-1 accent-black"
            type="radio"
            checked={shippingMethod === "40"}
            onChange={() => setShippingMethod("40")}
          />
          <p>€ 40.00</p>
        </div>
        <div>
          <p>UPS Express</p>
          <p>1 to 2 business days</p>
        </div>
      </div>
    </div>
  );
}

export default ShippingMethod;
