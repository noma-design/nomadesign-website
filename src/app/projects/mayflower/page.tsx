import type { Metadata } from "next";
import { CaseStudyContent } from "@/components/projects/CaseStudyContent";
import { SiteShell } from "@/components/SiteShell";
import { mayflower } from "@/lib/mayflower";

export const metadata: Metadata = {
  title: mayflower.metaTitle,
  description: mayflower.metaDescription,
};

export default function MayflowerProjectPage() {
  return (
    <SiteShell mainClassName="page-main-padded">
      <CaseStudyContent data={mayflower} />
    </SiteShell>
  );
}
