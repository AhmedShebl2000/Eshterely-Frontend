import { useState, useEffect } from "react";
import { useLocation } from "react-router";
import NavLeft from "./navbar/NavLeft";
import NavCenter from "./navbar/NavCenter";
import NavRight from "./navbar/NavRight";
import Sidebar from "./navbar/Sidebar";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsAtTop(window.scrollY === 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const path = location.pathname;

  const isHome = path === "/";
  const isProductDetails = /^\/products\/[^/]+\/[^/]+$/.test(path);

  const isTransparent =
    (isHome || isProductDetails) && isAtTop && !isHovered && !isMenuOpen;
  const isFixed = isHome || isProductDetails;

  return (
    <>
      <nav
        className={`w-full ${
          isFixed ? "fixed top-0 z-50" : "relative"
        } transition-all duration-300 ${
          isTransparent ? "bg-transparent" : "bg-white shadow-md"
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="w-full p-8 flex items-center justify-between">
          <NavLeft
            isMenuOpen={isMenuOpen}
            setIsMenuOpen={setIsMenuOpen}
            isTransparent={isTransparent}
          />
          <NavCenter isTransparent={isTransparent} />
          <NavRight isTransparent={isTransparent} />
        </div>
      </nav>
      <Sidebar isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
}
