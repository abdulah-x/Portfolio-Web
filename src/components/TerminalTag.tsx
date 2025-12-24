import { motion } from "framer-motion";
import { ReactNode } from "react";

interface TerminalTagProps {
  name: string;
  icon?: ReactNode;
  index?: number;
}

export function TerminalTag({ name, icon, index = 0 }: TerminalTagProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      whileHover={{ scale: 1.05, y: -2 }}
      className="group relative font-mono text-xs px-4 py-2 bg-card/80 border border-primary/30 rounded hover:border-primary hover:neon-border transition-all duration-300 cursor-default"
    >
      <span className="text-primary/50">[</span>
      <span className="text-primary mx-1 inline-flex items-center gap-1.5">
        {icon && <span className="opacity-70">{icon}</span>}
        {name.toLowerCase()}
      </span>
      <span className="text-primary/50">]</span>
    </motion.div>
  );
}
