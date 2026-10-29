import { site } from "@/lib/site";

export const aboutHero = {
  title: "PROFILE",
  name: "Kristin Adeoti",
  body: "I am a product designer focused on creating user-centered digital experiences that are intuitive, functional, and aligned with both user needs and business goals. I design products informed by the voices of thousands of users I have supported. My approach is shaped by a strong understanding of product friction, service touch-points, and usability, combined with a commitment to thoughtful design and modern AI-enabled workflows.",
  portrait: "/about/photos/portrait.jpg",
  socials: [
    { label: "Behance", href: site.socials.behance, icon: "/icons/behance.svg" },
    { label: "LinkedIn", href: site.socials.linkedin, icon: "/icons/linkedin.svg" },
    { label: "Instagram", href: site.socials.instagram, icon: "/icons/instagram.svg" },
  ],
} as const;

export const outsideDesign = {
  title: "OFF THE CLOCK",
  collage: [
    {
      id: "fitness",
      label: "01. FITNESS",
      image: "/about/photos/gym.jpg",
      className: "cardGym" as const,
    },
    {
      id: "movies",
      label: "02. MOVIES  & TRUE CRIME DOCUMENTARIES",
      image: "/about/photos/cinema.jpg",
      className: "cardCinema" as const,
    },
    {
      id: "karaoke",
      label: "03. KARAOKE",
      image: "/about/photos/karaoke.jpg",
      className: "cardKaraoke" as const,
    },
  ],
  videoPoster: "/about/photos/video-poster.jpg",
  videoSrc: "/about/videos/outside.mp4",
} as const;

export const whyHireMe = {
  title: "WHAT I BRING",
  image: "/about/photos/hire-me.jpg",
  items: [
    {
      title: "1. Support-grounded Empathy",
      body: "Grounded in years of direct user support, I start where real friction lives—building solutions that solve real human pain points, rather than designing solely for aesthetics.",
    },
    {
      title: "2. Designing for Impact",
      body: "I design for conversion, user activation, and retention—aligning every UX decision directly with measurable business growth.",
    },
    {
      title: "3. AI-Powered Workflow",
      body: "I leverage AI to automate repetitive workflows, freeing up time for high-impact strategic decisions and complex problem-solving.",
    },
    {
      title: "4. Design that Ships",
      body: "I take designs through to real, deployed products — using modern AI-assisted workflows to build and ship what I design.",
    },
  ],
} as const;

export const skills = {
  title: "CAPABILITIES",
  rows: [
    ["Product Design", "UX Research & Strategy"],
    ["Usability Testing", "Interactive Prototyping"],
    ["Design Systems", "Motion Design (After Effects, Jitter)"],
    ["Design to Deploy", "Visual Design"],
  ],
} as const;

export const tools = {
  title: "PRODUCTION STACK",
  intro:
    "I build with intention — research and structure first, then design and ship. I treat my stack as a flexible toolkit, pulling what I need for the problem at hand.",
  image: "/about/photos/workspace.jpg",
  items: [
    {
      name: "Adobe After Effects",
      description: "For motion work beyond what Jitter covers.",
      icon: "/about/tools/after-effects.svg",
    },
    {
      name: "Adobe Photoshop",
      description: "Image editing and visual polish.",
      icon: "/about/tools/photoshop.svg",
    },
    {
      name: "Cursor",
      description:
        "My go-to for taking a design from Figma into real, shipped code — wireframing to working product.",
      icon: "/about/tools/cursor.svg",
    },
    {
      name: "Figma",
      description:
        "Where every project starts — structure, systems, and high-fidelity screens before anything else.",
      icon: "/about/tools/figma.svg",
    },
    {
      name: "Generative AI Tools (ChatGPT, Claude, Gemini, etc.)",
      description:
        "Research synthesis, microcopy, ideation, and speeding up the build — woven into the whole process, not just one step.",
      icon: "/about/tools/ai.svg",
    },
    {
      name: "Jitter",
      description:
        "Where I take motion further — building and exporting polished animations Figma's prototyping alone can't produce.",
      icon: "/about/tools/jitter.svg",
    },
    {
      name: "Vercel",
      description:
        "Where the work actually goes live — from local build to a real, deployed product.",
      icon: "/about/tools/vercel.svg",
    },
  ],
} as const;

export const process = {
  title: "EXECUTION WORKFLOW",
  steps: [
    {
      num: "01.",
      title: "EMPATHY & RESEARCH",
      body: "I start by diving deep into the user's world through interviews and observation. By mapping behaviors, emotions, and pain points, I build a strong foundation rooted in real human needs.",
      variant: "surface" as const,
    },
    {
      num: "02.",
      title: "SYNTHESIS & DEFINITION",
      body: "I synthesize research findings to establish a clear, human-centered focus. By identifying market gaps and defining core problem statements, I set measurable goals that guide the entire project vision.",
      variant: "lime" as const,
    },
    {
      num: "03.",
      title: "CONCEPT & IDEATION",
      body: "This phase is all about brainstorming and exploring creative solutions. From rapid sketching to structuring the information architecture, I map out intuitive user flows to set the product's foundation.",
      variant: "surface" as const,
    },
    {
      num: "04.",
      title: "DESIGN & PROTOTYPING",
      body: "I transform abstract concepts into tangible, testable models. Starting with structural wireframes, I build up to interactive, high-fidelity responsive prototypes backed by a cohesive visual design system.",
      variant: "lime" as const,
    },
    {
      num: "05.",
      title: "TESTING & ITERATION",
      body: "I validate the design with real users to uncover friction points and gather actionable feedback. Through structured usability studies and continuous iteration, I ensure the final experience is flawless and intuitive.",
      variant: "surface" as const,
    },
  ],
  images: {
    sticky: "/about/photos/process-sticky.jpg",
    sketch: "/about/photos/process-sketch.jpg",
    desk: "/about/photos/process-desk.jpg",
  },
} as const;
