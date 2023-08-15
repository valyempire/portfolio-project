/**
 * Imports styled components
 */
import {
  HomeContainer,
  AboutContainer,
  Title,
  Image,
  Description,
} from "./HomeHeader.styles";

/**
 * Imports image
 */
import my_img from "../../assets/vali5.png";

/**
 * Displays the component
 */
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
