import { motion } from "framer-motion";
import React, { useRef, useEffect, useState } from "react";
import { FaGraduationCap } from "react-icons/fa";

type EducationItem = {
  degree: string;
  institution: string;
  year: string;
  description?: string;
  CGPA?:string;
};

const educationData: EducationItem[] = [
  {
    degree: "BCA in Computer Application",
    institution: "Madras University",
    year: "2020 - 2023",
    description:
      "Focused on Web Development, Algorithms, and Software Engineering.",
      CGPA:"7.3",

  },
  {
    degree: "Higher Secondary Education",
    institution: "Sunbeam Matriculation Hr.sec School",
    year: "2016 - 2018",
    description: "Science Stream with Computer Science specialization.",
    CGPA:"60%",
  },
  {
    degree: "Secondary Education",
    institution: "st.Joseph's Matriculation School",
    year: "2014 - 2016",
    description: "Completed with high distinction in Mathematics and Science.",
    CGPA:"80%",
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
      id="about"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : 50 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <section
        id="education"
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

          <div className="flex flex-col space-y-8 md:space-y-12">
            {educationData.map((item, index) => (
              <div
                key={index}
                className={`flex flex-col md:flex-row items-start md:items-center md:justify-start ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Dot Icon */}
                <div className="flex-shrink-0 z-10">
                  <div className="bg-[#1DA1F2] rounded-full w-5 h-5 flex items-center justify-center text-black">
                    <FaGraduationCap size={14} />
                  </div>
                </div>

                {/* Content */}
                <div className="mt-3 md:mt-0 md:mx-6 max-w-md text-center md:text-left">
                  <h3 className="text-xl sm:text-2xl font-semibold">
                    {item.degree}
                  </h3>
                  <p className="text-gray-400">{item.institution}</p>
                  <p className="text-gray-500 text-sm">{item.year}</p>
                  <p className="text-gray-300 mt-1 text-sm sm:text-base">
                     CGPA/Percentage: {item.CGPA}
                    </p>
                  {item.description && (
                    <p className="text-gray-300 mt-1 text-sm sm:text-base">
                      {item.description}
                    </p>

                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </motion.section>
  );
};

export default Education;
