import Image from "next/image";
import Link from "next/link";
import { EqualHeightGroup } from "@/components/EqualHeightGroup";
import { ScrollReveal } from "@/components/ScrollReveal";
import {
  featuredProjects,
  homeHero,
  homeLinks,
  testimonials,
} from "@/lib/home";
import styles from "./HomePageContent.module.css";

function ArrowExternalIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
      className={styles.externalIcon}
    >
      <path
        d="M5.83333 14.1667L14.1667 5.83333M14.1667 14.1667V5.83333H5.83333"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function HomePageContent() {
  return (
    <div className={styles.page}>
      {/* Hero */}
      <section className={styles.hero} aria-labelledby="home-hero-heading">
        <ScrollReveal className={styles.heroCopy} animation="fade-up">
          <div className={styles.heroIntro}>
            <div className={styles.roleBadge}>
              <span className={styles.roleDot} aria-hidden="true" />
              <span className={styles.roleLabel}>{homeHero.badge}</span>
            </div>

            <div className={styles.titleBlock}>
              <h1 id="home-hero-heading" className={styles.headline}>
                {homeHero.headline}
              </h1>
              <div className={styles.titleMeta}>
                <p className={styles.body}>{homeHero.body}</p>
                <div className={styles.location}>
                  <svg
                    className={styles.locationIcon}
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M12 20.8995L16.9497 15.9497C19.6834 13.2161 19.6834 8.78392 16.9497 6.05025C14.2161 3.31658 9.78392 3.31658 7.05025 6.05025C4.31658 8.78392 4.31658 13.2161 7.05025 15.9497L12 20.8995ZM12 23.7279L5.63604 17.364C2.12132 13.8492 2.12132 8.15076 5.63604 4.63604C9.15076 1.12132 14.8492 1.12132 18.364 4.63604C21.8787 8.15076 21.8787 13.8492 18.364 17.364L12 23.7279ZM12 13C13.1046 13 14 12.1046 14 11C14 9.89543 13.1046 9 12 9C10.8954 9 10 9.89543 10 11C10 12.1046 10.8954 13 12 13ZM12 15C9.79086 15 8 13.2091 8 11C8 8.79086 9.79086 7 12 7C14.2091 7 16 8.79086 16 11C16 13.2091 14.2091 15 12 15Z"
                      fill="currentColor"
                    />
                  </svg>
                  <span>{homeHero.location}</span>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.ctaRow}>
            <Link href={homeLinks.exploreWork} className={styles.btnPrimary}>
              Explore My Work
            </Link>
            <a
              href={homeLinks.scheduleCall}
              className={styles.btnSecondary}
              target="_blank"
              rel="noopener noreferrer"
            >
              Schedule a Call
            </a>
          </div>
        </ScrollReveal>

        <ScrollReveal
          className={styles.pillars}
          animation="fade-left"
          delay={120}
          as="div"
        >
          <div className={styles.pillarsInner}>
            {homeHero.pillars.map((pillar) => {
              const positionClass = {
                pillarA: styles.pillarA,
                pillarB: styles.pillarB,
                pillarC: styles.pillarC,
                pillarD: styles.pillarD,
              }[pillar.className];

              return (
                <div
                  key={pillar.label}
                  className={`${styles.pillar} ${positionClass}`}
                  style={{
                    ["--pillar-rotate" as string]: `${pillar.rotate}deg`,
                  }}
                >
                  <button
                    type="button"
                    className={styles.pillarCard}
                    aria-label={`${pillar.label}. ${pillar.detail}`}
                  >
                    <p className={styles.pillarLabel}>{pillar.label}</p>
                    <p className={styles.pillarDetail}>{pillar.detail}</p>
                  </button>
                </div>
              );
            })}

            <div className={`${styles.decor} ${styles.decorLine1}`} aria-hidden="true" />
            <div className={`${styles.decor} ${styles.decorLine2}`} aria-hidden="true" />
            <div className={`${styles.decor} ${styles.decorLine3}`} aria-hidden="true" />
            <div className={`${styles.decor} ${styles.decorLine4}`} aria-hidden="true" />
          </div>
        </ScrollReveal>
      </section>

      {/* Featured projects */}
      <section
        id="featured"
        className={styles.featured}
        aria-labelledby="featured-heading"
      >
        <ScrollReveal animation="fade-up">
          <h2 id="featured-heading" className={styles.sectionTitle}>
            FEATURED PROJECTS
          </h2>
        </ScrollReveal>

        <div className={styles.projectGrid}>
          {featuredProjects.map((project) => (
            <Link
              key={project.slug}
              href={project.href}
              className={styles.projectCard}
            >
              {/* next/image fill — reliable first paint (no % height / transform races) */}
              <div className={styles.projectMedia}>
                <Image
                  src={project.image}
                  alt=""
                  fill
                  priority
                  sizes="(max-width: 767px) 100vw, 50vw"
                  className={styles.projectCover}
                />
                <div className={styles.projectScrim} />
              </div>

              <span className={styles.projectTag}>{project.tag}</span>

              <div className={styles.projectText}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDescription}>
                  {project.description}
                </p>
              </div>

              <span className={styles.projectArrow} aria-hidden="true">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/icons/arrow-up-right-light.svg"
                  alt=""
                  width={24}
                  height={24}
                />
              </span>
            </Link>
          ))}
        </div>

        <ScrollReveal animation="fade-up" delay={160}>
          <div className={styles.sectionAction}>
            <Link
              href={homeLinks.browseProjects}
              className={styles.btnSecondary}
            >
              Browse All Projects
            </Link>
          </div>
        </ScrollReveal>
      </section>

      {/* Testimonials */}
      <section
        className={styles.testimonials}
        aria-labelledby="testimonials-heading"
      >
        <ScrollReveal animation="fade-up">
          <h2 id="testimonials-heading" className={styles.sectionTitle}>
            WHAT PEOPLE SAY
          </h2>
        </ScrollReveal>

        <EqualHeightGroup className={styles.testimonialGrid}>
          <div className={styles.testimonialRow}>
            {testimonials.row1.map((item, index) =>
              item.type === "quote" ? (
                <ScrollReveal
                  key={item.name}
                  animation="fade-up"
                  delay={index * 80}
                >
                  <article
                    className={styles.quoteCard}
                    data-equal-card
                  >
                    <p className={styles.quoteText}>{item.quote}</p>
                    <div className={styles.author}>
                      <div className={styles.avatar}>
                        <Image
                          src={item.avatar}
                          alt=""
                          width={40}
                          height={40}
                          className={styles.avatarImage}
                        />
                      </div>
                      <div className={styles.authorDetails}>
                        <p className={styles.authorName}>{item.name}</p>
                        <p className={styles.authorRole}>{item.role}</p>
                      </div>
                    </div>
                  </article>
                </ScrollReveal>
              ) : (
                <ScrollReveal
                  key={`stat-${index}`}
                  animation="fade-up"
                  delay={index * 80}
                >
                  <article
                    className={`${styles.statCard} ${styles.statInverse}`}
                    data-equal-card
                  >
                    <p className={styles.statBody}>{item.body}</p>
                    <div className={styles.statBlock}>
                      <p className={styles.statTitleLarge}>{item.title}</p>
                      <p className={styles.statSubtitle}>{item.subtitle}</p>
                    </div>
                  </article>
                </ScrollReveal>
              ),
            )}
          </div>

          <div className={styles.testimonialRow}>
            {testimonials.row2.map((item, index) =>
              item.type === "quote" ? (
                <ScrollReveal
                  key={item.name}
                  animation="fade-up"
                  delay={index * 80}
                >
                  <article
                    className={styles.quoteCard}
                    data-equal-card
                  >
                    <p className={styles.quoteText}>{item.quote}</p>
                    <div className={styles.author}>
                      <div className={styles.avatar}>
                        <Image
                          src={item.avatar}
                          alt=""
                          width={40}
                          height={40}
                          className={styles.avatarImage}
                        />
                      </div>
                      <div className={styles.authorDetails}>
                        <p className={styles.authorName}>{item.name}</p>
                        <p className={styles.authorRole}>{item.role}</p>
                      </div>
                    </div>
                  </article>
                </ScrollReveal>
              ) : (
                <ScrollReveal
                  key={`stat-lime-${index}`}
                  animation="fade-up"
                  delay={index * 80}
                >
                  <article
                    className={`${styles.statCard} ${styles.statLime}`}
                    data-equal-card
                  >
                    <p className={styles.statBody}>{item.body}</p>
                    <div className={styles.statBlock}>
                      <p className={styles.statTitle}>{item.title}</p>
                      <p className={styles.statSubtitle}>{item.subtitle}</p>
                    </div>
                  </article>
                </ScrollReveal>
              ),
            )}
          </div>
        </EqualHeightGroup>

        <ScrollReveal animation="fade-up" delay={120}>
          <div className={styles.sectionAction}>
            <a
              href={testimonials.linkedInUrl}
              className={styles.linkedinCta}
              target="_blank"
              rel="noopener noreferrer"
            >
              See more recommendations on LinkedIn
              <ArrowExternalIcon />
            </a>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
