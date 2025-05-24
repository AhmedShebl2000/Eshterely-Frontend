import { useState, useEffect } from "react";
import NavLeft from "./navbar/NavLeft";
import NavCenter from "./navbar/NavCenter";
import NavRight from "./navbar/NavRight";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsAtTop(window.scrollY === 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isTransparent = isAtTop && !isHovered;

  return (
    <nav
      className={`w-full fixed top-0 z-50 transition-all duration-300 ${
        isTransparent ? "bg-transparent" : "bg-white shadow-md"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="w-full p-8 flex items-center justify-between">
        {/* Menu Button (Left) */}
        <NavLeft
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
          isTransparent={isTransparent}
        />
        {/* Logo (Center) */}
        <NavCenter isTransparent={isTransparent} />
        {/* Right Icons */}
        <NavRight isTransparent={isTransparent} />
      </div>
    </nav>
  );
}
