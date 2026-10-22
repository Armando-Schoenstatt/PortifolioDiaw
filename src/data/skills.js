import { FaJava } from "react-icons/fa";
import {
  SiBlazor,
  SiCss,
  SiFigma,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiPhp,
  SiMysql,
  SiPython,
  SiVercel,
} from "react-icons/si";
import {
  TbBinaryTree,
  TbBrandCSharp,
  TbBrandVisualStudio,
  TbBrandVscode,
  TbBrandWindows,
  TbDatabase,
  TbMathSymbols,
  TbTable,
  TbWorldWww,
} from "react-icons/tb";

export const CATEGORIES = [
  "Programação e Desenvolvimento",
  "Banco de Dados",
  "Ferramentas e Tecnologias",
];

const SKILLS = [
  { name: "C#", icon: TbBrandCSharp, color: "#68217A", category: "Programação e Desenvolvimento", link: "https://learn.microsoft.com/pt-br/dotnet/csharp/" },
  { name: "Python", icon: SiPython, color: "#3776AB", category: "Programação e Desenvolvimento", link: "https://docs.python.org/pt-br/3/" },
  { name: "Java", icon: FaJava, color: "#E76F00", category: "Programação e Desenvolvimento", link: "https://dev.java/learn/" },
  { name: "PHP", icon: SiPhp, color: "#777BB4", category: "Programação e Desenvolvimento", link: "https://www.php.net/manual/pt_BR/" },
  { name: "JavaScript", icon: SiJavascript, color: "#E5B800", category: "Programação e Desenvolvimento", link: "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript" },
  { name: "HTML5", icon: SiHtml5, color: "#E34F26", category: "Programação e Desenvolvimento", link: "https://developer.mozilla.org/pt-BR/docs/Web/HTML" },
  { name: "CSS3", icon: SiCss, color: "#663399", category: "Programação e Desenvolvimento", link: "https://developer.mozilla.org/pt-BR/docs/Web/CSS" },
  { name: "Blazor", icon: SiBlazor, color: "#512BD4", category: "Programação e Desenvolvimento", link: "https://learn.microsoft.com/pt-br/aspnet/core/blazor/" },
  { name: "Desenvolvimento de aplicações Web", icon: TbWorldWww, color: "#38BDF8", category: "Programação e Desenvolvimento", link: "https://developer.mozilla.org/pt-BR/docs/Learn_web_development" },
  { name: "Programação Orientada a Objetos (POO)", icon: TbBinaryTree, color: "#A78BFA", category: "Programação e Desenvolvimento", link: "https://dev.java/learn/" },
  { name: "Lógica de programação", icon: TbMathSymbols, color: "#34D399", category: "Programação e Desenvolvimento", link: "https://developer.mozilla.org/pt-BR/docs/Learn_web_development" },
  { name: "MySQL", icon: SiMysql, color: "#4479A1", category: "Banco de Dados", link: "https://dev.mysql.com/doc/" },
  { name: "Criação e manipulação de tabelas", icon: TbTable, color: "#38BDF8", category: "Banco de Dados", link: "https://dev.mysql.com/doc/refman/8.4/en/create-table.html" },
  { name: "Consultas SQL", icon: TbDatabase, color: "#9CA3AF", category: "Banco de Dados", link: "https://dev.mysql.com/doc/refman/8.4/en/sql-statements.html" },
  { name: "Procedures e Views", icon: TbDatabase, color: "#A78BFA", category: "Banco de Dados", link: "https://dev.mysql.com/doc/refman/8.4/en/stored-objects.html" },
  { name: "Modelagem básica de dados", icon: TbBinaryTree, color: "#34D399", category: "Banco de Dados", link: "https://dev.mysql.com/doc/workbench/en/wb-data-modeling.html" },
  { name: "Git", icon: SiGit, color: "#F05032", category: "Ferramentas e Tecnologias", link: "https://git-scm.com/book/pt-br/v2" },
  { name: "GitHub", icon: SiGithub, color: "#D1D5DB", category: "Ferramentas e Tecnologias", link: "https://github.com/Armando-Schoenstatt" },
  { name: "Visual Studio", icon: TbBrandVisualStudio, color: "#A78BFA", category: "Ferramentas e Tecnologias", link: "https://visualstudio.microsoft.com/pt-br/" },
  { name: "Visual Studio Code", icon: TbBrandVscode, color: "#007ACC", category: "Ferramentas e Tecnologias", link: "https://code.visualstudio.com/docs" },
  { name: "Windows", icon: TbBrandWindows, color: "#00ADEF", category: "Ferramentas e Tecnologias", link: "https://www.microsoft.com/pt-br/windows" },
  { name: "Figma", icon: SiFigma, color: "#A259FF", category: "Ferramentas e Tecnologias", link: "https://help.figma.com/" },
  { name: "Vercel", icon: SiVercel, color: "#D1D5DB", category: "Ferramentas e Tecnologias", link: "https://vercel.com/docs" },
];

export default SKILLS;
