import { motion } from "framer-motion";
import React, { useRef, useEffect, useState } from "react";
import { FaGraduationCap } from "react-icons/fa";

type EducationItem = {
  degree: string;
  institution: string;
  year: string;
  description?: string;
  CGPA?: string;
  highlights?: string[];
};

const educationData: EducationItem[] = [
  {
    degree: "BCA in Computer Application",
    institution: "Madras University",
    year: "2020 - 2023",
    description: "Focused on Web Development, Algorithms, and Software Engineering.",
    CGPA: "7.3 / 10",
    highlights: ["Web Development", "Problem Solving", "Projects"],
  },
  {
    degree: "Higher Secondary Education",
    institution: "Sunbeam Matriculation Hr.sec School",
    year: "2016 - 2018",
    description: "Science Stream with Computer Science specialization.",
    CGPA: "60%",
    highlights: ["Computer Science", "Mathematics"],
  },
  {
    degree: "Secondary Education",
    institution: "St. Joseph's Matriculation School",
    year: "2014 - 2016",
    description: "Completed with high distinction in Mathematics and Science.",
    CGPA: "80%",
    highlights: ["Mathematics", "Science"],
  },
];

const Education: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

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
      id="education"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : 50 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <section
        ref={ref}
        className={`w-full bg-black text-white py-16 px-4 sm:px-6 md:px-10 transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-12 text-center text-[#1DA1F2]">
          Education
        </h2>

        <div className="max-w-5xl mx-auto relative">
          {/* Vertical Line */}
          <div className="absolute left-5 md:left-1/2 md:-translate-x-1/2 w-1 h-full bg-[#1DA1F2] hidden md:block"></div>

          <div className="flex flex-col space-y-10 md:space-y-14">
            {educationData.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 200 }}
                className={`flex flex-col md:flex-row items-start md:items-center md:justify-start ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Dot Icon */}
                <div className="flex-shrink-0 z-10">
                  <div className="bg-[#1DA1F2] rounded-full w-6 h-6 flex items-center justify-center text-black shadow-lg">
                    <FaGraduationCap size={16} />
                  </div>
                </div>

                {/* Content */}
                <div className="mt-4 md:mt-0 md:mx-6 max-w-md text-center md:text-left bg-white/5 rounded-xl p-5 border border-white/10 shadow-lg hover:border-[#1DA1F2]/60 transition-all">
                  <h3 className="text-xl sm:text-2xl font-semibold text-[#1DA1F2]">
                    {item.degree}
                  </h3>
                  <p className="text-gray-400">{item.institution}</p>
                  <p className="text-gray-500 text-sm">{item.year}</p>

                  {/* CGPA with Progress Bar */}
                  {item.CGPA && (
                    <div className="mt-3">
                      <p className="text-gray-300 text-sm">
                        CGPA/Percentage: <span className="font-medium">{item.CGPA}</span>
                      </p>
                      <div className="w-full bg-gray-700 h-2 rounded-full mt-1">
                        <div
                          className="h-2 rounded-full bg-[#1DA1F2]"
                          style={{
                            width: item.CGPA.includes("%")
                              ? item.CGPA
                              : `${(parseFloat(item.CGPA) / 10) * 100}%`,
                          }}
                        ></div>
                      </div>
                    </div>
                  )}

                  {/* Highlights */}
                  {item.highlights && (
                    <div className="flex flex-wrap gap-2 mt-3">
                      {item.highlights.map((h, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 text-xs rounded-md bg-[#1DA1F2]/10 text-[#1DA1F2] border border-[#1DA1F2]/20"
                        >
                          {h}
                        </span>
                      ))}
                    </div>
                  )}

                  {item.description && (
                    <p className="text-gray-300 mt-2 text-sm sm:text-base">
                      {item.description}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Future Learning Section */}
        <div className="max-w-3xl mx-auto mt-14 text-center">
          <h3 className="text-xl sm:text-2xl font-semibold text-[#1DA1F2] mb-3">
            Future Learning
          </h3>
          <p className="text-gray-300 text-sm sm:text-base">
            Currently preparing for{" "}
            <span className="font-medium text-[#1DA1F2]">
              Oracle Java OCA Certification
            </span>{" "}
            and exploring{" "}
            <span className="font-medium text-[#1DA1F2]">
              Backend Development & Full Stack Projects
            </span>{" "}
            to strengthen my career path.
          </p>
        </div>
      </section>
    </motion.section>
  );
};

export default Education;
