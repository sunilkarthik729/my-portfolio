import { Link } from "react-scroll";
import React, { useState } from "react";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", to: "home" },
    { name: "About", to: "about" },
    { name: "Projects", to: "projects" },
    { name: "Skills", to: "skills" },
    { name: "CV", to: "#cv" },
    
    
  ];

  return (
    <nav className="fixed w-full bg-black/80 backdrop-blur-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-between items-center h-16">
        {/* Logo */}
        <div className="text-[#1DA1F2] text-xl sm:text-2xl font-bold cursor-pointer whitespace-nowrap">
          {/* <img src="./sunil-portfolio.svg" alt="" /> */}
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 lg:space-x-10 text-white font-medium">
          {navLinks.map((link) => (
            <li
              key={link.to}
              className="hover:text-[#1DA1F2] transition-colors duration-300 cursor-pointer"
            >
              <Link
                to={link.to}
                smooth={true}
                duration={800}
                offset={-80}
                spy={true}
                className="cursor-pointer"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            {isOpen ? (
              <svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden flex flex-col bg-black/95 text-white font-medium text-base sm:text-lg space-y-4 px-6 py-4">
          {navLinks.map((link) => (
            <li key={link.to} className="hover:text-[#1DA1F2] cursor-pointer">
              <Link
                to={link.to}
                smooth={true}
                duration={800}
                offset={-80}
                spy={true}
                className="cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
