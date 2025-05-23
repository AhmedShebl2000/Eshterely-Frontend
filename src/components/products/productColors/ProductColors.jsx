import ProductColor from "./productColor/ProductColor";

function ProductColors({ data, isFirst }) {
  return (
    <div className={`h-full w-full ${isFirst ? "p-4" : "p-2"}`}>
      <div className="flex flex-col overflow-y-auto h-full gap-1">
        {data.colors.map((color) => (
          <ProductColor
            color={color}
            key={color.name}
            isFirst={isFirst}
            data={data}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductColors;
