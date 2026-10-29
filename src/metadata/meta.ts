const site = import.meta.env.SITE;
const base = import.meta.env.BASE_URL;

interface MetaProps {
  title: string;
  description: string;
  keywords: string;
  author: string;
  siteName: string;
  image: string;
  imageAlt: string;
  imageWidth: number;
  imageHeight: number;
  imageType: string;
  locale: string;
}

export const meta: MetaProps = {
  title: "Bryan Espinoza — Desarrollador Frontend",
  description:
    "Portafolio de Bryan Espinoza, Desarrollador Frontend. Descubre proyectos web modernos, rápidos y accesibles desarrollados con Astro, TypeScript y Tailwind CSS.",
  keywords:
    "Bryan Espinoza, 14BryanEspinoza, portafolio web, desarrollador frontend, frontend developer, desarrollo web, Astro, TypeScript, JavaScript, Tailwind CSS, UI/UX, responsive design, desarrollador web Nicaragua",
  author: "14BryanEspinoza",
  siteName: "Bryan Espinoza - Frontend Developer",
  image: new URL(`${base}og-image.png`, site).href,
  imageAlt: "Vista previa del portafolio de Bryan Espinoza",
  imageWidth: 1200,
  imageHeight: 630,
  imageType: "image/png",
  locale: "es_NI",
};
