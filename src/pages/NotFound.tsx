import { useLocation, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Terminal, Home, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();
  const [glitchText, setGlitchText] = useState("404");

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  // Glitch effect for 404 text
  useEffect(() => {
    const glitchChars = "!@#$%^&*()_+-=[]{}|;':\",./<>?";
    const originalText = "404";
    
    const interval = setInterval(() => {
      const shouldGlitch = Math.random() > 0.7;
      if (shouldGlitch) {
        const glitched = originalText
          .split("")
          .map((char) =>
            Math.random() > 0.5
              ? glitchChars[Math.floor(Math.random() * glitchChars.length)]
              : char
          )
          .join("");
        setGlitchText(glitched);
        setTimeout(() => setGlitchText(originalText), 100);
      }
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-background relative overflow-hidden flex items-center justify-center">
      {/* Cyber grid background */}
      <div className="absolute inset-0 cyber-grid opacity-30" />
      
      {/* Animated scan line */}
      <motion.div
        className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-50"
        initial={{ top: "-10%" }}
        animate={{ top: "110%" }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
      />

      {/* Floating particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-primary rounded-full"
          style={{
            left: `${20 + i * 15}%`,
            top: `${30 + (i % 3) * 20}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.3, 1, 0.3],
          }}
          transition={{
            duration: 3 + i * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      <div className="relative z-10 text-center px-4">
        {/* Terminal window */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-card/80 backdrop-blur-sm rounded-lg border border-primary/30 p-8 max-w-lg mx-auto neon-border"
        >
          {/* Terminal header */}
          <div className="flex items-center gap-2 mb-6 pb-4 border-b border-primary/20">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-destructive/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
            </div>
            <span className="font-mono text-xs text-muted-foreground ml-2">
              ~/error $ system_status
            </span>
          </div>

          {/* Error icon */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="mb-6"
          >
            <div className="w-16 h-16 mx-auto rounded-lg border border-primary/30 flex items-center justify-center bg-primary/10">
              <AlertTriangle className="w-8 h-8 text-primary" />
            </div>
          </motion.div>

          {/* 404 Text with glitch effect */}
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-7xl md:text-8xl font-bold text-primary neon-text font-mono mb-4"
          >
            {glitchText}
          </motion.h1>

          {/* Error message */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="space-y-2 mb-8"
          >
            <p className="font-mono text-lg text-foreground">
              ERROR: <span className="text-primary">PAGE_NOT_FOUND</span>
            </p>
            <p className="font-mono text-sm text-muted-foreground">
              <span className="text-primary">{`>`}</span> The requested path{" "}
              <span className="text-accent">`{location.pathname}`</span> does not exist.
            </p>
          </motion.div>

          {/* Terminal output */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="bg-background/50 rounded border border-primary/20 p-4 mb-8 text-left"
          >
            <p className="font-mono text-xs text-muted-foreground">
              <span className="text-primary">$</span> searching for route...
            </p>
            <p className="font-mono text-xs text-destructive mt-1">
              ✗ Route not found in navigation tree
            </p>
            <p className="font-mono text-xs text-muted-foreground mt-1">
              <span className="text-primary">$</span> recommended action:{" "}
              <span className="text-green-500">return_home()</span>
            </p>
          </motion.div>

          {/* Action button */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button
              asChild
              className="gap-2 font-mono text-sm bg-primary/10 border border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 h-12"
            >
              <Link to="/">
                <Home className="w-4 h-4" />
                RETURN_HOME
              </Link>
            </Button>
          </motion.div>
        </motion.div>

        {/* Footer hint */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="font-mono text-xs text-muted-foreground mt-8"
        >
          <Terminal className="w-3 h-3 inline mr-1" />
          System ready. Awaiting user input...
        </motion.p>
      </div>
    </div>
  );
};

export default NotFound;