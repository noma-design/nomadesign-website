"use client";

import Image from "next/image";
import { FormEvent, useEffect, useRef, useState } from "react";
import { CopyIcon } from "@/components/icons/CopyIcon";
import { WaveHandIcon } from "@/components/icons/WaveHandIcon";
import { ScrollReveal } from "@/components/ScrollReveal";
import { useTheme } from "@/components/ThemeProvider";
import { site } from "@/lib/site";
import styles from "./ContactPageContent.module.css";
import { SuccessOverlay } from "./SuccessOverlay";

type FormStatus = "idle" | "loading" | "success" | "error";

const SUCCESS_HOLD_MS = 5_000;
const SUCCESS_FADE_MS = 700;

export function ContactPageContent() {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const formRef = useRef<HTMLFormElement>(null);
  const [copied, setCopied] = useState(false);
  const [status, setStatus] = useState<FormStatus>("idle");
  const [successFading, setSuccessFading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (status !== "success") return;

    setSuccessFading(false);

    const fadeTimer = window.setTimeout(() => {
      setSuccessFading(true);
    }, SUCCESS_HOLD_MS);

    const resetTimer = window.setTimeout(() => {
      setStatus("idle");
      setSuccessFading(false);
      formRef.current?.reset();
    }, SUCCESS_HOLD_MS + SUCCESS_FADE_MS);

    return () => {
      window.clearTimeout(fadeTimer);
      window.clearTimeout(resetTimer);
    };
  }, [status]);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(site.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const form = event.currentTarget;
    const data = new FormData(form);
    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

    if (!accessKey) {
      setStatus("error");
      setErrorMessage("Form is not configured yet. Please try again later.");
      return;
    }

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: String(data.get("name") ?? "").trim(),
          email: String(data.get("email") ?? "").trim(),
          message: String(data.get("message") ?? "").trim(),
          subject: "New message from Noma design contact form",
          from_name: "Noma design website",
        }),
      });

      const result = (await response.json()) as {
        success?: boolean;
        message?: string;
      };

      if (!response.ok || !result.success) {
        throw new Error(result.message || "Something went wrong. Please try again.");
      }

      form.reset();
      setStatus("success");
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again.",
      );
    }
  }

  const showSuccess = status === "success";

  return (
    <section className={styles.page} id="message">
      <ScrollReveal animation="fade-up">
        <h1
          className={`${styles.headline}${showSuccess ? ` ${styles.headlineHiddenOnSuccess}` : ""}`}
        >
          Let&apos;s <span className={styles.headlineMuted}>design, build and ship</span>{" "}
          together
        </h1>
      </ScrollReveal>

      <div className={styles.layout}>
        <ScrollReveal
          className={`${styles.portraitCol}${showSuccess ? ` ${styles.portraitColHiddenOnSuccess}` : ""}`}
          animation="fade-up"
          delay={60}
        >
          <div className={styles.portraitFrame}>
            <Image
              src="/contact/portrait.jpg"
              alt="Portrait of Kristin Adeoti"
              fill
              priority
              fetchPriority="high"
              quality={85}
              sizes="(max-width: 820px) 100vw, (max-width: 1199px) 306px, 497px"
              className={styles.portraitImage}
            />

            <div className={styles.availability}>
              <div className={styles.pulseWrap} aria-hidden>
                <span className={styles.pulseOuter} />
                <span className={styles.pulseMiddle} />
                <span className={styles.pulseCore} />
              </div>
              <span className={styles.availabilityText}>Available for work</span>
            </div>
          </div>

          <div className={styles.waveBtn} aria-hidden>
            <WaveHandIcon className={styles.waveHand} />
            <span className={styles.waveHi}>Hi</span>
          </div>
        </ScrollReveal>

        <ScrollReveal
          className={`${styles.panel} ${showSuccess ? styles.panelSuccess : ""}`}
          animation="fade-up"
          delay={120}
        >
          {showSuccess ? (
            <SuccessOverlay fading={successFading} />
          ) : (
            <>
              <div className={styles.panelTop}>
                <div className={styles.infoRow}>
                  <div className={styles.infoBlock}>
                    <p className={styles.infoLabel}>Email:</p>
                    <div className={styles.emailRow}>
                      {copied ? (
                        <span className={styles.copiedTooltip} role="status">
                          Copied
                        </span>
                      ) : null}
                      <p className={styles.emailValue}>{site.email}</p>
                      <button
                        type="button"
                        className={styles.copyButton}
                        onClick={copyEmail}
                        aria-label="Copy email address"
                      >
                        <CopyIcon size={20} />
                      </button>
                    </div>
                  </div>

                  <div className={styles.infoBlock}>
                    <p className={styles.infoLabel}>Socials:</p>
                    <div className={styles.socials}>
                      <a
                        href={site.socials.behance}
                        className={styles.socialBtn}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Behance"
                      >
                        <Image
                          src={
                            isDark
                              ? "/icons/behance-light.svg"
                              : "/icons/behance.svg"
                          }
                          alt=""
                          width={24}
                          height={24}
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
                          src={
                            isDark
                              ? "/icons/linkedin-light.svg"
                              : "/icons/linkedin.svg"
                          }
                          alt=""
                          width={24}
                          height={24}
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
                          src={
                            isDark
                              ? "/icons/instagram-light.svg"
                              : "/icons/instagram.svg"
                          }
                          alt=""
                          width={22}
                          height={22}
                          className={styles.socialIcon}
                        />
                      </a>
                    </div>
                  </div>
                </div>

                <hr className={styles.divider} />

                <form
                  ref={formRef}
                  className={styles.formBlock}
                  onSubmit={onSubmit}
                  noValidate
                >
                  <h2 className={styles.formTitle}>Send me a direct message</h2>

                  <div className={styles.fields}>
                    <div className={styles.row}>
                      <label className={styles.field}>
                        <span className={styles.label}>Name</span>
                        <input
                          className={styles.input}
                          type="text"
                          name="name"
                          required
                          autoComplete="name"
                          placeholder="e.g., Jane Doe"
                        />
                      </label>
                      <label className={styles.field}>
                        <span className={styles.label}>Email</span>
                        <input
                          className={styles.input}
                          type="email"
                          name="email"
                          required
                          autoComplete="email"
                          placeholder="e.g., jane@company.com"
                        />
                      </label>
                    </div>

                    <label className={styles.field}>
                      <span className={styles.label}>Message</span>
                      <textarea
                        className={styles.textarea}
                        name="message"
                        required
                        rows={6}
                        placeholder="Share details about an open role, a new project, or just say hi..."
                      />
                    </label>
                  </div>

                  <div className={styles.formFooter}>
                    <button
                      type="submit"
                      className={styles.submit}
                      disabled={status === "loading"}
                    >
                      {status === "loading" ? "Sending..." : "Send Message"}
                    </button>
                    <p className={styles.responseNote}>
                      (Replies within 24 hours)
                    </p>
                    {status === "error" ? (
                      <p
                        className={`${styles.status} ${styles.statusError}`}
                        role="alert"
                      >
                        {errorMessage}
                      </p>
                    ) : null}
                  </div>
                </form>
              </div>

              <div className={styles.banner}>
                <p className={styles.bannerText}>Prefer a live conversation?</p>
                <a
                  href={site.calUrl}
                  className={styles.scheduleBtn}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Schedule a Call
                </a>
              </div>
            </>
          )}
        </ScrollReveal>
      </div>
    </section>
  );
}
