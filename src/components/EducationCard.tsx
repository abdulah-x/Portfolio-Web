import { motion } from "framer-motion";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

interface EducationCardProps {
  degree: string;
  institution: string;
  location: string;
  period: string;
  grade?: string;
  description?: string;
  isCurrent?: boolean;
  index?: number;
}

export function EducationCard({
  degree,
  institution,
  location,
  period,
  grade,
  description,
  isCurrent = false,
  index = 0,
}: EducationCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative pl-8 pb-8 border-l-2 border-primary/30 last:pb-0"
    >
      {/* Timeline dot */}
      <div className={`absolute left-0 top-0 w-4 h-4 -translate-x-1/2 rounded-full ${isCurrent ? 'bg-accent animate-pulse' : 'bg-primary'} neon-glow`} />
      
      <motion.div
        whileHover={{ scale: 1.02, x: 4 }}
        className="bg-card/80 backdrop-blur-sm rounded-lg border border-primary/20 p-6 hover:border-primary/50 hover:neon-border transition-all duration-300"
      >
        <div className="flex flex-col gap-3">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <GraduationCap className="w-4 h-4 text-primary" />
              <h4 className="font-mono text-sm font-semibold text-foreground">
                {degree}
              </h4>
              {isCurrent && (
                <span className="px-2 py-0.5 bg-accent/20 border border-accent/30 rounded text-[10px] font-mono text-accent">
                  CURRENT
                </span>
              )}
            </div>
            <p className="font-mono text-xs text-primary">{institution}</p>
            <div className="flex flex-wrap items-center gap-4 mt-2 text-muted-foreground">
              <span className="flex items-center gap-1 font-mono text-xs">
                <Calendar className="w-3 h-3" />
                {period}
              </span>
              <span className="flex items-center gap-1 font-mono text-xs">
                <MapPin className="w-3 h-3" />
                {location}
              </span>
            </div>
          </div>

          {grade && (
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs text-muted-foreground">Grade:</span>
              <span className="px-2 py-1 bg-primary/10 border border-primary/20 rounded text-xs font-mono text-primary font-semibold">
                {grade}
              </span>
            </div>
          )}

          {description && (
            <p className="font-mono text-xs text-muted-foreground leading-relaxed">
              {description}
            </p>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}
