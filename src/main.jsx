import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";

import App from "./App.jsx";
import "./index.css";

// Pages
import HomePage from "./pages/HomePage.jsx";
import ProductsPage from "./pages/ProductsPage.jsx";
import CheckoutPage from "./pages/CheckoutPage.jsx";
import Login from "./pages/Login.jsx";
import ProductDetails, {
  loader as productDetailsLoader,
} from "./pages/ProductDetails.jsx";
import LocationPage from "./pages/LocationPage.jsx";
import CartPage from "./pages/CartPage.jsx";
import ForgorPassword from "./pages/ForgorPassword.jsx";
import ResetPassword from "./pages/ResetPassword.jsx";
import AboutPage from "./pages/AboutPage.jsx";

// Redux TK
import store from "./redux/store.jsx";
import { Provider } from "react-redux";
import { CartProvider } from "./Contexts/CartContext.jsx";
import { ForgotPasswordProvider } from "./Contexts/ForgotPasswordContext.jsx";
import { GoogleOAuthProvider } from "@react-oauth/google";
import FAQPage from "./pages/FAQPage.jsx";
import FAQDetails from "./pages/FAQDetails.jsx";

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
        path: "/about",
        Component: AboutPage,
      },
      {
        path: "/faq",
        Component: FAQPage,
      },
      {
        path: "/faqDetails/:id",
        Component: FAQDetails,
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
    <GoogleOAuthProvider clientId={import.meta.env.VITE_CLIENT_ID} locale="en">
      <Provider store={store}>
        <CartProvider>
          <ForgotPasswordProvider>
            <RouterProvider router={router}>
              <App />
            </RouterProvider>
          </ForgotPasswordProvider>
        </CartProvider>
      </Provider>
    </GoogleOAuthProvider>
  </StrictMode>
);
