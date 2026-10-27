import type { Metadata } from "next";
import { HomePageContent } from "@/components/home/HomePageContent";
import { SiteShell } from "@/components/SiteShell";
import { featuredProjects } from "@/lib/home";

export const metadata: Metadata = {
  title: {
    absolute: "Noma design",
  },
};

export default function HomePage() {
  return (
    <SiteShell mainClassName="page-main-padded">
      {featuredProjects.map((project) => (
        <link
          key={project.image}
          rel="preload"
          as="image"
          href={project.image}
        />
      ))}
      <HomePageContent />
    </SiteShell>
  );
}
