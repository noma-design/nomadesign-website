import type { CaseStudyData } from "./caseStudy";

export const yelvio: CaseStudyData = {
  slug: "yelvio",
  metaTitle: "Yelvio — Noma Design",
  metaDescription:
    "Redesigning Yelvio's digital storefront for D2C growth — UX case study by Noma Design.",
  tags: ["UX Strategy", "Product Design", "Design-to-Code", "Live Deploy"],
  title: "Redesigning Yelvio\u2019s Digital Storefront for D2C Growth",
  summary:
    "Designing and deploying a strategic holding experience for Yelvio, a direct-to-consumer brand transitioning into a broader lifestyle store, ensuring continuous sales and audience growth while the primary website is being rebuilt.",
  cta: { kind: "single-link", label: "Visit Live Site", href: "https://yelvio.com/" },
  heroImage: "/projects/yelvio/hero.png",
  heroAlt:
    "Yelvio holding page shown across desktop and mobile devices",
  facts: [
    {
      icon: "/projects/shared/icons/user-check.svg",
      value: "Product Designer",
      label: "Role",
    },
    {
      icon: "/projects/shared/icons/calendar.svg",
      value: "1 Week",
      label: "Duration",
    },
    {
      icon: "/projects/shared/icons/layers.svg",
      value: "Cursor, Figma, Gemini, Netlify",
      label: "Tools",
    },
  ],
  blocks: [
    /* ── Background ────────────────────────────────────── */
    {
      type: "split-text",
      heading: "Background",
      headingId: "yelvio-background",
      body: "Yelvio began as a direct-to-consumer store for workspace essentials before scaling into a broader lifestyle brand. With an expanded product catalog finalized, the existing single-category storefront required a complete architectural rebuild to support multi-category navigation and higher inventory volume. Taking the domain offline during production would sever active customer touchpoints and forfeit inbound search equity.\n\nThe Objective: Deploy a strategic interim bridge experience that preserves search visibility, captures launch demand, and reroutes active buyers to regional partner marketplaces while engineering the new e-commerce storefront.",
    },
    { type: "divider" },

    /* ── Research & Strategy ───────────────────────────── */
    {
      type: "split-items",
      heading: "Research & Strategy",
      headingId: "yelvio-research",
      items: [
        {
          n: "1",
          title: "Preventing Lost Traffic",
          body: "While the primary web storefront was being paused, Yelvio\u2019s products remained active on regional partner marketplaces. The strategy was to reroute direct traffic from the website to these regional partners so sales could continue uninterrupted.",
        },
      ],
    },
    {
      type: "figure",
      caption: "Regional Marketplace Routing Strategy",
      src: "/projects/yelvio/research.png",
      alt: "Yelvio regional marketplace routing strategy diagram",
    },
    { type: "divider" },

    /* ── Proposed Solution ─────────────────────────────── */
    {
      type: "split-items",
      heading: "Proposed Solution",
      headingId: "yelvio-solution",
      items: [
        {
          n: "1",
          title: "The Strategic Holding Experience",
          body: "Designed and deployed a functional bridge experience instead of a generic \u201cUnder Construction\u201d page. This design communicates the rebrand, captures emails to build a relaunch audience, and provides localized routing links so users can purchase existing stock via Yelvio\u2019s third-party partners.",
        },
      ],
    },
    { type: "divider" },

    /* ── Polished UI ───────────────────────────────────── */
    {
      type: "split-items",
      heading: "Polished UI",
      headingId: "yelvio-polished-ui",
      items: [
        {
          n: "1",
          title: "Frictionless Regional Routing",
          body: "Created a clean, stacked list of 3 regional country buttons\u2014Estonia, Latvia, and Lithuania\u2014that instantly direct visitors to the active partner marketplace store in their respective country with a single tap.",
        },
      ],
    },
    {
      type: "figure",
      src: "/projects/yelvio/polished-ui-1.png",
      alt: "Yelvio regional routing UI showing country selection buttons",
      lift: true,
    },
    {
      type: "split-items",
      heading: "Polished UI",
      headingId: "yelvio-polished-ui-2",
      hideHeading: true,
      items: [
        {
          n: "2",
          title: "Built, Coded and Deployed",
          body: "Deployed the holding page directly into production using Cursor and Netlify, shipping a performant, lightweight web experience that established an active, premium brand presence while the backend catalog overhaul was underway.",
        },
      ],
    },
    {
      type: "figure",
      src: "/projects/yelvio/polished-ui-2.png",
      alt: "Yelvio deployed holding page showing desktop browser view",
    },
    {
      type: "split-items",
      heading: "Polished UI",
      headingId: "yelvio-polished-ui-3",
      hideHeading: true,
      items: [
        {
          n: "3",
          title: "Responsive Adaptation",
          body: "To guarantee a flawless experience across all devices, the design layout was adapted around three breakpoints, ensuring consistent visual hierarchy, readable typography, and effortless touch targets on every screen size.",
        },
      ],
    },
    {
      type: "figure",
      src: "/projects/yelvio/polished-ui-3.png",
      alt: "Yelvio responsive design across desktop, tablet, and mobile breakpoints",
      frameBg: "#e5e5e5",
    },
    { type: "divider" },

    /* ── Impact ────────────────────────────────────────── */
    {
      type: "split-items",
      heading: "Impact",
      headingId: "yelvio-impact",
      items: [
        {
          n: "1",
          title: "Zero Revenue Downtime",
          body: "By strategically routing existing D2C traffic to regional marketplaces, Yelvio successfully maintains its sales pipeline during a major brand overhaul.",
        },
        {
          n: "2",
          title: "Audience Growth",
          body: "The integrated email capture form continuously collects warm leads, ensuring the business has an audience ready for the official storefront relaunch.",
        },
      ],
    },
    { type: "divider" },

    /* ── Key Takeaways ─────────────────────────────────── */
    {
      type: "split-text",
      heading: "Key Takeaways",
      headingId: "yelvio-takeaways",
      body: "Product design is just as much about business continuity as it is about full product UI. Shipping the holding page solved an immediate operational problem while giving the founder space to redefine the business.\n\nWhat\u2019s Next? Currently engineering a modular layout featuring advanced side-filters, scalable product grids, and a brand-agnostic UI system where third-party products sit naturally alongside Yelvio\u2019s native inventory.",
    },
  ],
  moreProjects: {
    heading: "MORE PROJECTS",
    seeMoreHref: "/projects",
    seeMoreLabel: "See More Work",
    slugs: ["styches", "noma"],
  },
};
