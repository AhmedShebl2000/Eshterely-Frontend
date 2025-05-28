import FaqCard from "../components/Faq/FaqCard";

import faqCards from "../../FAQDATA/FAQData";

function FAQPage() {
  return (
    <div className="lg:px-34">
      <h1 className="text-4xl font-semibold text-center mt-40">
        Frequently Asked Questions
      </h1>
      <h2 className="font-semibold text-4xl mt-30 text-center lg:text-left ">
        Topics
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 place-items-center gap-10 mb-20 mt-10 w-full">
        {faqCards.map((card) => (
          <FaqCard card={card} />
        ))}
      </div>
    </div>
  );
}

export default FAQPage;
