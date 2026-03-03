import { MOVE_TITLE_AFTER_MS, newTitle, role, title } from "../utils/constants";
import { roleHint } from "../utils/domUtils";
import { startRoleLoop } from "./roleLoop";


export function initIntro() {

    setTimeout(() => {
        title.classList.add("hidden");
        newTitle.classList.remove("hidden");
        
    
        startRoleLoop();
        role?.classList.remove("opacity-0"); // fade in
    
        roleHint?.classList.remove("opacity-0");
      }, MOVE_TITLE_AFTER_MS);
    
  }