import { motion } from "framer-motion";
import React, { useRef, useEffect, useState } from "react";

type Skill = {
  name: string;
  level: number; // percentage
};

const skills: Skill[] = [
  { name: "React", level: 90 },
  { name: "TypeScript", level: 85 },
  { name: "Tailwind CSS", level: 80 },
  { name: "Vite", level: 75 },
  { name: "Node.js", level: 70 },
  { name: "HTML5", level: 95 },
  { name: "CSS3", level: 90 },
  { name: "Git", level: 85 },
];

const Skills: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setVisible(true);
        });
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <motion.section
  id="about"
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : 50 }}
  transition={{ duration: 0.7, ease: "easeOut" }}
>
  <section
      id="skills"
      className="w-full bg-black text-white py-16 px-4 sm:px-6 md:px-10"
      ref={ref}
    >
      <div
        className={`max-w-5xl mx-auto transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-12 text-center text-[#1DA1F2]">
          My Skills
        </h2>

        <div className="space-y-6">
          {skills.map((skill, index) => (
            <div key={index}>
              <div className="flex justify-between mb-2">
                <span className="text-sm sm:text-base md:text-lg font-medium">
                  {skill.name}
                </span>
                <span className="text-sm sm:text-base md:text-lg text-gray-400">
                  {visible ? skill.level + "%" : "0%"}
                </span>
              </div>

              {/* Responsive Skill Bar */}
              <div className="w-full bg-gray-800 rounded-full h-2 sm:h-3 md:h-4">
                <div
                  className="bg-[#1DA1F2] h-2 sm:h-3 md:h-4 rounded-full transition-all duration-1000 ease-out"
                  style={{
                    width: visible ? `${skill.level}%` : "0%",
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section> 
</motion.section>
   
  );
};

export default Skills;
