import { useLoaderData } from "react-router";
import Button from "../../UI/Button";

function HeroSection() {
  const { hero_section, price } = useLoaderData();

  const isVideo = hero_section.banner?.match(/\.(mp4|webm|ogg)$/i);

  return (
    <div className="relative min-h-screen w-full overflow-hidden flex flex-col justify-between px-4 sm:px-8 md:px-12 pt-16 pb-24 sm:pt-20 sm:pb-32">
      {/* Background */}
      {isVideo ? (
        <video
          className="absolute inset-0 w-full h-full object-cover z-0"
          src={hero_section.banner}
          autoPlay
          loop
          muted
          playsInline
        />
      ) : (
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
          style={{ backgroundImage: `url(${hero_section.banner})` }}
        />
      )}

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/20 z-0" />

      {/* Main content */}
      <div className="flex flex-col md:flex-row flex-1 items-start md:items-center relative z-10">
        <div className="max-w-full sm:max-w-2xl">
          <p className="uppercase tracking-widest font-bold text-xs sm:text-sm text-white mb-4 sm:mb-6">
            {hero_section.name}
          </p>
          <h1 className="text-white text-xl sm:text-3xl md:text-5xl font-bold leading-tight mb-6 sm:mb-8">
            {hero_section.slogan}
          </h1>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="absolute bottom-0 left-0 w-full flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-0 px-4 sm:px-8 md:px-12 py-4 sm:py-6 border-t border-white/10 bg-black/40 backdrop-blur-sm z-20">
        <span className="text-xs tracking-widest text-white/80 order-1 sm:order-none">
          SCROLL TO DISCOVER
        </span>
        <span className="text-white text-xs sm:text-sm md:text-base order-2 sm:order-none">
          FROM ${price}
        </span>
        <Button type="primary" className="order-3 sm:order-none">
          Explore
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
