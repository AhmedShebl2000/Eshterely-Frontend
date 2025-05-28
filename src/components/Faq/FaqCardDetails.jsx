import { useState } from "react";
import { RiExpandUpDownFill } from "react-icons/ri";
import { AnimatePresence, motion } from "framer-motion";

function FaqCardDetails({ section }) {
  const [shownID, setShownID] = useState(null);
  console.log(section);

  function handleClick(eachQA) {
    console.log("hello", eachQA.id);
    setShownID((prev) => (prev === eachQA.id ? null : eachQA.id));
  }

  return (
    <div className="flex flex-col gap-4">
      <h2 className="font-semibold text-2xl border-b border-[#E5E5E5] mt-2 pb-3">
        {section.title}
      </h2>

      {section.QA.map((eachQA) => (
        <div
          key={eachQA.q}
          className="flex flex-col gap-3 border-b border-[#E5E5E5] pb-3"
        >
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ type: "spring", stiffness: 200, duration: 0.3 }}
            className="flex justify-between items-center"
          >
            <p className="text-md uppercase tracking-wider">{eachQA.q}</p>
            <div
              onClick={() => handleClick(eachQA)}
              className="cursor-pointer text-md"
            >
              <RiExpandUpDownFill />
            </div>
          </motion.div>
          <AnimatePresence mode="wait">
            {eachQA.id === shownID && (
              <motion.p
                key="answer"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ type: "spring", stiffness: 200, duration: 0.3 }}
                className="text-md ml-5 overflow-hidden"
              >
                {eachQA.a}
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}

export default FaqCardDetails;
