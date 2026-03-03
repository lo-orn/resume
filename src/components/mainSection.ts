import { initAboutSection } from "../sections/aboutSection";
import { initContactSection } from "../sections/contactSection";
import { initWorkSection } from "../sections/workSection";
import { role } from "../utils/constants";
import { roleDiv, roleHint } from "../utils/domUtils";
import { stopRoleLoop } from "./roleLoop";
import { animate } from 'animejs';

const titleLine = document.getElementById("titleLine") as HTMLDivElement

export function finalSlide() {
  if (!role) return;

  roleDiv?.addEventListener("click", () => {
    stopRoleLoop();
    role.remove();
    roleHint?.remove();

    const navMenu = document.getElementById("navMenu") as HTMLMenuElement;
    navMenu.classList.remove("hidden");

    if(window.innerWidth < 640) {
      animate(titleLine, {
      width:"100%",
      duration: 800
   });
}

 
    initWorkSection();
    initAboutSection();
    initContactSection();
  

    });
}