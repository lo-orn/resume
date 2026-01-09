import "./style.css";
import emailjs from "@emailjs/browser";

const title = document.getElementById("title") as HTMLHeadElement;
const role = document.getElementById("role") as HTMLHeadingElement | null;
const newTitle = document.getElementById("newTitle") as HTMLHeadElement;

const workGifDiv = document.getElementById(
  "workGifDiv"
) as HTMLDivElement | null;
const aboutMeDiv = document.getElementById(
  "aboutMeDiv"
) as HTMLDivElement | null;
const mainSection = document.getElementById(
  "mainSection"
) as HTMLDivElement | null;
const contactMe = document.getElementById("contactMe") as HTMLFormElement;
const linkedin = document.getElementById("linkedin") as HTMLElement | null;
const github = document.getElementById("github") as HTMLElement | null;
const phone = document.getElementById("phone") as HTMLParagraphElement;
const roleHint = document.getElementById("roleHint");

const MOVE_TITLE_AFTER_MS = 1000;
const ROLE_INTERVAL_MS = 1500;
const FADE_MS = 500;

let roleIntervalId: number | null = null;

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
  setTimeout(() => {
    title.classList.add("hidden");
    newTitle.classList.remove("hidden");

    startRoleLoop();
    role?.classList.remove("opacity-0"); // fade in

    roleHint?.classList.remove("opacity-0");
  }, MOVE_TITLE_AFTER_MS);
}

function finalSlide() {
  if (!role) {
    console.log("role saknas");
    return;
  }

  role.addEventListener("click", () => {
    console.log("CLICK på role!");

    if (roleIntervalId !== null) {
      clearInterval(roleIntervalId);
      roleIntervalId = null;
    }

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
    navMenu.className = "flex pl-2 gap-3 items-center text-white lg:ml-auto";

    const workGif = document.createElement("img");
    workGif.src = "/ezgif-13c38f509407bf.gif";
    workGif.className = "block w-full h-auto";
    workGif.onload = () => console.log("GIF laddad");
    workGif.onerror = () => console.log("GIF kunde inte laddas");

    workGifDiv.className =
      "w-full max-w-[360px] sm:max-w-[420px] md:max-w-[520px] mx-auto lg:mx-0";
    workGifDiv.innerHTML = "";
    workGifDiv.appendChild(workGif);

    const aboutMeText = document.createElement("p");
    aboutMeText.textContent =
      "I'm a conceptual art director turned frontend developer, combining years of experience in fashion, lifestyle, and tech with a growing technical practice. I focus on translating strong visual concepts into scalable, well-structured interfaces using HTML, CSS, JavaScript, SCSS, and TypeScript, and I’m especially drawn to Tailwind and design systems.";

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
    github?.classList.remove("hidden");
    linkedin?.classList.remove("hidden");
    phone.classList.remove("hidden");

    mainSection.appendChild(workGifDiv);
    mainSection.appendChild(aboutMeDiv);
    mainSection.appendChild(contactMe);
  });
}

function openModal(title: any, contentHtml: any) {
  const overlay = document.createElement("div");
  overlay.className =
    "fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4";

  const modal = document.createElement("div");
  modal.className =
    "relative w-full max-w-xl bg-red-600 border-4 border-black shadow-[10px_10px_0_0_#000]";

  modal.innerHTML = `
    <button class="absolute top-4 right-4 w-10 h-10 bg-white border-4 border-black font-black">✕</button>
    <div class="p-6 text-black">
      <h2 class="text-4xl font-extrabold mb-4">${title}</h2>
      ${contentHtml}
    </div>
  `;
  overlay.appendChild(modal);
  document.body.appendChild(overlay);
  const close = () => overlay.remove();

  modal.querySelector("button")?.addEventListener("click", close);
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) close();
  });
}

const projectsHtml = `
  <div class="mt-3 flex flex-wrap gap-3">
    <div class="border-4 border-black bg-white p-4 shadow-[6px_6px_0_0_#000]">
      <h3 class="text-xl font-extrabold">Todo List</h3>
      <div class="mt-3 flex gap-4">
        <a href="https://lo-orn-todos.netlify.app/" target="_blank" rel="noreferrer"
          class="border-4 border-black px-4 py-2 font-bold shadow-[3px_3px_0_0_#000] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none">
          Live
        </a>
        <a href="https://github.com/lo-orn/the-todos" target="_blank" rel="noreferrer"
          class="border-4 border-black px-4 py-2 font-bold shadow-[3px_3px_0_0_#000] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none">
          GitHub
        </a>
      </div>
    </div>

    <div class="border-4 border-black bg-white p-4 shadow-[6px_6px_0_0_#000]">
      <h3 class="text-xl font-extrabold">Weather App</h3>
      <div class="mt-3 flex gap-4">
        <a href="https://lo-weather.netlify.app/" target="_blank" rel="noreferrer"
          class="border-4 border-black px-4 py-2 font-bold shadow-[3px_3px_0_0_#000] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none">
          Live
        </a>
        <a href="https://github.com/lo-orn/weather_app" target="_blank" rel="noreferrer"
          class="border-4 border-black px-4 py-2 font-bold shadow-[3px_3px_0_0_#000] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none">
          GitHub
        </a>
      </div>
    </div>
  </div>
`;

const workHtml = `
  <ul class="space-y-4">
    <li class="border-4 border-black bg-white p-4 shadow-[6px_6px_0_0_#000]">
      <p class="font-extrabold">Art Director – Sneakersnstuff</p>
      <p class="text-sm font-bold">2019–2022</p>
    </li>
    <li class="border-4 border-black bg-white p-4 shadow-[6px_6px_0_0_#000]">
      <p class="font-extrabold">Art Director – Marshall Group</p>
      <p class="text-sm font-bold">2022–2025</p>
    </li>
  </ul>
`;

const educationHtml = `
  <ul class="space-y-4">
    <li class="border-4 border-black bg-white p-4 shadow-[6px_6px_0_0_#000]">
      <p class="font-extrabold">BA – Art Direction</p>
      <p class="text-sm font-bold">Westerdals Oslo ACT (2015–2018)</p>
    </li>
    <li class="border-4 border-black bg-white p-4 shadow-[6px_6px_0_0_#000]">
      <p class="font-extrabold">HVE – Frontend Developer</p>
      <p class="text-sm font-bold">Medieinstitutet (2025–2027)</p>
    </li>
  </ul>
`;

document.getElementById("projectsDiv")?.addEventListener("click", () => {
  openModal("PROJECTS", projectsHtml);
});
document.getElementById("workDiv")?.addEventListener("click", () => {
  openModal("WORK EXPERIENCE", workHtml);
});

document.getElementById("educationDiv")?.addEventListener("click", () => {
  openModal("EDUCATION", educationHtml);
});

finalSlide();
intro();
