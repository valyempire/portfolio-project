import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { projects } from "../../utils";
import { ProjectData } from "./Projects.types";
import {
  Card,
  LeftContetnt,
  RightContent,
  Description,
  Image,
  Title,
  Links,
  Link,
  Icon,
  IconContainer,
} from "./Projects.styles";

export const Projects: React.FC = () => {
  const renderProjects = () => {
    return projects.map((project: ProjectData) => (
      <Card key={project.id}>
        <LeftContetnt>
          <Image src={project.image} alt="Imagine" />
        </LeftContetnt>
        <RightContent>
          <Title>{project.name}</Title>

          <Links>
            <Link href={project.github} target="_blank">
              <FontAwesomeIcon icon={faGithub} />
            </Link>
            <Link href={project.live} target="_blank">
              <FontAwesomeIcon icon={faGlobe} />
            </Link>
          </Links>

          <Description>{project.description}</Description>
          <IconContainer>
            {project.icons.map((icon, index) => (
              <Icon key={index} src={icon.src} alt={icon.alt} />
            ))}
          </IconContainer>
        </RightContent>
      </Card>
    ));
  };

  return <>{renderProjects()}</>;
};
