import { DataOrders } from "../data-orders";

const orders = [
  {
    id: 98652366,
    product: "Beovision Harmony",
    quantity: 50,
    status: "Approved",
    amount: "$90.29",
  },
  {
    id: 94564503,
    product: "Beovision Contour",
    quantity: 40,
    status: "Rejected",
    amount: "$542.50",
  },
  {
    id: 98732623,
    product: "Beovision Theatre Ferrari Edition",
    quantity: 69,
    status: "Rejected",
    amount: "$29.50",
  },
  {
    id: 12345678,
    product: "Beovision Theatre",
    quantity: 125,
    status: "Rejected",
    amount: "$270.99",
  },
  {
    id: 12360564,
    product: "Beosound 2",
    quantity: 100,
    status: "Approved",
    amount: "$583.46",
  },
  {
    id: 86728656,
    product: "Beosound Balance",
    quantity: 99,
    status: "Pending",
    amount: "$810.80",
  },
];

function Orders() {
  return (
    <div className="flex flex-1 flex-col">
      <div className="@container/main flex flex-1 flex-col gap-2">
        <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
          <DataOrders data={orders} />
        </div>
      </div>
    </div>
  );
}

export default Orders;
