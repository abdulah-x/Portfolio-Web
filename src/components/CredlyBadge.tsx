import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

interface CredlyBadgeProps {
  badgeId: string;
  badgeUrl: string;
  index?: number;
}

export function CredlyBadge({ badgeId, badgeUrl, index = 0 }: CredlyBadgeProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Load Credly embed script
    const script = document.createElement("script");
    script.src = "//cdn.credly.com/assets/utilities/embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount
      const scripts = document.querySelectorAll('script[src*="credly.com"]');
      scripts.forEach((s) => s.remove());
    };
  }, []);

  return (
    <motion.a
      href={badgeUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.05, y: -4 }}
      className="block bg-card/80 backdrop-blur-sm rounded-lg border border-primary/20 p-6 hover:border-primary/50 hover:neon-border transition-all duration-300"
    >
      <div
        ref={containerRef}
        data-iframe-width="150"
        data-iframe-height="270"
        data-share-badge-id={badgeId}
        data-share-badge-host="https://www.credly.com"
        className="flex items-center justify-center min-h-[270px]"
      />
    </motion.a>
  );
}
