import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/Layout";

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

const About = () => {
  return (
    <Layout>
      <section className="py-20">
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
                <h1 className="text-3xl md:text-4xl font-bold text-foreground">
                  About Me
                </h1>
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
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                My Technical Toolkit
              </h2>

              {/* Languages */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-foreground">
                  Languages
                </h3>
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
                <h3 className="text-lg font-semibold text-foreground">
                  Machine Learning
                </h3>
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
                <h3 className="text-lg font-semibold text-foreground">
                  Deployment & Tools
                </h3>
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
    </Layout>
  );
};

export default About;
