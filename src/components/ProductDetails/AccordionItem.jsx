import { useState } from "react";

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
      {isOpen && (
        <div className="text-sm text-gray-700 leading-relaxed pb-4">
          {children}
        </div>
      )}
    </div>
  );
}

export default AccordionItem;
