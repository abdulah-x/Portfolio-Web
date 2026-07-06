import { useEffect, useRef, useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import heroVideo from "@/assets/hero-scroll-bg.mp4.asset.json";

/**
 * Fixed cyberpunk video behind the hero. Playback frame is driven by
 * scroll position within the hero section — not by time.
 */
export function HeroScrollVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [opacity, setOpacity] = useState(1);
  const [ready, setReady] = useState(false);
  const isMobile = useIsMobile();

  const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  useEffect(() => {
    if (isMobile || prefersReducedMotion) return;

    const video = videoRef.current;
    if (!video) return;

    let rafId = 0;
    let targetTime = 0;

    const update = () => {
      const hero = document.getElementById("home");
      if (!hero || !video.duration || isNaN(video.duration)) {
        rafId = 0;
        return;
      }
      const heroHeight = hero.offsetHeight;
      const scrollY = window.scrollY;
      const progress = Math.min(Math.max(scrollY / heroHeight, 0), 1);

      targetTime = progress * (video.duration - 0.05);
      try {
        video.currentTime = targetTime;
      } catch {
        // ignore seek errors while buffering
      }

      // Fade out over the last 20% of the hero
      const fadeStart = 0.8;
      const fadeOpacity =
        progress <= fadeStart
          ? 1
          : Math.max(0, 1 - (progress - fadeStart) / (1 - fadeStart));
      setOpacity(fadeOpacity);

      rafId = 0;
    };

    const onScroll = () => {
      if (rafId) return;
      rafId = requestAnimationFrame(update);
    };

    const onLoaded = () => {
      setReady(true);
      update();
    };

    video.addEventListener("loadedmetadata", onLoaded);
    if (video.readyState >= 1) onLoaded();

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      video.removeEventListener("loadedmetadata", onLoaded);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [isMobile, prefersReducedMotion]);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="absolute inset-0 overflow-hidden pointer-events-none z-0"
      style={{ opacity }}
    >
      <div className="sticky top-0 w-full h-screen overflow-hidden">
        {!isMobile && !prefersReducedMotion ? (
          <video
            ref={videoRef}
            src={heroVideo.url}
            muted
            playsInline
            preload="auto"
            disablePictureInPicture
            className="absolute inset-0 w-full h-full object-cover"
            style={{
              opacity: ready ? 0.55 : 0,
              transition: "opacity 0.6s ease",
            }}
          />
        ) : (
          // Mobile / reduced-motion fallback: first frame as poster
          <video
            src={heroVideo.url}
            muted
            playsInline
            preload="metadata"
            className="absolute inset-0 w-full h-full object-cover opacity-40"
          />
        )}

        {/* Dark gradient + scanline overlay for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/30 to-background" />
        <div className="absolute inset-0 bg-background/30 dark:bg-background/20" />
        <div
          className="absolute inset-0 opacity-30 mix-blend-overlay"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, transparent 0px, transparent 2px, hsl(var(--primary) / 0.06) 2px, hsl(var(--primary) / 0.06) 3px)",
          }}
        />
      </div>
    </div>
  );
}
