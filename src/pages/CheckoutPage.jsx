import { useEffect, useState } from "react";
import BillingSummary from "../components/checkout/BillingSummary";
import CheckoutItems from "../components/checkout/CheckoutItems";
import ShippingMethod from "../components/checkout/ShippingMethod";
import PlaceOrder from "../components/checkout/PlaceOrder";
import InformationForm from "../components/checkout/InformationForm";
import { useCart } from "../Contexts/CartContext";
import PaymentMethod from "../components/checkout/PaymentMethod";
import { Link } from "react-router";

function CheckoutPage() {
  const [shippingMethod, setShippingMethod] = useState("0");
  const [submittedData, setSubmittedData] = useState(null);
  const [anotherDelieveryFormData, setAnotherDelieveryFormData] =
    useState(null);
  const [paymentMethod, setPaymentMethod] = useState("online");

  const { productArr } = useCart();

  const totalPriceWithoutVAT = productArr.reduce((accum, current) => {
    const total = Number(current.price) || 0;
    const quantity = Number(current.quantity) || 0;
    return accum + total * quantity;
  }, 0);

  const totalPrice = totalPriceWithoutVAT + 0.14 * totalPriceWithoutVAT;

  useEffect(() => {
    if (productArr.length === 0) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [productArr]);

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

      {productArr.length > 0 ? (
        <>
          {/* NOW THE DELIVERY PART */}
          <div className=" w-[800px] gap-3">
            <div className="  flex flex-col ">
              <InformationForm
                showConsent={true}
                submittedData={submittedData}
                setSubmittedData={setSubmittedData}
              >
                Shipping Address
              </InformationForm>
            </div>
            <div className="w-full">
              <PaymentMethod
                submittedData={submittedData}
                anotherDelieveryFormData={anotherDelieveryFormData}
                setAnotherDelieveryFormData={setAnotherDelieveryFormData}
                paymentMethod={paymentMethod}
                setPaymentMethod={setPaymentMethod}
              />
            </div>
          </div>
          <div className="md:hidden flex flex-col gap-4">
            <InformationForm
              showConsent={true}
              submittedData={submittedData}
              setSubmittedData={setSubmittedData}
            >
              Shipping Address
            </InformationForm>
            <div className="w-full">
              <PaymentMethod
                submittedData={submittedData}
                anotherDelieveryFormData={anotherDelieveryFormData}
                setAnotherDelieveryFormData={setAnotherDelieveryFormData}
                paymentMethod={paymentMethod}
                setPaymentMethod={setPaymentMethod}
              />
            </div>
          </div>
          <ShippingMethod
            shippingMethod={shippingMethod}
            setShippingMethod={setShippingMethod}
          />
          <BillingSummary
            shippingMethod={shippingMethod}
            totalPrice={totalPrice}
          />
          {paymentMethod === "onDelivery" ? (
            <PlaceOrder
              anotherDelieveryFormData={anotherDelieveryFormData}
              setAnotherDelieveryFormData={setAnotherDelieveryFormData}
              submittedData={submittedData}
              setSubmittedData={setSubmittedData}
            />
          ) : null}
        </>
      ) : (
        <div className="flex items-center justify-center h-[40vh] flex-col gap-10">
          <p className="font-semibold text-3xl">
            You have no items in cart yet.
          </p>
          <Link
            to={"/"}
            className="w-50 px-8 py-2 bg-[#FFB800] text-black font-semibold rounded-full hover:bg-[#FFD700] transition-colors cursor-pointer text-center"
          >
            Back to Home
          </Link>
        </div>
      )}
    </div>
  );
}

export default CheckoutPage;
