"use client";

import Image from "next/image";
import { useTheme } from "@/components/ThemeProvider";
import styles from "./SuccessOverlay.module.css";

type SuccessOverlayProps = {
  fading?: boolean;
};

export function SuccessOverlay({ fading = false }: SuccessOverlayProps) {
  const { theme } = useTheme();
  const mode = theme === "dark" ? "dark" : "light";
  const base = `/contact/success/${mode}`;

  return (
    <div
      className={`${styles.overlay} ${fading ? styles.overlayFading : ""}`}
      role="status"
      aria-live="polite"
      aria-label="Message sent successfully"
    >
      <div className={styles.graphic} aria-hidden>
        <Image
          src={`${base}/ellipse-3.svg`}
          alt=""
          width={208}
          height={208}
          className={`${styles.ring} ${styles.ringOuter}`}
        />
        <Image
          src={`${base}/ellipse-2.svg`}
          alt=""
          width={168}
          height={168}
          className={`${styles.ring} ${styles.ringMid}`}
        />
        <Image
          src={`${base}/ellipse-1.svg`}
          alt=""
          width={129}
          height={129}
          className={`${styles.ring} ${styles.ringInner}`}
        />
        <Image
          src={`${base}/verify.svg`}
          alt=""
          width={119}
          height={119}
          className={styles.verify}
        />
      </div>

      <div className={styles.copy}>
        <p className={styles.title}>Message sent</p>
        <p className={styles.subtitle}>I&apos;ll get back to you soon.</p>
        <p className={styles.note}>(Replies within 24 hours)</p>
      </div>
    </div>
  );
}
