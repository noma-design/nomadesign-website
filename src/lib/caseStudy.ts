import type { ProjectMediaCrop } from "@/components/ProjectMedia";

export type CaseStudyFact = {
  icon: string;
  value: string;
  label: string;
};

export type CaseStudyLink = {
  label: string;
  href: string;
};

export type CaseStudyCta =
  | { kind: "proto-label"; label: string; links: CaseStudyLink[] }
  | { kind: "single-link"; label: string; href: string }
  | { kind: "status"; label: string; color: string };

export type CaseStudyItem = {
  n: string;
  title?: string;
  body: string;
  pipeline?: string[];
  bodyAfter?: string;
  bullets?: string[];
};

export type CaseStudyBlock =
  | { type: "divider" }
  | { type: "split-text"; heading: string; body: string; headingId?: string }
  | {
      type: "split-items";
      heading: string;
      items: CaseStudyItem[];
      headingId?: string;
      hideHeading?: boolean;
    }
  | {
      type: "continue-note";
      /** Optional primary-text heading above the body */
      title?: string;
      body: string;
      showGhostNum?: boolean;
    }
  | {
      type: "figure";
      caption?: string;
      src: string;
      alt: string;
      /** Optional frame background (default #838384) */
      frameBg?: string;
      /** Soft border + shadow so light mockups don’t blend into the page */
      lift?: boolean;
    }
  | {
      type: "figure-stack";
      caption?: string;
      images: { src: string; alt: string }[];
    };

export type CaseStudyData = {
  slug: string;
  metaTitle: string;
  metaDescription: string;
  tags: string[];
  title: string;
  summary: string;
  cta?: CaseStudyCta;
  /** Default / dark-theme hero still (or poster when heroVideo is set) */
  heroImage: string;
  /** Optional light-theme hero still; falls back to heroImage */
  heroImageLight?: string;
  /** Optional autoplaying hero video (muted, looped). Poster uses heroImage. */
  heroVideo?: string;
  /** Optional CSS aspect-ratio for the hero frame (e.g. "1280 / 800") */
  heroAspectRatio?: string;
  heroAlt: string;
  /** Optional hero media-frame backgrounds (default #838384 / light #e5e5e5) */
  heroFrameBg?: string;
  heroFrameBgLight?: string;
  facts: CaseStudyFact[];
  blocks: CaseStudyBlock[];
  moreProjects: {
    heading: string;
    seeMoreHref: string;
    seeMoreLabel: string;
    slugs: ProjectMediaCrop[];
  };
};
