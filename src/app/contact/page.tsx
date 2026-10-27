import type { Metadata } from "next";
import { ContactPageContent } from "@/components/contact/ContactPageContent";
import { SiteShell } from "@/components/SiteShell";

export const metadata: Metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <SiteShell footerVariant="contact" mainClassName="page-main-padded">
      <ContactPageContent />
    </SiteShell>
  );
}
