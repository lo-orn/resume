import { skills } from "../utils/utils";
import { jobs } from "../utils/workUtils";

export const projectsHtml = `
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
      <h3 class="text-xl font-extrabold">Just Now</h3>
      <div class="mt-3 flex gap-4">
        <a href="https://lo-justnow.netlify.app/" target="_blank" rel="noreferrer"
          class="border-4 border-black px-4 py-2 font-bold shadow-[3px_3px_0_0_#000] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none">
          Live
        </a>
        <a href="https://github.com/lo-orn/just-now" target="_blank" rel="noreferrer"
          class="border-4 border-black px-4 py-2 font-bold shadow-[3px_3px_0_0_#000] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none">
          GitHub
        </a>
        
      </div>
      </div>

          <div class="border-4 border-black bg-white p-4 shadow-[6px_6px_0_0_#000]">
      <h3 class="text-xl font-extrabold">Webshop</h3>
      <div class="mt-3 flex gap-4">
        <a href="https://theiconicseries.netlify.app/" target="_blank" rel="noreferrer"
          class="border-4 border-black px-4 py-2 font-bold shadow-[3px_3px_0_0_#000] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none">
          Live
        </a>
        <a href="https://github.com/lo-orn/webshop" target="_blank" rel="noreferrer"
          class="border-4 border-black px-4 py-2 font-bold shadow-[3px_3px_0_0_#000] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none">
          GitHub
        </a>
    </div>
  </div>
`;

export const workHtml = `
  <ul class="space-y-4">
  ${jobs.map(job =>`
    <li id="${job.id}" class="cursor-pointer border-4 border-black bg-white p-4 shadow-[6px_6px_0_0_#000]">
    <p class="font-extrabold">${job.title}</p>
    <p class="text-sm font-bold">${job.period}</p>
    <p class="text-xs mt-2 opacity-60">Tap for details →</p>
  </li>
  `
  ).join("")}
  
  </ul>
`;

export const educationHtml = `
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

export let skillsHtml = `<div class="flex flex-wrap justify-center gap-2">
${skills.map((skill) =>
      `<span class="border-2 bg-white text-sm font-bold border-black px-3 py-1">${skill.name}</span>`
  ).join("")}
</div>
`;