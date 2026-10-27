export const site = {
  name: "Noma design",
  email: "nomadesignofficial@gmail.com",
  calUrl: "https://cal.com/kristin-adeoti-z1ueqq",
  resumeUrl: "/My Resume - 2026-10.pdf",
  socials: {
    behance: "https://www.behance.net/nomadesign",
    linkedin: "https://www.linkedin.com/in/kristinadeoti",
    instagram: "https://www.instagram.com/nomadesign.xyz",
  },
} as const;

export const navLinks = [
  { href: "/", label: "Home", id: "home" },
  { href: "/projects", label: "Projects", id: "projects" },
  { href: "/about", label: "About", id: "about" },
] as const;

export type NavActive = (typeof navLinks)[number]["id"] | "default";
