import React, { useRef, useEffect, useState } from "react";
import "./Projects.css";
import { motion } from "framer-motion";

type Project = {
  title: string;
  description: string;
  image: string;
  link: string;
  tech?: string;
};

const projects: Project[] = [
  {
    title: "Portfolio Website",
    description:
      "Responsive personal portfolio with React, TypeScript, and Tailwind.",
    image: "./portfolio.png",
    link: "#",
    tech: "React, TypeScript, Tailwind",
  },
  {
    title: "The Pretty Shoppe (E-commerce App)",
    description: "Front-end e-commerce application with React & Typescript",
    image: "./pretty-shoppe-Logo.svg",
    link: "https://prettyshoppeoffical.netlify.app/",
    tech: "React,Typescript",
  },
  {
    title: "The Todo App (Our's Taskmate)",
    description:
      "this is a Todo App that helps to remind our task",
    image: "./TodoApp.png",
    link: "https://yettobedone.netlify.app/",
    tech: "React,vite,typescript,Tailwind",
  },
];

const Projects: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [flippedIndexes, setFlippedIndexes] = useState<number[]>([]);

  const toggleFlip = (index: number) => {
    // Only for mobile tap (< md)
    if (window.innerWidth < 768) {
      if (flippedIndexes.includes(index)) {
        setFlippedIndexes(flippedIndexes.filter((i) => i !== index));
      } else {
        setFlippedIndexes([...flippedIndexes, index]);
      }
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setVisible(true);
        });
      },
      { threshold: 0.2 }
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
      id="projects"
      ref={ref}
      className="w-full bg-black text-white py-16 px-4 sm:px-6 md:px-10"
    >
      <div
        className={`max-w-6xl mx-auto transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-12 text-center text-[#1DA1F2]">
          My Projects
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group perspective w-full h-72 cursor-pointer"
              onClick={() => toggleFlip(index)}
            >
              <div
                className={`relative w-full h-full transform-style-3d preserve-3d duration-700 gradient-border ${
                  flippedIndexes.includes(index) ? "rotate-y-180" : ""
                } md:group-hover:rotate-y-180`}
              >
                {/* Front */}
                <div className="absolute w-full h-full backface-hidden bg-gray-900 rounded-xl overflow-hidden shadow-lg flex flex-col justify-center items-center">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-40 object-cover"
                  />
                  <h3 className="text-[#1DA1F2] mt-2 font-semibold text-lg text-center">
                    {project.title}
                  </h3>
                </div>

                {/* Back */}
                <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-gray-800 rounded-xl p-4 flex flex-col justify-center items-center text-center">
                  <h3 className="text-[#1DA1F2] font-semibold text-lg mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 text-sm sm:text-base">
                    {project.description}
                  </p>
                  <p className="text-gray-400 mt-1 text-xs sm:text-sm">
                    Tech: {project.tech}
                  </p>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 text-[#1DA1F2] underline hover:text-[#0d8ddb]"
                  >
                    View Project
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
</motion.section>
   
  );
};

export default Projects;
