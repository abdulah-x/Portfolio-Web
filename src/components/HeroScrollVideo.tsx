import { useEffect, useRef, useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import heroVideo from "@/assets/hero-scroll-bg.mp4.asset.json";

/**
 * Ambient cyberpunk video behind the hero. Autoplays on loop; scroll
 * position drives a subtle parallax + fade so it feels tied to scroll
 * without relying on frame-accurate seeking (which most generated MP4s
 * cannot do smoothly without a keyframe-per-frame re-encode).
 */
export function HeroScrollVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [translateY, setTranslateY] = useState(0);
  const [scale, setScale] = useState(1.1);
  const [opacity, setOpacity] = useState(1);
  const isMobile = useIsMobile();

  const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  useEffect(() => {
    const video = videoRef.current;
    if (video && !prefersReducedMotion) {
      video.play().catch(() => {});
    }
  }, [prefersReducedMotion]);

  useEffect(() => {
    let rafId = 0;

    const update = () => {
      const hero = document.getElementById("home");
      if (!hero) {
        rafId = 0;
        return;
      }
      const heroHeight = hero.offsetHeight;
      const scrollY = window.scrollY;
      const progress = Math.min(Math.max(scrollY / heroHeight, 0), 1);

      // Parallax: video drifts up as user scrolls, subtly zooms in
      setTranslateY(-progress * 80);
      setScale(1.1 + progress * 0.08);

      // Fade over the last 30% of the hero
      const fadeStart = 0.7;
      setOpacity(
        progress <= fadeStart
          ? 1
          : Math.max(0, 1 - (progress - fadeStart) / (1 - fadeStart))
      );

      rafId = 0;
    };

    const onScroll = () => {
      if (rafId) return;
      rafId = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 overflow-hidden pointer-events-none z-0"
      style={{ opacity }}
    >
      <div className="sticky top-0 w-full h-screen overflow-hidden">
        <video
          ref={videoRef}
          src={heroVideo.url}
          muted
          loop
          playsInline
          autoPlay
          preload="auto"
          disablePictureInPicture
          className="absolute inset-0 w-full h-full object-cover"
          style={{
            transform: `translate3d(0, ${translateY}px, 0) scale(${scale})`,
            opacity: isMobile ? 0.25 : 0.35,
            willChange: "transform",
          }}
        />

        {/* Heavy legibility overlays — keep hero text crisp */}
        <div className="absolute inset-0 bg-background/70" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/50 via-transparent to-background/50" />
        <div
          className="absolute inset-0 opacity-40 mix-blend-overlay"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, transparent 0px, transparent 2px, hsl(var(--primary) / 0.05) 2px, hsl(var(--primary) / 0.05) 3px)",
          }}
        />
      </div>
    </div>
  );
}
