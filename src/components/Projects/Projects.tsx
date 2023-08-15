/**
 * Imports styled components
 */
import {
  Card,
  LeftContetnt,
  RightContent,
  Description,
  Image,
  Title,
  LinksContainer,
  Link,
  Icon,
  IconContainer,
} from "./Projects.styles";
/**
 * Imports Icons from Fontawesome
 */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

/**
 * Imports files from utils
 */
import { projects, gitHubTitle, liveTitle } from "../../utils";

/**
 * Imports types
 */
import { ProjectData } from "./Projects.types";

/**
 * Displays the component
 */
export const Projects: React.FC = () => {
  const renderProjects = () => {
    return projects.map((project: ProjectData) => (
      <Card key={project.id}>
        <LeftContetnt>
          <Image src={project.image} alt="Image" />
        </LeftContetnt>
        <RightContent>
          <Title>{project.name}</Title>

          <LinksContainer>
            <Link href={project.github} target="_blank" title={gitHubTitle}>
              <FontAwesomeIcon icon={faGithub} />
            </Link>
            <Link href={project.live} target="_blank" title={liveTitle}>
              <FontAwesomeIcon icon={faGlobe} />
            </Link>
          </LinksContainer>

          <Description>{project.description}</Description>
          <IconContainer>
            {project.icons.map((icon, index) => (
              <Icon
                key={index}
                src={icon.src}
                alt={icon.alt}
                title={icon.alt}
              />
            ))}
          </IconContainer>
        </RightContent>
      </Card>
    ));
  };

  return <>{renderProjects()}</>;
};
