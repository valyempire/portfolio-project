import { v4 as uuid } from "uuid";
import html_img from "../assets/html.png";
import css_img from "../assets/css.png";
import javascript_img from "../assets/javascript.png";
import react_img from "../assets/react.png";
import bootstrap_img from "../assets/bootstrap-logo.png";
import typescript_img from "../assets/typescript1.png";
import material_img from "../assets/material_ui.png";
import node_img from "../assets/node.png";
import express_img from "../assets/express.png";
import postgres_img from "../assets/Postgresql_elephant.svg.png";
import vscode_img from "../assets/vscode.png";
import github_img from "../assets/github3.png";
import git_img from "../assets/git2.png";

export const skills = [
  {
    id: uuid(),
    title: "Front End",
    cardText:
      "Enhancing web performance and responsiveness while addressing cross-browser compatibility challenges and ensuring accessibility are the primary focus of my work.",
    images: [
      { src: html_img, alt: "html" },
      { src: css_img, alt: "css" },
      { src: javascript_img, alt: "javascript" },
      { src: react_img, alt: "Ireact" },
      { src: bootstrap_img, alt: "bootstrap" },
      { src: typescript_img, alt: "typescript" },
      { src: material_img, alt: "material" },
    ],
  },
  {
    id: uuid(),
    title: "Back End",
    cardText:
      "I thrive on ensuring the security, scalability, and efficient handling of application logic in the back end. It's one of the aspects I find most enjoyable in my work.",
    images: [
      { src: node_img, alt: "node" },
      { src: express_img, alt: "express" },
      { src: postgres_img, alt: "postgres" },
      { src: typescript_img, alt: "typescript" },
    ],
  },
  {
    id: uuid(),
    title: "Tools",
    cardText:
      "To create exceptional applications, I rely on outstanding development tools and dependable services. They form the foundation for building remarkable digital experiences.",
    images: [
      { src: vscode_img, alt: "vscode" },
      { src: github_img, alt: "github" },
      { src: git_img, alt: "git" },
    ],
  },
];

export const description =
  "This is my programming skills and tools. I have acquired these skills through working on projects with my mentor and also collaborating with my fellow colleagues during my studies.";
