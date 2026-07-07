import { Project } from "@/components/ProjectCard";
import hawkEarThumb from "@/assets/hawk-ear-thumb.webp";
import vaultxThumb from "@/assets/vaultx-thumb.webp";
import neuralensThumb from "@/assets/neuralens-thumb.webp";
import foodhubThumb from "@/assets/foodhub-thumb.webp";
import jobradarThumb from "@/assets/jobradar-thumb.webp";


export const projects: Project[] = [
  {
    id: "1",
    title: "Hawk-Ear",
    summary: "FYP: Dockerized security surveillance platform for audio-video monitoring & real-time alerting.",
    description: "Architected a Dockerized microservices platform with 70+ REST APIs, real-time audio processing via FFmpeg (5+ formats, RTSP), JWT/bcrypt/Redis-rate-limited auth, and multi-channel alerts under 3s latency. Handles 1,000+ concurrent requests across PostgreSQL, MongoDB & Redis, deployed on AWS EC2 with 99.9% uptime.",
    thumbnail: hawkEarThumb,
    tags: ["Python", "FastAPI", "TensorFlow", "Whisper", "PostgreSQL", "Redis", "Docker", "AWS"],
    githubUrl: "https://github.com/abdulah-x",
  },
  {
    id: "2",
    title: "VaultX",
    summary: "Enterprise-grade crypto portfolio system with real-time tracking & advanced P&L.",
    description: "Full-stack crypto portfolio platform supporting 50+ APIs at 137 RPS with 53ms latency. Advanced P&L engine across 438+ Binance Testnet assets, WebSocket price streaming, and 100% security compliance via JWT, bcrypt, and SQL-injection protection.",
    thumbnail: vaultxThumb,
    tags: ["FastAPI", "Python", "React", "WebSocket", "JWT", "Docker", "Binance API"],
    githubUrl: "https://github.com/abdulah-x/crypto-portfolio-app",
  },
  {
    id: "3",
    title: "NeuraLens",
    summary: "AI-powered traffic sign recognition with 98% accuracy and <50ms latency.",
    description: "TensorFlow model classifying 43 traffic sign classes at 98% accuracy with <50ms real-time latency. Built with Next.js frontend and FastAPI backend, delivering responsive UI and instant inference from uploaded images.",
    thumbnail: neuralensThumb,
    tags: ["TensorFlow", "FastAPI", "Python", "Next.js", "Pillow"],
    demoUrl: "https://y-ashy-phi.vercel.app",
    githubUrl: "https://github.com/abdulah-x/NeuraLens",
  },
  {
    id: "4",
    title: "FoodHub",
    summary: "Containerized MERN food delivery platform with real-time order tracking under 100ms.",
    description: "Complete MERN stack food delivery platform with Docker containerization, role-based access control (customers, restaurant owners, admins), and a low-latency order tracking system delivering live updates under 100ms via Socket.io.",
    thumbnail: foodhubThumb,
    tags: ["React", "Node.js", "Express", "MongoDB", "Socket.io", "Docker"],
    githubUrl: "https://github.com/abdulah-x/FoodHub",
  },
  {
    id: "5",
    title: "JobRadar",
    summary: "Self-hosted RAG job-matching pipeline that scores listings against your resume and emails a daily digest.",
    description: "Dockerized job monitoring pipeline scraping 6 boards (WeWorkRemotely, RemoteOK, Remotive, Remote.co, WorkAtAStartup, Indeed). Two-stage AI pipeline: ChromaDB cosine-similarity semantic filter on resume chunks, then Gemini 2.5 Flash structured scoring (0–100) with Groq fallback. Jobs scoring ≥80 that pass seniority, location, and salary gates get emailed via Gmail SMTP. APScheduler keeps the container running with SQLite deduplication.",
    thumbnail: jobradarThumb,
    tags: ["Python", "Gemini", "ChromaDB", "RAG", "Docker", "JobSpy", "SQLite", "APScheduler"],
    githubUrl: "https://github.com/abdulah-x/JobRadar",
  },
];


export const featuredProjects = projects.slice(0, 3);
