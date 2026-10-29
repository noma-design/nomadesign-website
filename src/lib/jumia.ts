import type { CaseStudyData } from "./caseStudy";

export const jumia: CaseStudyData = {
  slug: "jumia",
  metaTitle: "Jumia Empty Cart Redesign",
  metaDescription:
    "Redesigning Jumia\u2019s empty cart to increase average order value \u2014 UX case study by Noma Design.",
  tags: ["UX Research", "UI Re-design", "Design-to-Code", "Live Deploy"],
  title:
    "Redesigning Jumia\u2019s Empty Cart to Increase Average Order Value (AOV)",
  summary:
    "Transforming a static technical dead-end into an adaptive recovery hook for Africa\u2019s largest e-commerce marketplace\u2014designed, coded, and deployed as a live prototype.",
  cta: {
    kind: "proto-label",
    label: "Explore Prototype:",
    links: [
      {
        label: "New Visitors",
        href: "https://jumia-empty-cart-redesign.vercel.app/cart/top-picks",
      },
      {
        label: "Returning Users",
        href: "https://jumia-empty-cart-redesign.vercel.app/cart",
      },
    ],
  },
  heroImage: "/projects/jumia/hero.jpg",
  heroAlt:
    "Jumia empty cart redesign showing returning-user and new-visitor variants side by side",
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
      value: "Figma, Jitter, ChatGPT, Cursor, Vercel",
      label: "Tools",
    },
  ],
  blocks: [
    /* ── Background ─────────────────────────────────────── */
    {
      type: "split-text",
      heading: "Background",
      headingId: "jumia-background",
      body: "Across e-commerce, an empty cart is not just a status message; it is a critical re-engagement touchpoint for high-intent shoppers. However, Jumia, Africa\u2019s largest online marketplace treats its empty cart as an operational dead end, leading to abandoned session drop-offs, hence, lost revenue.\n\nThe objective of this project was to convert this zero-state drop-off into an automated shopping guide that sustains browsing momentum, increases recovery rate, and lifts Average Order Value (AOV).",
    },
    {
      type: "continue-note",
      title: "WHY FOCUS ON THE MOBILE APP AS AGAINST THE WEB APP?",
      body: "The vast majority of transactions occur on mobile devices across emerging markets where network speed and session momentum are paramount.",
      showGhostNum: false,
    },

    { type: "divider" },

    /* ── Problem ─────────────────────────────────────────── */
    {
      type: "split-items",
      heading: "Problem",
      headingId: "jumia-problem",
      items: [
        {
          n: "1",
          title: "Generic Homepage Redirects",
          body: "Jumia\u2019s legacy architecture reduced the empty cart to a bare status check and a generic \u201cStart Shopping\u201d button that dumped users back to the root homepage, stripping away all shopping context.",
        },
        {
          n: "2",
          title: "Blank Guest States",
          body: "Unauthenticated visitors were met with a blank screen devoid of localized discovery hooks (e.g., \u201cTrending in Lagos\u201d, \u201cFirst-Time Buyer Favorites\u201d), forfeiting instant intent capture.",
        },
        {
          n: "3",
          title: "Passive Logged-In Wishlist",
          body: "While the app displays basic \u201crecently viewed\u201d or \u201cwishlist\u201d items for logged-in users, it lacks a deep personalized discovery engine. It fails to leverage high-conversion context clues\u2014such as localized market data (\u201cTrending in Lagos\u201d) or behavioral segmentation (\u201cWhat first-time buyers purchased\u201d)\u2014to effectively re-engage users.",
        },
      ],
    },
    {
      type: "figure",
      caption: "Baseline Audit: The Passive Empty Cart Drop-Off",
      src: "/projects/jumia/baseline-audit.jpg",
      alt: "Current Jumia empty cart screen showing a static start-shopping button for new visitors and returning users",
    },

    { type: "divider" },

    /* ── Research ─────────────────────────────────────────── */
    {
      type: "split-items",
      heading: "Research",
      headingId: "jumia-research",
      items: [
        {
          n: "1",
          title: "Competitive & Preference Validation",
          body: "Benchmarked against global e-commerce leaders (AliExpress, Amazon, Shein, Temu) operating in the region and validated through preference testing with 4 high-frequency e-commerce shoppers, proved that users favor contextual recovery blocks over static system feedback. Secondary data corroborates this approach: dynamic recovery hooks drive documented conversion lifts of +9.5% and ARPU gains of up to +88%.",
        },
      ],
    },
    {
      type: "figure",
      caption:
        "Competitive Benchmark: Active Recovery Hooks in Global E-Commerce",
      src: "/projects/jumia/competitive-benchmark.jpg",
      alt: "Competitive benchmark comparison of empty cart recovery patterns across AliExpress, Amazon, Shein, and Temu",
    },
    {
      type: "figure",
      caption:
        "Preference Testing: Validating Active Discovery vs. Static System Feedback",
      src: "/projects/jumia/preference-testing.jpg",
      alt: "Preference test results comparing active discovery hooks to static system feedback",
    },
    {
      type: "split-items",
      heading: "Research",
      hideHeading: true,
      items: [
        {
          n: "2",
          title: "Secondary Market Research",
          body: "In addition, secondary market research corroborates this approach: implementing behavior-driven recommendations was proven to lift mobile conversions by +9.5% for Ecosa, boost average revenue per user by +88% for ISZI, and transform dead ends into high-converting channels yielding a 25% cart conversion rate for Balparmak.",
        },
      ],
    },

    { type: "divider" },

    /* ── Proposed Solution ──────────────────────────────── */
    {
      type: "split-items",
      heading: "Proposed Solution",
      headingId: "jumia-solution",
      items: [
        {
          n: "1",
          title: "Personalized Page Routing",
          body: "Split the layout strategy based on user type. Returning users see personalized Wishlist and Recently Viewed items to recover their session, while new visitors see Trending Deals to kickstart discovery.",
        },
        {
          n: "2",
          title: "Smooth In-Page Navigation",
          body: "Replaced the generic \u201cStart Shopping\u201d button with a \u201cShop Deals\u201d primary CTA. Instead of kicking users back to the homepage, it acts as an anchor link that smoothly jumps them down to the active product filters on the same page.",
        },
        {
          n: "3",
          title: "High-Urgency Badges",
          body: "Added behavioral micro-tags like PRICE DROP, LIMITED STOCK, and HOT DEAL to catalog recommendations. This creates instant urgency and encourages users to checkout items they previously showed interest in.",
        },
      ],
    },

    { type: "divider" },

    /* ── Polished UI ─────────────────────────────────────── */
    {
      type: "split-text",
      heading: "Polished UI",
      headingId: "jumia-ui",
      body: "This solution was developed and deployed as a dual-state interactive web application using Cursor, Figma MCP, and Vercel.",
    },
    {
      type: "figure",
      caption:
        "The Solution: Dual-State Adaptive Empty Cart Architecture",
      src: "/projects/jumia/polished-ui.jpg",
      alt: "Final polished UI showing both the returning-user and new-visitor empty cart experiences side by side",
    },

    { type: "divider" },

    /* ── Impact ──────────────────────────────────────────── */
    {
      type: "split-items",
      heading: "Impact",
      headingId: "jumia-impact",
      items: [
        {
          n: "1",
          title: "Transforming Dead Ends into Growth Hubs",
          body: "By pairing anchor-link navigation with behavioral urgency tags, the design preserves browsing momentum, recaptures lost checkout intent, and directly defends Customer Acquisition Cost (CAC).",
        },
        {
          n: "2",
          title: "Zero-Tech-Debt Implementation Feasibility",
          body: "Solved the drop-off bottleneck strictly within Jumia\u2019s existing merchant parameters and technical foundations\u2014eliminating the need for database migrations, backend refactors, or catalog asset restructuring.",
        },
      ],
    },

    { type: "divider" },

    /* ── Key Takeaways ───────────────────────────────────── */
    {
      type: "split-text",
      heading: "Key Takeaways",
      headingId: "jumia-takeaways",
      body: "The easiest thing to do in an unsolicited redesign is tear everything down, chase visual trends from apps like Shein or Temu, and produce flashy dribbble-style shots that could never survive real-world production. The harder\u2014and far more valuable\u2014exercise was practicing restraint. By intentionally restricting myself to Jumia\u2019s existing catalog rules and visual foundations, I had to rely entirely on information hierarchy, cognitive load reduction, and behavioral urgency to drive conversion, rather than relying on cosmetic overhauls.",
    },
  ],
  moreProjects: {
    heading: "MORE PROJECTS",
    seeMoreHref: "/projects",
    seeMoreLabel: "See More Work",
    slugs: ["roam", "yelvio"],
  },
};
