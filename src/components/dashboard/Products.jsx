import { getToken } from "@/utils/authHelpers";
import { DataTable } from "../data-table";
import { useLoaderData } from "react-router";
import { useState } from "react";

function Products() {
  const data = useLoaderData();
  const [products, setProducts] = useState(data);

  async function updateProduct(productId, category, updatedData) {
    const token = getToken();
    const baseURL = import.meta.env.VITE_RAILWAY_PUBLIC_DOMAIN;

    function transformProduct(original) {
      return {
        _id: original.id,
        sub_name: original.header,
        category: original.type,
        sub_category: original.category,
        is_new: original.status === "In store" ? false : true,
        price: original.price.replace(/[^0-9]/g, ""),
        warranty_duration: original.quantity,
      };
    }

    const convertedData = transformProduct(updatedData);

    try {
      console.log("🟢 PATCH to:", `${baseURL}/${category}/${productId}`);
      console.log("📦 Payload:", updatedData);
      console.log(convertedData);

      const res = await fetch(`${baseURL}/${category}/${productId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": token,
        },
        body: JSON.stringify(convertedData),
      });

      if (!res.ok) {
        const errorText = await res.text();
        throw new Error(`Update failed: ${errorText}`);
      }

      const updatedProduct = await res.json();

      setProducts((prev) =>
        prev.map((product) =>
          product.id === productId ? { ...product, ...updatedProduct } : product
        )
      );

      // toast.success("Product updated successfully");
    } catch (err) {
      console.error("Update product error:", err);
      // toast.error("Failed to update product");
    }
  }

  async function deleteProduct(productId, category) {
    const token = getToken();
    const baseURL = import.meta.env.VITE_RAILWAY_PUBLIC_DOMAIN;

    try {
      const res = await fetch(`${baseURL}/${category}/${productId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": token,
        },
      });

      if (!res.ok) {
        const errorText = await res.text();
        throw new Error(`Delete failed: ${errorText}`);
      }

      await res.json();

      setProducts((prev) => prev.filter((p) => p.id !== productId));
    } catch (err) {
      console.error("Delete product error:", err);
    }
  }

  return (
    <div className="flex flex-1 flex-col">
      <div className="@container/main flex flex-1 flex-col gap-2">
        <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
          <DataTable
            data={products}
            deleteProduct={deleteProduct}
            updateProduct={updateProduct}
          />
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
        category: product.category,
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
