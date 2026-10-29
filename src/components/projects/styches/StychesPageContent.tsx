"use client";

import Image from "next/image";
import Link from "next/link";
import { ScrollReveal } from "@/components/ScrollReveal";
import { useTheme } from "@/components/ThemeProvider";
import { projectCards } from "@/lib/projects";
import { styches } from "@/lib/styches";
import { ProjectCard } from "../ProjectCard";
import styles from "./StychesPageContent.module.css";

function NumberBadge({ n }: { n: string }) {
  return (
    <span className={styles.num} aria-hidden>
      {n}
    </span>
  );
}

export function StychesPageContent() {
  const { theme } = useTheme();
  const isLight = theme === "light";
  const moreCards = styches.moreProjects.slugs
    .map((slug) => projectCards.find((p) => p.slug === slug))
    .filter((p): p is (typeof projectCards)[number] => Boolean(p));

  return (
    <article className={styles.page}>
      {/* Hero */}
      <ScrollReveal animation="fade-up">
        <header className={styles.hero}>
          <div className={styles.tags}>
            {styches.tags.map((tag) => (
              <span key={tag} className={styles.tag}>
                <span className={styles.tagInner}>{tag}</span>
              </span>
            ))}
          </div>

          <div className={styles.titleBlock}>
            <h1 className={styles.title}>{styches.title}</h1>
            <p className={styles.summary}>{styches.summary}</p>
          </div>

          <div className={styles.protoRow}>
            <span className={styles.protoLabel}>{styches.prototypes.label}</span>
            <div className={styles.protoButtons}>
              {styches.prototypes.links.map((link) => (
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
                    src="/projects/styches/icons/external-link.svg"
                    alt=""
                    width={20}
                    height={20}
                  />
                </a>
              ))}
            </div>
          </div>
        </header>
      </ScrollReveal>

      {/* Featured mockup + facts */}
      <ScrollReveal animation="fade-up" delay={60}>
        <div className={styles.heroMediaBlock}>
          <div className={styles.mediaFrame}>
            <Image
              src={styches.heroImage}
              alt="Styches mobile and web app mockups"
              width={2400}
              height={1800}
              sizes="(max-width: 767px) 100vw, 1240px"
              className={styles.mediaHero}
              priority
            />
          </div>

          <div className={styles.facts}>
            {styches.facts.map((fact) => (
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
        {/* Background */}
        <ScrollReveal animation="fade-up">
          <section className={styles.split} aria-labelledby="styches-background">
            <h2 id="styches-background" className={styles.sectionHeading}>
              {styches.background.heading}
            </h2>
            <p className={styles.sectionBody}>{styches.background.body}</p>
          </section>
        </ScrollReveal>

        <hr className={styles.divider} />

        {/* Problem */}
        <ScrollReveal animation="fade-up">
          <section className={styles.split} aria-labelledby="styches-problem">
            <h2 id="styches-problem" className={styles.sectionHeading}>
              {styches.problem.heading}
            </h2>
            <div className={styles.itemList}>
              {styches.problem.items.map((item) => (
                <div key={item.n} className={styles.item}>
                  <NumberBadge n={item.n} />
                  <div className={styles.itemCopy}>
                    <h3 className={styles.itemTitle}>{item.title}</h3>
                    <p className={styles.itemBody}>{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </ScrollReveal>

        <hr className={styles.divider} />

        {/* Proposed Solution */}
        <ScrollReveal animation="fade-up">
          <section className={styles.split} aria-labelledby="styches-solution">
            <h2 id="styches-solution" className={styles.sectionHeading}>
              {styches.solution.heading}
            </h2>
            <div className={styles.itemList}>
              {styches.solution.items.map((item) => (
                <div key={item.n} className={styles.item}>
                  <NumberBadge n={item.n} />
                  <div className={styles.itemCopy}>
                    <h3 className={styles.itemTitle}>{item.title}</h3>
                    <p className={styles.itemBody}>{item.body}</p>
                    {"pipeline" in item && item.pipeline ? (
                      <div className={styles.pipeline}>
                        {item.pipeline.map((step, i) => (
                          <span key={step} style={{ display: "contents" }}>
                            {i > 0 ? (
                              // eslint-disable-next-line @next/next/no-img-element
                              <img
                                src="/projects/styches/icons/arrow-right.svg"
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
                    {"bodyAfter" in item && item.bodyAfter ? (
                      <p className={styles.itemBody}>{item.bodyAfter}</p>
                    ) : null}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </ScrollReveal>

        <hr className={styles.divider} />

        {/* Execution & Validation */}
        <ScrollReveal animation="fade-up">
          <section
            className={styles.split}
            aria-labelledby="styches-execution"
          >
            <h2 id="styches-execution" className={styles.sectionHeading}>
              {styches.execution.heading}
            </h2>
            <div className={styles.itemList}>
              <div className={styles.item}>
                <NumberBadge n={styches.execution.serviceArchitecture.n} />
                <div className={styles.itemCopy}>
                  <h3 className={styles.itemTitle}>
                    {styches.execution.serviceArchitecture.title}
                  </h3>
                  <p className={styles.itemBody}>
                    {styches.execution.serviceArchitecture.body}
                  </p>
                </div>
              </div>
            </div>
          </section>
        </ScrollReveal>

        <ScrollReveal animation="fade-up">
          <figure className={styles.figureBlock}>
            <figcaption className={styles.figureCaption}>
              {styches.execution.serviceMapCaption}
            </figcaption>
            <div className={`${styles.figureFrame} ${styles.figureServiceMap}`}>
              <Image
                src={styches.execution.serviceMapImage}
                alt="Service blueprint mapping before and after Styches"
                width={2400}
                height={1600}
                sizes="(max-width: 767px) 100vw, 1200px"
                className={styles.figureImage}
              />
            </div>
          </figure>
        </ScrollReveal>

        <ScrollReveal animation="fade-up">
          <div className={styles.splitContinue}>
            <h2 className={styles.sectionHeading} aria-hidden>
              {styches.execution.heading}
            </h2>
            <div className={styles.item}>
              <span className={styles.num} aria-hidden style={{ opacity: 0 }}>
                1
              </span>
              <p className={styles.itemBody}>{styches.execution.dualStateNote}</p>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal animation="fade-up">
          <figure className={styles.figureBlock}>
            <figcaption className={styles.figureCaption}>
              {styches.execution.dualStateCaption}
            </figcaption>
            <div className={`${styles.figureFrame} ${styles.figureDualFlow}`}>
              <Image
                src={styches.execution.dualStateImage}
                alt="Dual-state app flow diagram"
                width={2400}
                height={1600}
                sizes="(max-width: 767px) 100vw, 1200px"
                className={styles.figureImage}
              />
            </div>
          </figure>
        </ScrollReveal>

        <ScrollReveal animation="fade-up">
          <div className={styles.splitContinue}>
            <h2 className={styles.sectionHeading} aria-hidden>
              {styches.execution.heading}
            </h2>
            <div className={styles.itemList}>
              <div className={styles.item}>
                <NumberBadge n={styches.execution.wireframing.n} />
                <div className={styles.itemCopy}>
                  <h3 className={styles.itemTitle}>
                    {styches.execution.wireframing.title}
                  </h3>
                  <p className={styles.itemBody}>
                    {styches.execution.wireframing.body}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal animation="fade-up">
          <div className={styles.figureStack}>
            <p className={styles.figureCaption}>
              {styches.execution.wireframesCaption}
            </p>
            {styches.execution.wireframeImages.map((src, i) => (
              <div key={src} className={styles.figureFrame}>
                <Image
                  src={src}
                  alt={`High-fidelity wireframes set ${i + 1}`}
                  width={2400}
                  height={1600}
                  sizes="(max-width: 767px) 100vw, 1200px"
                  className={styles.figureImage}
                />
              </div>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal animation="fade-up">
          <div className={styles.splitContinue}>
            <h2 className={styles.sectionHeading} aria-hidden>
              {styches.execution.heading}
            </h2>
            <div className={styles.itemList}>
              <div className={styles.item}>
                <NumberBadge n={styches.execution.usability.n} />
                <div className={styles.itemCopy}>
                  <h3 className={styles.itemTitle}>
                    {styches.execution.usability.title}
                  </h3>
                  <p className={styles.itemBody}>
                    {styches.execution.usability.body}
                  </p>
                  <ul className={styles.bullets}>
                    {styches.execution.usability.bullets.map((b) => (
                      <li key={b} className={styles.bullet}>
                        <span className={styles.bulletMark}>•</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <hr className={styles.divider} />

        {/* Polished UI — Mobile */}
        <ScrollReveal animation="fade-up">
          <section className={styles.split} aria-labelledby="styches-ui">
            <h2 id="styches-ui" className={styles.sectionHeading}>
              {styches.polishedUi.heading}
            </h2>
            <div className={styles.item}>
              <NumberBadge n={styches.polishedUi.mobile.n} />
              <div className={styles.itemCopy}>
                <h3 className={styles.itemTitle}>
                  {styches.polishedUi.mobile.title}
                </h3>
                <p className={styles.itemBody}>
                  {styches.polishedUi.mobile.body}
                </p>
              </div>
            </div>
          </section>
        </ScrollReveal>

        <ScrollReveal animation="fade-up">
          <div className={styles.figureStack}>
            <p className={styles.figureCaption}>
              {styches.polishedUi.mobile.caption}
            </p>
            {styches.polishedUi.mobile.images.map((src, i) => (
              <div key={src} className={styles.figureFrame}>
                <Image
                  src={src}
                  alt={`Styches mobile UI showcase ${i + 1}`}
                  width={2400}
                  height={1600}
                  sizes="(max-width: 767px) 100vw, 1200px"
                  className={styles.figureImage}
                />
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Polished UI — Desktop */}
        <ScrollReveal animation="fade-up">
          <div className={styles.splitContinue}>
            <h2 className={styles.sectionHeading} aria-hidden>
              {styches.polishedUi.heading}
            </h2>
            <div className={styles.item}>
              <NumberBadge n={styches.polishedUi.desktop.n} />
              <div className={styles.itemCopy}>
                <h3 className={styles.itemTitle}>
                  {styches.polishedUi.desktop.title}
                </h3>
                <p className={styles.itemBody}>
                  {styches.polishedUi.desktop.body}
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal animation="fade-up">
          <div className={styles.figureStack}>
            <p className={styles.figureCaption}>
              {styches.polishedUi.desktop.caption}
            </p>
            {styches.polishedUi.desktop.images.map((src, i) => (
              <div
                key={src}
                className={`${styles.figureFrame} ${styles.figureDesktop}`}
              >
                <Image
                  src={src}
                  alt={`Styches desktop UI showcase ${i + 1}`}
                  width={2400}
                  height={1600}
                  sizes="(max-width: 767px) 100vw, 1200px"
                  className={styles.figureImage}
                />
              </div>
            ))}
          </div>
        </ScrollReveal>

        <hr className={styles.divider} />

        {/* Impact */}
        <ScrollReveal animation="fade-up">
          <section className={styles.split} aria-labelledby="styches-impact">
            <h2 id="styches-impact" className={styles.sectionHeading}>
              {styches.impact.heading}
            </h2>
            <p className={styles.sectionBody}>{styches.impact.body}</p>
          </section>
        </ScrollReveal>

        <hr className={styles.divider} />

        {/* Key Takeaways */}
        <ScrollReveal animation="fade-up">
          <section
            className={styles.split}
            aria-labelledby="styches-takeaways"
          >
            <h2 id="styches-takeaways" className={styles.sectionHeading}>
              {styches.takeaways.heading}
            </h2>
            <p className={styles.sectionBody}>{styches.takeaways.body}</p>
          </section>
        </ScrollReveal>
      </div>

      {/* More projects */}
      <ScrollReveal animation="fade-up">
        <section className={styles.more} aria-labelledby="more-projects">
          <div className={styles.moreHeader}>
            <h2 id="more-projects" className={styles.moreTitle}>
              {styches.moreProjects.heading}
            </h2>
            <div className={styles.moreLine} aria-hidden />
          </div>

          <div className={styles.moreGrid}>
            {moreCards.map((project) =>
              project ? (
                <ProjectCard
                  key={project.slug}
                  href={project.href}
                  title={project.title}
                  meta={project.meta}
                  image={project.image}
                  slug={project.slug}
                />
              ) : null,
            )}
          </div>

          <div className={styles.moreFooter}>
            <Link
              href={styches.moreProjects.seeMoreHref}
              className={styles.seeMore}
            >
              {styches.moreProjects.seeMoreLabel}
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
