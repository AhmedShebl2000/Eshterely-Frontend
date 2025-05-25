import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import HomePage from "./pages/HomePage.jsx";
import ProductsPage from "./pages/ProductsPage.jsx";
import store from "./redux/store.jsx";
import { Provider } from "react-redux";
import CheckoutPage from "./pages/CheckoutPage.jsx";
import Login from "./pages/Login.jsx";

import ProductDetails, {
  loader as productDetailsLoader,
} from "./pages/ProductDetails.jsx";
import Register from "./components/Register/Register.jsx";
import LocationPage from "./pages/LocationPage.jsx";
import CartPage from "./pages/CartPage.jsx";
import { CartProvider } from "./Contexts/CartContext.jsx";
import ForgorPassword from "./pages/ForgorPassword.jsx";
import { ForgotPasswordProvider } from "./Contexts/ForgotPasswordContext.jsx";
import ResetPassword from "./pages/ResetPassword.jsx";
import AboutPage from "./pages/AboutPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        index: true,
        Component: HomePage,
      },
      {
        path: "/products/:category",
        Component: ProductsPage,
      },
      {
        path: "/products/:category/:productId",
        Component: ProductDetails,
        loader: productDetailsLoader,
      },
      {
        path: "/checkout",
        Component: CheckoutPage,
      },
      { path: "/login", Component: Login },
      {
        path: "/cart",
        Component: CartPage,
      },
      {
        path: "/forgot-password",
        Component: ForgorPassword,
      },
      {
        path: "/reset-password/:token",
        Component: ResetPassword,
      },
      {
        path: "/AboutPage",
        Component: AboutPage,
      },
    ],
  },
  {
    path: "/locations",
    Component: LocationPage,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <CartProvider>
        <ForgotPasswordProvider>
          <RouterProvider router={router}>
            <App />
          </RouterProvider>
        </ForgotPasswordProvider>
      </CartProvider>
    </Provider>
  </StrictMode>
);
