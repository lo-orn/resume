import { jobs } from "../utils/workUtils";

//modals

function createOverlay() {
    const overlay = document.createElement("div");
    overlay.className = "fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4";
    return overlay;
  }
  
  function setupCloseHandlers(overlay: HTMLElement, modal: HTMLElement) {
    const close = () => overlay.remove();
    modal.querySelector("button")?.addEventListener("click", close);
    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) close();
    });
  }

export function openJobDetail(jobId: string) {
  const job = jobs.find(j => j.id === jobId)
  if(!job) return;

  const overlay = createOverlay();

  const modal = document.createElement("div");
  modal.className = "relative w-full max-w-xl bg-white border-4 border-black shadow-[10px_10px_0_0_#000]";

  modal.innerHTML = `
    <button class=" mb-2 absolute top-4 right-4 w-10 h-10 bg-white border-4 border-black font-black">✕</button>
    <div class="p-6 text-black">
      <h2 class="mt-6 text-4xl font-extrabold mb-4">${job.title}</h2>
      ${job.description}
    </div>
  `;
overlay.appendChild(modal);
document.body.appendChild(overlay);

setupCloseHandlers(overlay, modal);


  
}

export function openModal(title: string, contentHtml: string) {
  const overlay = createOverlay();

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

  if (title === "WORK EXPERIENCE") {
  jobs.forEach(job => {
    const jobElement = modal.querySelector(`#${job.id}`);
    jobElement?.addEventListener("click", () => {
      openJobDetail(job.id)

    })
  
  })
}
setupCloseHandlers(overlay, modal);

}