import React, { useEffect, useState } from "react";
import { ThemeProvider } from "../Context/ThemeContext";
import Navbar from "./Navbar";
import Header from "./Header";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Footer from "./Footer";
import Education from "./Education";
import Certification from "./Certifications";

const HomePage: React.FC = () => {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setFadeIn(true), 50);
    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider>
      <div
        className={`min-h-screen w-screen transition-colors duration-500 ${
          fadeIn ? "opacity-100" : "opacity-0"
        } bg-black dark:bg-white`}
      >
        <Navbar />
        <Header />
        <About />
        <Education />
        <Certification />
        <Skills />
        <Projects />
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default HomePage;
