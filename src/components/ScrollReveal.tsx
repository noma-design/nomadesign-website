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
  /** Root margin for earlier/later trigger (overrides adaptive default) */
  rootMargin?: string;
  as?: "div" | "section" | "article";
};

function adaptiveRootMargin() {
  const h = window.innerHeight || 800;
  // Short landscape tablets / short phones: keep a usable intersection band
  // so tall blocks still trigger.
  if (h < 560) return "0px 0px -4% 0px";
  if (h < 720) return "-3% 0px -4% 0px";
  return "-6% 0px -6% 0px";
}

function isEffectivelyHidden(node: HTMLElement) {
  const style = window.getComputedStyle(node);
  if (style.display === "none" || style.visibility === "hidden") return true;
  const rect = node.getBoundingClientRect();
  return rect.width === 0 && rect.height === 0;
}

function inViewBand(node: HTMLElement) {
  const rect = node.getBoundingClientRect();
  const vh = window.innerHeight || 0;
  return rect.top < vh * 0.98 && rect.bottom > vh * 0.02;
}

export function ScrollReveal({
  children,
  className,
  animation = "fade-up",
  delay = 0,
  rootMargin: rootMarginProp,
  as: Tag = "div",
}: ScrollRevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);
  /** When true, always stay visible (reduced motion / display:none at breakpoint) */
  const lockedVisibleRef = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced || isEffectivelyHidden(node)) {
      lockedVisibleRef.current = true;
      setVisible(true);
      return;
    }

    lockedVisibleRef.current = false;

    const rootMargin = rootMarginProp ?? adaptiveRootMargin();
    const threshold = (window.innerHeight || 800) < 560 ? 0.02 : 0.06;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (lockedVisibleRef.current) return;
        // Bidirectional: show on enter, hide on leave (scroll down or up)
        setVisible(entry.isIntersecting);
      },
      { rootMargin, threshold },
    );

    observer.observe(node);

    // Sync initial state (soft nav / above-the-fold)
    requestAnimationFrame(() => {
      if (lockedVisibleRef.current) return;
      if (isEffectivelyHidden(node)) {
        lockedVisibleRef.current = true;
        setVisible(true);
        observer.disconnect();
        return;
      }
      setVisible(inViewBand(node));
    });

    const onResize = () => {
      if (lockedVisibleRef.current) return;
      if (isEffectivelyHidden(node)) {
        lockedVisibleRef.current = true;
        setVisible(true);
        observer.disconnect();
        return;
      }
      // Re-evaluate after orientation / breakpoint changes
      setVisible(inViewBand(node));
    };
    window.addEventListener("resize", onResize);
    window.addEventListener("orientationchange", onResize);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", onResize);
      window.removeEventListener("orientationchange", onResize);
    };
  }, [rootMarginProp]);

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
