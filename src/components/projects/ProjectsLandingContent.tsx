import { ScrollReveal } from "@/components/ScrollReveal";
import { projectCards } from "@/lib/projects";
import { ProjectCard } from "./ProjectCard";
import { ProjectsLandingHero } from "./ProjectsLandingHero";
import styles from "./ProjectsLandingContent.module.css";

export function ProjectsLandingContent() {
  return (
    <div className={styles.page}>
      <ScrollReveal animation="fade-up">
        <ProjectsLandingHero />
      </ScrollReveal>

      <div className={styles.grid}>
        {projectCards.map((project, index) => (
          <ScrollReveal
            key={project.slug}
            animation="fade-up"
            delay={(index % 2) * 80}
            className={styles.gridItem}
          >
            <ProjectCard
              href={project.href}
              title={project.title}
              meta={project.meta}
              image={project.image}
              slug={project.slug}
              status={"status" in project ? project.status : undefined}
            />
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
}
