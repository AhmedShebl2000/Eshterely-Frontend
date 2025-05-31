import { useCart } from "../../Contexts/CartContext";
import Button from "../../UI/Button";
import { getToken } from "../../utils/authHelpers";

function PlaceOrder({ anotherDelieveryFormData, submittedData }) {
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

  async function postOrderCashOnDelivery() {
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

      console.log(
        "Another submitting order with shipping info:",
        anotherDelieveryFormData
      );

      const token = getToken();
      console.log("Token value:", token);
      if (!token) {
        console.error("No authentication token found");
        return;
      }
      console.log(productArr);

      // Prepare shipping info object
      const shippingInfo = {
        firstName: submittedData.firstName,
        lastName: submittedData.lastName,
        email: submittedData.email,
        country: submittedData.country,
        addressLine1: submittedData.addressLine,
        city: submittedData.city,
        postalCode: submittedData.postalCode,
        phoneNumber: submittedData.phoneNumber,
      };

      if (anotherDelieveryFormData?.addressLine) {
        shippingInfo.addressLine2 = anotherDelieveryFormData.addressLine;
      }

      const res = await fetch(`https://eshterely.up.railway.app/api/orders`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          "x-auth-token": token,
        },
        body: JSON.stringify({
          items: productArr || [],
          total: totalPriceWithVat,
          shippingInfo,
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
  return (
    <div
      className=" w-[430px] md:w-[800px] xs:p-8 sm:p-3 flex flex-col 
    gap-8 items-center justify-center"
    >
      <p className="font-extralight">
        By clicking on &apos;Pay and Place Order&apos;, you agree (i) to make
        your purchase from Global-e as merchant of record for this transaction,
        subject to Global-e&apos;s Terms of Sale; (ii) that your information
        will be handled by Global-e in accordance with the Global-e Privacy
        Policy; and (iii) that Global-e will share your information (excluding
        the payment details) with Bang & Olufsen.
      </p>
      <div>
        <Button onClick={postOrderCashOnDelivery}>Pay and place order</Button>
      </div>
      <hr className="text-[#d9d9d9]"></hr>
    </div>
  );
}

export default PlaceOrder;
