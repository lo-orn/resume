import { aboutMeDiv, mainSection } from "../utils/domUtils";

export const initAboutSection = () => {
    if(!aboutMeDiv || !mainSection) return
    const aboutMeText = document.createElement("p");
    aboutMeText.textContent =
      "Former art director now studying frontend development. Background in fashion and tech. I get a kick out of seeing code turn into real things online. Now I want to build stuff people actually use, while continuing to grow technically";

    aboutMeText.className =
      "mt-6 text-white font-medium tracking-tight leading-relaxed text-sm sm:text-base w-full sm:min-w-[280px] md:min-w-[320px] max-w-prose text-left break-words hyphens-auto";

    aboutMeDiv.innerHTML = "";
    aboutMeDiv.appendChild(aboutMeText);

    mainSection.appendChild(aboutMeDiv);
}