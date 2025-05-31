function OneOrder({ order }) {
  return (
    <div className="w-full bg-white border rounded-xl p-6 shadow-md hover:shadow-lg transition">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4">
        <div>
          <h3 className="font-semibold text-lg text-gray-800">
            Order #{order._id.slice(-6).toUpperCase()}
          </h3>
          <p className="text-sm text-gray-500">
            {new Date(order.createdAt).toLocaleDateString()}
          </p>
        </div>
        <p className="font-bold text-green-600 text-lg mt-2 sm:mt-0">
          ${order.total.toFixed(2)}
        </p>
      </div>

      <div className="border-t pt-4">
        <h4 className="font-medium text-gray-700 mb-2">Items:</h4>
        <ul className="space-y-2">
          {order.items.map((item, index) => (
            <li key={item._id} className="flex justify-between text-sm">
              <span className="text-gray-700">
                {item.name} × {item.quantity}
              </span>
              <span className="text-gray-900 font-medium">
                ${(item.price * item.quantity).toFixed(2)}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default OneOrder;
