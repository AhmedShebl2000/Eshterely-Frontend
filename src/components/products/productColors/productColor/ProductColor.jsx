function ProductColor({ color, isFirst, data }) {
  return (
    <div
      className={`flex items-center ${
        isFirst ? "h-[300px]" : "h-[100px]"
      } h-[100px] p-2 gap-2 `}
    >
      <div className={`flex-shrink-0 ${isFirst ? "w-1/2" : "w-1/3"}`}>
        <img
          src={color.images[0]}
          alt={color.name}
          className={`w-full ${
            isFirst ? "h-[300px]" : "h-[100px]"
          } object-contain`}
        />
      </div>
      <div className={`flex flex-col text-xs font-medium gap-1`}>
        <p className={isFirst ? "text-lg" : "text-xs"}>{color.name}</p>
        <span className={isFirst ? "text-base" : "text-xs"}>
          ${Number(color.price || data.price).toLocaleString()}
        </span>
      </div>
    </div>
  );
}

export default ProductColor;
