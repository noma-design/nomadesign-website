export const projectsLanding = {
  badge: "Case Studies",
  titleMuted: "Turning complex problems into",
  titleEmphasis: "seamless products.",
  body: "A curated collection of end-to-end product design case studies—ranging from early-stage user research to final interface execution.",
} as const;

export const projectCards = [
  {
    slug: "styches" as const,
    href: "/projects/styches",
    title: "Turning the Bespoke Tailoring Journey Into a Self-Service Experience",
    meta: "Service Design · Mobile & Web App",
    image: "/projects/cards/styches.png",
  },
  {
    slug: "noma" as const,
    href: "/projects/noma",
    title:
      "Beyond Static Gallery: Engineering an End-to-End Product Design Portfolio",
    meta: "Personal Brand · Website Design",
    image: "/projects/cards/noma.png",
  },
  {
    slug: "jumia" as const,
    href: "/projects/jumia",
    title:
      "Redesigning Jumia’s Empty Cart to Increase Average Order Value (AOV)",
    meta: "E-commerce CRO · Mobile App Redesign",
    image: "/projects/cards/jumia.jpg",
  },
  {
    slug: "roam" as const,
    href: "/projects/roam",
    title:
      "Transforming a Legacy IoT SIM Portal to Eliminate Support Friction",
    meta: "Enterprise SaaS · Web App Redesign",
    image: "/projects/cards/roam.jpg",
  },
  {
    slug: "yelvio" as const,
    href: "/projects/yelvio",
    title: "Redesigning Yelvio’s Digital Storefront for D2C Growth",
    meta: "D2C E-Commerce · Website Redesign",
    image: "/projects/cards/yelvio.jpg",
  },
  {
    slug: "mayflower" as const,
    href: "/projects/mayflower",
    title:
      "From Third-Party to Custom Platform: Rebuilding Mayflower’s Web Experience",
    meta: "E-commerce & Bookings · Website Design",
    image: "/projects/cards/mayflower.jpg",
    status: "In Progress" as const,
  },
] as const;
