"use client";

import { useTheme } from "@/components/ThemeProvider";
import { tools } from "@/lib/about";
import styles from "./AboutPageContent.module.css";

const lightIcons: Record<string, string> = {
  "Adobe After Effects": "/about/tools/light/after-effects.svg",
  "Adobe Photoshop": "/about/tools/light/photoshop.svg",
  Cursor: "/about/tools/light/cursor.svg",
  Figma: "/about/tools/light/figma.svg",
  "Generative AI Tools (ChatGPT, Claude, Gemini, etc.)":
    "/about/tools/light/ai.svg",
  Jitter: "/about/tools/light/jitter.svg",
  Vercel: "/about/tools/light/vercel.svg",
};

export function ToolsList() {
  const { theme } = useTheme();
  const isLight = theme === "light";

  return (
    <div className={styles.toolsList}>
      {tools.items.map((tool) => (
        <div key={tool.name} className={styles.toolItem}>
          <div className={styles.toolIcon}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={isLight ? (lightIcons[tool.name] ?? tool.icon) : tool.icon}
              alt=""
              width={32}
              height={32}
            />
          </div>
          <div className={styles.toolText}>
            <p className={styles.toolName}>{tool.name}</p>
            <p className={styles.toolDesc}>{tool.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
