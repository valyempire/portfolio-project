import lightsout_img from "../assets/projects/lights-out-min_gp9gvj.png";
import smartbrain_img from "../assets/projects/smart2.png";
import hangman_img from "../assets/projects/hangman_responsiv.png";
import yahtze_img from "../assets/projects/yahtzee-min_aokyls.png";
import react_img from "../assets/react.png";
import typescript_img from "../assets/typescript1.png";
import material_img from "../assets/material_ui.png";
import postgrsql_img from "../assets/Postgresql_elephant.svg.png";
import node_img from "../assets/node.png";
import { v4 as uuid } from "uuid";

export const projects = [
  {
    id: uuid(),
    name: "LightsOut",
    image: lightsout_img,
    github:
      "https://github.com/valyempire/lights-out-game-typescript-styled-components",
    live: "https://github.com/valyempire/lights-out-game-typescript-styled-components",
    icons: [
      { src: react_img, alt: "React Icon" },
      { src: typescript_img, alt: "Typescript Icon" },
      { src: material_img, alt: "Material Icon" },
    ],
    description:
      "The game consists of a 5 by 5 grid of lights but also you can select 3 by 3 or 9 by 9 grid of lights. When the game starts, a random number or a stored pattern of these lights is switched on. Pressing any of the lights will toggle it and the adjacent lights. The goal of the puzzle is to switch all the lights off, preferably with as few button presses as possible.",
  },
  {
    id: uuid(),
    name: "SmartBrain",
    image: smartbrain_img,
    github: "https://github.com/valyempire/smart-brain-app-react",
    live: "https://github.com/valyempire/smart-brain-app-react",
    icons: [
      { src: react_img, alt: "React Icon" },
      { src: node_img, alt: "Node Icon" },
      { src: postgrsql_img, alt: "Postgres Icon" },
    ],
    description:
      "Full-stack React.JS web app that uses a Machine Learning API from Clarifai to identify faces on images. Allows users to create accounts and login to track number of images processed. Using a backend server developed using Node.JS and Express.JS, hosted REST API to handle requests and responses to process tasks (register account, login, detect faces on image).",
  },
  {
    id: uuid(),
    name: "Hangman",
    image: hangman_img,
    github:
      "https://github.com/valyempire/hangman-typescript-styled-components",
    live: "https://github.com/valyempire/hangman-typescript-styled-components",
    icons: [
      { src: react_img, alt: "React Icon" },
      { src: typescript_img, alt: "Typescript Icon" },
      { src: material_img, alt: "Material Icon" },
    ],
    description:
      "Hangman is a classic word guessing game in which players attempt to guess a hidden word by successive letter guesses. The game starts by displaying a number of blank spaces representing the unknown letters of the word. The player has to input letters into a text field and press a button to check if the letter is present in the hidden word.",
  },

  {
    id: uuid(),
    name: "Yahtze",
    image: yahtze_img,
    github:
      "https://github.com/valyempire/yahtze-game-typescript-styled-components",
    live: "https://github.com/valyempire/yahtze-game-typescript-styled-components",
    icons: [
      { src: react_img, alt: "React Icon" },
      { src: typescript_img, alt: "Typescript Icon" },
      { src: material_img, alt: "Material Icon" },
    ],
    description:
      "Yahtzee is a dice game. The objective of the game is to score points by rolling five dice to make certain combinations. The dice can be rolled up to three times in a turn to try to make various scoring combinations and dice must remain in the box. A game consists of thirteen rounds. After each round the player chooses which scoring category is to be used for that round.",
  },
];
