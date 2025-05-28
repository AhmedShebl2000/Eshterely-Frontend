import { useNavigate } from "react-router";
import Button from "../../UI/Button";
import { motion } from "framer-motion";
import { useState } from "react";

const listOfValidVouchers = [
  "SAVE-20-KJL9",
  "DEALZ-10-PTR4",
  "FREE-50-AVV7",
  "OFF-10-MNF6",
  "WELCOME-50-55GA",
  "FLASH-20-XM2V",
  "LUCKY-50-3KLZ",
  "TRYNOW-20-ZR0A",
  "DISCNT-10-22NL",
  "GIFT-10-PLO1",
];

function OrderSummary({ vat, totalPrice }) {
  const [showVoucher, setShowVoucher] = useState(false);
  const [voucher, setVoucher] = useState("");
  const [discount, setDiscount] = useState(0);
  const [voucherApplied, setVoucherApplied] = useState(null);

  const navigate = useNavigate();

  function validateVoucher() {
    if (listOfValidVouchers.includes(voucher)) {
      console.log("yes");
      const userDiscount = voucher.split("-")[1];
      setDiscount(userDiscount);
      setVoucherApplied(true);
    } else {
      setVoucherApplied(false);
    }
  }

  return (
    <div className="flex flex-col p-8 rounded-md gap-3 mt-19 min-w-[300px] md:w-[600px]">
      <div className="flex justify-between">
        <p className="tracking-widest">TAX</p>
        <p className="font-semibold">€ {Number(vat).toLocaleString()}</p>
      </div>
      <div className="flex justify-between">
        <p className="font-semibold tracking-widest">
          Order Total <span className="text-sm font-normal">Tax incl.</span>
        </p>

        {discount === 0 ? (
          <p className="font-semibold">
            € {Number(totalPrice).toLocaleString()}
          </p>
        ) : (
          <p className="font-semibold">
            <span className="line-through mr-2 font-extralight">
              € {Number(totalPrice).toLocaleString()}
            </span>{" "}
            €{" "}
            {Number(totalPrice).toLocaleString() -
              (discount / 100) * Number(totalPrice).toLocaleString()}
            <span className="ml-2 text-green-700">({discount}% off)</span>
          </p>
        )}
      </div>
      <hr className="text-[#d9d9d9]"></hr>
      <p className="tracking-widest">
        This order qualifies for free express shipment
      </p>
      <div className="flex flex-col gap-2">
        <motion.button
          whileHover={{
            y: [5, -5, 5, -5, 5],
            transition: {
              duration: 1.5,
              repeat: Infinity,
            },
          }}
          className="font-semibold bg-[#ffc356] py-2  rounded-3xl cursor-pointer w-full"
          onClick={() => navigate("/checkout")}
        >
          Go to Checkout
        </motion.button>
        <motion.div
          whileHover={{
            y: [5, -5, 5, -5, 5],
            transition: {
              duration: 1.5,
              repeat: Infinity,
            },
          }}
          className="w-full"
        >
          <Button
            type="secondary"
            width="full"
            onClick={() => navigate("/products/speakers")}
          >
            Continue Shopping
          </Button>
        </motion.div>
      </div>
      <hr className="text-[#d9d9d9] mt-2"></hr>
      <div className="flex justify-between items-center">
        <p>Voucher Code</p>
        <Button
          onClick={() => setShowVoucher(true)}
          type="secondary"
          width="24"
        >
          Add
        </Button>
      </div>
      {showVoucher && (
        <div className="flex flex-col gap-2">
          <div className="flex justify-between gap-5">
            <input
              className="ring ring-black p-2 rounded-sm flex-1"
              disabled={voucherApplied}
              type="text"
              placeholder="Enter your Voucher"
              value={voucher}
              onChange={(e) => setVoucher(e.target.value)}
            />
            <Button onClick={validateVoucher} width="24" type="secondary">
              APPLY
            </Button>
          </div>
          {voucherApplied && (
            <p className="text-sm text-green-700">
              Voucher applied successfully
            </p>
          )}
          {voucherApplied === false && (
            <p className="text-sm text-red-500">Invalid Voucher code.</p>
          )}
        </div>
      )}
      <hr className="text-[#d9d9d9] mt-2"></hr>
    </div>
  );
}

export default OrderSummary;
