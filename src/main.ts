import "./style.css";
import { openModal } from './components/modal'
import { educationHtml, projectsHtml, skillsHtml, workHtml } from "./content/modalContent";
import { finalSlide } from "./components/mainSection";
import { initIntro } from "./components/intro";



document.getElementById("projectsDiv")?.addEventListener("click", () => {
  openModal("PROJECTS", projectsHtml);
});
document.getElementById("workDiv")?.addEventListener("click", () => {
  openModal("WORK EXPERIENCE", workHtml);
});

document.getElementById("educationDiv")?.addEventListener("click", () => {
  openModal("EDUCATION", educationHtml);
});

document.getElementById("skillsDiv")?.addEventListener("click", () => {
  openModal("SKILLS", skillsHtml);
});

finalSlide();
initIntro();
