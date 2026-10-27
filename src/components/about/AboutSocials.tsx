"use client";

import { aboutHero } from "@/lib/about";
import styles from "./AboutPageContent.module.css";

export function AboutSocials() {
  return (
    <div className={styles.socialRow}>
      {aboutHero.socials.map((social) => (
        <a
          key={social.label}
          href={social.href}
          className={styles.socialBtn}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={social.label}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={social.icon}
            alt=""
            width={20}
            height={20}
            className={styles.socialIcon}
          />
        </a>
      ))}
    </div>
  );
}
