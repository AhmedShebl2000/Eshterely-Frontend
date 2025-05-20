import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/footer/Footer";

function MainLayout() {
  return (
    <div className="flex flex-col min-h-screen justify-start">
      <Navbar />
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
