import BasketItem from "./BasketItem";
import { motion } from "framer-motion";

function Items({ productArr }) {
  return (
    <div className="flex flex-col gap-5 p-20 items-center md:items-stretch lg:p-4 lg:max-w-[600px]">
      <div className="flex gap-6 items-center">
        <motion.h1
          initial={{ x: -200 }}
          animate={{ x: 0 }}
          transition={{ duration: 1, type: "spring", stiffness: 200 }}
          className="font-semibold tracking-widest text-2xl h-10"
        >
          Items in basket
        </motion.h1>
        <motion.div
          className="w-8"
          drag
          dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
          dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
          dragElastic={1}
        >
          <motion.svg
            viewBox="0 0 512 512"
            xmlns="http://www.w3.org/2000/svg"
            stroke="#000"
            strokeWidth={10}
            fill="none"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <motion.path
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 6, ease: "easeInOut" }}
                d="M25.45 63.043l-4.364 17.463 8.73 2.18L90.44 97.846l29.402 44.1 62.44 187.32-36.845 73.693h17.827c-2.086 4.238-3.264 8.99-3.264 14 0 17.567 14.433 32 32 32s32-14.433 32-32c0-5.01-1.178-9.762-3.264-14h102.528c-2.086 4.238-3.264 8.99-3.264 14 0 17.567 14.433 32 32 32s32-14.433 32-32c0-5.01-1.178-9.762-3.264-14H393v-18H174.562l23-46h192.924l70-210h-327.67L101.56 82.07 34.183 65.227l-8.733-2.184zm115.038 83.914H231v46h-75.178l-15.334-46zm108.512 0h78v46h-78v-46zm96 0h90.512l-15.334 46H345v-46zm-183.18 64H231v46h-53.846l-15.334-46zm87.18 0h78v46h-78v-46zm96 0h69.18l-15.334 46H345v-46zm-161.846 64H231v46h-32.514l-15.332-46zm65.846 0h78v46h-78v-46zm96 0h47.846l-15.332 46H345v-46zm-153 128c7.84 0 14 6.16 14 14s-6.16 14-14 14-14-6.16-14-14 6.16-14 14-14zm160 0c7.84 0 14 6.16 14 14s-6.16 14-14 14-14-6.16-14-14 6.16-14 14-14z"
              ></motion.path>
            </g>
          </motion.svg>
        </motion.div>
      </div>
      <div className="flex flex-col gap-10">
        {productArr.map((item) => (
          <BasketItem item={item} />
        ))}
      </div>
    </div>
  );
}

export default Items;
