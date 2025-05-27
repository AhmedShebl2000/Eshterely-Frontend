import { IoIosClose } from "react-icons/io";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { useCart } from "../../Contexts/CartContext";

function BasketItem({ item }) {
  const { removeFromCart } = useCart();
  function handleRemoveFromCart(item) {
    removeFromCart(item._id);
  }

  useEffect(() => {
    console.log(item);
  }, []);

  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: 10 }}
      whileHover={{ y: -10 }}
      className="bg-[#FAFAFA] w-100 md:w-140 p-4 rounded-sm"
    >
      <div className="flex relative items-center  gap-6 border-b-2 pb-4 border-[#d9d9d9]">
        <div
          className="absolute -top-1 right-0 cursor-pointer"
          onClick={() => handleRemoveFromCart(item)}
        >
          <IoIosClose />
        </div>
        <div className=" flex w-3/12 items-center justify-center">
          <img className="w-20" src={item.image} />
        </div>
        <div className="flex w-9/12 flex-col justify-center gap-2">
          <p className="w-11/12">{item.name}</p>
          <div className="flex justify-between mt-5">
            <p className="text-wrap w-3/4">{item.quantity}</p>
            <p className="font-semibold">
              € {(item.quantity * item.price).toLocaleString()}
            </p>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-4 mt-3">
        <input className=" h-4 w-4 accent-black" type="checkbox" />
        <p>Add Free Gift Wrapping</p>
      </div>
    </motion.div>
  );
}

export default BasketItem;
