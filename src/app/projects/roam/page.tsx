import type { Metadata } from "next";
import { CaseStudyContent } from "@/components/projects/CaseStudyContent";
import { SiteShell } from "@/components/SiteShell";
import { roam } from "@/lib/roam";

export const metadata: Metadata = {
  title: roam.metaTitle,
  description: roam.metaDescription,
};

export default function RoamProjectPage() {
  return (
    <SiteShell mainClassName="page-main-padded">
      <CaseStudyContent data={roam} />
    </SiteShell>
  );
}
