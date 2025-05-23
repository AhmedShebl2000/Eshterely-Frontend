function ProductCategory({ subCategories, category, selectedSub, onSelect }) {
  return (
    <div>
      <nav>
        <ul
          className={`flex gap-10 sm:text-sm text-[9px] font-mono flex-wrap sm:flex-nowrap`}
          style={{ textTransform: "uppercase", letterSpacing: "2px" }}
        >
          <li
            className={`cursor-pointer  rounded ${
              selectedSub === "all"
                ? "underline underline-offset-8 decoration-2 decoration-black"
                : ""
            }`}
            onClick={() => {
              onSelect("all");
            }}
          >
            All {category}
          </li>
          {subCategories.map((sub, i) => (
            <li
              className={`cursor-pointer ${
                selectedSub === sub
                  ? "underline underline-offset-8 decoration-2 decoration-black"
                  : ""
              }`}
              onClick={() => {
                onSelect(sub);
              }}
              key={i}
            >
              {sub}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default ProductCategory;
