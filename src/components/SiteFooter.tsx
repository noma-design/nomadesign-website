"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { CopyIcon } from "@/components/icons/CopyIcon";
import { ExternalLinkIcon } from "@/components/icons/ExternalLinkIcon";
import { site } from "@/lib/site";
import styles from "./SiteFooter.module.css";

type SiteFooterProps = {
  variant?: "default" | "contact";
};

export function SiteFooter({ variant = "default" }: SiteFooterProps) {
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(site.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        {variant === "default" ? (
          <>
            <div className={styles.ctaRow}>
              <h2 className={styles.headline}>
                Let&apos;s <span className={styles.headlineMuted}>design, build</span>{" "}
                <span className={styles.headlineMuted}>and</span>{" "}
                <span className={styles.headlineMuted}>ship</span> together
              </h2>
              <div className={styles.ctaButtons}>
                <a
                  href={site.calUrl}
                  className={styles.btnPrimary}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Schedule a Call
                </a>
                <Link href="/contact#message" className={styles.btnSecondary}>
                  Send a Message
                </Link>
              </div>
            </div>
            <hr className={styles.divider} />
          </>
        ) : null}

        <div className={styles.metaRow}>
          <div className={styles.column}>
            <p className={styles.label}>Email:</p>
            <div className={styles.emailValueWrap}>
              {copied ? (
                <span className={styles.copiedTooltip} role="status">
                  Copied
                </span>
              ) : null}
              <div className={styles.valueRow}>
                <span>{site.email}</span>
                <button
                  type="button"
                  className={styles.copyButton}
                  onClick={copyEmail}
                  aria-label="Copy email address"
                >
                  <CopyIcon className={styles.copyIcon} />
                </button>
              </div>
            </div>
          </div>

          <div className={styles.columnCenter}>
            <div className={styles.column}>
              <p className={styles.label}>Resume:</p>
              <a
                href={site.resumeUrl}
                className={styles.resumeLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                View PDF
                <ExternalLinkIcon className={styles.externalIcon} />
              </a>
            </div>
          </div>

          <div className={styles.columnEnd}>
            <div className={styles.column}>
              <p className={styles.label}>Socials:</p>
              <div className={styles.socials}>
                <a
                  href={site.socials.behance}
                  className={styles.socialBtn}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Behance"
                >
                  <Image
                    src="/icons/behance.svg"
                    alt=""
                    width={20}
                    height={20}
                    className={styles.socialIcon}
                  />
                </a>
                <a
                  href={site.socials.linkedin}
                  className={styles.socialBtn}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <Image
                    src="/icons/linkedin.svg"
                    alt=""
                    width={20}
                    height={20}
                    className={styles.socialIcon}
                  />
                </a>
                <a
                  href={site.socials.instagram}
                  className={styles.socialBtn}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <Image
                    src="/icons/instagram.svg"
                    alt=""
                    width={20}
                    height={20}
                    className={styles.socialIcon}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>

        <p className={styles.copyright}>© 2026 {site.name}</p>
      </div>
    </footer>
  );
}
