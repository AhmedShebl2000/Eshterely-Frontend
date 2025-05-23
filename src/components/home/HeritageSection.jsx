import { useNavigate } from "react-router";

function HeritageSection() {
  const navigate = useNavigate();

  return (
    <div className="w-full px-4 lg:px-[20rem] flex flex-col items-center text-center gap-8">
      <span className="text-sm uppercase tracking-wider">BANG & OLUFSEN</span>
      <h2 className="text-4xl lg:text-5xl font-bold max-w-3xl">
        Superior craftsmanship since 1925
      </h2>
      <button
        onClick={() => navigate("/about")}
        className="border-2 border-black text-black px-8 py-3 rounded-full font-semibold hover:bg-black hover:text-white transition-colors mt-4 cursor-pointer"
      >
        Our story
      </button>
      <video className="w-full object-cover" autoPlay muted loop playsInline>
        <source
          src="https://videos.ctfassets.net/8cd2csgvqd3m/45QwOqblv4I7G4Bvw6cfdH/21a1237c9fcb5a8d3a800d2f61721387/Play_Your_Way_3_Part_2_1.mp4"
          type="video/mp4"
        />
      </video>
    </div>
  );
}

export default HeritageSection;
