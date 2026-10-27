import type { ReactNode } from "react";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";

type SiteShellProps = {
  children: ReactNode;
  footerVariant?: "default" | "contact";
  mainClassName?: string;
};

export function SiteShell({
  children,
  footerVariant = "default",
  mainClassName,
}: SiteShellProps) {
  return (
    <div className="page-shell">
      <SiteHeader />
      <main
        className={["page-main", mainClassName].filter(Boolean).join(" ")}
      >
        {children}
      </main>
      <SiteFooter variant={footerVariant} />
    </div>
  );
}
