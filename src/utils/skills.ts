import { v4 as uuid } from "uuid";

export const skills = [
  {
    id: uuid(),
    category: "Front-end",
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "TypeScript",
      "React",
      "Bootstrap4",
      "Material-UI",
      "NextJS",
    ],
  },
  {
    id: uuid(),
    category: "Back-end",
    skills: ["NodeJS", "TypeScript", "ExpressJS", "MongoDB", "PostgreSQL"],
  },
  {
    id: uuid(),
    category: "Tools",
    skills: ["VS Code", "Git", " GitHub", "Postman", "Netlify"],
  },
];

export const description =
  "This is my programming skills and tools. I have acquired these skills through working on projects with my mentor and also collaborating with my fellow colleagues during my studies.";
