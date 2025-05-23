function BillingSummary({ shippingMethod, totalPrice }) {
  return (
    <div className="flex flex-col bg-[#FAFAFA]  w-[430px] md:w-[800px] p-8 rounded-md gap-3">
      <h1 className="font-semibold tracking-widest ">BILLING SUMMARY</h1>
      <div className="flex justify-between">
        <p className="tracking-widest">ITEMS TOTAL</p>
        <p className="font-semibold">€ {totalPrice.toFixed(2)}</p>
      </div>
      <div className="flex justify-between">
        <p className="tracking-widest">ITEMS SHIPPING</p>
        {shippingMethod === "0" ? (
          <p className="font-semibold text-lg">FREE</p>
        ) : (
          <p className="font-semibold text-lg">
            € {(+shippingMethod).toFixed(2)}
          </p>
        )}
      </div>
      <hr className="text-[#d9d9d9]"></hr>
      <div className="flex justify-between">
        <p className="tracking-widest">TOTAL</p>
        {
          <p className="font-semibold text-lg">
            € {(+shippingMethod + totalPrice).toFixed(2)}
          </p>
        }
      </div>
    </div>
  );
}

export default BillingSummary;
