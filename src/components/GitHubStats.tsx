import { motion } from "framer-motion";

interface GitHubStatsProps {
  username: string;
}

export function GitHubStats({ username }: GitHubStatsProps) {
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
          <div className="relative overflow-hidden rounded-lg border border-primary/30 bg-card/50 backdrop-blur-sm p-1 hover:border-primary/50 transition-all duration-300">
            <img
              src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=transparent&hide_border=true&title_color=22d3ee&text_color=94a3b8&icon_color=22d3ee&bg_color=00000000`}
              alt="GitHub Stats"
              className="w-full h-auto"
              loading="lazy"
            />
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
          <div className="relative overflow-hidden rounded-lg border border-primary/30 bg-card/50 backdrop-blur-sm p-1 hover:border-primary/50 transition-all duration-300">
            <img
              src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=transparent&hide_border=true&title_color=22d3ee&text_color=94a3b8&bg_color=00000000`}
              alt="Top Languages"
              className="w-full h-auto"
              loading="lazy"
            />
          </div>
        </motion.div>

        {/* GitHub Streak Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="md:col-span-2 group"
        >
          <div className="relative overflow-hidden rounded-lg border border-primary/30 bg-card/50 backdrop-blur-sm p-1 hover:border-primary/50 transition-all duration-300">
            <img
              src={`https://github-readme-streak-stats.herokuapp.com/?user=${username}&theme=transparent&hide_border=true&ring=22d3ee&fire=f472b6&currStreakLabel=22d3ee&sideLabels=94a3b8&dates=64748b&currStreakNum=22d3ee&sideNums=22d3ee&background=00000000`}
              alt="GitHub Streak"
              className="w-full h-auto max-w-2xl mx-auto"
              loading="lazy"
            />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
