import { newTitle, role } from "../utils/constants";
import { aboutMeDiv, contactMe, footer, mainSection, roleDiv, roleHint, workGifDiv } from "../utils/domUtils";
import emailjs from "@emailjs/browser";
import { stopRoleLoop } from "./intro";



export function finalSlide() {
  if (!role) {
    console.log("role saknas");
    return;
  }

  roleDiv?.addEventListener("click", () => {
    console.log("CLICK på role!");
    stopRoleLoop();
    role.remove();
    roleHint?.remove();

    if (!workGifDiv) {
      console.log("workGifDiv saknas");
      return;
    }
    if (!aboutMeDiv) {
      console.log("aboutMeDiv saknas");
      return;
    }
    if (!mainSection) {
      console.log("mainSection saknas");
      return;
    }

    const navMenu = document.getElementById("navMenu") as HTMLMenuElement;
    navMenu.classList.remove("hidden");
    newTitle.classList.add("animate")
  

    const workGif = document.createElement("img");
    workGif.src = "./giffycanvas3.gif";
    workGif.className = "block w-full h-auto";
    workGif.onload = () => console.log("GIF laddad");
    workGif.onerror = () => console.log("GIF kunde inte laddas");

    workGifDiv.className =
      "w-full max-w-[360px] sm:max-w-[420px] md:max-w-[520px] mx-auto lg:mx-0";
    workGifDiv.innerHTML = "";
    workGifDiv.appendChild(workGif);

    const aboutMeText = document.createElement("p");
    aboutMeText.textContent =
      "Former art director now studying frontend development. Background in fashion and tech. I get a kick out of seeing code turn into real things online. Now I want to build stuff people actually use, while continuing to grow technically";

    aboutMeText.className =
      "mt-6 text-white font-medium tracking-tight leading-relaxed text-sm sm:text-base w-full sm:min-w-[280px] md:min-w-[320px] max-w-prose text-left break-words hyphens-auto";

    aboutMeDiv.innerHTML = "";
    aboutMeDiv.appendChild(aboutMeText);

    contactMe?.classList.remove("hidden");

    emailjs.init("oeL4wbVK6MtNg_Or5");

    contactMe.addEventListener("submit", async (e) => {
      e.preventDefault();
      try {
        await emailjs.sendForm("lo_eklof", "template_syx72mo", contactMe);

        alert("Skickat!");
        contactMe.reset();
      } catch (err) {
        console.error(err);
        alert("Något gick fel");
      }
    });
    
    footer?.classList.remove("hidden")
    footer?.classList.add("flex")

    mainSection.appendChild(workGifDiv);
    mainSection.appendChild(aboutMeDiv);
    mainSection.appendChild(contactMe);
  });
}