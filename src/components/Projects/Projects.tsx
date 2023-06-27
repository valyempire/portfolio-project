import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
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

interface Project {
  id: number;
  name: string;
  image: string;
  github: string;
  live: string;
  description: string;
  icons?: { src: string; alt: string }[];
}

export const Projects: React.FC = () => {
  return (
    <Container>
      {projects.map((project: Project) => (
        <Card key={project.id}>
          <Left>
            <Image src={project.image} alt="Imagine" />
          </Left>
          <Right>
            <Title>{project.name}</Title>
            <Description>{project.description}</Description>
            <IconContainer>
              {project.icons?.map((icon, index) => (
                <Icon key={index} src={icon.src} alt={icon.alt} />
              ))}
            </IconContainer>
            <Links>
              <Link href={project.github}>
                <FontAwesomeIcon icon={faGithub} />
              </Link>
              <Link href={project.live}>
                <FontAwesomeIcon icon={faExternalLinkAlt} />
              </Link>
            </Links>
          </Right>
        </Card>
      ))}
    </Container>
  );
};
