function ProductCardFooter({ openColors, data, handleShowColors }) {
  return (
    <div>
      <div className="flex justify-between items-center mt-1">
        {!openColors ? (
          <span className="text-[11px] font-semibold">
            ${Number(data.price).toLocaleString()}
          </span>
        ) : (
          <span></span>
        )}
        <div className="flex gap-2 font-semibold items-center justify-center">
          <p
            style={{ textTransform: "uppercase" }}
            className="text-[11px] font-semibold"
          >
            colors
            <span className="font-normal text-[10px] ml-1">
              ({data.colors.length})
            </span>
          </p>
          <div
            className={`w-5 h-5 border border-gray-200 rounded-full relative cursor-pointer hover:bg-gray-100 transition flex items-center justify-center ${
              openColors ? "border-gray-500" : ""
            }`}
            onClick={handleShowColors}
          >
            <div className="text-md font-bold">{openColors ? "x" : "+"}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCardFooter;
