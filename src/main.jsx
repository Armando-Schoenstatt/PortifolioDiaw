import { createRoot } from "react-dom/client";
import SwarmCursor from "../apps/ReactBits/src/components/reactbits/SwarmCursor/SwarmCursor";
import SkillsSection from "./components/SkillsShowcase/SkillsSection";
import GitHubActivity from "./components/GitHubActivity";
import GitHubCommits from "./components/GitHubCommits";
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
  "reactbits-cursor",
  <SwarmCursor
    count={600}
    size={2.1}
    spread={100}
    tail={0.55}
    speed={1.2}
    swirl={0.8}
    trail={1}
    wander={0.3}
    color="#ffffff"
    accentColor="#ffffff"
    style={{ position: "fixed", inset: 0, zIndex: 1, pointerEvents: "none" }}
  />
);
mount(
  "football-app",
  <InlineAppFrame src="./apps/ESPN_API/index.html" title="Painel interativo de futebol" />
);
mount("github-profile-app", <GitHubActivity />);
mount("github-commits-app", <GitHubCommits />);
mount("curriculum-app", <CurriculumPdf />);
