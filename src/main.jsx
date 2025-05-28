import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, Navigate, RouterProvider } from "react-router";
import { lazy, Suspense } from "react";

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

// admin-dashboard pages
const AdminDashboardLayout = lazy(() =>
  import("./pages/AdminDashboardLayout.jsx")
);
const Dashboard = lazy(() => import("./components/dashboard/Dashboard.jsx"));
const Orders = lazy(() => import("./components/dashboard/Orders.jsx"));
const Products = lazy(() => import("./components/dashboard/Products.jsx"));
const Users = lazy(() => import("./components/dashboard/Users.jsx"));
const Analytics = lazy(() => import("./components/dashboard/Analytics.jsx"));
import Loader from "./components/ui/Loader.jsx";

// Redux TK
import store from "./redux/store.jsx";
import { Provider } from "react-redux";
import { CartProvider } from "./Contexts/CartContext.jsx";
import { ForgotPasswordProvider } from "./Contexts/ForgotPasswordContext.jsx";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { loader as productsLoader } from "./components/dashboard/Products.jsx";
import { loader as usersLoader } from "./components/dashboard/Users.jsx";
import { Toaster } from "sonner";
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
  {
    path: "/adminDashboard",
    element: (
      <Suspense fallback={<Loader />}>
        <AdminDashboardLayout />
      </Suspense>
    ),
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<Loader />}>
            <Dashboard />
          </Suspense>
        ),
      },
      {
        path: "orders",
        element: (
          <Suspense fallback={<Loader />}>
            <Orders />
          </Suspense>
        ),
      },
      {
        path: "products",
        element: (
          <Suspense fallback={<Loader />}>
            <Products />
          </Suspense>
        ),
        loader: productsLoader,
      },
      {
        path: "users",
        element: (
          <Suspense fallback={<Loader />}>
            <Users />
          </Suspense>
        ),
        loader: usersLoader,
      },
      {
        path: "analytics",
        element: (
          <Suspense fallback={<Loader />}>
            <Analytics />
          </Suspense>
        ),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GoogleOAuthProvider clientId={import.meta.env.VITE_CLIENT_ID} locale="en">
      <Provider store={store}>
        <CartProvider>
          <ForgotPasswordProvider>
            <Toaster richColors position="top-center" />
            <RouterProvider router={router}>
              <App />
            </RouterProvider>
          </ForgotPasswordProvider>
        </CartProvider>
      </Provider>
    </GoogleOAuthProvider>
  </StrictMode>
);
