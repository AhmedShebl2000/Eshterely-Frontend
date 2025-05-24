import { Outlet, useLocation } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/footer/Footer";

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
    </div>
  );
}

export default MainLayout;
