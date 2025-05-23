import { useNavigate } from "react-router";

function SoundSystemSection() {
  const navigate = useNavigate();

  return (
    <div className="w-full h-[90vh] relative">
      <picture>
        <source
          media="(min-width: 1920px)"
          srcSet="https://images.ctfassets.net/8cd2csgvqd3m/5VBeAdQDMDB7BSx1U9PjqN/1eea60b961719d5feddd58ef7b8a7c47/Lifestyle_BeolinkSurround_16x9.jpg?q=90&w=1920&fit=fill&fm=webp"
        />
        <source
          media="(min-width: 1200px)"
          srcSet="https://images.ctfassets.net/8cd2csgvqd3m/5VBeAdQDMDB7BSx1U9PjqN/1eea60b961719d5feddd58ef7b8a7c47/Lifestyle_BeolinkSurround_16x9.jpg?q=90&w=1200&fit=fill&fm=webp"
        />
        <source
          media="(min-width: 1080px)"
          srcSet="https://images.ctfassets.net/8cd2csgvqd3m/5VBeAdQDMDB7BSx1U9PjqN/1eea60b961719d5feddd58ef7b8a7c47/Lifestyle_BeolinkSurround_16x9.jpg?q=90&w=1080&fit=fill&fm=webp"
        />
        <source
          media="(min-width: 828px)"
          srcSet="https://images.ctfassets.net/8cd2csgvqd3m/5VBeAdQDMDB7BSx1U9PjqN/1eea60b961719d5feddd58ef7b8a7c47/Lifestyle_BeolinkSurround_16x9.jpg?q=90&w=828&fit=fill&fm=webp"
        />
        <source
          media="(min-width: 750px)"
          srcSet="https://images.ctfassets.net/8cd2csgvqd3m/5VBeAdQDMDB7BSx1U9PjqN/1eea60b961719d5feddd58ef7b8a7c47/Lifestyle_BeolinkSurround_16x9.jpg?q=90&w=750&fit=fill&fm=webp"
        />
        <img
          src="https://images.ctfassets.net/8cd2csgvqd3m/5VBeAdQDMDB7BSx1U9PjqN/1eea60b961719d5feddd58ef7b8a7c47/Lifestyle_BeolinkSurround_16x9.jpg?q=90&w=640&fit=fill&fm=webp"
          alt="Home Sound Systems"
          className="w-full h-full object-cover"
        />
      </picture>
      <div className="absolute inset-0 flex flex-col items-center lg:items-start justify-end pb-16 lg:pl-16 text-white gap-6 bg-black/30">
        <h1 className="text-5xl font-bold text-center lg:text-left">
          Home Sound Systems
        </h1>
        <p className="text-xl max-w-2xl text-center lg:text-left">
          Introducing the Beosound 2 Gradient Collection.
        </p>
        <button
          onClick={() => navigate("/products/soundbars")}
          className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-black transition-colors mt-4 cursor-pointer"
        >
          Home Sound Systems
        </button>
      </div>
    </div>
  );
}

export default SoundSystemSection;
