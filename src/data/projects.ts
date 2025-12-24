import { Project } from "@/components/ProjectCard";

export const projects: Project[] = [
  {
    id: "1",
    title: "FoodHub",
    summary: "Full-stack, containerized food delivery platform with role-based architecture.",
    description: "A modern food delivery platform built with React, Node.js, and MongoDB. Features role-based architecture supporting customers, restaurant owners, and administrators with real-time order tracking and management.",
    thumbnail: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&q=80",
    tags: ["React", "Node.js", "MongoDB", "Docker", "REST API"],
    githubUrl: "https://github.com/abdulah-x/FoodHub",
  },
  {
    id: "2",
    title: "Crypto Portfolio App",
    summary: "Enterprise-grade FastAPI system for crypto portfolio management with real-time tracking.",
    description: "High-performance crypto portfolio management system featuring 100% security compliance (JWT, SQLI protection), real-time P&L analysis (FIFO, realized/unrealized), and safe Binance Testnet integration. Optimized for speed, sustaining 137 RPS with WebSocket price updates.",
    thumbnail: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&q=80",
    tags: ["FastAPI", "Python", "WebSocket", "JWT", "Binance API"],
    githubUrl: "https://github.com/abdulah-x/crypto-portfolio-app",
  },
  {
    id: "3",
    title: "NeuraLens",
    summary: "AI-powered traffic sign recognition web app with 43 sign class detection.",
    description: "Instantly identify traffic signs with this AI-powered web app. Built with Next.js and FastAPI, it uses a TensorFlow model to analyze images and return predictions with confidence scores in seconds. Recognizes 43 different sign classes, from speed limits to stop signs.",
    thumbnail: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    tags: ["Next.js", "FastAPI", "TensorFlow", "Python", "AI/ML"],
    demoUrl: "https://y-ashy-phi.vercel.app",
    githubUrl: "https://github.com/abdulah-x/NeuraLens",
  },
];

export const featuredProjects = projects.slice(0, 3);
