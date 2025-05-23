import HeroSection from "../components/home/HeroSection";
import AtelierSection from "../components/home/AtelierSection";
import HeritageSection from "../components/home/HeritageSection";
import SoundSystemSection from "../components/home/SoundSystemSection";
import ExclusiveServices from "../components/home/ExclusiveServices";
import StoreExperience from "../components/home/StoreExperience";
import NewsletterSection from "../components/home/NewsletterSection";

function HomePage() {
  return (
    <div className="min-w-full relative flex flex-col gap-[5rem]">
      <HeroSection />
      <AtelierSection />
      <HeritageSection />
      <SoundSystemSection />
      <ExclusiveServices />
      <StoreExperience />
      <NewsletterSection />
    </div>
  );
}

export default HomePage;
