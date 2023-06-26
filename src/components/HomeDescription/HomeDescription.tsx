import web_img from "../../assets/responsive-img3.png";
import teamwork_img from "../../assets/responsive-img3.png";

import {
  Container,
  Content,
  LeftContent,
  RightContent,
  Text,
  Image,
} from "./HomeDescription.styles";

export const HomeDescription: React.FC = () => {
  return (
    <Container>
      <Content>
        <LeftContent>
          <Image src={web_img} alt="web-development" />
        </LeftContent>
        <RightContent>
          <Text>
            I'm passionate about building dynamic and responsive web
            applications. I enjoy turning design concepts into fully functional
            websites that provide a seamless user experience. Throughout my
            learning journey, I've gained experience in front-end frameworks
            such as React , as well as back-end technologies like Node.js and
            Express. I'm constantly expanding my knowledge and exploring new
            tools and libraries to stay up to date with the latest industry
            trends. I have a strong problem-solving mindset and thrive in
            collaborative environments. I love working with cross-functional
            teams to bring ideas to life and contribute to the success of a
            project.
          </Text>
        </RightContent>
      </Content>
      <Content>
        <RightContent>
          <Text>
            I'm always eager to learn from experienced developers and embrace
            feedback to improve my skills. As a junior developer, I'm excited to
            contribute my enthusiasm, creativity, and dedication to a supportive
            and growth-oriented team. I'm open to new challenges and ready to
            tackle exciting projects that push the boundaries of what's possible
            in web development. Let's connect and build the next generation of
            innovative web solutions together!
          </Text>
        </RightContent>
        <LeftContent>
          <Image src={teamwork_img} alt="software-development-team-structure" />
        </LeftContent>
      </Content>
    </Container>
  );
};
