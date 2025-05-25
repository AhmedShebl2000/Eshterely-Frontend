import { Outlet, useLocation } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/footer/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function MainLayout() {
  const location = useLocation();
  const hideNavbar = ["/locations"].includes(location.pathname);

  return (
    <div className="flex flex-col min-h-screen justify-start">
      {!hideNavbar && <Navbar />}
      <main>
        <Outlet />
      </main>
      <div className="mt-auto">
        <Footer />
      </div>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default MainLayout;
