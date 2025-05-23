import { useNavigate } from "react-router";

function StoreExperience() {
  const navigate = useNavigate();

  return (
    <div className="w-full flex flex-col lg:flex-row items-center justify-center gap-[5rem] xl:gap-[20rem] py-16 px-4 lg:px-10 xl:px-[10rem]">
      <div className="w-full lg:w-1/2">
        <picture>
          <source
            media="(min-width: 1024px)"
            srcSet="//images.ctfassets.net/8cd2csgvqd3m/3dOLOUm52zcxt9UhxfqJEu/644455d5a85ec32dec4eba976a6bedc3/Lifestyle_Mayfair_StoreFinder_1x1_A.jpg?q=90&fm=webp&w=1440&h=1440&fit=fill"
          />
          <source
            media="(min-width: 768px)"
            srcSet="//images.ctfassets.net/8cd2csgvqd3m/3dOLOUm52zcxt9UhxfqJEu/644455d5a85ec32dec4eba976a6bedc3/Lifestyle_Mayfair_StoreFinder_1x1_A.jpg?q=90&fm=webp&w=1024&h=1024&fit=fill"
          />
          <img
            src="//images.ctfassets.net/8cd2csgvqd3m/3dOLOUm52zcxt9UhxfqJEu/644455d5a85ec32dec4eba976a6bedc3/Lifestyle_Mayfair_StoreFinder_1x1_A.jpg?q=90&fm=webp&w=375&h=375&fit=fill"
            alt="Interior of the Bang & Olufsen flagship store in London"
            className="w-full h-auto"
          />
        </picture>
      </div>
      <div className="w-[25rem] xl:w-full flex flex-col items-center text-center max-w-xl">
        <span className="uppercase text-sm tracking-wider">
          UP CLOSE AND PERSONAL
        </span>
        <h2 className="text-4xl font-bold mt-4">Experience in store</h2>
        <p className="mt-4 text-lg">
          Come by one of our stores to hear, see and feel Bang & Olufsen
          yourself.
        </p>
        <button
          onClick={() => navigate("/locations")}
          className="mt-8 px-8 py-3 bg-[#FFB800] text-black font-semibold rounded-full hover:bg-[#FFD700] transition-colors cursor-pointer"
        >
          Find store
        </button>
      </div>
    </div>
  );
}

export default StoreExperience;
