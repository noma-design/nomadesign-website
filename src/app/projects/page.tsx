import type { Metadata } from "next";
import { ProjectsLandingContent } from "@/components/projects/ProjectsLandingContent";
import { SiteShell } from "@/components/SiteShell";

export const metadata: Metadata = {
  title: "Projects",
};

export default function ProjectsPage() {
  return (
    <SiteShell mainClassName="page-main-padded">
      <ProjectsLandingContent />
    </SiteShell>
  );
}
