import react_img from "../../assets/react.png";
import { projects } from "../../utils";
import {
  Container,
  Card,
  Left,
  Right,
  Description,
  Image,
  Title,
  Links,
  Link,
  Icon,
  IconContainer,
} from "./Projects.styles";

export const Projects: React.FC = () => {
  return (
    <Container>
      {projects.map((project) => (
        <Card key={project.id}>
          <Left>
            <Image src={project.image} alt="Imagine" />
          </Left>
          <Right>
            <Title>{project.name}</Title>
            <Description>{project.description}</Description>
            <IconContainer>
              <Icon src={react_img} alt="icon" />
              <Icon src={react_img} alt="icon" />
              <Icon src={react_img} alt="icon" />
            </IconContainer>
            <Links>
              <Link href={project.github}>Git</Link>
              <Link href={project.live}>Live</Link>
            </Links>
          </Right>
        </Card>
      ))}
    </Container>
  );
};
