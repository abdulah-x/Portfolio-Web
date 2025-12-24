import { Download, Github, Linkedin, Terminal, Code2, Cpu, Zap, Award, Mail, Briefcase, FolderCode, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/Layout";
import { ProjectCard } from "@/components/ProjectCard";
import { AnimatedSection } from "@/components/AnimatedSection";
import { TerminalTag } from "@/components/TerminalTag";
import { SkillCard } from "@/components/SkillCard";
import { InteractiveTerminal } from "@/components/InteractiveTerminal";
import { GitHubStats } from "@/components/GitHubStats";
import { projects } from "@/data/projects";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { CredlyBadge } from "@/components/CredlyBadge";
import { CertificationCard } from "@/components/CertificationCard";
import { ExperienceCard } from "@/components/ExperienceCard";
import { EducationCard } from "@/components/EducationCard";

import profilePhoto from "@/assets/profile-photo.jpg";

const Index = () => {
  const [displayText, setDisplayText] = useState("");
  const [quoteText, setQuoteText] = useState("");
  const fullText = "DATA_SCIENTIST";
  const fullQuote = "THE MAGIC YOU ARE LOOKING FOR IS IN THE WORK YOU ARE AVOIDING";

  // Typewriter effect for title
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

  // Typewriter effect for quote
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setQuoteText(fullQuote.slice(0, index + 1));
      index++;
      if (index >= fullQuote.length) {
        clearInterval(timer);
      }
    }, 50);
    return () => clearInterval(timer);
  }, []);

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
            <div className="flex flex-col items-center">
              {/* Quote above photo */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mb-8 text-center max-w-xs md:max-w-sm"
              >
                <p className="font-serif italic text-lg md:text-xl text-muted-foreground leading-relaxed">
                  "{quoteText}"
                  <span className="animate-pulse text-primary">|</span>
                </p>
              </motion.div>

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
                    src={profilePhoto}
                    alt="Muhammad Abdullah - Data Scientist and AI Enthusiast"
                    className="w-full h-full object-cover"
                    loading="eager"
                    decoding="async"
                    fetchPriority="high"
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
            </div>

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
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-2">
                  MUHAMMAD
                </h1>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-primary">
                  ABDULLAH
                </h1>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="font-mono text-sm text-muted-foreground leading-relaxed max-w-xl mb-8"
              >
                <span className="text-primary">{`>`}</span> Data & AI enthusiast building impactful solutions with 
                <span className="text-primary"> LLMs</span>, 
                <span className="text-accent"> MLOps</span>, and 
                <span className="text-neon-pink"> Cloud Computing</span>.
                <br />
                <span className="text-primary">{`>`}</span> Open to collaborations. Ask me about Python, R, Power BI. Also a photographer 📸
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
                  <a href="https://docs.google.com/document/d/1fp1y3_md6mULuGKLQdQv23x4-dqRgSNx/edit?usp=sharing&ouid=113981398423696160466&rtpof=true&sd=true" target="_blank" rel="noopener noreferrer">
                    <Download className="h-4 w-4" />
                    VIEW_RESUME
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
              SELECTED <span className="text-primary">WORKS</span>
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
              TECHNICAL <span className="text-primary">ARSENAL</span>
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
                <div className="grid grid-cols-3 gap-4 max-w-lg mx-auto">
                  <SkillCard name="Python" proficiency={95} index={0} />
                  <SkillCard name="SQL" proficiency={90} index={1} />
                  <SkillCard name="R" proficiency={75} index={2} />
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
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-3xl mx-auto">
                  <SkillCard name="Scikit-Learn" proficiency={90} index={0} />
                  <SkillCard name="TensorFlow" proficiency={85} index={1} />
                  <SkillCard name="PyTorch" proficiency={80} index={2} />
                  <SkillCard name="Pandas" proficiency={95} index={3} />
                  <SkillCard name="NumPy" proficiency={90} index={4} />
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
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-3xl mx-auto">
                  <SkillCard name="Git" proficiency={90} index={0} />
                  <SkillCard name="Docker" proficiency={85} index={1} />
                  <SkillCard name="Streamlit" proficiency={88} index={2} />
                  <SkillCard name="AWS" proficiency={80} index={3} />
                  <SkillCard name="Azure" proficiency={75} index={4} />
                </div>
              </div>
            </div>

            {/* Download Resume */}
            <AnimatedSection delay={0.4} className="mt-16">
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button 
                  size="lg" 
                  className="w-full max-w-md mx-auto flex gap-3 h-16 font-mono text-sm bg-gradient-to-r from-primary/20 via-primary/10 to-accent/20 border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground hover:shadow-[0_0_40px_rgba(34,211,238,0.4)] transition-all duration-300"
                  asChild
                >
                  <a href="https://docs.google.com/document/d/1fp1y3_md6mULuGKLQdQv23x4-dqRgSNx/edit?usp=sharing&ouid=113981398423696160466&rtpof=true&sd=true" target="_blank" rel="noopener noreferrer" className="relative overflow-hidden group">
                    <motion.span
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/20 to-transparent"
                      initial={{ x: "-100%" }}
                      animate={{ x: "100%" }}
                      transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                    />
                    <Download className="h-5 w-5 relative z-10" />
                    <span className="relative z-10">VIEW_RESUME</span>
                  </a>
                </Button>
              </motion.div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-24 relative">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-card/80 border border-primary/30 rounded mb-6 font-mono text-xs">
              <GraduationCap className="w-4 h-4 text-primary" />
              <span className="text-muted-foreground">SECTION:</span>
              <span className="text-primary">EDUCATION</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              ACADEMIC <span className="text-primary">BACKGROUND</span>
            </h2>
            <p className="font-mono text-sm text-muted-foreground max-w-xl mx-auto">
              <span className="text-primary">{`>`}</span> My educational journey in science and data.
            </p>
          </AnimatedSection>

          <div className="max-w-2xl mx-auto">
            <EducationCard
              degree="BS (Data Science)"
              institution="COMSATS University Islamabad"
              location="Islamabad, Pakistan"
              period="2021 - Present"
              description="7th semester student specializing in machine learning, data pipelines, and predictive analytics. Building end-to-end ML solutions and intelligent systems."
              isCurrent={true}
              index={0}
            />
            <EducationCard
              degree="F.Sc Pre-Engineering (HSSC)"
              institution="Punjab College for Boys Phalia Campus"
              location="Mandi Bahauddin, Pakistan"
              period="2018 - 2020"
              grade="A+"
              description="Higher Secondary School Certificate with focus on Physics, Chemistry, and Mathematics."
              index={1}
            />
            <EducationCard
              degree="Matriculation - Science (SSC)"
              institution="Ghazali Model High School"
              location="Mandi Bahauddin, Pakistan"
              period="2016 - 2018"
              grade="A+"
              description="Secondary School Certificate with Science subjects including Physics, Chemistry, Biology, and Mathematics."
              index={2}
            />
          </div>
        </div>
      </section>

      {/* Work Experience Section */}
      <section id="experience" className="py-24 relative">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-card/80 border border-primary/30 rounded mb-6 font-mono text-xs">
              <Briefcase className="w-4 h-4 text-primary" />
              <span className="text-muted-foreground">SECTION:</span>
              <span className="text-primary">EXPERIENCE</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              WORK <span className="text-primary">EXPERIENCE</span>
            </h2>
            <p className="font-mono text-sm text-muted-foreground max-w-xl mx-auto">
              <span className="text-primary">{`>`}</span> Professional experience in data science and analytics.
            </p>
          </AnimatedSection>

          <div className="max-w-2xl mx-auto">
            <ExperienceCard
              title="Intern"
              company="Dice Analytics"
              type="Internship"
              location="Islamabad, Pakistan · On-site"
              period="Jul 2023 - Sep 2023"
              duration="3 mos"
              description="Dynamic intern at Dice Analytics, a leading data science company, where I gained valuable hands-on experience in various aspects of data analysis and visualization. Contributed to projects involving data mining, interpretation, and presentation. Developed proficiency in tools and techniques essential for data-driven decision-making."
              skills={["Microsoft Excel", "Research Skills", "Data Analysis", "Data Visualization"]}
              index={0}
            />
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-24 relative">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-card/80 border border-primary/30 rounded mb-6 font-mono text-xs">
              <Award className="w-4 h-4 text-primary" />
              <span className="text-muted-foreground">SECTION:</span>
              <span className="text-primary">CERTIFICATIONS</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              MY <span className="text-primary">CREDENTIALS</span>
            </h2>
            <p className="font-mono text-sm text-muted-foreground max-w-xl mx-auto">
              <span className="text-primary">{`>`}</span> Professional certifications validating my expertise.
            </p>
          </AnimatedSection>

          {/* Professional Certificates */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
            <CertificationCard
              title="Google Data Analytics"
              issuer="Google"
              date="Issued Aug 2025"
              credentialId="VJNB2EDRDR8F"
              description="Completed a rigorous 9-course program covering data cleaning, analysis, visualization, and R programming. Gained hands-on experience with spreadsheets, SQL, Tableau, and real-world case studies."
              skills={["Data Analysis", "Data Visualization", "SQL", "R", "Tableau"]}
              index={0}
            />
            <CertificationCard
              title="Applied Data Science Lab"
              issuer="WorldQuant University"
              date="Issued Mar 2025"
              description="Comprehensive data science program covering API design, data visualization, and practical applications of machine learning."
              skills={["API Design", "Data Visualization", "Python", "Machine Learning"]}
              index={1}
            />
          </div>

          {/* Credly Badges */}
          <AnimatedSection className="text-center mb-8">
            <h3 className="font-mono text-sm text-primary uppercase tracking-widest flex items-center justify-center gap-2">
              <span className="w-8 h-px bg-primary/50" />
              VERIFIED BADGES
              <span className="w-8 h-px bg-primary/50" />
            </h3>
          </AnimatedSection>
          
          <div className="flex flex-wrap justify-center gap-6">
            <CredlyBadge 
              badgeId="d999a021-16a2-4430-bc47-86d4e8e41964" 
              badgeUrl="https://www.credly.com/badges/d999a021-16a2-4430-bc47-86d4e8e41964/public_url"
              index={0}
            />
            <CredlyBadge 
              badgeId="2e82b343-d2cd-453a-bfca-898726be0d3f" 
              badgeUrl="https://www.credly.com/badges/2e82b343-d2cd-453a-bfca-898726be0d3f/public_url"
              index={1}
            />
          </div>
        </div>
      </section>

      {/* GitHub Stats Section */}
      <section id="github" className="py-24 relative">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-card/80 border border-primary/30 rounded mb-6 font-mono text-xs">
              <Github className="w-4 h-4 text-primary" />
              <span className="text-muted-foreground">SECTION:</span>
              <span className="text-primary">GITHUB_STATS</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              MY <span className="text-primary">GITHUB</span>
            </h2>
            <p className="font-mono text-sm text-muted-foreground max-w-xl mx-auto">
              <span className="text-primary">{`>`}</span> Contributions, streaks, and coding activity.
            </p>
          </AnimatedSection>

          <div className="max-w-4xl mx-auto">
            <GitHubStats username="abdulah-x" />
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
              LET'S <span className="text-primary">CONNECT</span>
            </h2>
            <p className="font-mono text-sm text-muted-foreground max-w-xl mx-auto">
              <span className="text-primary">{`>`}</span> Currently open for internship opportunities or collaborative data projects.
            </p>
          </AnimatedSection>

          {/* Social Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {/* Email Card */}
            <AnimatedSection delay={0.2}>
              <motion.a
                href="mailto:muhammad.abdullahds1@gmail.com"
                whileHover={{ scale: 1.02, y: -4 }}
                className="group block bg-card/80 backdrop-blur-sm rounded-lg border border-primary/20 p-6 hover:border-primary hover:shadow-[0_0_30px_rgba(34,211,238,0.3)] transition-all duration-300 h-full"
              >
                <div className="flex flex-col items-center text-center gap-4">
                  <div className="w-14 h-14 rounded border border-primary/30 flex items-center justify-center group-hover:border-primary group-hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] transition-all duration-300">
                    <Mail className="h-7 w-7 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-mono text-sm text-foreground mb-1">EMAIL</h4>
                    <p className="font-mono text-xs text-muted-foreground break-all">muhammad.abdullahds1@gmail.com</p>
                  </div>
                  <span className="font-mono text-xs text-primary">SEND MAIL →</span>
                </div>
              </motion.a>
            </AnimatedSection>

            {/* LinkedIn Card */}
            <AnimatedSection delay={0.3}>
              <motion.a
                href="https://www.linkedin.com/in/muhammad-abdullah-53b843248/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02, y: -4 }}
                className="group block bg-card/80 backdrop-blur-sm rounded-lg border border-primary/20 p-6 hover:border-primary hover:shadow-[0_0_30px_rgba(34,211,238,0.3)] transition-all duration-300 h-full"
              >
                <div className="flex flex-col items-center text-center gap-4">
                  <div className="w-14 h-14 rounded border border-primary/30 flex items-center justify-center group-hover:border-primary group-hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] transition-all duration-300">
                    <Linkedin className="h-7 w-7 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-mono text-sm text-foreground mb-1">LINKEDIN</h4>
                    <p className="font-mono text-xs text-muted-foreground">/in/muhammad-abdullah</p>
                  </div>
                  <span className="font-mono text-xs text-primary">CONNECT →</span>
                </div>
              </motion.a>
            </AnimatedSection>

            {/* GitHub Card */}
            <AnimatedSection delay={0.4}>
              <motion.a
                href="https://github.com/abdulah-x"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02, y: -4 }}
                className="group block bg-card/80 backdrop-blur-sm rounded-lg border border-primary/20 p-6 hover:border-primary hover:shadow-[0_0_30px_rgba(34,211,238,0.3)] transition-all duration-300 h-full"
              >
                <div className="flex flex-col items-center text-center gap-4">
                  <div className="w-14 h-14 rounded border border-primary/30 flex items-center justify-center group-hover:border-primary group-hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] transition-all duration-300">
                    <Github className="h-7 w-7 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-mono text-sm text-foreground mb-1">GITHUB</h4>
                    <p className="font-mono text-xs text-muted-foreground">@abdulah-x</p>
                  </div>
                  <span className="font-mono text-xs text-primary">VIEW →</span>
                </div>
              </motion.a>
            </AnimatedSection>

            {/* CV Download Card */}
            <AnimatedSection delay={0.5}>
              <motion.a
                href="https://docs.google.com/document/d/1fp1y3_md6mULuGKLQdQv23x4-dqRgSNx/edit?usp=sharing&ouid=113981398423696160466&rtpof=true&sd=true"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02, y: -4 }}
                className="group block bg-card/80 backdrop-blur-sm rounded-lg border border-primary/20 p-6 hover:border-primary hover:shadow-[0_0_30px_rgba(34,211,238,0.3)] transition-all duration-300 h-full"
              >
                <div className="flex flex-col items-center text-center gap-4">
                  <div className="w-14 h-14 rounded border border-primary/30 flex items-center justify-center group-hover:border-primary group-hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] transition-all duration-300">
                    <Download className="h-7 w-7 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-mono text-sm text-foreground mb-1">RESUME</h4>
                    <p className="font-mono text-xs text-muted-foreground">View my CV</p>
                  </div>
                  <span className="font-mono text-xs text-primary">VIEW →</span>
                </div>
              </motion.a>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
