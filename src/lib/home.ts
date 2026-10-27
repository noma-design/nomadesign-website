import { site } from "@/lib/site";

export const homeHero = {
  badge: "Product Designer",
  headline: "From Defining the Problem, to Designing and Shipping the Solution.",
  body: "Rooted in supporting thousands of users firsthand, my approach combines deep usability insights with modern AI-enabled workflows—bridging complex systems and human needs to ship meaningful experiences.",
  location: "Tallinn, Estonia",
  pillars: [
    {
      label: "Human-Centered UX",
      detail: "My designs are backed by years supporting real customers.",
      rotate: -6,
      className: "pillarA",
    },
    {
      label: "Complexity into Clarity",
      detail:
        "I turn complicated ideas into solutions that work — for users and the business",
      rotate: -6,
      className: "pillarB",
    },
    {
      label: "End-to-End Shipping",
      detail: "I take my designs all the way to deployment.",
      rotate: 4,
      className: "pillarC",
    },
    {
      label: "AI-Enabled Workflows",
      detail: "I let AI handle repetitive tasks, while I handle strategy.",
      rotate: 4,
      className: "pillarD",
    },
  ],
} as const;

export const featuredProjects = [
  {
    slug: "styches" as const,
    crop: "styches-home" as const,
    href: "/projects/styches",
    tag: "UI/UX Design",
    title: "Turning the Bespoke Tailoring Journey Into a Self-Service Experience",
    description:
      "Transforming fragmented bespoke tailoring workflows into a unified self-service portal—connecting measurement capture, production milestone, and fitting logistics across mobile and web platforms.",
    image: "/home/projects/styches.jpg",
  },
  {
    slug: "yelvio" as const,
    crop: "yelvio-home" as const,
    href: "/projects/yelvio",
    tag: "UI/UX Design",
    title: "Redesigning Yelvio’s Digital Storefront for D2C Growth",
    description:
      "Designing and deploying a strategic holding experience for Yelvio, a direct-to-consumer brand transitioning into a broader lifestyle store, ensuring continuous sales and audience growth while the primary website is being rebuilt.",
    image: "/home/projects/yelvio.jpg",
  },
] as const;

export const testimonials = {
  row1: [
    {
      type: "quote" as const,
      quote:
        "Kristin was instrumental from the earliest stages of our brand website’s development, translating rough sketches into a fully realized design. Her attention to detail continues to stand out as we refine and build together.",
      name: "David Daudu",
      role: "CEO, Yelvio Group OÜ",
      avatar: "/home/avatars/david.jpg",
    },
    {
      type: "quote" as const,
      quote:
        "Kristin stands out for the quality of her work, attention to detail, and how she looks after our customers. She takes real ownership of complex technical issues, communicates with clarity, and ensures the user is always at the center of the outcome.",
      name: "Charles Austin",
      role: "Head of Assurance, Velos IoT",
      avatar: "/home/avatars/charles.jpg",
    },
    {
      type: "stat" as const,
      variant: "inverse" as const,
      body: "Combining direct customer interaction with UX research to translate daily user friction into intuitive, human-centered product solutions.",
      title: "+1,000",
      subtitle: "Users Supported Firsthand",
    },
  ],
  row2: [
    {
      type: "stat" as const,
      variant: "lime" as const,
      body: "Taking complex solutions from initial concept and research all the way to live, production-ready experiences.",
      title: "End-to-End",
      subtitle: "Product Execution & Ownership",
    },
    {
      type: "quote" as const,
      quote:
        "Kristin’s design process and rigor stand out at every stage. She approaches user research with real depth and precision, thinks through every hidden state and micro-detail, and keeps refining until every interaction feels intentional.",
      name: "Azeem (Olawale) Gbadamosi",
      role: "Lead Designer, Hexabug",
      avatar: "/home/avatars/azeem.jpg",
    },
    {
      type: "quote" as const,
      quote:
        "Kristin approaches design with both strategic depth and incredible precision. She untangles complex user problems with ease, anticipates edge cases before they happen, and delivers thoughtful, highly functional experiences.",
      name: "Oreoluwa Sobowale",
      role: "Email & Ad Creative Designer, Danielcreates.co",
      avatar: "/home/avatars/oreoluwa.jpg",
    },
  ],
  linkedInUrl:
    "https://www.linkedin.com/in/kristinadeoti/details/recommendations/?detailScreenTabIndex=0",
} as const;

export const homeLinks = {
  exploreWork: "/projects",
  scheduleCall: site.calUrl,
  browseProjects: "/projects",
} as const;
