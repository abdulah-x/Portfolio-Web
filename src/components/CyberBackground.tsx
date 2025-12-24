import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  color: string;
}

export function CyberBackground() {
  const [particles, setParticles] = useState<Particle[]>([]);
  const colors = ["hsl(175, 100%, 50%)", "hsl(280, 100%, 65%)", "hsl(320, 100%, 60%)"];

  useEffect(() => {
    const newParticles: Particle[] = [];
    for (let i = 0; i < 50; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 1,
        duration: Math.random() * 20 + 10,
        delay: Math.random() * 10,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }
    setParticles(newParticles);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Cyber grid */}
      <div className="absolute inset-0 cyber-grid opacity-30" />

      {/* Animated scan line */}
      <motion.div
        initial={{ y: "-100%" }}
        animate={{ y: "200%" }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        className="absolute left-0 right-0 h-32 bg-gradient-to-b from-transparent via-primary/5 to-transparent"
      />

      {/* Large gradient orbs */}
      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[150px]"
      />
      <motion.div
        animate={{
          x: [0, -80, 0],
          y: [0, 80, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-accent/15 rounded-full blur-[120px]"
      />
      <motion.div
        animate={{
          x: [0, 50, -30, 0],
          y: [0, -30, 50, 0],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 5 }}
        className="absolute top-1/2 left-1/3 w-[400px] h-[400px] bg-neon-pink/10 rounded-full blur-[100px]"
      />

      {/* Floating particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          initial={{ opacity: 0 }}
          animate={{
            y: [0, -30, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut",
          }}
          className="absolute rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
            backgroundColor: particle.color,
            boxShadow: `0 0 ${particle.size * 3}px ${particle.color}`,
          }}
        />
      ))}

      {/* Corner accents */}
      <div className="absolute top-0 left-0 w-32 h-32 border-l-2 border-t-2 border-primary/30" />
      <div className="absolute top-0 right-0 w-32 h-32 border-r-2 border-t-2 border-primary/30" />
      <div className="absolute bottom-0 left-0 w-32 h-32 border-l-2 border-b-2 border-accent/30" />
      <div className="absolute bottom-0 right-0 w-32 h-32 border-r-2 border-b-2 border-accent/30" />

      {/* Horizontal lines */}
      <div className="absolute top-20 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <div className="absolute bottom-20 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
    </div>
  );
}
