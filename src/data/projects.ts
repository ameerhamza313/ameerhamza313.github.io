import { type ProjectCardProps } from "@/components/projects/project-card";
import { type ProjectShowcaseListItem } from "@/components/projects/project-showcase-list";
import { siteMetadata } from "@/data/siteMetaData.mjs";

export const PROJECT_SHOWCASE: ProjectShowcaseListItem[] = [
  {
    index: 0,
    title: "Event Plaza",
    href: "/projects",
    tags: ["React", "Bootstrap", "Nodejs", "ExpressJS"],
    image: {
      LIGHT: "/images/projects/eventPlaza.webp",
      DARK: "/images/projects/eventPlazaDark.webp",
    },
  },
  {
    index: 1,
    title: "Recipe Radar",
    href: "/projects",
    tags: ["React", "Bootstrap", "Nodejs", "ExpressJS"],
    image: {
      LIGHT: "/images/projects/recipeRadar.webp",
      DARK: "/images/projects/recipeRadarDark.webp",
    },
  },
  {
    index: 2,
    title: "Quizzer Zest",
    href: "/projects",
    tags: ["React", "Bootstrap", "Nodejs", "ExpressJS"],
    image: {
      LIGHT: "/images/projects/quizzerZest.webp",
      DARK: "/images/projects/quizzerZestDark.webp",
    },
  },
];

export const PROJECTS_CARD: ProjectCardProps[] = [
  {
    name: "Event Plaza",
    favicon: "./images/projects/logos/jsontree.ico",
    imageUrl: [
      "./images/projects/eventPlaza.webp",
      "./images/projects/eventPlazaDark.webp",
    ],
    description:
      "EventPlaza is a comprehensive event management application developed with React.js. It facilitates event organizers to create and manage events seamlessly. Users can browse through a list of upcoming events, view event details, buy tickets, and receive QR codes for easy check-ins at the event venue.",
    sourceCodeHref: "https://github.com/ameerhamza313/eventplaza",
    liveWebsiteHref: "https://ameerhamza313.github.io/eventplaza/",
  },
  {
    name: "Recipe Radar",
    favicon: "./images/projects/logos/kanban.ico",
    imageUrl: [
      "./images/projects/recipeRadar.webp",
      "./images/projects/recipeRadarDark.webp",
    ],
    description:
      "Recipe Radar is a user-friendly React web application that allows users to discover and save their favorite recipes. With Recipe Radar, you can easily search for recipes by entering ingredients or recipe names, and the app will fetch relevant recipes using the Spoonacular API.",
    sourceCodeHref: "https://github.com/ameerhamza313/reciperadar",
    liveWebsiteHref: "https://ameerhamza313.github.io/reciperadar/",
  },
  {
    name: "Quizzer Zest",
    favicon: "./images/projects/logos/manygames.ico",
    imageUrl: [
      "./images/projects/quizzerZest.webp",
      "./images/projects/quizzerZestDark.webp",
    ],
    description:
      "QuizzerZest is a web application built with React.js that allows users to take quizzes on various topics and test their knowledge. It offers an interactive and engaging quiz-taking experience, where users can answer multiple-choice questions and get immediate feedback on their responses.",
    sourceCodeHref: "https://github.com/ameerhamza313/quizzerzest",
    liveWebsiteHref: "https://ameerhamza313.github.io/quizzerzest/",
  },
  {
    name: "My portfolio",
    favicon: "./favicon.ico",
    imageUrl: [
      "./images/projects/portfolio.webp",
      "./images/projects/portfolioDark.webp",
    ],
    description:
      "My personal portfolio website made using Nextjs, Tailwind CSS, TypeScript and Framer motion.",
    sourceCodeHref: "https://github.com/ameerhamza313/ameerhamza313.github.io",
    liveWebsiteHref: siteMetadata.siteUrl,
  },
  {
    name: "React Form Validation",
    favicon: "./favicon.ico",
    imageUrl: [
      "./images/projects/reactForm.webp",
      "./images/projects/reactFormDark.webp",
    ],
    description:
      "The React Form Validation project is a robust and efficient solution for implementing client-side form validation in React applications. It provides developers with a simple and customizable way to validate user input in forms, ensuring data integrity and enhancing the overall user experience.",
    sourceCodeHref: "https://github.com/ameerhamza313/react-form",
    liveWebsiteHref: "https://ameerhamza313.github.io/react-form/",
  },
  {
    name: "Etch-a-Sketch",
    favicon: "./images/projects/logos/stockpredictor.ico",
    imageUrl: [
      "./images/projects/etchASketch.webp",
      "./images/projects/etchASketchDark.webp",
    ],
    description:
      "Etch-a-Sketch is a simple drawing application that allows users to draw on a grid of squares by moving the mouse. The grid's size can be dynamically adjusted, and colors are applied with random and progressive darkening effects.",
    sourceCodeHref: "https://github.com/ameerhamza313/odin-etch-a-sketch",
    liveWebsiteHref: "https://ameerhamza313.github.io/odin-etch-a-sketch/",
  },
];
