import { useState } from "react";
import ProductColors from "./productColors/ProductColors";
import ProductCardFooter from "./productFooter/ProductCardFooter";
import ProductCard from "./card/ProductCard";
import { motion } from "framer-motion";

import { Link } from "react-router";

function Products({ data, index, productType }) {
  const [openColors, setOpenColors] = useState(false);
  function handleShowColors() {
    setOpenColors(!openColors);
  }
  return (
    <Link
      className={`bg-[#FAFAFA] flex flex-col gap-2 h-full cursor-pointer relative overflow-hidden`}
      to={`${data._id}`}
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className={`${
          openColors ? "opacity-0 " : "opacity-100"
        } transition-opacity duration-300 h-full`}
      >
        <ProductCard data={data} productType={productType} />
      </motion.div>

      <div
        className={`absolute inset-0 transition-transform duration-500 ease-in-out ${
          openColors ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <ProductColors data={data} isFirst={index === 0} />
      </div>

      <ProductCardFooter
        openColors={openColors}
        data={data}
        handleShowColors={handleShowColors}
      />
    </Link>
  );
}

export default Products;
