import { useLoaderData } from "react-router";
import { motion } from "framer-motion";

function ProductHighlight() {
  const { hero_section_2 } = useLoaderData();

  const isVideo = hero_section_2.banner?.match(/\.(mp4|webm|ogg)$/i);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="relative h-screen w-full shadow-lg p-8 my-8 flex items-center justify-center overflow-hidden"
    >
      {isVideo ? (
        <video
          className="absolute inset-0 object-cover w-full h-full"
          src={hero_section_2.banner}
          autoPlay
          loop
          muted
          playsInline
        />
      ) : (
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${hero_section_2.banner})` }}
        />
      )}

      <div className="absolute inset-0 bg-black/50 z-0" />

      <div className="absolute bottom-8 right-8 text-right rounded-xl p-8 max-w-md z-10">
        <h1 className="text-3xl font-bold mb-4 text-white">
          {hero_section_2.name}
        </h1>
        <p className="text-lg text-white leading-relaxed">
          {hero_section_2.slogan}
        </p>
      </div>
    </motion.div>
  );
}

export default ProductHighlight;
