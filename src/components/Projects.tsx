import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "The Prettyshoppe",
    description:
      "A front-end E-commerce website built using React and TypeScript. Features include product listings, cart, and user-friendly design.",
    image: "/pretty-shoppe-Logo.svg",
    tech: ["React", "TypeScript"],
    demoLink: "https://prettyshoppeoffical.netlify.app",   
    githubLink: "https://github.com/sunilkarthik729/Pretty-shoppe-E-commerce", 
  },
  {
    title: "Yet to be done",
    description:
      "A task management To-do App built with React, TypeScript, and Tailwind CSS. Helps users organize and track daily tasks efficiently.",
    image: "/TodoApp.png",
    tech: ["React", "TypeScript", "TailwindCSS"],
    demoLink: "https://yettobedone.netlify.app", 
    githubLink: "https://github.com/sunilkarthik729/Todo-App", 
  },
  {
    title: "Worldline",
    description:
      "A timeline app designed with React, TypeScript, and Tailwind CSS. Displays chronological events interactively with smooth UI.",
    image: "/timeline.png",
    tech: ["React", "TypeScript", "TailwindCSS"],
    demoLink: "https://worldlineoff.netlify.app", 
    githubLink: "https://github.com/sunilkarthik729/timeline-app", 
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const Projects: React.FC = () => {
  return (
    <section id="projects" className="w-full bg-black text-white py-16 px-4 sm:px-6 md:px-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl font-bold mb-10">
          <span className="text-[#1DA1F2]">Projects</span>
        </h2>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((p, idx) => (
            <ProjectCard key={idx} {...p} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
