import { useNavigate } from "react-router";

function AtelierSection() {
  const navigate = useNavigate();

  return (
    <div className="w-full h-[50vh] relative">
      <picture>
        <source
          media="(min-width: 1920px)"
          srcSet="https://images.ctfassets.net/8cd2csgvqd3m/j8iiOZHnQnfDvIUjHvbs6/aeb84f7d516d690132e643a5f0467629/Campaign-Atelier-Craftsmanship-Sketch-2025-Digital-Clean-0003-Hero16x9-crop-2304x672px.jpg?q=90&w=1920&fit=fill&fm=webp"
        />
        <source
          media="(min-width: 1200px)"
          srcSet="https://images.ctfassets.net/8cd2csgvqd3m/j8iiOZHnQnfDvIUjHvbs6/aeb84f7d516d690132e643a5f0467629/Campaign-Atelier-Craftsmanship-Sketch-2025-Digital-Clean-0003-Hero16x9-crop-2304x672px.jpg?q=90&w=1200&fit=fill&fm=webp"
        />
        <source
          media="(min-width: 1080px)"
          srcSet="https://images.ctfassets.net/8cd2csgvqd3m/j8iiOZHnQnfDvIUjHvbs6/aeb84f7d516d690132e643a5f0467629/Campaign-Atelier-Craftsmanship-Sketch-2025-Digital-Clean-0003-Hero16x9-crop-2304x672px.jpg?q=90&w=1080&fit=fill&fm=webp"
        />
        <source
          media="(min-width: 828px)"
          srcSet="https://images.ctfassets.net/8cd2csgvqd3m/j8iiOZHnQnfDvIUjHvbs6/aeb84f7d516d690132e643a5f0467629/Campaign-Atelier-Craftsmanship-Sketch-2025-Digital-Clean-0003-Hero16x9-crop-2304x672px.jpg?q=90&w=828&fit=fill&fm=webp"
        />
        <source
          media="(min-width: 750px)"
          srcSet="https://images.ctfassets.net/8cd2csgvqd3m/j8iiOZHnQnfDvIUjHvbs6/aeb84f7d516d690132e643a5f0467629/Campaign-Atelier-Craftsmanship-Sketch-2025-Digital-Clean-0003-Hero16x9-crop-2304x672px.jpg?q=90&w=750&fit=fill&fm=webp"
        />
        <img
          src="https://images.ctfassets.net/8cd2csgvqd3m/j8iiOZHnQnfDvIUjHvbs6/aeb84f7d516d690132e643a5f0467629/Campaign-Atelier-Craftsmanship-Sketch-2025-Digital-Clean-0003-Hero16x9-crop-2304x672px.jpg?q=90&w=640&fit=fill&fm=webp"
          alt="Bang & Olufsen Atelier - Craftsmanship Sketch"
          className="w-full h-full object-cover"
        />
      </picture>
      <div className="absolute inset-0 flex flex-col items-center justify-center pb-16 lg:pl-16 text-white gap-6 bg-black/30">
        <h1 className="text-5xl font-bold text-center lg:text-left">
          You dream it. We craft it.
        </h1>
        <button
          onClick={() => navigate("/products/speakers")}
          className="bg-[#F7B53D] text-black px-8 py-3 rounded-full font-semibold hover:bg-[#e6a835] cursor-pointer transition-colors"
        >
          Bang & Olufsen Atelier
        </button>
      </div>
    </div>
  );
}

export default AtelierSection;
