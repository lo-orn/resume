import { FADE_MS, role, ROLE_INTERVAL_MS, roles } from "../utils/constants";

let roleIntervalId: number | null = null;

export function stopRoleLoop() {
    if (roleIntervalId !== null) {
      clearInterval(roleIntervalId);
      roleIntervalId = null;
    }
  }

export function startRoleLoop() {
  if (!role) return;

  let index = 0;
  
    role.textContent = roles[index];
    roleIntervalId = window.setInterval(() => {
    role.classList.add("opacity-0");

    setTimeout(() => {
    index = (index + 1) % roles.length;
    role.textContent = roles[index];
    role.classList.remove("opacity-0");

    }, FADE_MS);
  }, ROLE_INTERVAL_MS);
}
