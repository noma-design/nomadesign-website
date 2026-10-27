"use client";

import { useState } from "react";
import { whyHireMe } from "@/lib/about";
import styles from "./AboutPageContent.module.css";

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      className={styles.chevron}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
    >
      {open ? (
        <path
          d="M18 15L12 9L6 15"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      ) : (
        <path
          d="M6 9L12 15L18 9"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      )}
    </svg>
  );
}

export function WhyHireAccordion() {
  const [open, setOpen] = useState(-1);

  return (
    <div className={styles.accordion}>
      {whyHireMe.items.map((item, index) => {
        const isOpen = open === index;
        return (
          <div
            key={item.title}
            className={`${styles.accordionItem} ${isOpen ? styles.accordionItemOpen : ""}`}
          >
            <button
              type="button"
              className={`${styles.accordionHeader} ${isOpen ? styles.accordionHeaderOpen : ""}`}
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? -1 : index)}
            >
              <span>{item.title}</span>
              <Chevron open={isOpen} />
            </button>
            {isOpen ? (
              <div className={styles.accordionBody}>
                <p>{item.body}</p>
              </div>
            ) : null}
            <div className={styles.accordionLine} aria-hidden />
          </div>
        );
      })}
    </div>
  );
}
