import { mainSection, workGifDiv } from "../utils/domUtils"

export const initWorkSection = () => {
    if(!workGifDiv || !mainSection) return 

        const workGif = document.createElement("img");
            workGif.src = "./giffycanvas3.gif";
            workGif.className = "block w-full h-auto";
            workGif.onload = () => console.log("GIF laddad");
            workGif.onerror = () => console.log("GIF kunde inte laddas");
        
            workGifDiv.className =
              "w-full max-w-[360px] sm:max-w-[420px] md:max-w-[520px] mx-auto lg:mx-0";
            workGifDiv.innerHTML = "";
            workGifDiv.appendChild(workGif);

            mainSection?.appendChild(workGifDiv) 
}