import {
  SiExpress,
  SiSocketdotio,
  SiNextdotjs,
  SiShadcnui,
  SiGithub,
  SiMicrosoftsqlserver,
  SiMongoose,
} from "react-icons/si";
import { TbApi } from "react-icons/tb";
import { ReactRouterDomIcon } from "@/components/icons";
import { type SkillsShowcaseProps } from "@/components/skills/skills-showcase";

// Languages
import HtmlSvg from "@/public/icons/html.svg";
import CsssSvg from "@/public/icons/css.svg";
import JavascriptSvg from "@/public/icons/javascript.svg";
import TypescriptSvg from "@/public/icons/typescript.svg";

// Libraries
import ReactjsSvg from "@/public/icons/reactjs.svg";
import TailwindcssSvg from "@/public/icons/tailwindcss.svg";
import BootstrapSvg from "@/public/icons/bootstrap.svg";
import MuiSvg from "@/public/icons/mui.svg";
import ViteSvg from "@/public/icons/vite.svg";

// Backend
import NodejsSvg from "@/public/icons/nodejs.svg";

// Database and ORMS
import MongoDBSvg from "@/public/icons/mongodb.svg";

// Tools and Tech
import GitSvg from "@/public/icons/git.svg";
import WebpackSvg from "@/public/icons/webpack.svg";
import VSCodeSvg from "@/public/icons/vs-code.svg";
import NpmSvg from "@/public/icons/npm.svg";
import ChromeDevToolsSvg from "@/public/icons/chrome-dev-tools.svg";
import PostmanSvg from "@/public/icons/postman.svg";

export const SKILLS_DATA: SkillsShowcaseProps["skills"] = [
  {
    sectionName: "Languages",
    skills: [
      {
        name: "HTML",
        icon: HtmlSvg,
      },
      {
        name: "CSS",
        icon: CsssSvg,
      },
      {
        name: "Javascript",
        icon: JavascriptSvg,
      },
      {
        name: "Typescript",
        icon: TypescriptSvg,
      },
    ],
  },
  {
    sectionName: "Libraries and Frameworks",
    skills: [
      {
        name: "Reactjs",
        icon: ReactjsSvg,
      },
      {
        name: "Nextjs",
        icon: SiNextdotjs,
      },
      {
        name: "TailwindCSS",
        icon: TailwindcssSvg,
      },
      {
        name: "MUI",
        icon: MuiSvg,
      },
      {
        name: "Shadcn/ui",
        icon: SiShadcnui,
      },
      {
        name: "Vite",
        icon: ViteSvg,
      },
      {
        name: "BootStrap",
        icon: BootstrapSvg,
      },
      {
        name: "React Router Dom",
        icon: ReactRouterDomIcon,
      },
    ],
  },
  {
    sectionName: "Backend",
    skills: [
      {
        name: "Nodejs",
        icon: NodejsSvg,
      },
      {
        name: "Express",
        icon: SiExpress,
      },
      {
        name: "RestAPI",
        icon: TbApi,
      },
      {
        name: "Socket.io",
        icon: SiSocketdotio,
      },
    ],
  },
  {
    sectionName: "Databases and ORMs",
    skills: [
      {
        name: "MongoDB",
        icon: MongoDBSvg,
      },
      {
        name: "Mongoose",
        icon: SiMongoose,
      },
      {
        name: "MS SQL Server",
        icon: SiMicrosoftsqlserver,
      },
    ],
  },
  {
    sectionName: "Tools and Technologies",
    skills: [
      {
        name: "Git",
        icon: GitSvg,
      },
      {
        name: "GitHub",
        icon: SiGithub,
      },
      {
        name: "VS Code",
        icon: VSCodeSvg,
      },
      {
        name: "Postman",
        icon: PostmanSvg,
      },
      {
        name: "Webpack",
        icon: WebpackSvg,
      },
      {
        name: "Npm",
        icon: NpmSvg,
      },
      {
        name: "Chrome Dev Tools",
        icon: ChromeDevToolsSvg,
      },
    ],
  },
];
