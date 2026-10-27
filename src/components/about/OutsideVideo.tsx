"use client";

import { useEffect, useRef, useState } from "react";
import { outsideDesign } from "@/lib/about";
import styles from "./AboutPageContent.module.css";

export function OutsideVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const onPlay = () => setPlaying(true);
    const onPause = () => setPlaying(false);
    const onEnded = () => setPlaying(false);

    video.addEventListener("play", onPlay);
    video.addEventListener("pause", onPause);
    video.addEventListener("ended", onEnded);

    return () => {
      video.removeEventListener("play", onPlay);
      video.removeEventListener("pause", onPause);
      video.removeEventListener("ended", onEnded);
    };
  }, []);

  const toggle = async () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      try {
        await video.play();
      } catch {
        setPlaying(false);
      }
    } else {
      video.pause();
    }
  };

  return (
    <div className={styles.videoCard}>
      <video
        ref={videoRef}
        className={styles.videoElement}
        src={outsideDesign.videoSrc}
        poster={outsideDesign.videoPoster}
        playsInline
        preload="metadata"
        onClick={toggle}
      />

      {!playing ? (
        <button
          type="button"
          className={styles.videoOverlay}
          aria-label="Play video"
          onClick={toggle}
        >
          <span className={styles.videoScrim} aria-hidden />
          <span className={styles.playBtn} aria-hidden>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/about/icons/play.svg" alt="" width={44} height={44} />
          </span>
        </button>
      ) : (
        <button
          type="button"
          className={styles.videoPauseHit}
          aria-label="Pause video"
          onClick={toggle}
        />
      )}
    </div>
  );
}
