import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-black py-8 px-4 sm:px-6 md:px-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0">
        {/* Branding */}
        <div className="text-white text-lg font-bold">MyPortfolio</div>

        {/* Social Icons */}
        <div className="flex space-x-6">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-[#1DA1F2] transition-transform transform hover:scale-110"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-[#1DA1F2] transition-transform transform hover:scale-110"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://instagram.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-[#1DA1F2] transition-transform transform hover:scale-110"
          >
            <FaInstagram size={24} />
          </a>
          <a
            href="mailto:youremail@example.com"
            className="text-white hover:text-[#1DA1F2] transition-transform transform hover:scale-110"
          >
            <FaEnvelope size={24} />
          </a>
          <a
            href="tel:+911234567890"
            className="text-white hover:text-[#1DA1F2] transition-transform transform hover:scale-110"
          >
            <FaPhone size={24} />
          </a>
        </div>

        {/* Copyright */}
        <div className="text-gray-400 text-sm mt-4 md:mt-0">
          &copy; {new Date().getFullYear()} Sunil. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
