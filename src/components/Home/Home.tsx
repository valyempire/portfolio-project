import React, { useState, useEffect } from "react";
import loadingImage from "../../assets/loading1.gif";
import my_img from "../../assets/react.png";
import {
  Container,
  LoadingImage,
  Title,
  Image,
  AboutContainer,
  // Description,
} from "./Home.styles";
import { HomeDescription } from "../HomeDescription/HomeDescription";

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
    <Container>
      {isLoading ? (
        <LoadingImage src={loadingImage} alt="Loading..." />
      ) : (
        <AboutContainer>
          <Title>About Me</Title>
          <Image src={my_img} alt="Profile Image" />
          <HomeDescription />
        </AboutContainer>
      )}
    </Container>
  );
};
