import { useCart } from "../../Contexts/CartContext";

function CartDropdown({ product }) {
  const { showCart, removeFromCart } = useCart();
  const { _id } = product;
  if (!showCart) return null;

  return (
    <div className="bg-gray-50 rounded-md shadow p-1 mb-3 relative max-w-full">
      <div
        className="absolute top-1 right-2 text-gray-500 hover:text-red-600 cursor-pointer text-xl select-none"
        onClick={() => removeFromCart(_id)}
        title="Remove item"
      >
        &times;
      </div>

      <div className="flex items-center space-x-4 p-3">
        <div className="flex-shrink-0">
          <img
            src={product.image}
            alt={product.name}
            className="w-20 h-20 object-contain rounded select-none"
          />
        </div>
        <div className="flex flex-col justify-between flex-grow min-w-0">
          <p
            className="truncate text-sm font-medium text-gray-800"
            title={product.name}
          >
            {product.name}
          </p>
          <p className="text-sm font-semibold text-gray-900 mt-1">
            ${Number(product.price).toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  );
}

export default CartDropdown;
