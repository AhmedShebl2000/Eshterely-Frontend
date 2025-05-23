import Button from "../../UI/Button";

function PlaceOrder() {
  return (
    <div
      className=" w-[430px] md:w-[800px] xs:p-8 sm:p-3 flex flex-col 
    gap-8"
    >
      <p className="font-extralight">
        By clicking on &apos;Pay and Place Order&apos;, you agree (i) to make
        your purchase from Global-e as merchant of record for this transaction,
        subject to Global-e&apos;s Terms of Sale; (ii) that your information
        will be handled by Global-e in accordance with the Global-e Privacy
        Policy; and (iii) that Global-e will share your information (excluding
        the payment details) with Bang & Olufsen.
      </p>
      <div className="flex-start">
        <Button>Pay and place order</Button>
      </div>
      <hr className="text-[#d9d9d9]"></hr>
    </div>
  );
}

export default PlaceOrder;
