import { motion } from "framer-motion";
import React, { useRef, useEffect, useState } from "react";
import { FaDownload, FaExternalLinkAlt, FaCertificate } from "react-icons/fa";

type Certificate = {
  title: string;
  platform: string;
  year: string;
  image?: string;
  link?: string;
  skills?: string[];
};

const certificates: Certificate[] = [
  {
    title: "Full-Stack Web Development",
    platform: "FITA Academy",
    year: "2025",
    image: "./certificate.png",
    link: "./course.pdf",
    skills: ["React", "Java", "Spring Boot", "SQL"],
  },
  {
    title: "Java Programming (OCA Preparation)",
    platform: "Oracle",
    year: "Upcoming",
    skills: ["Core Java", "OOP", "Problem Solving"],
  },
];

const Certification: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [activeCert, setActiveCert] = useState<Certificate | null>(null);

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
      id="certification-section"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : 50 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="py-16 px-4 sm:px-6 md:px-10 bg-black text-white"
      ref={ref}
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-[#1DA1F2]">
        Certifications
      </h2>

      {/* Grid of Certificates */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {certificates.map((cert, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="bg-gray-900 rounded-xl shadow-2xl overflow-hidden relative border border-white/10 hover:border-[#1DA1F2]/40 cursor-pointer"
            onClick={() => cert.link && setActiveCert(cert)}
          >
            {cert.image ? (
              <img
                src={cert.image}
                alt={cert.title}
                className="w-full h-48 object-cover"
              />
            ) : (
              <div className="h-48 flex items-center justify-center bg-[#1DA1F2]/10 text-[#1DA1F2]">
                <FaCertificate size={50} />
              </div>
            )}
            <div className="p-5 text-center">
              <h3 className="text-lg font-semibold text-[#1DA1F2]">
                {cert.title}
              </h3>
              <p className="text-gray-400">{cert.platform}</p>
              <p className="text-gray-500 text-sm">{cert.year}</p>

              {/* Skill Tags */}
              {cert.skills && (
                <div className="flex flex-wrap gap-2 justify-center mt-3">
                  {cert.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-xs rounded-md bg-[#1DA1F2]/10 text-[#1DA1F2] border border-[#1DA1F2]/20"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex justify-center gap-3 mt-4">
                {cert.link && (
                  <>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveCert(cert);
                      }}
                      className="px-3 py-1.5 bg-[#1DA1F2] text-black text-sm rounded-lg flex items-center gap-2 hover:bg-[#0d8ddb]"
                    >
                      <FaExternalLinkAlt /> View
                    </button>
                    <a
                      href={cert.link}
                      download
                      onClick={(e) => e.stopPropagation()}
                      className="px-3 py-1.5 bg-gray-700 text-white text-sm rounded-lg flex items-center gap-2 hover:bg-gray-600"
                    >
                      <FaDownload /> Download
                    </a>
                  </>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      {activeCert && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
          onClick={() => setActiveCert(null)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="bg-white rounded-2xl w-full max-w-4xl shadow-2xl overflow-hidden relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveCert(null)}
              className="absolute top-3 right-3 text-red-500 font-bold text-xl"
            >
              ✕
            </button>
            {activeCert.link && (
              <iframe
                src={activeCert.link}
                className="w-full h-[500px] sm:h-[600px] md:h-[700px]"
                title="Certificate"
              />
            )}
          </motion.div>
        </div>
      )}

      {/* Future Learning */}
      <div className="max-w-3xl mx-auto mt-16 text-center">
        <h3 className="text-2xl font-semibold text-[#1DA1F2] mb-3">
          Future Certifications
        </h3>
        <p className="text-gray-300 text-sm sm:text-base">
          Actively preparing for{" "}
          <span className="font-medium text-[#1DA1F2]">Oracle OCA</span> and{" "}
          <span className="font-medium text-[#1DA1F2]">AWS Cloud Practitioner</span>{" "}
          certifications to strengthen technical expertise.
        </p>
      </div>
    </motion.section>
  );
};

export default Certification;
