import AllProducts from "@/components/orderHistory/AllProducts";
import { getToken, getUserIdFromToken } from "@/utils/authHelpers";

function OrderHistory() {
  return (
    <div>
      <AllProducts />
    </div>
  );
}

export async function loader() {
  try {
    const token = getToken();
    if (!token) throw new Error("No token please login first");
    const userId = getUserIdFromToken(token);
    console.log(userId);
    const res = await fetch(
      `https://eshterely.up.railway.app/api/orders?userId=${userId}`,
      {
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": token,
        },
      }
    );

    if (!res.ok) {
      throw new Response("Failed to fetch orders", { status: res.status });
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching orders:", error);
    throw error;
  }
}

export default OrderHistory;
