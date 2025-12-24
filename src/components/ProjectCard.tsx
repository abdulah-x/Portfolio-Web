import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

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
}

export function ProjectCard({ project, variant = "featured" }: ProjectCardProps) {
  return (
    <article className="group bg-card rounded-2xl border border-border overflow-hidden hover:shadow-lg hover:border-primary/20 transition-all duration-300">
      {/* Thumbnail */}
      <div className="aspect-video bg-muted overflow-hidden">
        <img
          src={project.thumbnail}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
          {project.title}
        </h3>

        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
          {variant === "full" ? project.description : project.summary}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.slice(0, variant === "full" ? 6 : 4).map((tag) => (
            <Badge
              key={tag}
              variant="secondary"
              className="text-xs font-medium"
            >
              {tag}
            </Badge>
          ))}
        </div>

        {/* Action Links */}
        {variant === "full" && (
          <div className="flex items-center gap-3 pt-2 border-t border-border">
            {project.demoUrl && (
              <Button variant="ghost" size="sm" className="gap-2" asChild>
                <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4" />
                  View Demo
                </a>
              </Button>
            )}
            {project.githubUrl && (
              <Button variant="ghost" size="sm" className="gap-2" asChild>
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4" />
                  Source
                </a>
              </Button>
            )}
          </div>
        )}
      </div>
    </article>
  );
}
