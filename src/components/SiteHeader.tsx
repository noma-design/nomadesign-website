"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useState } from "react";
import { navLinks } from "@/lib/site";
import { useTheme } from "./ThemeProvider";
import styles from "./SiteHeader.module.css";

const mobileLinks = [
  ...navLinks,
  { href: "/contact", label: "Contact", id: "contact" },
] as const;

function getActiveId(pathname: string) {
  if (pathname === "/") return "home";
  if (pathname.startsWith("/projects")) return "projects";
  if (pathname.startsWith("/about")) return "about";
  if (pathname.startsWith("/contact")) return "contact";
  return "default";
}

export function SiteHeader() {
  const pathname = usePathname();
  const active = getActiveId(pathname);
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";
  const [menuOpen, setMenuOpen] = useState(false);
  const menuId = useId();

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!menuOpen) return;

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setMenuOpen(false);
    }

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  function renderThemeToggle(className?: string) {
    return (
      <button
        type="button"
        className={`${styles.toggle}${className ? ` ${className}` : ""}`}
        onClick={toggleTheme}
        aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      >
        <span
          className={`${styles.thumb} ${isDark ? styles.thumbActive : ""}`}
          aria-hidden
        >
          <Image
            src={isDark ? "/icons/moon.svg" : "/icons/moon-light.svg"}
            alt=""
            width={18}
            height={18}
            className={styles.thumbIcon}
          />
        </span>
        <span
          className={`${styles.thumb} ${!isDark ? styles.thumbActive : ""}`}
          aria-hidden
        >
          <Image
            src={isDark ? "/icons/sun.svg" : "/icons/sun-light.svg"}
            alt=""
            width={18}
            height={18}
            className={styles.thumbIcon}
          />
        </span>
      </button>
    );
  }

  return (
    <header className={styles.header}>
      <div className={styles.shell}>
        <nav className={`nav-pill ${styles.nav}`} aria-label="Primary">
          <Link href="/" className={styles.logo} aria-label="Noma design home">
            <Image
              src={isDark ? "/brand/logo-dark.svg" : "/brand/logo-light.svg"}
              alt=""
              width={62}
              height={45}
              className={styles.logoImage}
              priority
            />
          </Link>

          <div className={styles.links}>
            {navLinks.map((link) => {
              const isActive = active === link.id;
              return (
                <Link
                  key={link.id}
                  href={link.href}
                  className={`${styles.link} ${isActive ? styles.linkActive : ""}`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          <div className={styles.actions}>
            {renderThemeToggle(styles.toggleDesktop)}

            <Link href="/contact" className={styles.contact}>
              Contact
            </Link>

            <button
              type="button"
              className={styles.menuButton}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              aria-controls={menuId}
              onClick={() => setMenuOpen((open) => !open)}
            >
              <span
                className={`${styles.menuIcon} ${menuOpen ? styles.menuIconOpen : ""}`}
                aria-hidden
              >
                <span />
                <span />
                <span />
              </span>
            </button>
          </div>
        </nav>

        {menuOpen ? (
          <div className={styles.mobileMenu} id={menuId}>
            <div className={styles.mobileMenuInner}>
              {mobileLinks.map((link) => {
                const isActive = active === link.id;
                return (
                  <Link
                    key={link.id}
                    href={link.href}
                    className={`${styles.mobileLink} ${isActive ? styles.mobileLinkActive : ""}`}
                    aria-current={isActive ? "page" : undefined}
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <div className={styles.mobileThemeRow}>
                {renderThemeToggle()}
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </header>
  );
}
