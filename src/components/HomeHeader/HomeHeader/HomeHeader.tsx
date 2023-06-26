import React from "react";
import my_img from "../../../assets/vali.img3.png";
import {
  HomeContainer,
  Title,
  Image,
  AboutContainer,
  Description,
} from "./HomeHeader.styles";

export const HomeHeader: React.FC = () => {
  return (
    <HomeContainer>
      <AboutContainer>
        <Title>Front End Developer</Title>
        <Image src={my_img} alt="Profile Image" />
        <Description>
          Hi there! My name is Valerica Bocanel, and I'm a dedicated and
          motivated junior web developer.
        </Description>
      </AboutContainer>
    </HomeContainer>
  );
};
