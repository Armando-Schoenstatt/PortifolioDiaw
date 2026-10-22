import { createRoot } from "react-dom/client";
import SkillsSection from "./components/SkillsShowcase/SkillsSection";
import InlineAppFrame from "./components/InlineAppFrame";
import CurriculumPdf from "./components/CurriculumPdf";
import SKILLS, { CATEGORIES } from "./data/skills";
import "./main.js";

function mount(id, content) {
  const element = document.getElementById(id);
  if (element) createRoot(element).render(content);
}

mount("skills-app", <SkillsSection skills={SKILLS} categories={CATEGORIES} />);
mount(
  "football-app",
  <InlineAppFrame src="./apps/ESPN_API/index.html" title="Painel interativo de futebol" />
);
mount(
  "contributors-app",
  <InlineAppFrame src="./apps/ContributorStats/index.html" title="Painel de colaboradores do GitHub" />
);
mount("curriculum-app", <CurriculumPdf />);
