import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Github, ExternalLink, Star, GitFork, Code2, Users, BookOpen, Activity } from "lucide-react";
import { Button } from "./ui/button";

interface GitHubStatsProps {
  username: string;
}

interface GitHubUser {
  public_repos: number;
  followers: number;
  following: number;
  avatar_url: string;
  bio: string;
  name: string;
}

interface GitHubRepo {
  name: string;
  stargazers_count: number;
  forks_count: number;
  language: string;
}

export function GitHubStats({ username }: GitHubStatsProps) {
  const [userData, setUserData] = useState<GitHubUser | null>(null);
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        const [userRes, reposRes] = await Promise.all([
          fetch(`https://api.github.com/users/${username}`),
          fetch(`https://api.github.com/users/${username}/repos?per_page=100&sort=updated`)
        ]);

        if (!userRes.ok || !reposRes.ok) {
          throw new Error('Failed to fetch');
        }

        const user = await userRes.json();
        const repoData = await reposRes.json();

        setUserData(user);
        setRepos(repoData);
        setLoading(false);
      } catch (err) {
        setError(true);
        setLoading(false);
      }
    };

    fetchGitHubData();
  }, [username]);

  // Calculate stats
  const totalStars = repos.reduce((acc, repo) => acc + repo.stargazers_count, 0);
  const totalForks = repos.reduce((acc, repo) => acc + repo.forks_count, 0);
  
  // Calculate language distribution
  const languageCount: Record<string, number> = {};
  repos.forEach(repo => {
    if (repo.language) {
      languageCount[repo.language] = (languageCount[repo.language] || 0) + 1;
    }
  });
  
  const topLanguages = Object.entries(languageCount)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5);

  const totalLangRepos = topLanguages.reduce((acc, [, count]) => acc + count, 0);

  const languageColors: Record<string, string> = {
    JavaScript: "#f7df1e",
    TypeScript: "#3178c6",
    Python: "#3776ab",
    Java: "#ed8b00",
    "C++": "#00599c",
    C: "#555555",
    Go: "#00add8",
    Rust: "#dea584",
    Ruby: "#cc342d",
    PHP: "#777bb4",
    Swift: "#fa7343",
    Kotlin: "#7f52ff",
    HTML: "#e34c26",
    CSS: "#1572b6",
    Shell: "#89e051",
    Jupyter: "#f37626",
    "Jupyter Notebook": "#f37626",
  };

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[1, 2].map((i) => (
          <div key={i} className="rounded-lg border border-primary/30 bg-card/50 backdrop-blur-sm p-6 animate-pulse">
            <div className="h-32 bg-primary/10 rounded" />
          </div>
        ))}
      </div>
    );
  }

  if (error || !userData) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground font-mono text-sm">Unable to load GitHub stats</p>
        <a 
          href={`https://github.com/${username}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:underline text-sm font-mono mt-2 inline-block"
        >
          View profile on GitHub →
        </a>
      </div>
    );
  }

  const stats = [
    { label: "Repositories", value: userData.public_repos, icon: BookOpen },
    { label: "Total Stars", value: totalStars, icon: Star },
    { label: "Total Forks", value: totalForks, icon: GitFork },
    { label: "Followers", value: userData.followers, icon: Users },
  ];

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
        >
          <div className="relative overflow-hidden rounded-lg border border-primary/30 bg-card/50 backdrop-blur-sm p-6 hover:border-primary/50 transition-all duration-300 h-full">
            <div className="flex items-center gap-2 mb-6">
              <Activity className="w-5 h-5 text-primary" />
              <h3 className="font-mono text-sm text-primary uppercase tracking-wider">GitHub Stats</h3>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.1 + index * 0.1 }}
                  className="flex flex-col items-center p-3 rounded-lg bg-primary/5 border border-primary/20"
                >
                  <stat.icon className="w-5 h-5 text-primary mb-2" />
                  <span className="text-2xl font-bold text-foreground">{stat.value}</span>
                  <span className="text-xs font-mono text-muted-foreground">{stat.label}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Top Languages Card */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="relative overflow-hidden rounded-lg border border-primary/30 bg-card/50 backdrop-blur-sm p-6 hover:border-primary/50 transition-all duration-300 h-full">
            <div className="flex items-center gap-2 mb-6">
              <Code2 className="w-5 h-5 text-primary" />
              <h3 className="font-mono text-sm text-primary uppercase tracking-wider">Top Languages</h3>
            </div>
            
            <div className="space-y-4">
              {topLanguages.map(([language, count], index) => {
                const percentage = Math.round((count / totalLangRepos) * 100);
                const color = languageColors[language] || "#8b5cf6";
                
                return (
                  <motion.div
                    key={language}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.1 + index * 0.1 }}
                    className="space-y-1"
                  >
                    <div className="flex items-center justify-between font-mono text-xs">
                      <span className="text-foreground flex items-center gap-2">
                        <span 
                          className="w-3 h-3 rounded-full"
                          style={{ backgroundColor: color }}
                        />
                        {language}
                      </span>
                      <span className="text-muted-foreground">{percentage}%</span>
                    </div>
                    <div className="h-2 bg-primary/10 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${percentage}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
                        className="h-full rounded-full"
                        style={{ backgroundColor: color }}
                      />
                    </div>
                  </motion.div>
                );
              })}
            </div>
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
                <div className="w-12 h-12 rounded-full bg-primary/20 border border-primary/50 flex items-center justify-center overflow-hidden">
                  {userData.avatar_url ? (
                    <img src={userData.avatar_url} alt={username} className="w-full h-full object-cover" />
                  ) : (
                    <Github className="w-6 h-6 text-primary" />
                  )}
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
