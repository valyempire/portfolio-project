/**
 * Imports icons from fortawesome
 */
import {
  faGraduationCap,
  faCode,
  faCogs,
  faLightbulb,
} from "@fortawesome/free-solid-svg-icons";

/**
 * Imports uuid library for generating unique id
 */
import { v4 as uuid } from "uuid";

/**
 * Displays the data variable for descriptionData
 */
export const descriptionData = [
  {
    id: uuid(),
    title: "Always Eager to Learn",
    description:
      "I'm always eager to learn and embrace feedback to improve my skills and stay ahead in the industry.",
    icon: faGraduationCap,
  },
  {
    id: uuid(),
    title: "Creative and Dedicated",
    description:
      "I'm passionate about creativity and dedicated to delivering innovative solutions that exceed expectations.",
    icon: faLightbulb,
  },
  {
    id: uuid(),
    title: "Embracing Challenges",
    description:
      "I'm open to new challenges and thrive in pushing the boundaries of web development with exciting projects.",
    icon: faCode,
  },
  {
    id: uuid(),
    title: "Building the Future",
    description:
      "Let's connect and build the future of web development together, embracing innovation and cutting-edge technologies.",
    icon: faCogs,
  },
];

export const descriptionText =
  "I'm passionate about building dynamic and responsive web applications. I enjoy turning design concepts into fully functional websites that provide a seamless user experience. I have a strong problem-solving mindset and thrive in collaborative environments. I love working with cross-functional teams to bring ideas to life and contribute to the success of a project.";
