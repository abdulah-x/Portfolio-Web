import { ArrowRight, Download, Send, Github, Linkedin, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Layout } from "@/components/Layout";
import { ProjectCard } from "@/components/ProjectCard";
import { HeroBackground } from "@/components/HeroBackground";
import { AnimatedSection, AnimatedCard, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";
import { projects } from "@/data/projects";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";

const skills = {
  languages: [
    { name: "Python", icon: "🐍" },
    { name: "SQL", icon: "🗄️" },
    { name: "R", icon: "📊" },
  ],
  ml: [
    { name: "Scikit-learn", icon: "🔬" },
    { name: "TensorFlow", icon: "🧠" },
    { name: "PyTorch", icon: "🔥" },
    { name: "Pandas", icon: "🐼" },
  ],
  tools: [
    { name: "Git", icon: "📝" },
    { name: "Docker", icon: "🐳" },
    { name: "Streamlit", icon: "⚡" },
    { name: "AWS", icon: "☁️" },
    { name: "Azure", icon: "🌐" },
  ],
};

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <HeroBackground />
        
        <div className="container mx-auto px-4 py-20 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-8"
          >
            <Sparkles className="h-4 w-4" />
            Open to Opportunities
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-foreground mb-6 leading-[1.1] tracking-tight"
          >
            Turning Raw Data into
            <br />
            <span className="gradient-text">Actionable Insights</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Hi, I'm <span className="text-foreground font-semibold">Muhammad Abdullah</span>. A 7th-Semester Data Science Student
            specializing in Machine Learning, Data Analysis, and end-to-end pipelines.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button size="lg" className="gap-2 px-8 h-12 text-base shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all" asChild>
              <a href="#projects">
                View My Projects
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="gap-2 px-8 h-12 text-base hover:bg-secondary" asChild>
              <a href="/resume.pdf" download>
                <Download className="h-4 w-4" />
                Download CV
              </a>
            </Button>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2"
            >
              <motion.div className="w-1 h-2 rounded-full bg-muted-foreground/50" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-gradient-to-b from-secondary/50 to-background">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              Selected Works
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              A comprehensive look at my data science projects, from concept to
              deployment.
            </p>
          </AnimatedSection>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} variant="full" index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Left Column - Narrative (40%) */}
            <AnimatedSection className="lg:col-span-2 space-y-8">
              {/* Headshot */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="relative w-56 h-56 mx-auto lg:mx-0"
              >
                <div className="w-full h-full rounded-3xl bg-gradient-to-br from-primary/20 to-purple-500/20 p-1">
                  <div className="w-full h-full rounded-3xl overflow-hidden bg-card">
                    <img
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80"
                      alt="Muhammad Abdullah"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <motion.div
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -bottom-3 -right-3 w-16 h-16 bg-gradient-to-br from-primary to-purple-500 rounded-2xl flex items-center justify-center text-primary-foreground text-2xl shadow-lg"
                >
                  📊
                </motion.div>
              </motion.div>

              {/* Bio */}
              <div className="space-y-4 text-center lg:text-left">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                  About Me
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  I'm a 7th-semester Data Science student passionate about
                  transforming complex datasets into actionable business
                  insights. My journey began with a curiosity about patterns in
                  data, which evolved into a deep expertise in machine learning
                  and analytics.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  I specialize in building end-to-end data pipelines, from raw
                  data ingestion to model deployment. Whether it's predicting
                  customer behavior, optimizing operations, or uncovering hidden
                  trends, I thrive on solving real-world problems with data.
                </p>
              </div>
            </AnimatedSection>

            {/* Right Column - Technical Toolkit (60%) */}
            <div className="lg:col-span-3 space-y-8">
              <AnimatedSection delay={0.1}>
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
                  My Technical Toolkit
                </h3>
              </AnimatedSection>

              {/* Languages */}
              <AnimatedSection delay={0.2}>
                <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                  Languages
                </h4>
                <div className="grid grid-cols-3 gap-4">
                  {skills.languages.map((skill, i) => (
                    <motion.div
                      key={skill.name}
                      whileHover={{ scale: 1.05, y: -5 }}
                      className="bg-card rounded-2xl border border-border p-5 text-center hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 cursor-default"
                    >
                      <span className="text-3xl mb-3 block">{skill.icon}</span>
                      <span className="text-sm font-semibold text-foreground">
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </AnimatedSection>

              {/* Machine Learning */}
              <AnimatedSection delay={0.3}>
                <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                  Machine Learning
                </h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {skills.ml.map((skill) => (
                    <motion.div
                      key={skill.name}
                      whileHover={{ scale: 1.05, y: -5 }}
                      className="bg-card rounded-2xl border border-border p-5 text-center hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 cursor-default"
                    >
                      <span className="text-3xl mb-3 block">{skill.icon}</span>
                      <span className="text-sm font-semibold text-foreground">
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </AnimatedSection>

              {/* Deployment & Tools */}
              <AnimatedSection delay={0.4}>
                <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                  Deployment & Tools
                </h4>
                <div className="grid grid-cols-3 md:grid-cols-5 gap-4">
                  {skills.tools.map((skill) => (
                    <motion.div
                      key={skill.name}
                      whileHover={{ scale: 1.05, y: -5 }}
                      className="bg-card rounded-2xl border border-border p-4 text-center hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 cursor-default"
                    >
                      <span className="text-2xl mb-2 block">{skill.icon}</span>
                      <span className="text-xs font-semibold text-foreground">
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </AnimatedSection>

              {/* Download Resume Button */}
              <AnimatedSection delay={0.5}>
                <Button size="lg" className="w-full gap-2 h-14 text-base shadow-lg shadow-primary/25" asChild>
                  <a href="/resume.pdf" download>
                    <Download className="h-5 w-5" />
                    Download Full Resume (PDF)
                  </a>
                </Button>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gradient-to-b from-secondary/50 to-background">
        <div className="container mx-auto px-4">
          {/* Header */}
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              Let's Connect
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              Currently open for internship opportunities or collaborative data
              projects.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Left - Contact Form */}
            <AnimatedSection delay={0.1}>
              <div className="bg-card rounded-3xl border border-border p-8 shadow-xl shadow-primary/5">
                <h3 className="text-xl font-semibold text-foreground mb-6">
                  Send a Message
                </h3>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-sm font-medium">Name</Label>
                    <Input
                      id="name"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="h-12 rounded-xl bg-secondary/50 border-0 focus:ring-2 focus:ring-primary/20"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-medium">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="h-12 rounded-xl bg-secondary/50 border-0 focus:ring-2 focus:ring-primary/20"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-sm font-medium">Subject</Label>
                    <Input
                      id="subject"
                      placeholder="What's this about?"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      required
                      className="h-12 rounded-xl bg-secondary/50 border-0 focus:ring-2 focus:ring-primary/20"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-sm font-medium">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Your message..."
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      className="rounded-xl bg-secondary/50 border-0 focus:ring-2 focus:ring-primary/20 resize-none"
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full gap-2 h-12 shadow-lg shadow-primary/25">
                    <Send className="h-4 w-4" />
                    Send Message
                  </Button>
                </form>
              </div>
            </AnimatedSection>

            {/* Right - Quick Links */}
            <div className="space-y-4">
              {/* LinkedIn Card */}
              <AnimatedSection delay={0.2}>
                <motion.div
                  whileHover={{ scale: 1.02, y: -4 }}
                  className="bg-card rounded-2xl border border-border p-6 hover:border-primary/30 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center">
                      <Linkedin className="h-7 w-7 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground">LinkedIn</h4>
                      <p className="text-sm text-muted-foreground">Muhammad Abdullah</p>
                    </div>
                    <Button variant="outline" className="rounded-xl" asChild>
                      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                        Connect
                      </a>
                    </Button>
                  </div>
                </motion.div>
              </AnimatedSection>

              {/* GitHub Card */}
              <AnimatedSection delay={0.3}>
                <motion.div
                  whileHover={{ scale: 1.02, y: -4 }}
                  className="bg-card rounded-2xl border border-border p-6 hover:border-primary/30 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center">
                      <Github className="h-7 w-7 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground">GitHub</h4>
                      <p className="text-sm text-muted-foreground">@muhammadabdullah</p>
                    </div>
                    <Button variant="outline" className="rounded-xl" asChild>
                      <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                        View Repos
                      </a>
                    </Button>
                  </div>
                </motion.div>
              </AnimatedSection>

              {/* CV Download Card */}
              <AnimatedSection delay={0.4}>
                <motion.div
                  whileHover={{ scale: 1.02, y: -4 }}
                  className="bg-gradient-to-br from-primary/10 via-purple-500/5 to-primary/10 rounded-2xl border border-primary/20 p-6 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-purple-500 flex items-center justify-center shadow-lg shadow-primary/30">
                      <Download className="h-7 w-7 text-primary-foreground" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground">Resume</h4>
                      <p className="text-sm text-muted-foreground">Download my full CV</p>
                    </div>
                    <Button className="rounded-xl shadow-lg shadow-primary/25" asChild>
                      <a href="/resume.pdf" download>
                        Download
                      </a>
                    </Button>
                  </div>
                </motion.div>
              </AnimatedSection>

              {/* Additional Info */}
              <AnimatedSection delay={0.5}>
                <div className="bg-card rounded-2xl border border-border p-6">
                  <h4 className="font-semibold text-foreground mb-2">Response Time</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    I typically respond within 24-48 hours. For urgent matters, please reach out via LinkedIn.
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
