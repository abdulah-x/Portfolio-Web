import { ExternalLink, Github } from "lucide-react";
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
      className="group bg-card rounded-2xl border border-border overflow-hidden hover:shadow-xl hover:shadow-primary/5 hover:border-primary/30 transition-all duration-500"
    >
      {/* Thumbnail */}
      <div className="aspect-video bg-muted overflow-hidden relative">
        <img
          src={project.thumbnail}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
          {project.title}
        </h3>

        <p className="text-sm text-muted-foreground mb-4 line-clamp-2 leading-relaxed">
          {variant === "full" ? project.description : project.summary}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.slice(0, variant === "full" ? 5 : 3).map((tag) => (
            <Badge
              key={tag}
              variant="secondary"
              className="text-xs font-medium bg-primary/5 text-primary border-0 hover:bg-primary/10"
            >
              {tag}
            </Badge>
          ))}
        </div>

        {/* Action Links */}
        {variant === "full" && (
          <div className="flex items-center gap-3 pt-4 border-t border-border">
            {project.demoUrl && (
              <Button variant="ghost" size="sm" className="gap-2 hover:bg-primary/10 hover:text-primary" asChild>
                <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4" />
                  Live Demo
                </a>
              </Button>
            )}
            {project.githubUrl && (
              <Button variant="ghost" size="sm" className="gap-2 hover:bg-primary/10 hover:text-primary" asChild>
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4" />
                  Source
                </a>
              </Button>
            )}
          </div>
        )}
      </div>
    </motion.article>
  );
}
