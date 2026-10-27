"use client";

import { useTheme } from "@/components/ThemeProvider";
import { projectsLanding } from "@/lib/projects";
import styles from "./ProjectsLandingContent.module.css";

export function ProjectsLandingHero() {
  const { theme } = useTheme();
  const isLight = theme === "light";

  return (
    <header className={styles.hero}>
      <div className={styles.badge}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={
            isLight
              ? "/projects/icons/radio-light.svg"
              : "/projects/icons/radio.svg"
          }
          alt=""
          width={12}
          height={12}
          className={styles.badgeIcon}
        />
        <span className={styles.badgeLabel}>{projectsLanding.badge}</span>
      </div>

      <div className={styles.titleBlock}>
        <h1 className={styles.title}>
          <span className={styles.titleMuted}>{projectsLanding.titleMuted}</span>{" "}
          <span className={styles.titleEmphasis}>
            {projectsLanding.titleEmphasis}
          </span>
        </h1>
        <p className={styles.body}>{projectsLanding.body}</p>
      </div>
    </header>
  );
}
