import React, { useEffect, useState } from "react";
import Loader from "./components/Loader";
import HomePage from "./components/Home";


const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return <>{loading ? <Loader /> : <HomePage />}</>;
};

export default App;
