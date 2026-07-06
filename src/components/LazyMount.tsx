import { ReactNode, Suspense, useEffect, useRef, useState } from "react";

interface LazyMountProps {
  children: ReactNode;
  /** Fallback rendered before the section is mounted (keeps scroll height stable). */
  fallback?: ReactNode;
  /** Root margin — start mounting slightly before it enters view. */
  rootMargin?: string;
  /** Minimum height reserved so layout doesn't jump. */
  minHeight?: string | number;
  className?: string;
}

/**
 * Mounts children only when the placeholder scrolls near the viewport.
 * Combine with React.lazy() to code-split heavy sections.
 */
export function LazyMount({
  children,
  fallback = null,
  rootMargin = "300px 0px",
  minHeight = 400,
  className = "",
}: LazyMountProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || visible) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setVisible(true);
          io.disconnect();
        }
      },
      { rootMargin }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [rootMargin, visible]);

  return (
    <div ref={ref} className={className} style={{ minHeight: visible ? undefined : minHeight }}>
      {visible ? <Suspense fallback={fallback}>{children}</Suspense> : fallback}
    </div>
  );
}
