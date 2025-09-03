import React, { useEffect, useState } from "react";
import "./Loader.css";
import HomePage from "./Home";

const Loader: React.FC = () => {
  const [animateCircle, setAnimateCircle] = useState(false);
  const [showMain, setShowMain] = useState(false);
  const [textVisible, setTextVisible] = useState(false);

  useEffect(() => {
    const textTimer = setTimeout(() => setTextVisible(true), 100);
    const circleTimer = setTimeout(() => setAnimateCircle(true), 2100);
    const mainTimer = setTimeout(() => setShowMain(true), 4100);

    return () => {
      clearTimeout(textTimer);
      clearTimeout(circleTimer);
      clearTimeout(mainTimer);
    };
  }, []);

  if (showMain) return <HomePage />;

  const quote = "Welcome! Let's explore creativity and innovation together.";

  return (
    <div className="loader-container">
      {/* Zooming Circle */}
      <div className={`circle ${animateCircle ? "circle-expand" : ""}`} />

      {/* Text */}
      <p className={`loader-text ${textVisible ? "text-visible" : ""}`}>
        {quote}
      </p>
    </div>
  );
};

export default Loader;
