import type { CaseStudyData } from "./caseStudy";

export const mayflower: CaseStudyData = {
  slug: "mayflower",
  metaTitle: "Mayflower",
  metaDescription:
    "From third-party to custom platform: rebuilding Mayflower's web experience — UX case study by Noma Design.",
  tags: ["UX Strategy", "Product Design", "Design Systems", "Shopify"],
  title:
    "From Third-Party to Custom Platform: Rebuilding Mayflower\u2019s Web Experience",
  summary:
    "Designing a hybrid e-commerce and appointment booking platform for a specialized Tallinn hair studio\u2014engineered from custom design tokens to a production Shopify build.",
  cta: { kind: "status", label: "In Progress", color: "#c6923f" },
  heroImage: "/projects/mayflower/hero.jpg",
  heroAlt:
    "Mayflower hair studio website mockup showing product catalog and booking interface",
  facts: [
    {
      icon: "/projects/shared/icons/user-check.svg",
      value: "Product Designer",
      label: "Role",
    },
    {
      icon: "/projects/shared/icons/calendar.svg",
      value: "8 Weeks (Est. for full rollout)",
      label: "Duration",
    },
    {
      icon: "/projects/shared/icons/layers.svg",
      value: "Cursor, Figma, Gemini, Shopify, Instant",
      label: "Tools",
    },
  ],
  blocks: [
    /* ── Background ─────────────────────────────────────── */
    {
      type: "split-text",
      heading: "Background",
      headingId: "mayflower-background",
      body: "Mayflower operates as a specialized hair and beauty studio in Tallinn, currently constrained by a third-party booking tool that lists services and products but lacks payment processing, digital checkout, and sales infrastructure. The tool functions solely as an appointment calendar, forcing all retail transactions and client payments to happen offline.\n\nThe goal is to design and build a unified hybrid Shopify platform to consolidate service bookings and retail checkout into a single, transactional storefront.",
    },
    { type: "divider" },

    /* ── Research & Strategy ────────────────────────────── */
    {
      type: "split-text",
      heading: "Research & Strategy",
      headingId: "mayflower-research",
      body: "Audited industry benchmarks\u2014including Heat Free Hair, Ayya Hair, Notino, and the current HeyGoldie page\u2014to establish the visual direction, catalog layout, and booking flow. The audit included reviewing the existing inventory of 15 main categories and over 60 individual products.",
    },
    { type: "divider" },

    /* ── Core Deliverables ──────────────────────────────── */
    {
      type: "split-items",
      heading: "Core Deliverables",
      headingId: "mayflower-deliverables",
      items: [
        {
          n: "1",
          title: "One Store Front, Two Operational Engines",
          body: "A unified architecture that handles both retail orders for the business\u2019 products and calendar bookings for its salon service.",
        },
        {
          n: "2",
          title: "Flexible Payment Options",
          body: "A checkout system that supports online card payments, bank transfers, and in-person/cash payment options.",
        },
        {
          n: "3",
          title: "Multi-Modal Order Fulfillment",
          body: "Structure a versatile delivery and pickup system for product orders which will support standard shipping alongside options for in-person collection\u2014covering both traditional cash-on-pickup and customer-ordered courier dispatch.",
        },
      ],
    },
    { type: "divider" },

    /* ── Design System & Visual Tokens ──────────────────── */
    {
      type: "split-text",
      heading: "Design System & Visual Tokens",
      headingId: "mayflower-design-system",
      body: "Established a foundational token architecture\u2014pairing editorial luxury typography with accessible color ramps\u2014and built a comprehensive interactive component matrix to ensure exact visual parity when translating Figma layouts into Shopify",
    },
    {
      type: "split-items",
      heading: "Design System & Visual Tokens",
      hideHeading: true,
      items: [
        {
          n: "1",
          title: "Design Tokens & Foundations",
          body: "Standardized color scales, Fraunces and Inter typography hierarchy, elevation shadows, and a 4\u201364px spacing system.",
        },
      ],
    },
    {
      type: "figure",
      caption: "Foundation Design Token",
      src: "/projects/mayflower/design-tokens.jpg",
      alt: "Mayflower foundation design tokens showing typography, color palette, and spacing system",
    },
    {
      type: "split-items",
      heading: "Design System & Visual Tokens",
      hideHeading: true,
      items: [
        {
          n: "2",
          title: "Interactive Component States",
          body: "Mapped Default, Hover, and Pressed states across primary booking triggers, secondary actions, and tonal selection pills.",
        },
      ],
    },
    {
      type: "figure",
      caption: "Button Components: Hierarchy & States",
      src: "/projects/mayflower/button-components.jpg",
      alt: "Mayflower button component matrix showing hierarchy and interaction states",
    },
    { type: "divider" },

    /* ── Next Steps ─────────────────────────────────────── */
    {
      type: "split-items",
      heading: "Next Steps",
      headingId: "mayflower-next-steps",
      items: [
        {
          n: "1",
          title: "UX Architecture & Flow Mapping",
          body: "Map the sitemap and core user journeys, establishing how clients navigate between retail shopping and salon service bookings.",
        },
        {
          n: "2",
          title: "Low-Fidelity Wireframing",
          body: "Create wireframes to explore layout options, test content hierarchy, and validate key screen interactions before applying visual styles.",
        },
        {
          n: "3",
          title: "High-Fidelity Interface Design",
          body: "Translate approved wireframes into responsive production screens in Figma, applying the established color tokens, typography scales, and interactive button states.",
        },
        {
          n: "4",
          title: "Shopify Build & Integration QA",
          body: "Convert approved layouts into custom Shopify theme sections via Instant, configure Appointo for appointments and Montonio for localized payments, and complete end-to-end testing ahead of client ownership transfer.",
        },
      ],
    },
  ],
  moreProjects: {
    heading: "MORE PROJECTS",
    seeMoreHref: "/projects",
    seeMoreLabel: "See More Work",
    slugs: ["styches", "noma"],
  },
};
