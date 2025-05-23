import { useState } from "react";
import { useLoaderData } from "react-router";
import { AnimatePresence, motion } from "framer-motion";

function VariantsProduct() {
  const [current, setCurrent] = useState(0);
  const { sub_name, name, colors, sub_description } = useLoaderData();

  const images = colors.map((color) => color.images[0]);
  console.log(images);

  function prevImage() {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  }

  function nextImage() {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2 }}
      viewport={{ once: true }}
      className="w-full bg-white px-4 md:px-16 min-h-screen flex items-center"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 w-full">
        {/* Left: Product Image */}
        <div className="flex-1 flex justify-center">
          <div className="relative flex items-center justify-center w-full">
            {/* Left Arrow */}
            <button
              onClick={prevImage}
              className="cursor-pointer absolute left-0 z-10 bg-gray-700/80 hover:bg-gray-900 text-white rounded-full w-10 h-10 flex items-center justify-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                width="24"
                height="24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            {/* Image */}
            <AnimatePresence mode="wait">
              <motion.img
                key={images[current]}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ type: "spring", duration: 0.5 }}
                src={images[current]}
                alt="Beovision Theatre Ferrari Edition"
                className="mx-auto w-full max-w-md object-contain"
              />
            </AnimatePresence>
            {/* Indicator dots */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrent(idx)}
                  className={`cursor-pointer w-2 h-2 rounded-full transition-all ${
                    current === idx ? "bg-gray-900" : "bg-gray-400"
                  }`}
                  aria-label={`Go to image ${idx + 1}`}
                />
              ))}
            </div>
            {/* Right Arrow */}
            <button
              onClick={nextImage}
              className="cursor-pointer absolute right-0 z-10 bg-gray-700/80 hover:bg-gray-900 text-white rounded-full w-10 h-10 flex items-center justify-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                width="24"
                height="24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
        {/* Right: Product Info */}
        <div className="flex-1 max-w-xl">
          <p className="uppercase tracking-widest text-xs text-gray-700 mb-2">
            {name}
          </p>
          <h1 className="text-4xl font-medium mb-6">{sub_name}</h1>
          {/* Features */}
          <div className="flex flex-wrap gap-6 mb-6">
            <div className="flex flex-col items-center">
              <span className="w-8 h-8 rounded-full bg-gray-800 mb-2"></span>
              <p className="text-xs font-semibold">Base</p>
              <p className="text-xs text-gray-500">Grigio Corsa Aluminium</p>
            </div>
            <div className="flex flex-col items-center">
              <span className="w-8 h-8 rounded-full bg-gray-900 mb-2"></span>
              <p className="text-xs font-semibold">Front Cover</p>
              <p className="text-xs text-gray-500">
                Black fabric with red aluminium
              </p>
            </div>
            <div className="flex flex-col items-center">
              <span className="w-8 h-8 rounded-full bg-gray-700 mb-2"></span>
              <p className="text-xs font-semibold">Positioning</p>
              <p className="text-xs text-gray-500">Motorised Floor Stand</p>
            </div>
          </div>
          <hr className="my-4" />
          <p className="text-base text-gray-700 mb-6 font-semibold">
            {sub_description}
          </p>
          <div className="flex gap-8 text-xs text-gray-700">
            <span>✔️ Home Installation</span>
            <span>✔️ 24/7 Customer Service</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default VariantsProduct;
