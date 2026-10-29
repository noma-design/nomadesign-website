import type { CaseStudyData } from "./caseStudy";

export const noma: CaseStudyData = {
  slug: "noma",
  metaTitle: "Noma Design Website",
  metaDescription:
    "Beyond Static Gallery: Engineering an End-to-End Product Design Portfolio — UX case study by Noma Design.",
  tags: ["UX Strategy", "Product Design", "Design-to-Code", "Live Deploy"],
  title:
    "Beyond Static Gallery: Engineering an End-to-End Product Design Portfolio",
  summary:
    "Designed and shipped a portfolio website engineered to showcase end-to-end product thinking, responsive design, and design informed by frontline Customer experience insight.",
  cta: { kind: "status", label: "Live Platform", color: "#24c629" },
  heroImage: "/projects/noma/hero.png",
  heroAlt: "Noma Design portfolio website mockup",
  facts: [
    {
      icon: "/projects/shared/icons/user-check.svg",
      value: "Product Designer",
      label: "Role",
    },
    {
      icon: "/projects/shared/icons/calendar.svg",
      value: "2 Weeks",
      label: "Duration",
    },
    {
      icon: "/projects/shared/icons/layers.svg",
      value: "Adobe, Cursor, Figma, Gemini, Vercel",
      label: "Tools",
    },
  ],
  blocks: [
    {
      type: "split-text",
      heading: "Context & Goals",
      headingId: "noma-context",
      body: "This portfolio was engineered to achieve three strategic objectives: articulate a distinct professional identity, demonstrate end-to-end design execution, and deliver clear proof of value to hiring teams.",
    },
    { type: "divider" },
    {
      type: "split-text",
      heading: "Approach",
      headingId: "noma-approach",
      body: "Rather than sketching low-fidelity wireframes from scratch, an analysis of industry-standard portfolio benchmarks identified the baseline for the portfolio layout.",
    },
    {
      type: "figure",
      caption: "The End-to-End Execution Process",
      src: "/projects/noma/approach-process.png",
      alt: "End-to-end execution process diagram for the Noma Design portfolio",
    },
    {
      type: "figure",
      caption: "Constructing Core Page Layouts",
      src: "/projects/noma/approach-layouts.png",
      alt: "Core page layout wireframes for the Noma Design portfolio",
    },
    { type: "divider" },
    {
      type: "split-text",
      heading: "Polished UI",
      headingId: "noma-ui",
      body: "Every screen is engineered for tactile polish and instant scannability. Dedicated tokens guarantee intentional contrast across both themes, while front-loaded metadata and editorial type eliminate cognitive friction.",
    },
    {
      type: "figure",
      caption: "Dual-Theme Project",
      src: "/projects/noma/polished-dual-theme.png",
      alt: "Dual-theme light and dark mode showcase of the Noma Design portfolio",
    },
    { type: "divider" },
    {
      type: "split-text",
      heading: "Build & Deploy",
      headingId: "noma-build",
      body: "Initial Figma concepts were developed into clean, responsive code using Cursor to build all links, responsive layouts, and interactive states. Final builds are published directly to nomadesign.xyz through Vercel hosting.",
    },
    {
      type: "figure",
      caption: "From Figma Draft Layout to Code",
      src: "/projects/noma/build-deploy.png",
      alt: "Side-by-side comparison of Figma design and coded implementation",
    },
    { type: "divider" },
    {
      type: "split-items",
      heading: "Key Takeaways",
      headingId: "noma-takeaways",
      items: [
        {
          n: "1",
          title: "Accelerated Execution via Benchmarking",
          body: "Deconstructing proven portfolios bypassed the need for throwaway wireframes, shifting the focus immediately to high-fidelity execution and polish.",
        },
        {
          n: "2",
          title: "Frontline Insight as UX Research",
          body: "Grounding the design narrative in real-world customer experience established a distinct strategic perspective that sets the work apart from purely visual design.",
        },
        {
          n: "3",
          title: "Production-Ready Design Systems",
          body: "Deploying with Cursor and Vercel proved that design systems deliver the highest value when carried seamlessly from Figma into production code on a live domain.",
        },
      ],
    },
  ],
  moreProjects: {
    heading: "MORE PROJECTS",
    seeMoreHref: "/projects",
    seeMoreLabel: "See More Work",
    slugs: ["jumia", "roam"],
  },
};
