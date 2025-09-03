import React from "react";
import { Link } from "react-scroll";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const Header: React.FC = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen w-full bg-black flex items-center justify-center px-4 sm:px-6 md:px-8 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0a0a0a] to-black opacity-80"></div>
      <div className="absolute inset-0 animate-pulse bg-[radial-gradient(circle_at_top,_#1DA1F233,_transparent_60%)]"></div>

      {/* Content */}
      <div className="relative text-center max-w-2xl sm:max-w-3xl z-10">
        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-snug sm:leading-tight"
        >
          Hi, I'm <span className="text-[#1DA1F2]">Sunil</span>
        </motion.h1>

        {/* Typing Animation */}
        <TypeAnimation
          sequence={[
            "React Developer 💻",
            2000,
            "Creative Coder 🚀",
            2000,
            "Java Full Stack Learner ☕",
            2000,
            "React Enthusiast ⚛️",
            2000,
          ]}
          wrapper="span"
          speed={60}
          className="text-[#1DA1F2] text-lg sm:text-xl md:text-2xl font-semibold"
          repeat={Infinity}
        />

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-gray-300 text-base sm:text-lg md:text-xl lg:text-2xl mt-6 sm:mt-8 px-2 sm:px-0"
        >
          I build creative and responsive web applications using{" "}
          <span className="text-white font-medium">React</span>,{" "}
          <span className="text-white font-medium">TypeScript</span>, and{" "}
          <span className="text-white font-medium">Tailwind</span>.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 mt-8"
        >
          <Link
            to="projects"
            smooth={true}
            duration={800}
            offset={-80}
            spy={true}
            className="px-6 py-3 border border-[#1DA1F2] text-[#1DA1F2] rounded-lg hover:bg-[#1DA1F2] hover:text-black transition-colors cursor-pointer text-sm sm:text-base animate-pulse"
          >
            View Projects
          </Link>
          <a
            href="/SunilKumar-K-Developer.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-[#1DA1F2] text-black rounded-lg hover:bg-[#0d8ddb] transition-colors cursor-pointer text-sm sm:text-base shadow-md hover:shadow-[#1DA1F2]/50"
            
          >
            View Resume
          </a>
        </motion.div>
      </div>

      {/* Scroll Down Icon */}
      <div className="absolute bottom-6 w-full flex justify-center">
        <ChevronDown className="text-gray-400 animate-bounce" size={28} />
      </div>
    </section>
  );
};

export default Header;
