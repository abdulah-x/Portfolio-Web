import { motion } from "framer-motion";

interface SkillCardProps {
  name: string;
  proficiency?: number;
  index?: number;
}

export function SkillCard({ name, proficiency = 80, index = 0 }: SkillCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      whileHover={{ 
        scale: 1.05, 
        y: -3,
      }}
      className="group relative overflow-hidden rounded-lg bg-card/50 backdrop-blur-sm border border-primary/30 p-4 cursor-default hover:border-primary hover:shadow-[0_0_25px_rgba(34,211,238,0.3)] transition-all duration-300"
    >
      {/* Scan line effect on hover */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100"
        initial={{ y: "-100%" }}
        whileHover={{ y: "100%" }}
        transition={{ duration: 0.8, repeat: Infinity }}
      />
      
      {/* Corner brackets */}
      <div className="absolute top-1 left-1 w-2 h-2 border-l border-t border-primary/50 group-hover:border-primary transition-colors" />
      <div className="absolute top-1 right-1 w-2 h-2 border-r border-t border-primary/50 group-hover:border-primary transition-colors" />
      <div className="absolute bottom-1 left-1 w-2 h-2 border-l border-b border-primary/50 group-hover:border-primary transition-colors" />
      <div className="absolute bottom-1 right-1 w-2 h-2 border-r border-b border-primary/50 group-hover:border-primary transition-colors" />

      <div className="relative z-10 flex flex-col items-center gap-3">
        {/* Skill name in terminal style */}
        <span className="font-mono text-xs text-foreground uppercase tracking-wider text-center">
          <span className="text-primary/60">[</span>
          <span className="text-primary group-hover:text-primary transition-colors">{name.toLowerCase()}</span>
          <span className="text-primary/60">]</span>
        </span>
        
        {/* Proficiency bar */}
        <div className="w-full h-1.5 bg-background/50 rounded-full overflow-hidden border border-primary/20">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${proficiency}%` }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 + index * 0.05 }}
            className="h-full rounded-full bg-gradient-to-r from-primary/80 to-primary"
            style={{
              boxShadow: "0 0 10px rgba(34, 211, 238, 0.5)"
            }}
          />
        </div>
        
        {/* Percentage */}
        <span className="font-mono text-[10px] text-primary/70">{proficiency}%</span>
      </div>
    </motion.div>
  );
}
