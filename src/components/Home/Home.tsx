import React, { useState, useEffect } from "react";
import loadingImage from "../../assets/loading1.gif";
import "./Home.css";

export const Home: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="loading-image">
      {isLoading ? (
        <img src={loadingImage} alt="Loading..." />
      ) : (
        <div>
          {/* Your desired content goes here */}
          <h1>Welcome to the Home Page</h1>
          <p>This is the content you want to display.</p>
        </div>
      )}
    </div>
  );
};
