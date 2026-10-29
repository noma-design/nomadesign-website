"use client";

import { useEffect, useRef, useState } from "react";
import { useTheme } from "@/components/ThemeProvider";
import { outsideDesign } from "@/lib/about";
import styles from "./AboutPageContent.module.css";

const collageClass = {
  cardGym: styles.cardGym,
  cardCinema: styles.cardCinema,
  cardKaraoke: styles.cardKaraoke,
} as const;

const lightImages: Record<string, string> = {
  fitness: "/about/photos/light/gym.jpg",
  movies: "/about/photos/light/cinema.jpg",
  karaoke: "/about/photos/light/karaoke.jpg",
};

export function OutsideCollage() {
  const ref = useRef<HTMLDivElement>(null);
  const [played, setPlayed] = useState(false);
  const { theme } = useTheme();
  const isLight = theme === "light";

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setPlayed(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setPlayed(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`${styles.collage} ${played ? styles.collagePlayed : ""} ${isLight ? styles.collageLight : ""}`}
    >
      <div className={styles.collageGlow} aria-hidden>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={isLight ? "/about/icons/glow-light.svg" : "/about/icons/glow.svg"}
          alt=""
        />
      </div>
      {outsideDesign.collage.map((card) => (
        <div
          key={card.id}
          className={`${styles.collageCard} ${collageClass[card.className]}`}
        >
          <div className={styles.collagePhoto}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={isLight ? (lightImages[card.id] ?? card.image) : card.image}
              alt=""
            />
          </div>
          <p className={styles.collageLabel}>{card.label}</p>
        </div>
      ))}
    </div>
  );
}
