import NewsLetterImage from "./NewsLetter/NewsLetterImage";
import NewsLetterHeader from "./NewsLetter/NewsLetterHeader";
import NewsLetterForm from "./NewsLetter/NewsLetterForm";

function NewsletterSection() {
  return (
    <div className="w-full bg-[#191817] flex flex-col lg:flex-row items-center justify-between py-16 px-4 lg:px-16">
      <NewsLetterImage />
      <div className="w-full lg:h-[1000px] bg-white flex flex-col items-start gap-[2rem] p-[5rem] xl:px-[15rem] xl:py-[10rem]">
        <NewsLetterHeader />
        <NewsLetterForm />
      </div>
    </div>
  );
}

export default NewsletterSection;
