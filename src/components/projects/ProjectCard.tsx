"use client";

import Link from "next/link";
import {
  ProjectMediaFrame,
  ProjectMediaImage,
  type ProjectMediaCrop,
} from "@/components/ProjectMedia";
import { useTheme } from "@/components/ThemeProvider";
import styles from "./ProjectsLandingContent.module.css";

type ProjectCardProps = {
  href: string;
  title: string;
  meta: string;
  image: string;
  slug: ProjectMediaCrop;
  status?: string;
};

export function ProjectCard({
  href,
  title,
  meta,
  image,
  slug,
  status,
}: ProjectCardProps) {
  const { theme } = useTheme();
  const isLight = theme === "light";

  return (
    <Link href={href} className={styles.card}>
      <ProjectMediaFrame className={styles.cardMedia}>
        <ProjectMediaImage src={image} crop={slug} />
        {status ? (
          <>
            <span className={styles.cardScrim} aria-hidden />
            <span className={styles.statusTag}>{status}</span>
          </>
        ) : null}
      </ProjectMediaFrame>

      <div className={styles.cardDetails}>
        <div className={styles.cardTitleRow}>
          <h2 className={styles.cardTitle}>{title}</h2>
          <span className={styles.cardArrow} aria-hidden>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={
                isLight
                  ? "/projects/icons/arrow-light.svg"
                  : "/projects/icons/arrow.svg"
              }
              alt=""
              width={24}
              height={24}
            />
          </span>
        </div>
        <p className={styles.cardMeta}>{meta}</p>
      </div>
    </Link>
  );
}
