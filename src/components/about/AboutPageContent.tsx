import Image from "next/image";
import { ScrollReveal } from "@/components/ScrollReveal";
import {
  aboutHero,
  outsideDesign,
  process,
  skills,
  tools,
  whyHireMe,
} from "@/lib/about";
import { AboutSocials } from "./AboutSocials";
import { OutsideCollage } from "./OutsideCollage";
import { OutsideVideo } from "./OutsideVideo";
import { ToolsList } from "./ToolsList";
import { WhyHireAccordion } from "./WhyHireAccordion";
import styles from "./AboutPageContent.module.css";

export function AboutPageContent() {
  return (
    <div className={styles.page}>
      {/* PROFILE */}
      <section className={styles.hero} aria-labelledby="about-heading">
        <ScrollReveal className={styles.heroIntro} animation="fade-up">
          <h1 id="about-heading" className={styles.heroTitle}>
            {aboutHero.title}
          </h1>
          <p className={styles.heroName}>{aboutHero.name}</p>
        </ScrollReveal>

        <ScrollReveal
          className={styles.portraitReveal}
          animation="fade-up"
          delay={80}
        >
          <div className={styles.portraitFrame}>
            <Image
              src={aboutHero.portrait}
              alt="Kristin Adeoti"
              fill
              sizes="(max-width: 820px) 100vw, 497px"
              className={styles.portraitImage}
              priority
            />
          </div>
        </ScrollReveal>

        <ScrollReveal className={styles.heroBelow} animation="fade-up" delay={40}>
          <p className={styles.heroBody}>{aboutHero.body}</p>
          <AboutSocials />
        </ScrollReveal>
      </section>

      {/* OFF THE CLOCK */}
      <section
        className={styles.section}
        aria-labelledby="outside-heading"
      >
        <ScrollReveal animation="fade-up">
          <h2 id="outside-heading" className={styles.sectionTitle}>
            {outsideDesign.title}
          </h2>
        </ScrollReveal>

        <div className={styles.outsideGrid}>
          <OutsideCollage />

          <ScrollReveal animation="fade-up" delay={100}>
            <OutsideVideo />
          </ScrollReveal>
        </div>
      </section>

      {/* WHAT I BRING */}
      <section className={styles.section} aria-labelledby="hire-heading">
        <ScrollReveal animation="fade-up">
          <h2 id="hire-heading" className={styles.sectionTitle}>
            {whyHireMe.title}
          </h2>
        </ScrollReveal>

        <div className={styles.hireGrid}>
          <ScrollReveal animation="fade-up" className={styles.hireAccordion}>
            <WhyHireAccordion />
          </ScrollReveal>
          <ScrollReveal animation="fade-up" delay={80}>
            <div className={styles.mediaFrame}>
              <Image
                src={whyHireMe.image}
                alt=""
                fill
                sizes="497px"
                className={styles.mediaImage}
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className={styles.section} aria-labelledby="skills-heading">
        <ScrollReveal animation="fade-up">
          <h2 id="skills-heading" className={styles.sectionTitle}>
            {skills.title}
          </h2>
        </ScrollReveal>

        <ScrollReveal animation="fade-up" delay={60}>
          <div className={styles.skillsGrid}>
            {skills.rows.map((row, rowIndex) => (
              <div key={rowIndex} className={styles.skillsRow}>
                {row.map((skill, cellIndex) => (
                  <div
                    key={skill}
                    className={[
                      styles.skillCell,
                      rowIndex === 0 && cellIndex === 0 ? styles.skillTL : "",
                      rowIndex === 0 && cellIndex === 1 ? styles.skillTR : "",
                      rowIndex === skills.rows.length - 1 && cellIndex === 0
                        ? styles.skillBL
                        : "",
                      rowIndex === skills.rows.length - 1 && cellIndex === 1
                        ? styles.skillBR
                        : "",
                    ]
                      .filter(Boolean)
                      .join(" ")}
                  >
                    {skill}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </ScrollReveal>
      </section>

      {/* PRODUCTION STACK */}
      <section className={styles.section} aria-labelledby="tools-heading">
        <ScrollReveal animation="fade-up">
          <div className={styles.toolsHeader}>
            <h2 id="tools-heading" className={styles.sectionTitle}>
              {tools.title}
            </h2>
            <p className={styles.toolsIntro}>{tools.intro}</p>
          </div>
        </ScrollReveal>

        <div className={styles.toolsGrid}>
          <ScrollReveal animation="fade-up">
            <ToolsList />
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={80}>
            <div className={styles.mediaFrame}>
              <Image
                src={tools.image}
                alt=""
                fill
                sizes="497px"
                className={styles.mediaImage}
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* EXECUTION WORKFLOW */}
      <section className={styles.section} aria-labelledby="process-heading">
        <ScrollReveal animation="fade-up">
          <h2 id="process-heading" className={styles.sectionTitle}>
            {process.title}
          </h2>
        </ScrollReveal>

        <div className={styles.processGrid}>
          <ScrollReveal
            as="article"
            animation="fade-up"
            className={`${styles.processCard} ${styles.processSurface} ${styles.processS01}`}
          >
            <p className={styles.processNum}>{process.steps[0].num}</p>
            <div className={styles.processCopy}>
              <h3>{process.steps[0].title}</h3>
              <p>{process.steps[0].body}</p>
            </div>
          </ScrollReveal>

          <ScrollReveal
            animation="fade-up"
            delay={40}
            className={`${styles.processPhoto} ${styles.processSticky}`}
          >
            <Image
              src={process.images.sticky}
              alt=""
              fill
              sizes="(max-width: 820px) 100vw, 497px"
              className={styles.processImage}
            />
          </ScrollReveal>

          <ScrollReveal
            as="article"
            animation="fade-up"
            delay={80}
            className={`${styles.processCard} ${styles.processLime} ${styles.processS02}`}
          >
            <p className={styles.processNum}>{process.steps[1].num}</p>
            <div className={styles.processCopy}>
              <h3>{process.steps[1].title}</h3>
              <p>{process.steps[1].body}</p>
            </div>
          </ScrollReveal>

          <ScrollReveal
            animation="fade-up"
            delay={60}
            className={`${styles.processPhotoWide} ${styles.processSketch}`}
          >
            <Image
              src={process.images.sketch}
              alt=""
              fill
              sizes="(max-width: 820px) 100vw, 800px"
              className={styles.processImage}
            />
          </ScrollReveal>

          <ScrollReveal
            as="article"
            animation="fade-up"
            delay={100}
            className={`${styles.processCard} ${styles.processSurface} ${styles.processWide} ${styles.processS03}`}
          >
            <p className={styles.processNum}>{process.steps[2].num}</p>
            <div className={styles.processCopy}>
              <h3>{process.steps[2].title}</h3>
              <p>{process.steps[2].body}</p>
            </div>
          </ScrollReveal>

          <ScrollReveal
            as="article"
            animation="fade-up"
            delay={80}
            className={`${styles.processCard} ${styles.processLime} ${styles.processRoundedLg} ${styles.processS04}`}
          >
            <p className={styles.processNum}>{process.steps[3].num}</p>
            <div className={styles.processCopy}>
              <h3>{process.steps[3].title}</h3>
              <p>{process.steps[3].body}</p>
            </div>
          </ScrollReveal>

          <ScrollReveal
            as="article"
            animation="fade-up"
            delay={100}
            className={`${styles.processCard} ${styles.processSurface} ${styles.processRoundedLg} ${styles.processS05}`}
          >
            <p className={styles.processNum}>{process.steps[4].num}</p>
            <div className={styles.processCopy}>
              <h3>{process.steps[4].title}</h3>
              <p>{process.steps[4].body}</p>
            </div>
          </ScrollReveal>

          <ScrollReveal
            animation="fade-up"
            delay={120}
            className={`${styles.processPhotoFlex} ${styles.processDesk}`}
          >
            <Image
              src={process.images.desk}
              alt=""
              fill
              sizes="(max-width: 820px) 100vw, 497px"
              className={styles.processImage}
            />
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
