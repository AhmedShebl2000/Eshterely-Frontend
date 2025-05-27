function CheckoutItem({ item }) {
  const VAT = item.price * item.quantity * 0.14;
  return (
    <>
      <div className="flex gap-3 md:hidden">
        <div className="w-20">
          <img src={item.image} />
        </div>
        <div className="flex flex-col w-full">
          <p className="font-semibold text-wrap">{item.title}</p>
          <p>Quantity: {item.quantity}</p>
          <div className="flex  justify-between">
            <p>Total:</p>
            <p className="font-light">
              € {(item.price * item.quantity).toFixed(2)}
            </p>
          </div>
        </div>
      </div>

      <div className="hidden md:flex md:items-center">
        <div className="w-6/12">
          <div className="flex gap-2 items-center">
            <div className="w-20">
              <img src={item.image} />
            </div>
            <p className="w-10/12 font-semibold">{item.name}</p>
          </div>
        </div>
        <div className="w-2/12 pl-7">{item.quantity}</div>
        <div className="w-2/12">€ {Number(item.price).toLocaleString()}</div>
        <div className="w-2/12 text-center">
          € {(item.price * item.quantity + VAT).toLocaleString()}
        </div>
      </div>

      <hr className="text-[#d9d9d9]"></hr>
    </>
  );
}

export default CheckoutItem;
