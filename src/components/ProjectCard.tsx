import React from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tech: string[];
  demoLink: string;
  githubLink: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  tech,
  demoLink,
  githubLink,
}) => {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 200 }}
      className="group relative rounded-2xl overflow-hidden border border-white/10 bg-white/5 dark:bg-black/20 backdrop-blur"
    >
      {/* Project Image */}
      <div className="h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col gap-3">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-gray-400 line-clamp-3">{description}</p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mt-2">
          {tech.map((t, i) => (
            <span
              key={i}
              className="px-2 py-1 text-xs rounded-lg bg-[#1DA1F2]/10 text-[#1DA1F2] font-medium"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-3 mt-4">
          <a
            href={demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-sm text-[#1DA1F2] hover:underline"
          >
            <ExternalLink className="w-4 h-4" />
            Live Demo
          </a>
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-sm text-gray-400 hover:text-[#1DA1F2] transition-colors"
          >
            <Github className="w-4 h-4" />
            GitHub
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
