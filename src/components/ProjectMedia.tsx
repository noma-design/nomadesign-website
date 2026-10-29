import Image from "next/image";
import type { ReactNode } from "react";
import styles from "./ProjectMedia.module.css";

/** Crop keys map 1:1 to Figma absolute image placement classes. */
export type ProjectMediaCrop =
  | "default"
  | "styches"
  | "yelvio"
  | "roam"
  | "noma"
  | "jumia"
  | "mayflower"
  | "styches-home"
  | "yelvio-home";

const cropClass: Record<ProjectMediaCrop, string> = {
  default: styles.cropDefault,
  styches: styles.cropStyches,
  yelvio: styles.cropYelvio,
  roam: styles.cropRoam,
  noma: styles.cropNoma,
  jumia: styles.cropJumia,
  mayflower: styles.cropMayflower,
  "styches-home": styles.cropStychesHome,
  "yelvio-home": styles.cropYelvioHome,
};

type FrameProps = {
  children: ReactNode;
  className?: string;
};

/** Framed project thumbnail — overflow clipped, no dark stroke. */
export function ProjectMediaFrame({ children, className }: FrameProps) {
  return (
    <div className={[styles.frame, className].filter(Boolean).join(" ")}>
      {children}
    </div>
  );
}

type ImageProps = {
  src: string;
  crop?: ProjectMediaCrop;
  className?: string;
  /** Hint for LCP / above-fold featured cards */
  priority?: boolean;
};

/**
 * Project cover image. Placement comes from Figma get_design_context
 * (absolute width/height/left/top %). Do not invent zoom scales.
 */
export function ProjectMediaImage({
  src,
  crop = "default",
  className,
  priority = false,
}: ImageProps) {
  return (
    <Image
      src={src}
      alt=""
      width={2400}
      height={1800}
      sizes="(max-width: 767px) 100vw, (max-width: 1199px) 100vw, 628px"
      priority={priority}
      className={[styles.image, cropClass[crop], className]
        .filter(Boolean)
        .join(" ")}
    />
  );
}
