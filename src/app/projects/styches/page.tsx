import type { Metadata } from "next";
import { StychesPageContent } from "@/components/projects/styches/StychesPageContent";
import { SiteShell } from "@/components/SiteShell";

export const metadata: Metadata = {
  title: "Styches",
  description:
    "Turning the bespoke tailoring journey into a self-service experience — UX case study by Noma Design.",
};

export default function StychesProjectPage() {
  return (
    <SiteShell mainClassName="page-main-padded">
      <StychesPageContent />
    </SiteShell>
  );
}
