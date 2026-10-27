"use client";

import {
  type ReactNode,
  useEffect,
  useRef,
} from "react";

type EqualHeightGroupProps = {
  children: ReactNode;
  className?: string;
  /** CSS selector for items to equalize (scoped to this root) */
  itemSelector?: string;
};

/**
 * Sets every matched item to the tallest item’s height.
 * Re-runs on resize / content size changes (ResizeObserver).
 */
export function EqualHeightGroup({
  children,
  className,
  itemSelector = "[data-equal-card]",
}: EqualHeightGroupProps) {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const container: HTMLDivElement = root;

    let frame = 0;

    const observer = new ResizeObserver(() => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(sync);
    });

    function sync() {
      const items = [
        ...container.querySelectorAll<HTMLElement>(itemSelector),
      ];
      if (items.length === 0) return;

      // Pause while we measure/write so setting heights doesn’t re-enter
      observer.disconnect();

      for (const el of items) {
        el.style.height = "auto";
      }

      const max = Math.ceil(
        Math.max(...items.map((el) => el.getBoundingClientRect().height)),
      );

      for (const el of items) {
        el.style.height = `${max}px`;
      }

      observer.observe(container);
    }

    function scheduleSync() {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(sync);
    }

    scheduleSync();
    window.addEventListener("resize", scheduleSync);
    void document.fonts?.ready.then(scheduleSync);

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener("resize", scheduleSync);
      for (const el of container.querySelectorAll<HTMLElement>(itemSelector)) {
        el.style.height = "";
      }
    };
  }, [itemSelector]);

  return (
    <div ref={rootRef} className={className}>
      {children}
    </div>
  );
}
