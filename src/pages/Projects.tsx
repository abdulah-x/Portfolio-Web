import { Layout } from "@/components/Layout";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/data/projects";

const Projects = () => {
  return (
    <Layout>
      <section className="py-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Selected Works & Case Studies
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A comprehensive look at my data science projects, from concept to
              deployment. Each project demonstrates end-to-end problem-solving
              capabilities.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
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
    </Layout>
  );
};

export default Projects;
