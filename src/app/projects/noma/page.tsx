import type { Metadata } from "next";
import { CaseStudyContent } from "@/components/projects/CaseStudyContent";
import { SiteShell } from "@/components/SiteShell";
import { noma } from "@/lib/noma";

export const metadata: Metadata = {
  title: noma.metaTitle,
  description: noma.metaDescription,
};

export default function NomaProjectPage() {
  return (
    <SiteShell mainClassName="page-main-padded">
      <CaseStudyContent data={noma} />
    </SiteShell>
  );
}
