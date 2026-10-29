"use client";

import Image from "next/image";
import Link from "next/link";
import { ScrollReveal } from "@/components/ScrollReveal";
import { useTheme } from "@/components/ThemeProvider";
import type { CaseStudyBlock, CaseStudyData, CaseStudyItem } from "@/lib/caseStudy";
import { projectCards } from "@/lib/projects";
import { ProjectCard } from "./ProjectCard";
import styles from "./CaseStudyContent.module.css";

function NumberBadge({ n }: { n: string }) {
  return (
    <span className={styles.num} aria-hidden>
      {n}
    </span>
  );
}

function ItemBlock({ item }: { item: CaseStudyItem }) {
  return (
    <div className={styles.item}>
      <NumberBadge n={item.n} />
      <div className={styles.itemCopy}>
        {item.title ? <h3 className={styles.itemTitle}>{item.title}</h3> : null}
        <p className={styles.itemBody}>{item.body}</p>
        {item.pipeline ? (
          <div className={styles.pipeline}>
            {item.pipeline.map((step, i) => (
              <span key={step} style={{ display: "contents" }}>
                {i > 0 ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src="/projects/shared/icons/arrow-right.svg"
                    alt=""
                    className={styles.pipelineArrow}
                    width={24}
                    height={24}
                  />
                ) : null}
                <span className={styles.pipelineStep}>{step}</span>
              </span>
            ))}
          </div>
        ) : null}
        {item.bodyAfter ? <p className={styles.itemBody}>{item.bodyAfter}</p> : null}
        {item.bullets ? (
          <ul className={styles.bullets}>
            {item.bullets.map((b) => (
              <li key={b} className={styles.bullet}>
                <span className={styles.bulletMark}>•</span>
                <span>{b}</span>
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </div>
  );
}

function renderBlock(block: CaseStudyBlock, index: number) {
  switch (block.type) {
    case "divider":
      return <hr key={index} className={styles.divider} />;
    case "split-text":
      return (
        <ScrollReveal key={index} animation="fade-up">
          <section
            className={styles.split}
            aria-labelledby={block.headingId}
          >
            <h2 id={block.headingId} className={styles.sectionHeading}>
              {block.heading}
            </h2>
            <p className={styles.sectionBody}>{block.body}</p>
          </section>
        </ScrollReveal>
      );
    case "split-items":
      return (
        <ScrollReveal key={index} animation="fade-up">
          <section
            className={block.hideHeading ? styles.splitContinue : styles.split}
            aria-labelledby={block.hideHeading ? undefined : block.headingId}
          >
            <h2
              id={block.hideHeading ? undefined : block.headingId}
              className={styles.sectionHeading}
              aria-hidden={block.hideHeading || undefined}
            >
              {block.heading}
            </h2>
            <div className={styles.itemList}>
              {block.items.map((item) => (
                <ItemBlock key={`${item.n}-${item.title ?? item.body.slice(0, 24)}`} item={item} />
              ))}
            </div>
          </section>
        </ScrollReveal>
      );
    case "continue-note":
      return (
        <ScrollReveal key={index} animation="fade-up">
          <div className={styles.splitContinue}>
            <h2 className={styles.sectionHeading} aria-hidden>
              &nbsp;
            </h2>
            <div className={styles.item}>
              {block.showGhostNum ? (
                <span className={styles.num} aria-hidden style={{ opacity: 0 }}>
                  1
                </span>
              ) : null}
              <div className={styles.itemCopy}>
                {block.title ? (
                  <p className={styles.itemTitle}>{block.title}</p>
                ) : null}
                <p className={styles.itemBody}>{block.body}</p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      );
    case "figure":
      return (
        <ScrollReveal key={index} animation="fade-up">
          <figure className={styles.figureBlock}>
            {block.caption ? (
              <figcaption className={styles.figureCaption}>{block.caption}</figcaption>
            ) : null}
            <div
              className={`${styles.figureFrame}${block.lift ? ` ${styles.figureFrameLift}` : ""}`}
              style={block.frameBg ? { background: block.frameBg } : undefined}
            >
              <Image
                src={block.src}
                alt={block.alt}
                width={2400}
                height={1600}
                sizes="(max-width: 820px) 100vw, 1200px"
                className={styles.figureImage}
              />
            </div>
          </figure>
        </ScrollReveal>
      );
    case "figure-stack":
      return (
        <ScrollReveal key={index} animation="fade-up">
          <div className={styles.figureStack}>
            {block.caption ? (
              <p className={styles.figureCaption}>{block.caption}</p>
            ) : null}
            {block.images.map((img) => (
              <div key={img.src} className={styles.figureFrame}>
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={2400}
                  height={1600}
                  sizes="(max-width: 820px) 100vw, 1200px"
                  className={styles.figureImage}
                />
              </div>
            ))}
          </div>
        </ScrollReveal>
      );
    default:
      return null;
  }
}

type Props = {
  data: CaseStudyData;
};

export function CaseStudyContent({ data }: Props) {
  const { theme } = useTheme();
  const isLight = theme === "light";
  const moreCards = data.moreProjects.slugs
    .map((slug) => projectCards.find((p) => p.slug === slug))
    .filter((p): p is (typeof projectCards)[number] => Boolean(p));

  return (
    <article className={styles.page}>
      <ScrollReveal animation="fade-up">
        <header className={styles.hero}>
          <div className={styles.tags}>
            {data.tags.map((tag) => (
              <span key={tag} className={styles.tag}>
                <span className={styles.tagInner}>{tag}</span>
              </span>
            ))}
          </div>

          <div className={styles.titleBlock}>
            <h1 className={styles.title}>{data.title}</h1>
            <p className={styles.summary}>{data.summary}</p>
          </div>

          {data.cta?.kind === "proto-label" ? (
            <div className={styles.protoRow}>
              <span className={styles.protoLabel}>{data.cta.label}</span>
              <div className={styles.protoButtons}>
                {data.cta.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className={styles.protoBtn}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.label}
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/projects/shared/icons/external-link.svg"
                      alt=""
                      width={20}
                      height={20}
                    />
                  </a>
                ))}
              </div>
            </div>
          ) : null}

          {data.cta?.kind === "single-link" ? (
            <a
              href={data.cta.href}
              className={styles.protoBtn}
              target="_blank"
              rel="noopener noreferrer"
            >
              {data.cta.label}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/projects/shared/icons/external-link.svg"
                alt=""
                width={20}
                height={20}
              />
            </a>
          ) : null}

          {data.cta?.kind === "status" ? (
            <div className={styles.statusBadge}>
              <span
                className={styles.statusDot}
                style={{ background: data.cta.color }}
                aria-hidden
              />
              <span className={styles.statusLabel}>{data.cta.label}</span>
            </div>
          ) : null}
        </header>
      </ScrollReveal>

      <ScrollReveal animation="fade-up" delay={60}>
        <div className={styles.heroMediaBlock}>
          <div
            className={[
              styles.mediaFrame,
              data.heroVideo ? styles.mediaFrameVideo : "",
            ]
              .filter(Boolean)
              .join(" ")}
            style={{
              ...(isLight
                ? data.heroFrameBgLight
                  ? { background: data.heroFrameBgLight }
                  : undefined
                : data.heroFrameBg
                  ? { background: data.heroFrameBg }
                  : undefined),
              ...(data.heroAspectRatio
                ? { aspectRatio: data.heroAspectRatio }
                : undefined),
            }}
          >
            {data.heroVideo ? (
              <video
                className={styles.heroVideo}
                src={data.heroVideo}
                poster={
                  isLight && data.heroImageLight
                    ? data.heroImageLight
                    : data.heroImage
                }
                aria-label={data.heroAlt}
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
              />
            ) : (
              <Image
                src={
                  isLight && data.heroImageLight
                    ? data.heroImageLight
                    : data.heroImage
                }
                alt={data.heroAlt}
                fill
                sizes="(max-width: 820px) 100vw, 1240px"
                className={styles.heroImage}
                priority
              />
            )}
          </div>

          <div className={styles.facts}>
            {data.facts.map((fact) => (
              <div key={fact.label} className={styles.fact}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={fact.icon}
                  alt=""
                  width={24}
                  height={24}
                  className={styles.factIcon}
                />
                <div className={styles.factCopy}>
                  <p className={styles.factValue}>{fact.value}</p>
                  <p className={styles.factLabel}>{fact.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>

      <div className={styles.body}>
        {data.blocks.map((block, i) => renderBlock(block, i))}
      </div>

      <ScrollReveal animation="fade-up">
        <section className={styles.more} aria-labelledby={`${data.slug}-more`}>
          <div className={styles.moreHeader}>
            <h2 id={`${data.slug}-more`} className={styles.moreTitle}>
              {data.moreProjects.heading}
            </h2>
            <div className={styles.moreLine} aria-hidden />
          </div>

          <div className={styles.moreGrid}>
            {moreCards.map((project) => (
              <ProjectCard
                key={project.slug}
                href={project.href}
                title={project.title}
                meta={project.meta}
                image={project.image}
                slug={project.slug}
                status={"status" in project ? project.status : undefined}
              />
            ))}
          </div>

          <div className={styles.moreFooter}>
            <Link
              href={data.moreProjects.seeMoreHref}
              className={styles.seeMore}
            >
              {data.moreProjects.seeMoreLabel}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={
                  isLight
                    ? "/icons/arrow-up-right.svg"
                    : "/icons/arrow-up-right-light.svg"
                }
                alt=""
                width={20}
                height={20}
                className={styles.seeMoreIcon}
              />
            </Link>
          </div>
        </section>
      </ScrollReveal>
    </article>
  );
}
