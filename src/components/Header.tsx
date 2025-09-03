import React from "react";
import { Link } from "react-scroll";

const Header: React.FC = () => {
  return (
    <section
      id="home"
      className="min-h-screen w-full bg-black flex items-center justify-center px-4 sm:px-6 md:px-8"
    >
      
      <div className="text-center max-w-2xl sm:max-w-3xl">
        {/* Headline */}
        <h1 className="text-white text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 animate-fade-in-down leading-snug sm:leading-tight">
          Hi, I'm <span className="text-[#1DA1F2]">Sunil</span>
        </h1>

        {/* Subheadline */}
        <p className="text-gray-300 text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 animate-fade-in-up px-2 sm:px-0">
          I build creative and responsive web applications using{" "}
          <span className="text-white font-medium">React</span>,{" "}
          <span className="text-white font-medium">TypeScript</span>, and{" "}
          <span className="text-white font-medium">Tailwind</span>.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 animate-fade-in-up">
          <Link
            to="projects"
            smooth={true}
            duration={800}
            offset={-80}
            spy={true}
            className="px-5 sm:px-6 py-3 border border-[#1DA1F2] text-[#1DA1F2] rounded-lg hover:bg-[#1DA1F2] hover:text-black transition-colors cursor-pointer text-sm sm:text-base"
          >
            View Projects
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={800}
            offset={-80}
            spy={true}
            className="px-5 sm:px-6 py-3 bg-[#1DA1F2] text-black rounded-lg hover:bg-[#0d8ddb] transition-colors cursor-pointer text-sm sm:text-base"
          >
            Contact Me
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Header;
