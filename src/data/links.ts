interface LinksProps {
  url: string;
  label?: string;
  icon?: string;
}

export const contactEmail = "14bryespinoza@gmail.com";

export const linkNavbar: LinksProps[] = [
  { url: import.meta.env.BASE_URL, label: "Inicio", icon: "lucide:home" },
  {
    url: import.meta.env.BASE_URL + "#about",
    label: "Sobre mí",
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
    label: "LinkedIn",
    icon: "simple-icons:linkedin",
  },
  {
    url: "https://github.com/14bryanespinoza",
    label: "GitHub",
    icon: "simple-icons:github",
  },
  {
    url: "https://www.facebook.com/14bryanespinoza",
    label: "Facebook",
    icon: "simple-icons:facebook",
  },
  {
    url: "https://twitter.com/14bryanespinoza",
    label: "X (Twitter)",
    icon: "simple-icons:x",
  },
  {
    url: `mailto:${contactEmail}`,
    label: "Email",
    icon: "simple-icons:gmail",
  },
];

const findSocial = (label: string): LinksProps => {
  const network = socialNetworks.find((item) => item.label === label);

  if (!network) throw new Error(`Missing social network: ${label}`);

  return network;
};

export const linkedin = findSocial("LinkedIn");
export const github = findSocial("GitHub");
