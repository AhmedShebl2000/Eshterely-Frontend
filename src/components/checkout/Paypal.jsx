import { useEffect, useRef, useState } from "react";
import Button from "../../UI/Button";
import { motion } from "framer-motion";
import { Link } from "react-router";
import { useCart } from "../../Contexts/CartContext";
import { getToken } from "../../utils/authHelpers";

function Paypal({ submittedData }) {
  const [orderId, setOrderId] = useState(null);
  const [showSuccess, setShowSuccess] = useState(false);

  const { productArr, deleteAllFromCart } = useCart();

  const totalPrice = productArr.reduce((accum, current) => {
    const total = Number(current.price) || 0;
    const quantity = Number(current.quantity) || 0;
    return accum + total * quantity;
  }, 0);

  const vatAmount = totalPrice * 0.14;

  const totalPriceWithVat = totalPrice + vatAmount;
  console.log(totalPriceWithVat);
  console.log(totalPrice);

  const paypal = useRef();

  async function postOrder() {
    try {
      console.log("Submitting order with shipping info:", submittedData);
      if (
        !submittedData ||
        !submittedData.firstName ||
        !submittedData.phoneNumber
      ) {
        console.error("Incomplete shipping information", submittedData);
        return;
      }

      const token = getToken();
      console.log("Token value:", token);
      if (!token) {
        console.error("No authentication token found");
        return;
      }
      console.log(productArr);

      const res = await fetch(`https://eshterely.up.railway.app/api/orders`, {
        // const res = await fetch(`http://localhost:5000/api/orders`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          "x-auth-token": token,
        },
        body: JSON.stringify({
          items: productArr || [],
          total: totalPriceWithVat,
          shippingInfo: {
            ...submittedData,
            addressLine1: submittedData.addressLine,
            addressLine2: "",
          },
        }),
      });
      console.log(res);
      if (!res.ok) {
        const errorData = await res.json().catch(() => ({}));
        console.error("Order submission error details:", errorData);
        throw new Error(
          `HTTP error! Status: ${res.status}, Details: ${JSON.stringify(
            errorData
          )}`
        );
      }
      const data = await res.json();
      console.log("Order response:", data);
      await deleteAllFromCart();
    } catch (error) {
      console.error("Order submission error:", error.message);
    }
  }

  useEffect(() => {
    const button = window.paypal.Buttons({
      createOrder: (data, actions, err) => {
        return actions.order.create({
          intent: "CAPTURE",
          purchase_units: [
            {
              description: "Cool purchase",
              amount: {
                currency_code: "USD",
                value: totalPriceWithVat,
              },
            },
          ],
        });
      },
      onApprove: async (data, actions) => {
        const order = await actions.order.capture();
        console.log("Order Successful: ", order);
        setOrderId(order.id);
        await postOrder();
        setShowSuccess(true);
      },
      onError: (err) => {
        console.log(err);
      },
    });

    button.render(paypal.current);

    return () => {
      button.close();
    };
  }, [totalPriceWithVat, postOrder, submittedData]);

  return (
    <div className="bg-[#FAFAFA] w-full mt-5 flex flex-col justify-center items-center p-4 gap-4">
      {!showSuccess && (
        <h1 className="font-semibold text-lg tracking-widest">
          EXPRESS CHECKOUT
        </h1>
      )}
      {showSuccess && (
        <div className="flex flex-col items-center justify-center p-4 font-semibold rounded-md gap-4">
          <div>
            <motion.svg
              animate={{ scale: [1, 1.1, 0.9, 1.1, 1] }}
              transition={({ duration: 20 }, { repeat: Infinity })}
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              stroke="#72b172"
              width="100"
              height="100"
              viewBox="0 0 48 48"
            >
              <motion.path
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 5 }}
                fill="#c8e6c9"
                d="M44,24c0,11.045-8.955,20-20,20S4,35.045,4,24S12.955,4,24,4S44,12.955,44,24z"
              ></motion.path>
              <path
                fill="#4caf50"
                d="M34.586,14.586l-13.57,13.586l-5.602-5.586l-2.828,2.828l8.434,8.414l16.395-16.414L34.586,14.586z"
              ></path>
            </motion.svg>
          </div>
          <p className="text-2xl font-bold">Payment Successful!</p>
          <p className="text-lg text-green-700 tracking-wider">
            Thank you for your purchase.
          </p>
          <p className="text-slate-400">Order Id: #{orderId}</p>
        </div>
      )}

      {!showSuccess && <div className="w-1/2" ref={paypal}></div>}
      {showSuccess ? (
        <div className="mb-4">
          <Link to="/products/speakers">
            <Button type="secondary">Continue Shopping</Button>
          </Link>
        </div>
      ) : (
        <div className="mb-4 w-96">
          <Link to="/products/speakers">
            <Button type="danger" width="full">
              Cancel
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Paypal;
