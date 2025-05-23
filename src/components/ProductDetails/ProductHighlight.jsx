import { useLoaderData } from "react-router";

function ProductHighlight() {
  const { hero_section_2 } = useLoaderData();
  return (
    <div
      className="bg-[url('https://images.ctfassets.net/8cd2csgvqd3m/3ITdYQPQl4ms3TSnZlX2xt/6751d0ea5abfc9f911cc48951dbc974a/Lifestyle-Beosound-A1-3rd-Gen-00199-w3840x2160px.png?q=90&w=1920&fit=fill&fm=webp')] bg-cover bg-center h-screen w-full shadow-lg p-8 my-8 flex items-center justify-center relative overflow-hidden"
      style={{ backgroundImage: `url(${hero_section_2.banner})` }}
    >
      <div className="absolute inset-0 bg-black/50 z-0"></div>
      <div className="absolute bottom-8 right-8 text-right rounded-xl p-8 max-w-md z-10">
        <h1 className="text-3xl font-bold mb-4 text-white">
          {hero_section_2.name}
        </h1>
        <p className="text-lg text-white leading-relaxed">
          {hero_section_2.slogan}
        </p>
      </div>
    </div>
  );
}

export default ProductHighlight;
