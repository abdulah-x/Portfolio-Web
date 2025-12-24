import { ArrowRight, Download } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/Layout";
import { ProjectCard } from "@/components/ProjectCard";
import { featuredProjects } from "@/data/projects";

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="min-h-[calc(100vh-4rem)] flex items-center justify-center">
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
              <a href="#featured-projects">
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

      {/* Featured Projects Section */}
      <section id="featured-projects" className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Featured Projects
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              A selection of my best work showcasing data-driven solutions and
              impactful insights.
            </p>
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project, index) => (
              <div
                key={project.id}
                className="animate-fade-in"
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <ProjectCard project={project} variant="featured" />
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg" className="gap-2" asChild>
              <Link to="/projects">
                View All Projects
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
