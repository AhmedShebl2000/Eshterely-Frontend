import { useNavigate } from "react-router";

function HeroSection() {
  const navigate = useNavigate();

  return (
    <div className="w-full h-[90vh] relative">
      <video
        className="w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source
          src="https://videos.ctfassets.net/8cd2csgvqd3m/1Cmuarvk1flcT9Kt3OMZ1G/6d9b2a8a8bd85bd3e7881a1c9a32ac9f/B_O_X_Charles_-_cafe__beopayh100charlesleclerc_16x9.mp4"
          type="video/mp4"
        />
      </video>
      <div className="absolute inset-0 flex flex-col items-center lg:items-start justify-end pb-16 lg:pl-16 text-white gap-6 bg-black/30">
        <h1 className="text-5xl font-bold">Destination Monaco</h1>
        <p className="text-xl max-w-2xl">
          Introducing Beoplay H100 Charles Leclerc Limited Edition.
        </p>
        <button
          onClick={() => navigate("/products/headphones")}
          className="bg-[#F7B53D] text-black px-8 py-3 rounded-full font-semibold hover:bg-[#e6a835] cursor-pointer transition-colors"
        >
          Available now
        </button>
      </div>
    </div>
  );
}

export default HeroSection;
