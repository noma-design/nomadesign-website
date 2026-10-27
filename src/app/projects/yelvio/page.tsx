import type { Metadata } from "next";
import { CaseStudyContent } from "@/components/projects/CaseStudyContent";
import { SiteShell } from "@/components/SiteShell";
import { yelvio } from "@/lib/yelvio";

export const metadata: Metadata = {
  title: yelvio.metaTitle,
  description: yelvio.metaDescription,
};

export default function YelvioProjectPage() {
  return (
    <SiteShell mainClassName="page-main-padded">
      <CaseStudyContent data={yelvio} />
    </SiteShell>
  );
}
