import { Github, Linkedin, Heart, Terminal } from "lucide-react";
import { motion } from "framer-motion";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-primary/20 bg-card/50 relative">
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center gap-4"
        >
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 rounded border border-primary/50 flex items-center justify-center">
              <Terminal className="w-3 h-3 text-primary" />
            </div>
            <p className="font-mono text-xs text-muted-foreground">
              © {currentYear} <span className="text-primary">ABDULLAH</span> //{" "}
              <Heart className="inline h-3 w-3 text-accent fill-accent" /> AND DATA
            </p>
          </div>
          <div className="flex items-center gap-4">
            <motion.a
              whileHover={{ scale: 1.1, y: -2 }}
              href="https://github.com/abdulah-x"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 font-mono text-xs"
            >
              <Github className="h-4 w-4" />
              <span className="hidden sm:inline">GITHUB</span>
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1, y: -2 }}
              href="https://www.linkedin.com/in/muhammad-abdullah-53b843248/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 font-mono text-xs"
            >
              <Linkedin className="h-4 w-4" />
              <span className="hidden sm:inline">LINKEDIN</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
