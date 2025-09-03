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
    <footer className="w-full bg-black py-10 px-6 sm:px-10 border-t border-gray-800">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 md:gap-0">
        
        {/* Branding & Tagline */}
        <div className="text-center md:text-left">
          <h3 className="text-white text-xl font-bold">Sunil Kumar</h3>
          <p className="text-gray-400 text-sm">
            Turning ideas into interactive experiences 🚀
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex gap-6 text-gray-400 text-sm">
          <a href="#about" className="hover:text-[#1DA1F2] transition">About</a>
          <a href="#projects" className="hover:text-[#1DA1F2] transition">Projects</a>
          <a href="#skills" className="hover:text-[#1DA1F2] transition">Skills</a>
          <a href="#education" className="hover:text-[#1DA1F2] transition">Education</a>
          <a href="#certification-section" className="hover:text-[#1DA1F2] transition">Certifications</a>
        </div>

        {/* Social + Contact */}
        <div className="flex flex-col items-center md:items-end gap-3">
          <div className="flex space-x-5">
            <a href="https://github.com/sunilkarthik729" target="_blank" rel="noopener noreferrer"
              className="text-white hover:text-[#1DA1F2] transform hover:scale-110 transition">
              <FaGithub size={22} />
            </a>
            <a href="https://www.linkedin.com/in/sunil-kumar-147046214" target="_blank" rel="noopener noreferrer"
              className="text-white hover:text-[#1DA1F2] transform hover:scale-110 transition">
              <FaLinkedin size={22} />
            </a>
            <a href="https://www.instagram.com/_.sunil07._/" target="_blank" rel="noopener noreferrer"
              className="text-white hover:text-[#1DA1F2] transform hover:scale-110 transition">
              <FaInstagram size={22} />
            </a>
            <a href="mailto:sunilkarthik729@gmail.com"
              className="text-white hover:text-[#1DA1F2] transform hover:scale-110 transition">
              <FaEnvelope size={22} />
            </a>
            <a href="tel:9361124946"
              className="text-white hover:text-[#1DA1F2] transform hover:scale-110 transition">
              <FaPhone size={22} />
            </a>
          </div>
          <p className="text-gray-400 text-sm">📧 sunilkarthik729@gmail.com</p>
          <p className="text-gray-400 text-sm">📞 +91-9361124946</p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="text-center text-gray-500 text-xs mt-8">
        &copy; {new Date().getFullYear()} Sunil Kumar. All rights reserved.
      </div>

      {/* Scroll to top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-5 right-5 bg-[#1DA1F2] text-black p-3 rounded-full shadow-lg hover:bg-[#0d8ddb] transition"
      >
        ↑
      </button>
    </footer>
  );
};

export default Footer;
