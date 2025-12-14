import "./style.css";
import emailjs from "@emailjs/browser";

const title = document.getElementById("title");
const role = document.getElementById("role") as HTMLHeadingElement | null;

const workGifDiv = document.getElementById("workGifDiv") as HTMLDivElement | null;
const aboutMeDiv = document.getElementById("aboutMeDiv") as HTMLDivElement | null;
const mainSection = document.getElementById("mainSection") as HTMLDivElement | null;
const contactMe = document.getElementById("contactMe") as HTMLFormElement

const MOVE_TITLE_AFTER_MS = 1500;
const ROLE_INTERVAL_MS = 2000;
const FADE_MS = 500;

let roleIntervalId: number | null = null;



function moveTitleTopLeft() {
  if (!title) return;

  title.remove();

  const newTitle = document.createElement("h2");
  newTitle.textContent = "Lo Eklöf Örnestål";
  newTitle.className =
    "absolute top-0 left-0 m-10 text-3xl font-medium text-white";
  document.body.appendChild(newTitle);
}

function startRoleLoop() {
  if (!role) return;

  const roles = ["Art Director", "Frontend Developer"];
  let index = 0;

  role.textContent = roles[index];

  roleIntervalId = window.setInterval(() => {
    role.classList.add("opacity-0");

    setTimeout(() => {
      index = index + 1;
      if (index >= roles.length) index = 0;

      role.textContent = roles[index];
      role.classList.remove("opacity-0");
    }, FADE_MS);
  }, ROLE_INTERVAL_MS);
}

function intro() {
  setTimeout(moveTitleTopLeft, MOVE_TITLE_AFTER_MS);
  startRoleLoop();
}

function finalSlide() {
  if (!role) {
    console.log("role saknas");
    return;
  }

  role.addEventListener("click", () => {
    console.log("CLICK på role!");

    // stoppa loopen innan vi tar bort role
    if (roleIntervalId !== null) {
      clearInterval(roleIntervalId);
      roleIntervalId = null;
    }

    role.remove();

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

    const workGif = document.createElement("img");
    workGif.src = "/ezgif-13c38f509407bf.gif";
    workGif.className = "w-80 block";
    workGif.onload = () => console.log("GIF laddad");
    workGif.onerror = () => console.log("GIF kunde inte laddas");

    workGifDiv.className = "flex justify-start items-start pl-10 pt-10";
    workGifDiv.innerHTML = "";
    workGifDiv.appendChild(workGif);

    const aboutMeText = document.createElement("p");
    aboutMeText.textContent =
      "I'm a conceptual art director with years of experience working across fashion, lifestyle, and tech. I'm currently transitioning into a more technical role and studying frontend development, where I combine my creative background with a growing technical skill set. I work with HTML, CSS, JavaScript, SCSS, and TypeScript, and have a particular interest for Tailwind.";
    aboutMeText.className = "text-left text-white max-w-md leading-4 mt-6 text-m font-medium tracking-tight";

    aboutMeDiv.innerHTML = "";
    aboutMeDiv.appendChild(aboutMeText);

    contactMe?.classList.remove("hidden")

    emailjs.init("oeL4wbVK6MtNg_Or5");

    contactMe.addEventListener("submit", async (e) => {
      e.preventDefault();
      try {
        await emailjs.sendForm(
          "lo_eklof",
          "template_syx72mo",
          contactMe
        );
    
        alert("Skickat!");
        contactMe.reset();
      } catch (err) {
        console.error(err);
        alert("Något gick fel");
      }
      
      
    })

    mainSection.appendChild(workGifDiv);
    mainSection.appendChild(aboutMeDiv);
    mainSection.appendChild(contactMe)
  });
}


finalSlide();
intro();



