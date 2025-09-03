import React, { useRef, useEffect, useState } from "react";
import { FaPhone, FaEnvelope, FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";

const contacts = [
  { name: "Phone", value: "+91 98765 43210", icon: <FaPhone />, link: "tel:+919876543210" },
  { name: "Email", value: "sunil@example.com", icon: <FaEnvelope />, link: "mailto:sunil@example.com" },
  { name: "Instagram", value: "@sunil_portfolio", icon: <FaInstagram />, link: "https://instagram.com/sunil_portfolio" },
  { name: "GitHub", value: "sunilkumar", icon: <FaGithub />, link: "https://github.com/sunilkumar" },
  { name: "LinkedIn", value: "sunil-kumar", icon: <FaLinkedin />, link: "https://linkedin.com/in/sunil-kumar" },
];

const Contact: React.FC = () => {
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
    return () => { if (ref.current) observer.unobserve(ref.current); };
  }, []);

  return (
    <section id="contact" className="w-full bg-black text-white py-16 px-4 sm:px-6 md:px-10" ref={ref}>
      <div className={`max-w-5xl mx-auto`}>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 text-center text-[#1DA1F2]">
          Connect With Me
        </h2>

        <div className="flex flex-wrap justify-center gap-12">
          {contacts.map((contact, index) => (
            <a
              key={index}
              href={contact.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex flex-col items-center gap-2 text-center text-sm sm:text-base cursor-pointer 
              transform transition-all duration-500 ease-out
              ${visible ? `opacity-100 translate-y-0 delay-${index * 150}` : "opacity-0 translate-y-6"} 
              group`}
              style={{ transitionDelay: `${index * 150}ms` }} // stagger effect
            >
              {/* Small icon with subtle bounce */}
              <span className="text-[#1DA1F2] text-2xl sm:text-3xl animate-bounce-slow group-hover:scale-110 transition-transform duration-300">
                {contact.icon}
              </span>
              <span className="text-gray-300 transition-colors duration-300 group-hover:text-[#1DA1F2]">
                {contact.value}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
