export type Project = {
  title: string;
  summary: string;
  stack?: string[];
  live?: string;
  github?: string;
  why?: string;
  learned?: string;
};

export const projects: Project[] = [
  {
    title: "Ladan",
    summary:
      "Booking system for the staff at hotel Ladan: daily overview, bookings and a guest register on top of a REST API. Built in a team of three.",
    stack: ["Next.js", "TypeScript", "React", "Tailwind", "REST API"],
    live: "https://hotel-api-henna.vercel.app/",
    github: "https://github.com/lo-orn/hotel-api",
  },
  {
    title: "The Iconic Series",
    summary: "Webshop with product listings and a cart.",
    live: "https://theiconicseries.netlify.app/",
    github: "https://github.com/lo-orn/webshop",
  },
  {
    title: "Just Now",
    summary: "A site about nature.",
    live: "https://lo-justnow.netlify.app/",
    github: "https://github.com/lo-orn/just-now",
  },
  {
    title: "Todo List",
    summary: "A to-do app.",
    live: "https://lo-orn-todos.netlify.app/",
    github: "https://github.com/lo-orn/the-todos",
  },
];
