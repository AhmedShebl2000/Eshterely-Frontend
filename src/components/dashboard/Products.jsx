import { DataTable } from "../data-table";
import { useLoaderData } from "react-router";

function Products() {
  const data = useLoaderData();
  return (
    <div className="flex flex-1 flex-col">
      <div className="@container/main flex flex-1 flex-col gap-2">
        <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
          <DataTable data={data} />
        </div>
      </div>
    </div>
  );
}

export async function loader() {
  const baseURL = import.meta.env.VITE_RAILWAY_PUBLIC_DOMAIN;

  const endpoints = [
    `${baseURL}/televisions`,
    `${baseURL}/speakers`,
    `${baseURL}/soundbars`,
    `${baseURL}/headphones`,
  ];

  try {
    const responses = await Promise.all(endpoints.map((url) => fetch(url)));

    responses.forEach((res, i) => {
      if (!res.ok)
        throw new Error(`Failed to fetch from ${endpoints[i]} - ${res.status}`);
    });

    const allData = await Promise.all(responses.map((res) => res.json()));

    const originalData = allData.flat();

    function transformProducts(products) {
      return products.map((product) => ({
        id: product._id,
        header: product.sub_name || product.name,
        type:
          product.category.charAt(0).toUpperCase() + product.category.slice(1),
        status: product.is_new ? "Coming soon" : "In store",
        price: `$${product.price}`,
        quantity: product.category === "televisions" ? "5" : "3",
        reviewer: "Assign reviewer",
      }));
    }

    const transformed = transformProducts(originalData);

    return transformed;
  } catch (error) {
    console.error("Error loading products:", error);
    throw new Error("Failed to load product data");
  }
}

export default Products;
