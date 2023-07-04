import my_img from "../../assets/vali.img3.png";
import {
  HomeContainer,
  AboutContainer,
  Title,
  Image,
  Description,
} from "./HomeHeader.styles";

export const HomeHeader = () => {
  return (
    <HomeContainer>
      <AboutContainer>
        <Title>Front End Developer</Title>
        <Image src={my_img} alt="Profile Image" />
        <Description>
          Hi there! My name is Valerica Bocanel, and I'm a dedicated and
          motivated Front End Developer.
        </Description>
      </AboutContainer>
    </HomeContainer>
  );
};
