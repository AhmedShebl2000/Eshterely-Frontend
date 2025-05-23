import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductByCategory } from "../redux/features/products/productsSlice";
import Loader from "../components/Loader";
import ErrorFetchingData from "../components/ErrorFetchingData";
import Products from "../components/products/Products";
import ProductCategory from "../components/products/subCategory/ProductCategory";
import SignUp from "../components/ProductDetails/Signup";

export default function ProductsPage() {
  const { category } = useParams();
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.products);
  const [selectedSub, setSelectedSub] = useState("all");

  const subCategories = [...new Set(products.map((p) => p.sub_category))];

  useEffect(() => {
    dispatch(fetchProductByCategory(category));
  }, [category]);

  const filteredProducts =
    selectedSub === "all"
      ? products
      : products.filter((p) => p.sub_category === selectedSub);

  return (
    <div>
      {loading && <Loader />}
      {error && <ErrorFetchingData />}
      {!loading && (
        <div className="flex flex-col gap-10 p-10">
          <h1
            className="font-semibold text-2xl"
            style={{ textTransform: "capitalize" }}
          >
            {selectedSub === "all" ? `All ${category}` : `${selectedSub}`}
            <span className="ml-3 text-xs font-normal">
              {selectedSub === "all"
                ? `(${products.length})`
                : `(${filteredProducts.length})`}
            </span>
          </h1>
          <ProductCategory
            subCategories={subCategories}
            selectedSub={selectedSub}
            onSelect={setSelectedSub}
            category={category}
          />
          <div className="grid grid-cols-1 grid-rows-1 gap-3 lg:grid-cols-4 lg:grid-rows-[repeat(2,minmax(0,1fr))] lg:gap-x-5 lg:gap-y-10">
            {filteredProducts.map((product, index) => (
              <div
                key={product.id}
                className={`bg-[#FAFAFA] p-4 ${
                  index === 0
                    ? "lg:row-span-2 lg:col-span-2 row-span-1 col-span-1"
                    : ""
                }`}
              >
                <Products
                  data={product}
                  index={index}
                  productType={product.category}
                />
              </div>
            ))}
          </div>
        </div>
      )}
      <SignUp />
    </div>
  );
}
