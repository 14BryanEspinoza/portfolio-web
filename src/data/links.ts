interface LinksProps {
  url: string;
  label?: string;
  icon?: string;
}

export const linkNavbar: LinksProps[] = [
  { url: import.meta.env.BASE_URL, label: "Inicio", icon: "lucide:home" },
  {
    url: import.meta.env.BASE_URL + "#about",
    label: "Sobre Mi",
    icon: "lucide:user",
  },
  {
    url: import.meta.env.BASE_URL + "#stack",
    label: "Stack",
    icon: "lucide:code",
  },
  {
    url: import.meta.env.BASE_URL + "#projects",
    label: "Proyectos",
    icon: "lucide:folder",
  },
  {
    url: import.meta.env.BASE_URL + "#contact",
    label: "Contacto",
    icon: "lucide:mail",
  },
];

export const socialNetworks: LinksProps[] = [
  {
    url: "https://www.linkedin.com/in/14bryanespinoza",
    icon: "simple-icons:linkedin",
  },
  {
    url: "https://github.com/14bryanespinoza",
    icon: "simple-icons:github",
  },
  {
    url: "https://www.facebook.com/14bryanespinoza",
    icon: "simple-icons:facebook",
  },
  {
    url: "https://twitter.com/14bryanespinoza",
    icon: "simple-icons:x",
  },
  {
    url: "mailto:14bryespinoza@gmail.com",
    icon: "simple-icons:gmail",
  },
];
