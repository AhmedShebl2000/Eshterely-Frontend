import { useParams } from "react-router";
import faqCards from "../../FAQDATA/FAQData";
import FaqCardDetails from "../components/Faq/FaqCardDetails";

function FAQDetails() {
  const { id } = useParams();
  const { question, detailsSection } = faqCards.find((card) => card.id === +id);

  return (
    <div className="flex flex-col min-h-screen mt-40 text-wrap w-9/12  mx-auto">
      <h1 className="font-medium text-3xl mb-5">{question} FAQ</h1>

      <div className="flex flex-col gap-8">
        {detailsSection.map((section) => (
          <FaqCardDetails key={section.title} section={section} />
        ))}
      </div>
    </div>
  );
}

export default FAQDetails;
