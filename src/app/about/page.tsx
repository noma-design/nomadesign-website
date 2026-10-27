import type { Metadata } from "next";
import { AboutPageContent } from "@/components/about/AboutPageContent";
import { SiteShell } from "@/components/SiteShell";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <SiteShell mainClassName="page-main-padded">
      <AboutPageContent />
    </SiteShell>
  );
}
