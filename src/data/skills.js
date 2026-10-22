import { FaJava } from "react-icons/fa";
import {
  SiCss,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiNodedotjs,
  SiPython,
  SiReact,
  SiSpringboot,
  SiTypescript,
} from "react-icons/si";
import { TbDatabase } from "react-icons/tb";

export const CATEGORIES = ["Front-end", "Back-end", "Dados", "Ferramentas"];

const SKILLS = [
  { name: "HTML", icon: SiHtml5, color: "#E34F26", category: "Front-end", link: "https://developer.mozilla.org/pt-BR/docs/Web/HTML" },
  { name: "CSS", icon: SiCss, color: "#663399", category: "Front-end", link: "https://developer.mozilla.org/pt-BR/docs/Web/CSS" },
  { name: "JavaScript", icon: SiJavascript, color: "#E5B800", category: "Front-end", link: "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6", category: "Front-end", link: "https://www.typescriptlang.org/docs/" },
  { name: "React", icon: SiReact, color: "#149ECA", category: "Front-end", link: "https://react.dev/" },
  { name: "Java", icon: FaJava, color: "#E76F00", category: "Back-end", link: "https://dev.java/learn/" },
  { name: "Spring Boot", icon: SiSpringboot, color: "#6DB33F", category: "Back-end", link: "https://spring.io/projects/spring-boot" },
  { name: "Node.js", icon: SiNodedotjs, color: "#5FA04E", category: "Back-end", link: "https://nodejs.org/pt" },
  { name: "Python", icon: SiPython, color: "#3776AB", category: "Back-end", link: "https://docs.python.org/pt-br/3/" },
  { name: "SQL", icon: TbDatabase, color: "#9ca3af", category: "Dados", link: "https://www.w3schools.com/sql/" },
  { name: "Git", icon: SiGit, color: "#F05032", category: "Ferramentas", link: "https://git-scm.com/book/pt-br/v2" },
];

export default SKILLS;
