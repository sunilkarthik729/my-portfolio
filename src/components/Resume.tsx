import React from "react";
import { motion } from "framer-motion";
import { Download, MapPin } from "lucide-react";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const item = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0 },
};

const Resume: React.FC = () => {
  return (
    <section
      id="cv"
      className="w-full bg-black text-white py-16 px-4 sm:px-6 md:px-10"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              <span className="text-[#1DA1F2]">CV</span> / Resume
            </h2>
            <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400 mt-2">
              Download my resume and find my contact details.
            </p>
          </div>

          <a
            href="/SunilKumar-K-Developer.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-2xl border border-[#1DA1F2]/30 px-4 py-2 text-sm font-medium
                       hover:border-[#1DA1F2] hover:bg-[#1DA1F2]/10 transition-colors duration-200"
            download={"/SunilKumar-K-Developer.pdf"}
          >
            <Download className="w-4 h-4" />
            Download CV
          </a>
        </div>

        {/* Contact */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="rounded-2xl border border-white/10 bg-white/5 dark:bg-black/20 backdrop-blur p-5 sm:p-6"
        >
          <motion.div variants={item}>
            <h3 className="font-semibold text-xl mb-3">Contact</h3>
            <ul className="space-y-2 text-sm sm:text-base text-gray-300">
              <li>
                <a
                  href="mailto:sunilkarthik729@gmail.com"
                  className="hover:text-[#1DA1F2] transition-colors"
                >
                  sunilkarthik729@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                Chennai, India
              </li>
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;
