import { Link } from "react-router";

function EmptyOrderHistory() {
  return (
    <div className="flex flex-col justify-center items-center gap-8 h-[80vh]">
      <p className="text-gray-500 text-3xl">No orders found</p>
      <Link
        to={"/"}
        className="w-50 px-8 py-2 bg-[#FFB800] text-black font-semibold rounded-full hover:bg-[#FFD700] transition-colors cursor-pointer text-center"
      >
        Back to Home
      </Link>
    </div>
  );
}

export default EmptyOrderHistory;
