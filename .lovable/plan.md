## Scroll-scrubbed cyberpunk video background (Hero only)

Add a fixed video behind the Hero section whose playback frame is driven by the scroll position within the hero (not by time). As you scroll from the top of the page to the end of the hero, the video scrubs from frame 0 to its last frame. Once you scroll past the hero, the video fades out and the rest of the page continues as-is.

### What gets built

1. **Generate a short cyberpunk clip** (`src/assets/hero-scroll-bg.mp4`)
   - ~5s, 1080p, 24fps, silent, seamless
   - Motif: slow flythrough over a dark neon data-grid / circuit city with cyan + magenta glow, subtle particles, matching the existing CyberBackground palette (Electric Blue / neon pink / deep space bg)
   - Encoded H.264 + `moov` atom moved to the front so it can be seeked/scrubbed smoothly in the browser

2. **New component `src/components/HeroScrollVideo.tsx`**
   - Renders a `<video muted playsInline preload="auto">` fixed to the viewport behind the hero content
   - Listens to `scroll` via `requestAnimationFrame`; computes `progress = clamp(scrollY / heroHeight, 0, 1)` and sets `video.currentTime = progress * video.duration`
   - Fades opacity from 1 → 0 across the last 15% of the hero so the transition into the next section is clean
   - Adds a dark gradient overlay + subtle scanline so hero text stays readable in both light and dark modes
   - Respects `prefers-reduced-motion`: falls back to a static poster frame, no scrubbing
   - Mobile fallback (via `useIsMobile`): shows the poster image only — iOS Safari throttles `currentTime` and scrubbing is janky

3. **Wire it into the hero**
   - Mount `<HeroScrollVideo />` inside the `#home` hero section in `src/pages/Index.tsx`, layered behind the existing hero content but above `CyberBackground`
   - Keep `CyberBackground` (grid + particles) for the rest of the page; the scroll video only lives in the hero viewport

### Technical notes

- Scroll → frame mapping uses `requestAnimationFrame` throttling to avoid layout thrash
- Video must be encoded with `-movflags +faststart` and short GOP (`-g 1` keyframe-per-frame) so seeking to arbitrary `currentTime` is instant — otherwise scrubbing stutters. The generation step will re-encode with ffmpeg after the clip is produced.
- File size target: <3 MB so first paint isn't blocked
- No changes to Projects, Skills, Nav, Footer, or any other section

### Out of scope
- No scroll-scrubbing on other sections
- No changes to copy or layout of the hero itself
- No new dependencies (uses native `<video>` + `requestAnimationFrame`)
