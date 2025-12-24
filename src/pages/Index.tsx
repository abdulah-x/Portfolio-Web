import { Download, Send, Github, Linkedin, FileText, Briefcase, User, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Layout } from "@/components/Layout";
import { ProjectCard } from "@/components/ProjectCard";
import { AnimatedSection } from "@/components/AnimatedSection";
import { AboutBackground } from "@/components/AboutBackground";
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
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";

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

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const quickLinks = [
    { name: "Resume", color: "bg-[#a3d977]", hoverColor: "hover:bg-[#8bc960]", href: "#skills" },
    { name: "Projects", color: "bg-[#f5a623]", hoverColor: "hover:bg-[#e09515]", href: "#projects" },
    { name: "Skills", color: "bg-[#7dd3d8]", hoverColor: "hover:bg-[#5bc5cb]", href: "#skills" },
    { name: "Contact", color: "bg-[#b8b8b8]", hoverColor: "hover:bg-[#a0a0a0]", href: "#contact" },
  ];

  return (
    <Layout>
      {/* Hero Section - Clean minimal style */}
      <section id="home" className="min-h-screen flex items-center justify-center bg-secondary/30">
        <div className="container mx-auto px-6 py-20">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 max-w-6xl mx-auto">
            
            {/* Left - Large Circular Photo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="relative shrink-0"
            >
              <div className="w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl shadow-primary/10">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80"
                  alt="Muhammad Abdullah"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative ring */}
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-primary/20 animate-[spin_30s_linear_infinite]" style={{ margin: '-8px' }} />
            </motion.div>

            {/* Right - Content */}
            <div className="text-center lg:text-left flex-1">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 tracking-tight"
              >
                Muhammad Abdullah
              </motion.h1>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-xl md:text-2xl font-semibold text-foreground mb-6"
              >
                A Bit About Me
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-muted-foreground text-lg leading-relaxed max-w-xl mb-10"
              >
                I am a 7th-semester Data Science student passionate about machine learning and analytics. 
                I specialize in building end-to-end data pipelines, predictive modeling, and transforming 
                complex datasets into actionable business insights.
              </motion.p>

              {/* Colorful Navigation Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex flex-wrap justify-center lg:justify-start gap-4"
              >
                {quickLinks.map((link, index) => (
                  <motion.button
                    key={link.name}
                    whileHover={{ scale: 1.05, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    onClick={() => scrollToSection(link.href)}
                    className={`w-24 h-24 md:w-28 md:h-28 rounded-full ${link.color} ${link.hoverColor} flex items-center justify-center text-foreground font-semibold text-sm md:text-base shadow-lg transition-all duration-300`}
                  >
                    {link.name}
                  </motion.button>
                ))}
              </motion.div>
            </div>
          </div>
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

      {/* Skills Section */}
      <section id="skills" className="py-24 relative overflow-hidden">
        <AboutBackground />
        <div className="container mx-auto px-4 relative z-10">
          {/* Section Header */}
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              Technical Skills
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              The tools and technologies I use to bring data projects to life.
            </p>
          </AnimatedSection>

          {/* Main Content */}
          <div className="max-w-5xl mx-auto">

            {/* Skills Grid */}
            <div className="space-y-10">
              {/* Languages */}
              <div>
                <AnimatedSection delay={0.25}>
                  <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-5 text-center">
                    Languages
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
                <AnimatedSection delay={0.3}>
                  <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-5 text-center">
                    Machine Learning
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
                <AnimatedSection delay={0.35}>
                  <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-5 text-center">
                    Deployment & Tools
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
            <AnimatedSection delay={0.4} className="mt-12">
              <Button size="lg" className="w-full max-w-md mx-auto flex gap-2 h-14 text-base shadow-lg shadow-primary/25" asChild>
                <a href="/resume.pdf" download>
                  <Download className="h-5 w-5" />
                  Download Full Resume (PDF)
                </a>
              </Button>
            </AnimatedSection>
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
