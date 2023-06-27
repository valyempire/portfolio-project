import lightsout_img from "../assets/projects/lights-out-min_gp9gvj.png";
import smartbrain_img from "../assets/projects/smart-brain.jpg";
import hangman_img from "../assets/projects/hangman.png";
import yahtze_img from "../assets/projects/yahtzee-min_aokyls.png";
import react_img from "../assets/react.png";
import typescript_img from "../assets/typescript1.png";
import material_img from "../assets/material_ui.png";
import postgrsql_img from "../assets/Postgresql_elephant.svg.png";
import node_img from "../assets/node.png";

export const projects = [
  {
    id: 1,
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
      "The game consists of a 5 by 5 grid of lights but also you can select 3 by 3 or 9 by 9 grid of lights. When the game starts, a random number or a stored pattern of these lights is switched on. Pressing any of the lights will toggle it and the adjacent lights. The goal of the puzzle is to switch all the lights off, preferably with as few button presses as possible. Technologies used: React, Typescript, Styled Components from Material UI",
  },
  {
    id: 2,
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
      "The app asks for an image URL from the user and detects and highlights faces in the image using its URL. Technologies used: React, Node.js Postman , PostgreSQL, Express",
  },
  {
    id: 3,
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
      "Hangman is a classic game in which the player has to guess a word one letter at a time. You can play to get comfortable with the game.Technologies used: React, Typescript, Styled Components from Material UI",
  },

  {
    id: 4,
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
      "Yahtzee is a dice game. The objective of the game is to score points by rolling five dice to make certain combinations. The dice can be rolled up to three times in a turn to try to make various scoring combinations and dice must remain in the box. A game consists of thirteen rounds. After each round the player chooses which scoring category is to be used for that round. Once a category has been used in the game, it cannot be used again. The scoring categories have varying point values, some of which are fixed values and others for which the score depends on the value of the dice. A Yahtzee is five-of-a-kind and scores 50 points, the highest of any category. The winner is the player who scores the most points. Technologies used: React, Typescript, Styled Components from Material UI",
  },
];
