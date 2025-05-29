import { Link, useNavigate } from "react-router";
import Button from "../../UI/Button";

function FaqCard({ card }) {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col justify-center items-center gap-5 h-[500px] 3xl:h-[650px] w-72 md:w-92 bg-[#FAFAFA] p-6 rounded-md">
      <img
        className="w-[90px] h-[90px] hover:scale-110 transition-all duration-500"
        src={card.imgURL}
      />
      <p className="text-center">{card.question}</p>
      <p className="text-center text-xs h-6">{card.description}</p>
      <Button
        onClick={() => navigate(`/faqDetails/${card.id}`)}
        width="64"
        type="secondary"
      >
        {card.btnText}
      </Button>
    </div>
  );
}

export default FaqCard;
