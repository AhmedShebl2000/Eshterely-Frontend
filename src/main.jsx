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
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </Provider>
  </StrictMode>
);
