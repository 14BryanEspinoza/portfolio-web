interface MetaProps {
  title: string;
  description: string;
  keywords: string;
  author: string;
  canonical: string;
  image: string;
  imageAlt: string;
}

export const meta: MetaProps = {
  title: "Portfolio Web - Bryan Espinoza",
  description:
    "Portafolio de Bryan Espinoza, Desarrollador Frontend. Descubre proyectos web modernos, rápidos y accesibles desarrollados con Astro, TypeScript y Tailwind CSS.",
  keywords:
    "Bryan Espinoza, 14BryanEspinoza, portafolio web, desarrollador frontend, frontend developer, desarrollo web, Astro, TypeScript, JavaScript, Tailwind CSS, UI/UX, responsive design, desarrollador web Nicaragua",
  author: "14BryanEspinoza",
  image: "https://14bryanespinoza.github.io/portfolio-web/preview.png",
  imageAlt: "Preview del proyecto Portfolio Web",
  canonical: import.meta.env.BASE_URL,
};
