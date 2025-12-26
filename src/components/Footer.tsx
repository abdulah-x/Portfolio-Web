import { Terminal } from "lucide-react";
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
          className="flex items-center justify-center"
        >
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 rounded border border-primary/50 flex items-center justify-center">
              <Terminal className="w-3 h-3 text-primary" />
            </div>
            <p className="font-mono text-xs text-muted-foreground">
              © {currentYear} <span className="text-primary">ABDULLAH</span>
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
