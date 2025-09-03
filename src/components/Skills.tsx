import { motion } from "framer-motion";
import React, { useRef, useEffect, useState } from "react";
import { FaReact, FaGitAlt, FaCss3Alt, FaHtml5, FaJava, FaDatabase } from "react-icons/fa";
import { SiTypescript, SiTailwindcss, SiVite, SiMysql } from "react-icons/si";

type Skill = {
  name: string;
  level: number;
  icon: JSX.Element;
  category: "Frontend" | "Backend" | "Tools";
};

const skills: Skill[] = [
  
  { name: "React", level: 90, icon: <FaReact className="text-[#61DBFB]" />, category: "Frontend" },
  { name: "TypeScript", level: 85, icon: <SiTypescript className="text-[#3178c6]" />, category: "Frontend" },
  { name: "Tailwind CSS", level: 80, icon: <SiTailwindcss className="text-[#38BDF8]" />, category: "Frontend" },
  { name: "Vite", level: 75, icon: <SiVite className="text-[#646CFF]" />, category: "Frontend" },
  { name: "HTML5", level: 95, icon: <FaHtml5 className="text-orange-500" />, category: "Frontend" },
  { name: "CSS3", level: 90, icon: <FaCss3Alt className="text-blue-500" />, category: "Frontend" },

  
  { name: "Java", level: 70, icon: <FaJava className="text-red-500" />, category: "Backend" },
  { name: "MySQL", level: 65, icon: <SiMysql className="text-[#00758F]" />, category: "Backend" },

  
  { name: "Git", level: 85, icon: <FaGitAlt className="text-orange-400" />, category: "Tools" },
];

const categories = ["Frontend", "Backend", "Tools"];

const Skills: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect( () => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && setVisible(true)),
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => ref.current && observer.unobserve(ref.current);
  }, []);

  return (
    <motion.section
      id="skills"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : 50 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="w-full bg-black text-white py-16 px-4 sm:px-6 md:px-10"
      ref={ref}
    >
      <div className="max-w-5xl mx-auto transition-all duration-700">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-[#1DA1F2]">
          My Skills
        </h2>

        {/* Categories */}
        {categories.map((cat) => (
          <div key={cat} className="mb-10">
            <h3 className="text-xl font-semibold mb-6 text-[#1DA1F2]">{cat}</h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
              {skills
                .filter((s) => s.category === cat)
                .map((skill, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ scale: 1.05 }}
                    className="bg-gray-900 rounded-xl p-5 shadow-lg"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      {skill.icon}
                      <span className="font-medium">{skill.name}</span>
                      <span className="ml-auto text-gray-400">{visible ? `${skill.level}%` : "0%"}</span>
                    </div>
                    <div className="w-full bg-gray-800 rounded-full h-2">
                      <div
                        className="bg-[#1DA1F2] h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: visible ? `${skill.level}%` : "0%" }}
                      ></div>
                    </div>
                  </motion.div>
                ))}
            </div>
          </div>
        ))}

        {/* Future Skills */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold text-[#1DA1F2] mb-3">Future Learning</h3>
          <p className="text-gray-300 text-sm sm:text-base">
            Currently exploring{" "}
            <span className="text-[#1DA1F2]">Spring Boot</span>,{" "}
            <span className="text-[#1DA1F2]">AWS Cloud</span>, and{" "}
            <span className="text-[#1DA1F2]">Docker</span> to expand backend & cloud expertise.
          </p>
        </div>
      </div>
    </motion.section>
  );
};

export default Skills;
