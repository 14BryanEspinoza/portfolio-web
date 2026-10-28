export interface TimelineEntry {
  title: string;
  date: string;
  description: string;
  contentSide: "left" | "right";
  url?: string;
}

export const timeline: TimelineEntry[] = [
  {
    title: "Inicio de mi Carrera Universitaria",
    date: "2020",
    description:
      "Comencé mi formación profesional en la carrera de Ingeniería en Sistemas, sentando las bases teóricas de la computación.",
    contentSide: "left",
  },
  {
    title: "Desarrollo Web Frontend",
    date: "2022",
    description:
      "Inicié mi camino autodidacta en el desarrollo web, especializándome en tecnologías como Astro, React y TypeScript para crear interfaces interactivas.",
    contentSide: "right",
  },
  {
    title: "Mentors International",
    date: "2024",
    description:
      "Completé con éxito el programa de formación intensiva, fortaleciendo mis habilidades técnicas y blandas en un entorno profesional.",
    contentSide: "left",
    url: import.meta.env.BASE_URL + "mentors.pdf",
  },
  {
    title: "Finalización de Carrera",
    date: "2026",
    description:
      "Culminación de mi carrera profesional, obteniendo el título de Ingeniero en Sistemas.",
    contentSide: "right",
  },
  {
    title: "Próximo paso: camino Full-Stack",
    date: "2027 · Plan",
    description:
      "Plan en preparación para ampliar mi formación en desarrollo Backend y Database, explorando nuevas tecnologías y arquitecturas con el objetivo de consolidarme como desarrollador Full-Stack.",
    contentSide: "left",
  },
];
