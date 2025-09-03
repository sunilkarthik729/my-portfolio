import { motion } from "framer-motion";
import React, { useRef, useEffect, useState } from "react";

const About: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setVisible(true);
        });
      },
      { threshold: 0.3 } // 30% visible triggers animation
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <section
      id="about"
      className="w-full bg-black text-white py-12 sm:py-16 px-4 sm:px-6 md:px-10"
      ref={ref}
    >
      <motion.section
        id="about"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : 50 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <div
          className={`max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-14 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          {/* Image */}
          <div className="flex-1 flex justify-center md:justify-start">
            <img
              src="/Profile.png"
              alt="Sunil"
              className="w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-72 lg:h-72 object-cover rounded-xl shadow-lg border-2 border-[#1DA1F2] animate-float"
            />
          </div>

          {/* Text */}
          <div className="flex-1 text-center md:text-left max-w-2xl">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-[#1DA1F2]">
              About Me
            </h2>
            <p className="text-gray-300 text-sm sm:text-base md:text-lg mb-4 leading-relaxed px-2 sm:px-0">
              Hi! I’m Sunil, a passionate full-stack developer. I enjoy creating
              interactive, responsive, and modern web applications. My focus is
              on writing clean, maintainable code and bringing innovative ideas
              to life.
            </p>
            <p className="text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed px-2 sm:px-0">
              I specialize in{" "}
              <span className="text-[#1DA1F2]">
                React, TypeScript, Tailwind, and Vite
              </span>
              , and I love learning new technologies to make web experiences
              even better.
            </p>
          </div>
        </div>
      </motion.section>
    </section>
  );
};

export default About;
