import { motion } from "framer-motion";
import { useState } from "react";
import { Github, ExternalLink, GitBranch, Star, Code2 } from "lucide-react";
import { Button } from "./ui/button";

interface GitHubStatsProps {
  username: string;
}

export function GitHubStats({ username }: GitHubStatsProps) {
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  const handleImageError = (key: string) => {
    setImageErrors(prev => ({ ...prev, [key]: true }));
  };

  const StatsFallback = ({ title, icon: Icon }: { title: string; icon: React.ElementType }) => (
    <div className="flex flex-col items-center justify-center h-32 gap-3">
      <Icon className="w-8 h-8 text-primary/50" />
      <p className="font-mono text-xs text-muted-foreground">{title}</p>
      <a 
        href={`https://github.com/${username}`}
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary hover:underline text-xs font-mono"
      >
        View on GitHub →
      </a>
    </div>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="w-full"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* GitHub Stats Card */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="group"
        >
          <div className="relative overflow-hidden rounded-lg border border-primary/30 bg-card/50 backdrop-blur-sm p-1 hover:border-primary/50 transition-all duration-300 min-h-[160px]">
            {imageErrors.stats ? (
              <StatsFallback title="GitHub Stats" icon={Github} />
            ) : (
              <img
                src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=transparent&hide_border=true&title_color=22d3ee&text_color=94a3b8&icon_color=22d3ee&bg_color=00000000&cache_seconds=86400`}
                alt="GitHub Stats"
                className="w-full h-auto"
                loading="lazy"
                onError={() => handleImageError('stats')}
              />
            )}
          </div>
        </motion.div>

        {/* Top Languages Card */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="group"
        >
          <div className="relative overflow-hidden rounded-lg border border-primary/30 bg-card/50 backdrop-blur-sm p-1 hover:border-primary/50 transition-all duration-300 min-h-[160px]">
            {imageErrors.langs ? (
              <StatsFallback title="Top Languages" icon={Code2} />
            ) : (
              <img
                src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=transparent&hide_border=true&title_color=22d3ee&text_color=94a3b8&bg_color=00000000&cache_seconds=86400`}
                alt="Top Languages"
                className="w-full h-auto"
                loading="lazy"
                onError={() => handleImageError('langs')}
              />
            )}
          </div>
        </motion.div>

        {/* GitHub Profile Link Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="md:col-span-2"
        >
          <div className="relative overflow-hidden rounded-lg border border-primary/30 bg-gradient-to-r from-primary/5 via-card/50 to-accent/5 backdrop-blur-sm p-6 hover:border-primary/50 transition-all duration-300">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 border border-primary/50 flex items-center justify-center">
                  <Github className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-mono text-lg text-foreground">@{username}</h3>
                  <p className="font-mono text-xs text-muted-foreground">View full profile and repositories</p>
                </div>
              </div>
              <Button
                asChild
                variant="outline"
                className="font-mono text-xs border-primary/50 hover:bg-primary/10 hover:border-primary"
              >
                <a
                  href={`https://github.com/${username}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2"
                >
                  <span>VISIT_GITHUB</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
