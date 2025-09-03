import { motion } from "framer-motion";
import React, { useRef, useEffect, useState } from "react";

type Certificate = {
  title: string;
  platform: string;
  year: string;
  image?: string;
  link?: string;
};

const certificate: Certificate = {
  title: "Full-Stack Web Development",
  platform: "FITA ACADEMY",
  year: "2025",
  image: "./certificate.png",
  link: "./course.pdf",
};

const Certification: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [showModal, setShowModal] = useState(false);

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
        Certification
      </h2>

      <div className="flex justify-center">
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="max-w-sm bg-gray-900 rounded-xl shadow-2xl overflow-hidden cursor-pointer"
          onClick={() => setShowModal(true)}
        >
          {certificate.image && (
            <img
              src={certificate.image}
              alt={certificate.title}
              className="w-full h-48 object-cover"
            />
          )}
          <div className="p-6 text-center">
            <h3 className="text-xl font-semibold mb-1 text-[#1DA1F2]">
              {certificate.title}
            </h3>
            <p className="text-gray-400">{certificate.platform}</p>
            <p className="text-gray-500 text-sm">{certificate.year}</p>
            <button
              className="mt-4 px-4 py-2 bg-[#1DA1F2] text-black rounded-lg hover:bg-[#0d8ddb] transition-colors duration-300"
              onClick={(e) => {
                e.stopPropagation(); // Prevent triggering parent click
                setShowModal(true);
              }}
            >
              View Certificate
            </button>
          </div>
        </motion.div>
      </div>

      {/* Modal */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4 transition-opacity duration-500 ${
          showModal ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: showModal ? 1 : 0.8, opacity: showModal ? 1 : 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="bg-white rounded-2xl w-full max-w-4xl shadow-2xl overflow-hidden relative"
        >
          <button
            onClick={() => setShowModal(false)}
            className="absolute top-3 right-3 text-red-500 font-bold text-xl z-50"
          >
            ✕
          </button>
          {certificate.link && (
            <iframe
              src={certificate.link}
              className="w-full h-[500px] sm:h-[600px] md:h-[700px]"
              title="Certificate"
            />
          )}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Certification;
