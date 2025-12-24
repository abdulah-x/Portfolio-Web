import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SkillCardProps {
  name: string;
  icon?: ReactNode;
  category: "language" | "ml" | "tool";
  proficiency?: number; // 0-100
  index?: number;
}

const categoryColors = {
  language: { bg: "from-cyan-500/20 to-blue-500/20", border: "border-cyan-500/50", glow: "rgba(6, 182, 212, 0.4)" },
  ml: { bg: "from-purple-500/20 to-pink-500/20", border: "border-purple-500/50", glow: "rgba(168, 85, 247, 0.4)" },
  tool: { bg: "from-green-500/20 to-emerald-500/20", border: "border-green-500/50", glow: "rgba(34, 197, 94, 0.4)" },
};

export function SkillCard({ name, icon, category, proficiency = 80, index = 0 }: SkillCardProps) {
  const colors = categoryColors[category];
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      whileHover={{ 
        scale: 1.05, 
        y: -5,
        boxShadow: `0 0 30px ${colors.glow}`
      }}
      className={`group relative overflow-hidden rounded-xl bg-gradient-to-br ${colors.bg} backdrop-blur-sm border ${colors.border} p-4 cursor-default transition-all duration-300`}
    >
      {/* Animated background pulse */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
        initial={{ x: "-100%" }}
        whileHover={{ x: "100%" }}
        transition={{ duration: 0.6 }}
      />
      
      <div className="relative z-10 flex flex-col items-center gap-3">
        {/* Icon container with glow */}
        {icon && (
          <motion.div 
            className="text-2xl"
            whileHover={{ rotate: [0, -10, 10, 0] }}
            transition={{ duration: 0.4 }}
          >
            {icon}
          </motion.div>
        )}
        
        {/* Skill name */}
        <span className="font-mono text-xs text-foreground uppercase tracking-wider text-center">
          {name}
        </span>
        
        {/* Proficiency bar */}
        <div className="w-full h-1 bg-background/30 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${proficiency}%` }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 + index * 0.05 }}
            className={`h-full rounded-full ${
              category === "language" ? "bg-cyan-400" :
              category === "ml" ? "bg-purple-400" :
              "bg-green-400"
            }`}
          />
        </div>
      </div>
      
      {/* Corner accent */}
      <div className={`absolute top-0 right-0 w-8 h-8 ${
        category === "language" ? "bg-cyan-500/20" :
        category === "ml" ? "bg-purple-500/20" :
        "bg-green-500/20"
      } rounded-bl-xl`} />
    </motion.div>
  );
}
