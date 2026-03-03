import { contactMe, footer, mainSection } from "../utils/domUtils";
import emailjs from "@emailjs/browser";

export const initContactSection = () => {
    if (!contactMe || !mainSection) return

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
})

 contactMe?.classList.remove("hidden");
   footer?.classList.remove("hidden")
    footer?.classList.add("flex")

    mainSection.appendChild(contactMe);

}
