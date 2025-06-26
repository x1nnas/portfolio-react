import React from "react";
import { Link } from "react-router-dom";
import Navigation from "./Navigation";

const Header = () => {
  return (
    <nav className="fixed w-full z-20 backdrop-blur bg-white/10 shadow-lg border-b border-black/20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-3xl font-bold text-white tracking-wide">
            <span className="text-yellow-600">Dev</span>Portfolio
          </Link>
          <Navigation />
        </div>
      </div>
    </nav>
  );
};

export default Header;
