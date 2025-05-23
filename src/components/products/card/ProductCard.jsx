import { useState } from "react";

function ProductCard({ data, productType }) {
  const [isHovered, setIsHovered] = useState(false);

  const getImageSource = () => {
    switch (productType) {
      case "speakers":
        return isHovered ? data.colors[1].images[0] : data.image;
      case "headphones":
        return isHovered ? data.colors[1].images[0] : data.image;
      case "ALL SOUNDBARS":
        return isHovered ? data.colors[0].images[2] : data.image;
      case "televisions":
        return isHovered ? data.colors[0].images[0] : data.image;
      default:
        return data.image;
    }
  };

  return (
    <div className={`bg-[#FAFAFA] flex flex-col gap-2 h-full cursor-pointer`}>
      <div className="flex justify-between items-center mb-1">
        <h5 className="text-[11px] font-medium">{data.name}</h5>
        <div className="bg-white">
          <p className="font-semibold text-xs px-2 py-1">
            {data.is_new ? "New" : ""}
          </p>
        </div>
      </div>
      <div
        className="flex-grow"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img
          src={getImageSource()}
          alt={data.name}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}

export default ProductCard;
