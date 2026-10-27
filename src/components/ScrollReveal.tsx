"use client";

import {
  type CSSProperties,
  type ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";
import styles from "./ScrollReveal.module.css";

type ScrollRevealProps = {
  children: ReactNode;
  className?: string;
  /** Animation variant */
  animation?: "fade-up" | "fade-in" | "fade-left" | "fade-right";
  /** Delay in ms */
  delay?: number;
  /** Root margin for earlier/later trigger */
  rootMargin?: string;
  as?: "div" | "section" | "article";
};

export function ScrollReveal({
  children,
  className,
  animation = "fade-up",
  delay = 0,
  rootMargin = "-6% 0px -6% 0px",
  as: Tag = "div",
}: ScrollRevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Latch once visible so client navigations / layout shifts
        // don’t leave content stuck at opacity 0.
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(node);
        }
      },
      { rootMargin, threshold: 0.08 },
    );

    observer.observe(node);
    // Catch elements already in view on soft navigations
    requestAnimationFrame(() => {
      const rect = node.getBoundingClientRect();
      const vh = window.innerHeight || 0;
      if (rect.top < vh * 0.94 && rect.bottom > vh * 0.06) {
        setVisible(true);
        observer.unobserve(node);
      }
    });

    return () => observer.disconnect();
  }, [rootMargin]);

  return (
    <Tag
      ref={ref as never}
      className={[
        styles.reveal,
        styles[animation],
        visible ? styles.visible : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      style={{ "--reveal-delay": `${delay}ms` } as CSSProperties}
    >
      {children}
    </Tag>
  );
}
