import type { CaseStudyData } from "./caseStudy";

export const roam: CaseStudyData = {
  slug: "roam",
  metaTitle: "Roam IoT – Noma Design",
  metaDescription:
    "Transforming a legacy IoT SIM portal to eliminate support friction — UX case study by Noma Design.",
  tags: ["UX Strategy", "UX Research", "UI Re-design", "Prototyping"],
  title:
    "Transforming a Legacy IoT SIM Portal to Eliminate Support Friction",
  summary:
    "Redesigned a developer-built enterprise IoT portal into an intuitive, true self-service experience, translating firsthand customer support inquiries into high-clarity UX patterns.",
  cta: {
    kind: "single-link",
    label: "Explore Prototype",
    href: "https://www.figma.com/proto/dklEhEzAeBYU4mJSJGgZH4/Designs?page-id=1858%3A9135&node-id=1916-12544&viewport=997%2C435%2C0.08&t=ex8iMMzfvEWPVteP-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=1916%3A12544&show-proto-sidebar=1",
  },
  heroImage: "/projects/roam/hero-poster.jpg",
  heroImageLight: "/projects/roam/hero-poster.jpg",
  heroVideo: "/projects/roam/hero-login-fill.mp4",
  /** Figma Image Container 800:3601 / 843:11482 */
  heroAspectRatio: "1240 / 885",
  heroAlt: "Roam IoT login experience hero video",
  heroFrameBg: "#0a0a0a",
  heroFrameBgLight: "transparent",
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
      value: "Figma, Mobbin, Google Stitch, ChatGPT",
      label: "Tools",
    },
  ],
  blocks: [
    /* ── Background ── */
    {
      type: "split-text",
      heading: "Background",
      headingId: "roam-background",
      body: "Originally developed by engineering teams to manage global SIM connectivity, the self-service IoT platform was built without design guidelines, UX heuristics, or visual hierarchy. Consequently, enterprise clients faced scattered controls and fragmented navigation, forcing them to abandon self-service and escalate routine tasks to customer support. This created massive operational overhead for the business, defeating the ultimate purpose of a self-management portal.",
    },

    { type: "divider" },

    /* ── Research & Strategy ── */
    {
      type: "split-items",
      heading: "Research & Strategy",
      headingId: "roam-research",
      items: [
        {
          n: "1",
          title: "Turning Support Inquiries into UX Discovery",
          body: "Analysis of recurring tickets and direct customer escalations—such as the inability to configure data threshold triggers—uncovered three core friction points within customer assurance data:",
        },
      ],
    },
    {
      type: "split-items",
      heading: "Research & Strategy",
      headingId: "roam-research-items",
      hideHeading: true,
      items: [
        {
          n: "1",
          title: "Visual Disconnect at Entry",
          body: "An archaic login experience that lacked basic UI hygiene and failing to meet modern IoT standards.",
        },
        {
          n: "2",
          title: "Cognitive Overload in the SIM Detail Page",
          body: "The interface prioritized raw data density over scannability, with actions scattered across the page.",
        },
        {
          n: "3",
          title: "Monitoring visibility gap",
          body: "Monitoring configuration was completely invisible to web portal users without API access.",
        },
      ],
    },

    /* ── Proposed Solution ── */
    {
      type: "split-items",
      heading: "Proposed Solution",
      headingId: "roam-solution",
      items: [
        {
          n: "1",
          title: "Functional Zoning",
          body: "The SIM detail view was grouped into structured functional zones—separating device identity, primary controls, and technical diagnostics into a predictable scan path.",
        },
        {
          n: "2",
          title: "Visual Signifiers and Natural Mapping",
          body: "Obscure status codes were replaced with recognizable color semantics and universal status badges, allowing fleet managers to assess SIM health instantly.",
        },
        {
          n: "3",
          title: "Data threshold monitoring visibility",
          body: "Real-time data threshold consumption bars and self-service threshold configuration were integrated directly into the web interface, giving users autonomous control.",
        },
      ],
    },

    { type: "divider" },

    /* ── Polished UI ── */
    {
      type: "split-items",
      heading: "Polished UI",
      headingId: "roam-polished",
      items: [
        {
          n: "1",
          title: "Eliminating Friction and Support Overhead at Authentication",
          body: "An analysis of the legacy login revealed severe usability gaps: lack of input syntax hints led to users routinely mistaking account usernames for email addresses, inflating Tier-1 support tickets. Furthermore, identical primary buttons created visual competition. The redesign resolves this by instituting explicit placeholder guidance, establishing clear visual hierarchy with secondary OAuth styling, and incorporating enterprise trust markers (ISO 27001, GDPR) alongside legal baselines.",
        },
      ],
    },
    {
      type: "figure",
      caption: "Baseline Audit: Legacy Authentication Friction",
      src: "/projects/roam/auth-baseline.png",
      alt: "Legacy authentication page showing usability gaps",
    },
    {
      type: "figure",
      caption: "Implementation Pathways (Dual-Track Strategy)",
      src: "/projects/roam/auth-directions.png",
      alt: "Two design directions: Modernized Continuity vs Brand Transformation",
      frameBg: "#e5e5e5",
    },
    {
      type: "figure",
      caption: "The Solution: Unified Enterprise Access Portal",
      src: "/projects/roam/auth-solution.png",
      alt: "Redesigned authentication page with clear visual hierarchy",
      frameBg: "#e5e5e5",
    },
    {
      type: "split-items",
      heading: "Polished UI",
      headingId: "roam-polished-sim",
      hideHeading: true,
      items: [
        {
          n: "2",
          title: "Structured SIM Detail Architecture",
          body: "Restructured the dense legacy view into modular, task-focused containers. High-frequency administrative controls (Suspend, Terminate, Send SMS) were isolated into a dedicated command panel to eliminate destructive click errors, while SIM identity parameters, network attributes, and real-time usage telemetry were decoupled into independent cards for rapid diagnostic scanning.",
        },
      ],
    },
    {
      type: "figure",
      caption: "Baseline Audit: The Legacy SIM Detail Page Audit",
      src: "/projects/roam/sim-baseline.png",
      alt: "Legacy SIM detail page with scattered controls and dense data",
    },
    {
      type: "figure",
      caption: "The Solution: Redesigned SIM Detail Page",
      src: "/projects/roam/sim-solution.png",
      alt: "Redesigned SIM detail page with modular functional zones",
      frameBg: "#e5e5e5",
    },
    {
      type: "split-items",
      heading: "Polished UI",
      headingId: "roam-polished-sentinel",
      hideHeading: true,
      items: [
        {
          n: "3",
          title: "Solving Monitoring Visibility Gaps",
          body: "A dedicated page providing granular control over data sentinel caps, multi-stage notification thresholds (25% to 100%), automated suspension triggers, and full audit event logs to eliminate rogue device overages.",
        },
      ],
    },
    {
      type: "figure",
      caption: "New Sentinel Configuration Page",
      src: "/projects/roam/sentinel-config.png",
      alt: "New sentinel configuration page with data thresholds and audit logs",
    },

    { type: "divider" },

    /* ── Impact ── */
    {
      type: "split-items",
      heading: "Impact",
      headingId: "roam-impact",
      items: [
        {
          n: "1",
          title: "Reduced Support Escalations",
          body: "Exposing data usage limits and trigger settings directly in the interface enabled customers to manage fleet thresholds independently, eliminating repetitive configuration tickets.",
        },
        {
          n: "2",
          title: "Reduced Cognitive Load",
          body: "Grouping key parameters into scannable functional zones reduced the cognitive load required to troubleshoot SIM states.",
        },
        {
          n: "3",
          title: "Upgraded to IoT Industry Standards",
          body: "Replaced an engineering-centric database with an intuitive enterprise product that reflects current IoT industry standards.",
        },
      ],
    },

    { type: "divider" },

    /* ── Key Takeaways ── */
    {
      type: "split-text",
      heading: "Key Takeaways",
      headingId: "roam-takeaways",
      body: "Applying foundational design heuristics to technical environments demonstrated that high-density enterprise software does not have to be difficult to use; clear mental models and intentional visual hierarchy can turn complex utilities into seamless self-service products.",
    },
  ],
  moreProjects: {
    heading: "MORE PROJECTS",
    seeMoreHref: "/projects",
    seeMoreLabel: "See More Work",
    slugs: ["yelvio", "styches"],
  },
};
