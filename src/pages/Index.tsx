import { ArrowRight, Download, Send, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Layout } from "@/components/Layout";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/data/projects";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

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
      <section id="home" className="min-h-[calc(100vh-4rem)] flex items-center justify-center">
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground mb-6 animate-fade-in leading-tight">
            Turning Raw Data into
            <br />
            <span className="text-primary">Clear, Actionable Insights</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Hi, I'm Muhammad Abdullah. A 7th-Semester Data Science Student
            specializing in Machine Learning, Data Analysis, and end-to-end
            pipelines.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <Button size="lg" className="gap-2 px-8" asChild>
              <a href="#projects">
                View My Projects
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="gap-2 px-8" asChild>
              <a href="/resume.pdf" download>
                <Download className="h-4 w-4" />
                Download CV
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Selected Works & Case Studies
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A comprehensive look at my data science projects, from concept to
              deployment. Each project demonstrates end-to-end problem-solving
              capabilities.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="animate-fade-in"
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <ProjectCard project={project} variant="full" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Left Column - Narrative (40%) */}
            <div className="lg:col-span-2 space-y-8">
              {/* Headshot */}
              <div className="relative w-48 h-48 mx-auto lg:mx-0">
                <div className="w-full h-full rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 border border-border overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80"
                    alt="Muhammad Abdullah"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-primary-foreground text-xl">
                  📊
                </div>
              </div>

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
                <p className="text-muted-foreground leading-relaxed">
                  Currently seeking internship opportunities where I can apply
                  my skills to drive meaningful impact while continuing to learn
                  from industry experts.
                </p>
              </div>
            </div>

            {/* Right Column - Technical Toolkit (60%) */}
            <div className="lg:col-span-3 space-y-8">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                My Technical Toolkit
              </h3>

              {/* Languages */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-foreground">
                  Languages
                </h4>
                <div className="grid grid-cols-3 gap-4">
                  {skills.languages.map((skill) => (
                    <div
                      key={skill.name}
                      className="bg-card rounded-xl border border-border p-4 text-center hover:border-primary/30 hover:shadow-md transition-all duration-300"
                    >
                      <span className="text-2xl mb-2 block">{skill.icon}</span>
                      <span className="text-sm font-medium text-foreground">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Machine Learning */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-foreground">
                  Machine Learning
                </h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {skills.ml.map((skill) => (
                    <div
                      key={skill.name}
                      className="bg-card rounded-xl border border-border p-4 text-center hover:border-primary/30 hover:shadow-md transition-all duration-300"
                    >
                      <span className="text-2xl mb-2 block">{skill.icon}</span>
                      <span className="text-sm font-medium text-foreground">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Deployment & Tools */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-foreground">
                  Deployment & Tools
                </h4>
                <div className="grid grid-cols-3 md:grid-cols-5 gap-4">
                  {skills.tools.map((skill) => (
                    <div
                      key={skill.name}
                      className="bg-card rounded-xl border border-border p-4 text-center hover:border-primary/30 hover:shadow-md transition-all duration-300"
                    >
                      <span className="text-2xl mb-2 block">{skill.icon}</span>
                      <span className="text-sm font-medium text-foreground">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Download Resume Button */}
              <div className="pt-4">
                <Button size="lg" className="w-full gap-2" asChild>
                  <a href="/resume.pdf" download>
                    <Download className="h-5 w-5" />
                    Download Full Resume (PDF)
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Let's Connect
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              Currently open for internship opportunities or collaborative data
              projects.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Left - Contact Form */}
            <div className="bg-card rounded-2xl border border-border p-8">
              <h3 className="text-xl font-semibold text-foreground mb-6">
                Send a Message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    placeholder="What's this about?"
                    value={formData.subject}
                    onChange={(e) =>
                      setFormData({ ...formData, subject: e.target.value })
                    }
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Your message..."
                    rows={5}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    required
                  />
                </div>
                <Button type="submit" size="lg" className="w-full gap-2">
                  <Send className="h-4 w-4" />
                  Send Message
                </Button>
              </form>
            </div>

            {/* Right - Quick Links */}
            <div className="space-y-6">
              {/* LinkedIn Card */}
              <div className="bg-card rounded-2xl border border-border p-6 hover:border-primary/30 hover:shadow-md transition-all duration-300">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Linkedin className="h-7 w-7 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-foreground">LinkedIn</h4>
                    <p className="text-sm text-muted-foreground">
                      Muhammad Abdullah
                    </p>
                  </div>
                  <Button variant="outline" asChild>
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Connect
                    </a>
                  </Button>
                </div>
              </div>

              {/* GitHub Card */}
              <div className="bg-card rounded-2xl border border-border p-6 hover:border-primary/30 hover:shadow-md transition-all duration-300">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Github className="h-7 w-7 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-foreground">GitHub</h4>
                    <p className="text-sm text-muted-foreground">
                      @muhammadabdullah
                    </p>
                  </div>
                  <Button variant="outline" asChild>
                    <a
                      href="https://github.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Repos
                    </a>
                  </Button>
                </div>
              </div>

              {/* CV Download Card */}
              <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl border border-primary/20 p-6 hover:shadow-md transition-all duration-300">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl bg-primary flex items-center justify-center">
                    <Download className="h-7 w-7 text-primary-foreground" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-foreground">Resume</h4>
                    <p className="text-sm text-muted-foreground">
                      Download my full CV
                    </p>
                  </div>
                  <Button asChild>
                    <a href="/resume.pdf" download>
                      Download
                    </a>
                  </Button>
                </div>
              </div>

              {/* Additional Info */}
              <div className="bg-card rounded-2xl border border-border p-6">
                <h4 className="font-semibold text-foreground mb-3">
                  Response Time
                </h4>
                <p className="text-sm text-muted-foreground">
                  I typically respond within 24-48 hours. For urgent matters,
                  please reach out via LinkedIn.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
