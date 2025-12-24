import { Download, Send, Github, Linkedin, Terminal, Code2, Cpu, Database, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Layout } from "@/components/Layout";
import { ProjectCard } from "@/components/ProjectCard";
import { AnimatedSection } from "@/components/AnimatedSection";
import {
  TechCard,
  PythonLogo,
  SQLLogo,
  RLogo,
  ScikitLearnLogo,
  TensorFlowLogo,
  PyTorchLogo,
  PandasLogo,
  GitLogo,
  DockerLogo,
  StreamlitLogo,
  AWSLogo,
  AzureLogo,
} from "@/components/TechLogos";
import { projects } from "@/data/projects";
import { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";

const Index = () => {
  const { toast } = useToast();
  const [displayText, setDisplayText] = useState("");
  const fullText = "DATA_SCIENTIST";
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // Typewriter effect
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setDisplayText(fullText.slice(0, index + 1));
      index++;
      if (index >= fullText.length) {
        clearInterval(timer);
      }
    }, 100);
    return () => clearInterval(timer);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: ">> MESSAGE_SENT",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const quickLinks = [
    { name: "PROJECTS", icon: Code2, href: "#projects" },
    { name: "SKILLS", icon: Cpu, href: "#skills" },
    { name: "CONTACT", icon: Zap, href: "#contact" },
  ];

  return (
    <Layout>
      {/* Hero Section - Cyber/Futuristic style */}
      <section id="home" className="min-h-screen flex items-center justify-center relative">
        <div className="container mx-auto px-6 py-20">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 max-w-6xl mx-auto">
            
            {/* Left - Profile with cyber frame */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="relative shrink-0"
            >
              {/* Outer glow ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-accent to-neon-pink blur-xl opacity-30 animate-pulse-neon" style={{ margin: '-20px' }} />
              
              {/* Rotating border */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border-2 border-dashed border-primary/40"
                style={{ margin: '-15px' }}
              />
              
              {/* Main photo container */}
              <div className="relative w-64 h-64 md:w-72 md:h-72 lg:w-80 lg:h-80">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 via-accent/10 to-transparent" />
                <div className="w-full h-full rounded-full overflow-hidden border-2 border-primary/50 neon-border">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80"
                    alt="Muhammad Abdullah"
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Corner brackets */}
                <div className="absolute -top-4 -left-4 w-8 h-8 border-l-2 border-t-2 border-primary" />
                <div className="absolute -top-4 -right-4 w-8 h-8 border-r-2 border-t-2 border-primary" />
                <div className="absolute -bottom-4 -left-4 w-8 h-8 border-l-2 border-b-2 border-accent" />
                <div className="absolute -bottom-4 -right-4 w-8 h-8 border-r-2 border-b-2 border-accent" />
              </div>

              {/* Status indicator */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 }}
                className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-4 py-1 bg-card/90 border border-primary/30 rounded font-mono text-xs text-primary"
              >
                <span className="inline-block w-2 h-2 rounded-full bg-primary animate-pulse mr-2" />
                STATUS: AVAILABLE
              </motion.div>
            </motion.div>

            {/* Right - Content */}
            <div className="text-center lg:text-left flex-1">
              {/* Terminal-style header */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-card/80 border border-primary/30 rounded mb-6 font-mono text-xs"
              >
                <Terminal className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground">~/portfolio $</span>
                <span className="text-primary">{displayText}</span>
                <span className="animate-pulse text-primary">_</span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mb-4"
              >
                <div className="flex items-center gap-4 flex-wrap">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
                    MUHAMMAD
                  </h1>
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="h-12 md:h-16 lg:h-20 w-24 md:w-32 lg:w-40 bg-gradient-to-r from-neon-pink via-purple-500 to-accent origin-left"
                  />
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight gradient-text-cyber mt-2">
                  ABDULLAH
                </h1>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="font-mono text-sm text-muted-foreground leading-relaxed max-w-xl mb-8"
              >
                <span className="text-primary">{`>`}</span> 7th-semester Data Science student specializing in 
                <span className="text-primary"> machine learning</span>, 
                <span className="text-accent"> data pipelines</span>, and 
                <span className="text-neon-pink"> predictive analytics</span>.
                <br />
                <span className="text-primary">{`>`}</span> Transforming raw data into actionable insights.
              </motion.p>

              {/* Quick action buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8"
              >
                {quickLinks.map((link, index) => (
                  <motion.button
                    key={link.name}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    onClick={() => scrollToSection(link.href)}
                    className="group flex items-center gap-2 px-6 py-3 bg-card/80 border border-primary/30 rounded font-mono text-xs text-primary hover:border-primary hover:neon-border transition-all duration-300"
                  >
                    <link.icon className="w-4 h-4" />
                    {link.name}
                  </motion.button>
                ))}
              </motion.div>

              {/* Download CV button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <Button 
                  size="lg" 
                  className="gap-2 font-mono text-sm bg-primary/10 border border-primary text-primary hover:bg-primary hover:text-primary-foreground neon-border"
                  asChild
                >
                  <a href="/resume.pdf" download>
                    <Download className="h-4 w-4" />
                    DOWNLOAD_CV.PDF
                  </a>
                </Button>
              </motion.div>
            </div>
          </div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          >
            <span className="font-mono text-xs text-muted-foreground">SCROLL</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-px h-8 bg-gradient-to-b from-primary to-transparent"
            />
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 relative">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-card/80 border border-primary/30 rounded mb-6 font-mono text-xs">
              <Code2 className="w-4 h-4 text-primary" />
              <span className="text-muted-foreground">SECTION:</span>
              <span className="text-primary">PROJECTS</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              SELECTED <span className="gradient-text-cyber">WORKS</span>
            </h2>
            <p className="font-mono text-sm text-muted-foreground max-w-2xl mx-auto">
              <span className="text-primary">{`>`}</span> A comprehensive look at my data science projects, from concept to deployment.
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

      {/* Skills Section */}
      <section id="skills" className="py-24 relative">
        <div className="container mx-auto px-4 relative z-10">
          {/* Section Header */}
          <AnimatedSection className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-card/80 border border-primary/30 rounded mb-6 font-mono text-xs">
              <Cpu className="w-4 h-4 text-primary" />
              <span className="text-muted-foreground">SECTION:</span>
              <span className="text-primary">SKILLS</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              TECHNICAL <span className="gradient-text-cyber">ARSENAL</span>
            </h2>
            <p className="font-mono text-sm text-muted-foreground max-w-xl mx-auto">
              <span className="text-primary">{`>`}</span> The tools and technologies I use to bring data projects to life.
            </p>
          </AnimatedSection>

          {/* Main Content */}
          <div className="max-w-5xl mx-auto">
            {/* Skills Grid */}
            <div className="space-y-12">
              {/* Languages */}
              <div>
                <AnimatedSection delay={0.1}>
                  <h4 className="font-mono text-xs text-primary uppercase tracking-widest mb-6 text-center flex items-center justify-center gap-2">
                    <span className="w-8 h-px bg-primary/50" />
                    LANGUAGES
                    <span className="w-8 h-px bg-primary/50" />
                  </h4>
                </AnimatedSection>
                <div className="grid grid-cols-3 gap-4 max-w-md mx-auto">
                  <TechCard name="Python" logo={<PythonLogo className="w-10 h-10" />} index={0} />
                  <TechCard name="SQL" logo={<SQLLogo className="w-10 h-10" />} index={1} />
                  <TechCard name="R" logo={<RLogo className="w-10 h-10" />} index={2} />
                </div>
              </div>

              {/* Machine Learning */}
              <div>
                <AnimatedSection delay={0.2}>
                  <h4 className="font-mono text-xs text-primary uppercase tracking-widest mb-6 text-center flex items-center justify-center gap-2">
                    <span className="w-8 h-px bg-primary/50" />
                    MACHINE LEARNING
                    <span className="w-8 h-px bg-primary/50" />
                  </h4>
                </AnimatedSection>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
                  <TechCard name="Scikit-learn" logo={<ScikitLearnLogo className="w-10 h-10" />} index={0} />
                  <TechCard name="TensorFlow" logo={<TensorFlowLogo className="w-10 h-10" />} index={1} />
                  <TechCard name="PyTorch" logo={<PyTorchLogo className="w-10 h-10" />} index={2} />
                  <TechCard name="Pandas" logo={<PandasLogo className="w-10 h-10" />} index={3} />
                </div>
              </div>

              {/* Deployment & Tools */}
              <div>
                <AnimatedSection delay={0.3}>
                  <h4 className="font-mono text-xs text-primary uppercase tracking-widest mb-6 text-center flex items-center justify-center gap-2">
                    <span className="w-8 h-px bg-primary/50" />
                    DEPLOYMENT & TOOLS
                    <span className="w-8 h-px bg-primary/50" />
                  </h4>
                </AnimatedSection>
                <div className="grid grid-cols-3 md:grid-cols-5 gap-4 max-w-3xl mx-auto">
                  <TechCard name="Git" logo={<GitLogo className="w-9 h-9" />} index={0} />
                  <TechCard name="Docker" logo={<DockerLogo className="w-9 h-9" />} index={1} />
                  <TechCard name="Streamlit" logo={<StreamlitLogo className="w-9 h-9" />} index={2} />
                  <TechCard name="AWS" logo={<AWSLogo className="w-9 h-9" />} index={3} />
                  <TechCard name="Azure" logo={<AzureLogo className="w-9 h-9" />} index={4} />
                </div>
              </div>
            </div>

            {/* Download Resume */}
            <AnimatedSection delay={0.4} className="mt-16">
              <Button 
                size="lg" 
                className="w-full max-w-md mx-auto flex gap-2 h-14 font-mono text-sm bg-primary/10 border border-primary text-primary hover:bg-primary hover:text-primary-foreground neon-border"
                asChild
              >
                <a href="/resume.pdf" download>
                  <Download className="h-5 w-5" />
                  DOWNLOAD_RESUME.PDF
                </a>
              </Button>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 relative">
        <div className="container mx-auto px-4">
          {/* Header */}
          <AnimatedSection className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-card/80 border border-primary/30 rounded mb-6 font-mono text-xs">
              <Zap className="w-4 h-4 text-primary" />
              <span className="text-muted-foreground">SECTION:</span>
              <span className="text-primary">CONTACT</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              LET'S <span className="gradient-text-cyber">CONNECT</span>
            </h2>
            <p className="font-mono text-sm text-muted-foreground max-w-xl mx-auto">
              <span className="text-primary">{`>`}</span> Currently open for internship opportunities or collaborative data projects.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Left - Contact Form */}
            <AnimatedSection delay={0.1}>
              <div className="bg-card/80 backdrop-blur-sm rounded-lg border border-primary/20 p-8">
                <div className="flex items-center gap-2 mb-6 font-mono text-xs text-primary">
                  <Terminal className="w-4 h-4" />
                  <span>SEND_MESSAGE</span>
                </div>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="font-mono text-xs text-muted-foreground">NAME:</Label>
                    <Input
                      id="name"
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="bg-secondary/50 border-primary/20 font-mono text-sm focus:border-primary focus:neon-border"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="font-mono text-xs text-muted-foreground">EMAIL:</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="bg-secondary/50 border-primary/20 font-mono text-sm focus:border-primary focus:neon-border"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject" className="font-mono text-xs text-muted-foreground">SUBJECT:</Label>
                    <Input
                      id="subject"
                      placeholder="What's this about?"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      required
                      className="bg-secondary/50 border-primary/20 font-mono text-sm focus:border-primary focus:neon-border"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message" className="font-mono text-xs text-muted-foreground">MESSAGE:</Label>
                    <Textarea
                      id="message"
                      placeholder="Your message..."
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      className="bg-secondary/50 border-primary/20 font-mono text-sm focus:border-primary focus:neon-border resize-none"
                    />
                  </div>
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full gap-2 font-mono text-sm bg-primary/10 border border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  >
                    <Send className="h-4 w-4" />
                    SEND_MESSAGE
                  </Button>
                </form>
              </div>
            </AnimatedSection>

            {/* Right - Quick Links */}
            <div className="space-y-4">
              {/* LinkedIn Card */}
              <AnimatedSection delay={0.2}>
                <motion.a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02, y: -4 }}
                  className="block bg-card/80 backdrop-blur-sm rounded-lg border border-primary/20 p-6 hover:border-primary/50 hover:neon-border transition-all duration-300"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded border border-primary/30 flex items-center justify-center">
                      <Linkedin className="h-7 w-7 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-mono text-sm text-foreground">LINKEDIN</h4>
                      <p className="font-mono text-xs text-muted-foreground">/in/muhammad-abdullah</p>
                    </div>
                    <span className="font-mono text-xs text-primary">CONNECT →</span>
                  </div>
                </motion.a>
              </AnimatedSection>

              {/* GitHub Card */}
              <AnimatedSection delay={0.3}>
                <motion.a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02, y: -4 }}
                  className="block bg-card/80 backdrop-blur-sm rounded-lg border border-primary/20 p-6 hover:border-primary/50 hover:neon-border transition-all duration-300"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded border border-primary/30 flex items-center justify-center">
                      <Github className="h-7 w-7 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-mono text-sm text-foreground">GITHUB</h4>
                      <p className="font-mono text-xs text-muted-foreground">@muhammadabdullah</p>
                    </div>
                    <span className="font-mono text-xs text-primary">VIEW →</span>
                  </div>
                </motion.a>
              </AnimatedSection>

              {/* CV Download Card */}
              <AnimatedSection delay={0.4}>
                <motion.a
                  href="/resume.pdf"
                  download
                  whileHover={{ scale: 1.02, y: -4 }}
                  className="block bg-gradient-to-br from-primary/10 to-accent/5 rounded-lg border border-primary/30 p-6 hover:neon-border transition-all duration-300"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded bg-primary/20 border border-primary/50 flex items-center justify-center neon-glow">
                      <Download className="h-7 w-7 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-mono text-sm text-foreground">RESUME</h4>
                      <p className="font-mono text-xs text-muted-foreground">Download my full CV</p>
                    </div>
                    <span className="font-mono text-xs text-primary">DOWNLOAD →</span>
                  </div>
                </motion.a>
              </AnimatedSection>

              {/* Status Card */}
              <AnimatedSection delay={0.5}>
                <div className="bg-card/80 backdrop-blur-sm rounded-lg border border-primary/20 p-6">
                  <div className="flex items-center gap-2 mb-3 font-mono text-xs text-primary">
                    <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                    RESPONSE_TIME
                  </div>
                  <p className="font-mono text-xs text-muted-foreground leading-relaxed">
                    {`>`} I typically respond within 24-48 hours.
                    <br />
                    {`>`} For urgent matters, reach out via LinkedIn.
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
