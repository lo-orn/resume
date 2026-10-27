export const profile = {
  name: ["Lo Eklöf", "Örnestål"],
  roles: ["Frontend Developer", "Art Director"],
  about:
    "Former art director, now studying frontend development. Background in fashion and tech. I get a kick out of seeing code turn into real things online, and now I want to build stuff people actually use while I keep growing technically.",
  email: "lovisaornestal@gmail.com",
  phone: { display: "+46 76 394 21 89", href: "tel:+46763942189" },
  github: "https://github.com/lo-orn",
  linkedin: "https://www.linkedin.com/in/lovisa-ornestal/",
};

export type Job = {
  role: string;
  company: string;
  period: string;
  description: string;
};

export const jobs: Job[] = [
  {
    role: "Frontend Developer Intern",
    company: "Most Studios",
    period: "2026",
    description:
      "Frontend internship at a studio where design and code meet.",
  },
  {
    role: "Art Director",
    company: "Marshall Group",
    period: "2022–2025",
    description:
      "Created visual concepts for Marshall and Urbanears product launches. Worked on both large-scale global campaigns and quick digital content, together with product owners and production.",
  },
  {
    role: "Art Director",
    company: "Sneakersnstuff",
    period: "2019–2022",
    description:
      "Worked with brands like Nike, Adidas and New Balance on everything from big campaigns to smaller editorial projects. Handled concepts and execution, working closely with clients and production teams.",
  },
];

export const education = [
  { degree: "Frontend Developer, HVE", school: "Medieinstitutet", period: "2025–2027" },
  { degree: "BA Art Direction", school: "Westerdals Oslo ACT", period: "2015–2018" },
];

export const skills: { group: string; items: string[] }[] = [
  {
    group: "Code",
    items: ["TypeScript", "JavaScript", "React", "Next.js", "Node.js", "HTML", "CSS", "SCSS", "Tailwind", "MongoDB", "Vitest"],
  },
  {
    group: "Tools",
    items: ["Git & GitHub", "Postman", "Figma", "Photoshop", "InDesign"],
  },
  {
    group: "Craft",
    items: ["Art direction", "Concepting", "Scrum"],
  },
];
