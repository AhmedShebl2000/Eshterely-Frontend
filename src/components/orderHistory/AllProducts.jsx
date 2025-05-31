import { useLoaderData } from "react-router";
import EmptyOrderHistory from "./EmptyOrderHistory";
import OneOrder from "./OneOrder";

function AllProducts() {
  const allOrders = useLoaderData();
  console.log(allOrders);

  if (!allOrders || allOrders.length === 0) {
    return <EmptyOrderHistory />;
  }

  return (
    <div className="px-4 md:px-8">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800 mt-6">
        Your Order History
      </h2>

      <div className="space-y-6">
        {allOrders.map((order, index) => (
          <div
            key={order._id}
            className={index === allOrders.length - 1 ? "mb-10" : ""}
          >
            <OneOrder order={order} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default AllProducts;
