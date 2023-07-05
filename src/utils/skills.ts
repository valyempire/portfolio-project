import { v4 as uuid } from "uuid";
import html_img from "../assets/html.png";
import css_img from "../assets/css.png";
import javascript_img from "../assets/javascript.png";
import react_img from "../assets/react.png";
import bootstrap_img from "../assets/bootstrap-logo.png";
import typescript_img from "../assets/typescript1.png";
import material_img from "../assets/material_ui.png";
import node_img from "../assets/node.png";
import express_img from "../assets/expressjs.png";
import postgres_img from "../assets/Postgresql_elephant.svg.png";
import vscode_img from "../assets/Visual_Studio_Code_1.35_icon.svg.png";
import github_img from "../assets/github1.png";
import git_img from "../assets/git3.png";
import vite_img from "../assets/Vitejs-logo.svg.png";
import chrome_devtool_img from "../assets/chrome_devtool.png";
import frontend_img from "../assets/programming.png";
import backend_img from "../assets/back-end.png";
import tools_img from "../assets/setting.png";

export const skills = [
  {
    id: uuid(),
    logo: { src: frontend_img, alt: "FRONT END" },
    title: "Front End",
    cardText:
      "Enhancing web performance and responsiveness while addressing cross-browser compatibility challenges and ensuring accessibility are the primary focus of my work.",
    images: [
      { src: html_img, alt: "HTML" },
      { src: css_img, alt: "CSS" },
      { src: javascript_img, alt: "JAVASCRIPT" },
      { src: react_img, alt: "REACT" },
      { src: bootstrap_img, alt: "BOOTSTRAP" },
      { src: typescript_img, alt: "TYPESCRIPT" },
      { src: material_img, alt: "MATERIAL UI" },
    ],
  },
  {
    id: uuid(),
    logo: { src: backend_img, alt: "BACK END" },
    title: "Back End",
    cardText:
      "I thrive on ensuring the security, scalability, and efficient handling of application logic in the back end. It's one of the aspects I find most enjoyable in my work.",
    images: [
      { src: node_img, alt: "NODE JS" },
      { src: express_img, alt: "EXPRESS JS" },
      { src: postgres_img, alt: "POSTGRESQL" },
      { src: typescript_img, alt: "TYPESCRIPT" },
    ],
  },
  {
    id: uuid(),
    logo: { src: tools_img, alt: "TOOLS" },
    title: "Tools",
    cardText:
      "To create exceptional applications, I rely on outstanding development tools and dependable services. They form the foundation for building remarkable digital experiences.",
    images: [
      { src: vscode_img, alt: "VSCODE" },
      { src: github_img, alt: "GITHUB" },
      { src: git_img, alt: "GIT" },
      { src: vite_img, alt: "VITE" },
      { src: chrome_devtool_img, alt: "DEVTOOL" },
    ],
  },
];

export const description =
  "These are my programming skills and tools. I have acquired these skills through working on projects with my mentor and also collaborating with my fellow colleagues during my studies.";
