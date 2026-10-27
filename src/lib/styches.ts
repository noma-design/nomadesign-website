export const styches = {
  tags: ["UX Strategy", "Product Design", "Prototyping", "Design Systems"],
  title: "Turning the Bespoke Tailoring Journey Into a Self-Service Experience",
  summary:
    "Transformed fragmented bespoke tailoring workflows into a unified self-service portal—connecting measurement capture, production milestone, and fitting logistics across mobile and web platforms.",
  prototypes: {
    label: "Explore Prototype:",
    links: [
      {
        label: "Mobile App",
        href: "https://www.figma.com/proto/iNWm7mzrwd0RacFdGGi6EC/STYCHES-ORDER-TRACKING-MOBILE-APP?node-id=999-3651&viewport=73763%2C10233%2C0.79&t=FHOtw5ydJkz5ptoW-9&scaling=scale-down&content-scaling=fixed&starting-point-node-id=999%3A3651&show-proto-sidebar=1&page-id=5%3A421",
      },
      {
        label: "Web App",
        href: "https://www.figma.com/proto/iNWm7mzrwd0RacFdGGi6EC/STYCHES-ORDER-TRACKING-MOBILE---WEB-APP?node-id=2938-105022&viewport=199%2C-735%2C0.06&t=cfToUJZ3glwW0jrk-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=2938%3A105022&page-id=4507%3A50205",
      },
    ],
  },
  heroImage: "/projects/styches/hero.png",
  facts: [
    {
      icon: "/projects/styches/icons/user-check.svg",
      value: "Product Designer",
      label: "Role",
    },
    {
      icon: "/projects/styches/icons/calendar.svg",
      value: "8 Weeks",
      label: "Duration",
    },
    {
      icon: "/projects/styches/icons/layers.svg",
      value: "Figma, Mobbin, Gemini",
      label: "Tools",
    },
  ],
  background: {
    heading: "Background",
    body: "In bespoke tailoring, the post-deposit experience has long been broken: clients face zero visibility into production, repetitive remeasurements, and manual status checks across chat apps. Existing tools manage billing and point-of-sale for the tailor, ignoring client-side friction. The Styches self-service portal was designed from the ground up to replace manual follow-ups with automated production milestones, saved digital measurement profiles, and direct international logistics.",
  },
  problem: {
    heading: "Problem",
    items: [
      {
        n: "1",
        title: "The Waiting Anxiety",
        body: "Clients face constant anxiety over unknown garment statuses and tight even deadlines.",
      },
      {
        n: "2",
        title: "The Messy Communication System",
        body: "Chasing tailors across informal messaging channels is time-consuming and inefficient due to schedules and time-zone gaps.",
      },
      {
        n: "3",
        title: "The Logistics Disconnect",
        body: "Customers have no structured way to manage hands-on requirements like booking atelier fittings, updating body profiles, or tracking deliveries, creating constant friction between the tailor and the customers.",
      },
    ],
  },
  solution: {
    heading: "Proposed Solution",
    items: [
      {
        n: "1",
        title: "Automated Progress Tracking",
        body: "Replaced manual status requests with an automated 5-stage progress pipeline:",
        pipeline: [
          "Measurements",
          "In Production",
          "Fitting",
          "Ready",
          "Fulfillment",
        ],
        bodyAfter:
          "Customers can monitor production status independently, preserving transparency and peace of mind without requiring conversational check-ins.",
      },
      {
        n: "2",
        title: "Flexible Multi-Method Measurement System",
        body: "Designed a centralized measurement system supporting three distinct entry points: manual step-by-step entry, in-person atelier booking, or camera-based body scanning. Captured measurements are stored in reusable profiles, eliminating redundant measuring sessions for future orders.",
      },
      {
        n: "3",
        title: "Self-Service Fittings & Fulfillment",
        body: "Consolidated all physical logistics into a single self-serve flow. Clients can schedule or modify their fitting appointments and track order deliveries directly inside the app without back-and-forth calls.",
      },
    ],
  },
  execution: {
    heading: "Execution & Validation",
    serviceArchitecture: {
      n: "1",
      title: "Service Architecture",
      body: "Replaced the mid-production black hole—where anxiety previously peaked—with continuous, proactive milestone notifications.",
    },
    serviceMapCaption:
      "Mapping the Shift from Frantic Chasing to Total Autonomy",
    serviceMapImage: "/projects/styches/service-map.png",
    dualStateNote:
      "Users split at launch between full account authentication and one-tap guest tracking via order token.",
    dualStateCaption: "Dual-State App Flow",
    dualStateImage: "/projects/styches/dual-flow.png",
    wireframing: {
      n: "2",
      title: "Wireframing & Layout",
      body: "Mapped the critical paths across all five main tabs to establish information hierarchy and validate core task flows before moving into visual design.",
    },
    wireframesCaption: "High-Fidelity Wireframes of Key Task Flows",
    wireframeImages: [
      "/projects/styches/wireframes-1.png",
      "/projects/styches/wireframes-2.png",
      "/projects/styches/wireframes-3.png",
    ],
    usability: {
      n: "3",
      title: "Usability Testing & Refinement",
      body: "Testing early layouts revealed three friction points that directly reshaped the final app:",
      bullets: [
        "Merged active, completed, and ready-to-ship garments into a single Orders tab instead of separating them into different menus.",
        "Brought current and saved measurement profiles into a single view, removing the need to dig through profile history.",
        "Embedded required next steps—like booking fittings or submitting measurements—directly onto each order card rather than relying solely on dashboard alerts.",
      ],
    },
  },
  polishedUi: {
    heading: "Polished UI",
    mobile: {
      n: "1",
      title: "Mobile App Experience",
      body: "Gives clients glanceable milestone tracking on the go, with instant token-based access so they can track orders without creating an account.",
      caption: "Mobile Application Interface",
      images: [
        "/projects/styches/mobile-1.png",
        "/projects/styches/mobile-2.png",
        "/projects/styches/mobile-3.png",
      ],
    },
    desktop: {
      n: "2",
      title: "Cross-Platform Desktop Dashboard",
      body: "Adapted the mobile experience into a web app, giving clients side-by-side visibility over active orders, fittings, and measurements.",
      caption: "Desktop Web Interface",
      images: [
        "/projects/styches/desktop-1.png",
        "/projects/styches/desktop-2.png",
        "/projects/styches/desktop-3.png",
      ],
    },
  },
  impact: {
    heading: "Impact",
    body: "Automating milestone tracking eliminates endless customer follow-ups via calls and social media, cutting administrative work so tailors can focus on garment production. By turning an anxious waiting period into a transparent, self-serve experience, we build deep client trust that directly drives repeat business.",
  },
  takeaways: {
    heading: "Key Takeaways",
    body: "Designing for both local and international clients highlighted the importance of proactive status updates. In bespoke services, post-purchase UX is where real client trust is built—long after the order is placed.",
  },
  moreProjects: {
    heading: "MORE PROJECTS",
    seeMoreHref: "/projects",
    seeMoreLabel: "See More Work",
    slugs: ["noma", "jumia"] as const,
  },
} as const;
