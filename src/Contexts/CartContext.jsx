import { createContext, useContext, useEffect, useRef, useState } from "react";
import { getToken, isLoggedIn } from "../utils/authHelpers";
import cartToasts from "../utils/cartToasts";

const CartContext = createContext();

function CartProvider({ children }) {
  const [productArr, setProductArr] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  async function fetchCart() {
    try {
      setIsLoading(true);
      const res = await fetch(`https://eshterely.up.railway.app/api/cart`, {
        headers: { "x-auth-token": getToken() },
      });
      if (!res.ok) throw new Error("Failed to fetch cart");
      const data = await res.json();
      console.log(data);
      setProductArr(data);
    } catch (err) {
      setError(err);
      setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  }

  async function addToCart(product, quantity = 1) {
    try {
      const token = getToken();
      if (!token) {
        cartToasts.error("Please login first");
        throw new Error("Authentication required");
      }

      const existingProduct = productArr.find(
        (item) => item._id === product._id
      );

      if (existingProduct) {
        cartToasts.warning(`${product.name} is already in your cart!`);
        return;
      }

      setIsLoading(true);
      const res = await fetch(`https://eshterely.up.railway.app/api/cart`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": token,
        },
        body: JSON.stringify({ product, quantity }),
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || "Failed to add/update cart");
      }

      const updatedCart = await res.json();
      console.log(updatedCart);
      setProductArr(updatedCart);
      cartToasts.success(`${product.name} added to cart`);
    } catch (err) {
      if (!err.message.includes("Authentication required")) {
        if (err.message.includes("network")) {
          cartToasts.error("Network error! Please check your connection");
        } else {
          cartToasts.error(err.message || "Failed to add item to cart");
        }
      }
    } finally {
      setIsLoading(false);
    }
  }

  async function removeFromCart(productId) {
    try {
      setIsLoading(true);
      const res = await fetch(
        `https://eshterely.up.railway.app/api/cart/${productId}`,
        {
          method: "DELETE",
          headers: {
            "x-auth-token": getToken(),
          },
        }
      );
      if (!res.ok) throw new Error("Failed to delete from cart");
      const updatedCart = await res.json();
      cartToasts.info("Product removed from your cart");
      setProductArr(updatedCart);
    } catch (err) {
      setError(err);
      setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  }

  function updateQuantity(productId, newQuantity) {
    const product = productArr.find((p) => p._id === productId);
    if (product) {
      addToCart(product, newQuantity);
    }
  }

  return (
    <CartContext.Provider
      value={{
        productArr,
        setProductArr,
        showCart,
        setShowCart,
        addToCart,
        removeFromCart,
        updateQuantity,
        fetchCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}

export { useCart, CartProvider };
