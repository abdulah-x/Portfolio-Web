import { ExternalLink, Github, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

export interface Project {
  id: string;
  title: string;
  summary: string;
  description?: string;
  thumbnail: string;
  tags: string[];
  demoUrl?: string;
  githubUrl?: string;
}

interface ProjectCardProps {
  project: Project;
  variant?: "featured" | "full";
  index?: number;
}

export function ProjectCard({ project, variant = "featured", index = 0 }: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -8 }}
      className="group relative bg-card/80 backdrop-blur-sm rounded-lg border border-primary/10 overflow-hidden hover:border-primary/40 hover:neon-border transition-all duration-500"
    >
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      
      {/* Project number */}
      <div className="absolute top-4 right-4 font-mono text-xs text-primary/50">
        [{String(index + 1).padStart(2, "0")}]
      </div>

      {/* Thumbnail */}
      <div className="aspect-video bg-secondary/50 overflow-hidden relative">
        <img
          src={project.thumbnail}
          alt={project.title}
          className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
        
        {/* Scanline effect on hover */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none scanline" />
      </div>

      {/* Content */}
      <div className="p-6 relative">
        <div className="flex items-center gap-2 mb-2">
          <Terminal className="w-4 h-4 text-primary" />
          <span className="font-mono text-xs text-primary/70">PROJECT</span>
        </div>
        
        <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
          {project.title}
        </h3>

        <p className="font-mono text-xs text-muted-foreground mb-4 line-clamp-2 leading-relaxed">
          {variant === "full" ? project.description : project.summary}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.slice(0, variant === "full" ? 5 : 3).map((tag) => (
            <Badge
              key={tag}
              variant="outline"
              className="font-mono text-[10px] border-primary/30 text-primary/70 bg-primary/5"
            >
              #{tag}
            </Badge>
          ))}
        </div>

        {/* Action Links */}
        {variant === "full" && (
          <div className="flex items-center gap-3 pt-4 border-t border-primary/10">
            {project.demoUrl && (
              <Button variant="ghost" size="sm" className="gap-2 font-mono text-xs text-primary hover:bg-primary/10" asChild>
                <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-3 w-3" />
                  DEMO
                </a>
              </Button>
            )}
            {project.githubUrl && (
              <Button variant="ghost" size="sm" className="gap-2 font-mono text-xs text-primary hover:bg-primary/10" asChild>
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="h-3 w-3" />
                  SOURCE
                </a>
              </Button>
            )}
          </div>
        )}
      </div>
    </motion.article>
  );
}
