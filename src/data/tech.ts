interface Props {
  label: string;
  icon: string;
  level: "Principiante" | "Intermedio" | "Avanzado";
}

export const techTools: Props[] = [
  {
    label: "Git",
    icon: "simple-icons:git",
    level: "Intermedio",
  },
  {
    label: "GitHub",
    icon: "simple-icons:github",
    level: "Intermedio",
  },
  {
    label: "Pnpm",
    icon: "simple-icons:pnpm",
    level: "Intermedio",
  },
  {
    label: "Vite",
    icon: "simple-icons:vite",
    level: "Principiante",
  },
];

export const techFrontend: Props[] = [
  {
    label: "HTML5",
    icon: "simple-icons:html5",
    level: "Avanzado",
  },
  {
    label: "CSS3",
    icon: "simple-icons:css",
    level: "Avanzado",
  },
  {
    label: "JavaScript",
    icon: "simple-icons:javascript",
    level: "Intermedio",
  },
  {
    label: "TypeScript",
    icon: "simple-icons:typescript",
    level: "Intermedio",
  },
  {
    label: "TailwindCSS",
    icon: "simple-icons:tailwindcss",
    level: "Intermedio",
  },
  {
    label: "Astro",
    icon: "simple-icons:astro",
    level: "Intermedio",
  },
  {
    label: "React",
    icon: "simple-icons:react",
    level: "Principiante",
  },
];

export const techBackend: Props[] = [
  {
    label: "Node.js",
    icon: "simple-icons:nodedotjs",
    level: "Principiante",
  },
  {
    label: "Express",
    icon: "simple-icons:express",
    level: "Principiante",
  },
];

export const techDatabase: Props[] = [
  {
    label: "PostgreSQL",
    icon: "simple-icons:postgresql",
    level: "Principiante",
  },
  {
    label: "SQLite",
    icon: "simple-icons:sqlite",
    level: "Principiante",
  },
];

export const techTest: Props[] = [
  {
    label: "ESLint",
    icon: "simple-icons:eslint",
    level: "Intermedio",
  },
  {
    label: "Prettier",
    icon: "simple-icons:prettier",
    level: "Intermedio",
  },
];

export const techIA: Props[] = [
  {
    label: "Antigravity",
    icon: "simple-icons:googlegemini",
    level: "Intermedio",
  },
  {
    label: "OpenCode",
    icon: "simple-icons:opencode",
    level: "Intermedio",
  },
  {
    label: "Warp Terminal",
    icon: "simple-icons:warp",
    level: "Intermedio",
  },
];
