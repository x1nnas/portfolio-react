import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <nav className="fixed w-full z-20 backdrop-blur bg-white/10 shadow-lg border-b border-black/20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-3xl font-bold text-white tracking-wide">
            <span className="text-yellow-600">Dev</span>Portfolio
          </Link>
          <div className="hidden sm:flex space-x-8 items-center">
            {["Home", "About", "Projects", "Blogs", "Contact"].map((item) => (
              <Link
                key={item}
                to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className="relative text-white hover:text-yellow-600 transition-colors duration-300 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-yellow-600 after:transition-all after:duration-300 hover:after:w-full"
              >
                {item}
              </Link>
            ))}
          </div>
          <div className="sm:hidden flex items-center">
            <button
              onClick={toggleMobileMenu}
              className="inline-flex items-center justify-center p-2 text-white hover:text-yellow-600"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${isMobileMenuOpen ? "block" : "hidden"} sm:hidden bg-white/10 backdrop-blur px-6 py-4`}>
        {["Home", "About", "Projects", "Blogs", "Contact"].map((item) => (
          <Link
            key={item}
            to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
            onClick={() => setIsMobileMenuOpen(false)} // Optional: closes menu on link click
            className="block text-white py-2 border-b border-white/20 hover:text-blue-400 transition-colors"
          >
            {item}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Header;
