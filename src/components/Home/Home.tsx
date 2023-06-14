import React, { useState, useEffect } from "react";
import loadingImage from "../../assets/loading3.webp";
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

// import React, { useState, useEffect } from "react";
// import { useHistory } from "react-router-dom";
// import loadingImage from "./loading.gif"; // Replace with your loading image

// const Home = () => {
//   const [isLoading, setIsLoading] = useState(true);
//   const history = useHistory();

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setIsLoading(false);
//     }, 2000);

//     return () => {
//       clearTimeout(timer);
//     };
//   }, []);

//   if (isLoading) {
//     return (
//       <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
//         <img src={loadingImage} alt="Loading" />
//       </div>
//     );
//   }

//   // Render your actual home content here
//   return (
//     <div>
//       <h1>Welcome to the Home Page</h1>
//       {/* Your home content */}
//     </div>
//   );
// };

// export default Home;
