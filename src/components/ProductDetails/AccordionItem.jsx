import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

function AccordionItem({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between w-full items-center py-4 text-left text-xl font-medium tracking-wide cursor-pointer"
      >
        {title}
        <span className="text-xl">
          {isOpen ? (
            <span className="rotate-45 transition-transform">−</span>
          ) : (
            <span className="transition-transform">＋</span>
          )}
        </span>
      </button>
      <AnimatePresence initial={false} mode="wait">
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ type: "spring", stiffness: 200, duration: 0.3 }}
            className="text-sm text-gray-700 leading-relaxed pb-4"
          >
            <div>{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default AccordionItem;
