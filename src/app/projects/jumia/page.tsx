import type { Metadata } from "next";
import { CaseStudyContent } from "@/components/projects/CaseStudyContent";
import { SiteShell } from "@/components/SiteShell";
import { jumia } from "@/lib/jumia";

export const metadata: Metadata = {
  title: jumia.metaTitle,
  description: jumia.metaDescription,
};

export default function JumiaProjectPage() {
  return (
    <SiteShell mainClassName="page-main-padded">
      <CaseStudyContent data={jumia} />
    </SiteShell>
  );
}
