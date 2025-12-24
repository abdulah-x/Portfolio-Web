import { Download, Github, Linkedin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Layout } from "@/components/Layout";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
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
      <section className="py-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Let's Connect
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              Currently open for internship opportunities or collaborative data
              projects.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Left - Contact Form */}
            <div className="bg-card rounded-2xl border border-border p-8">
              <h2 className="text-xl font-semibold text-foreground mb-6">
                Send a Message
              </h2>
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
                    <h3 className="font-semibold text-foreground">LinkedIn</h3>
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
                    <h3 className="font-semibold text-foreground">GitHub</h3>
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
                    <h3 className="font-semibold text-foreground">Resume</h3>
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
                <h3 className="font-semibold text-foreground mb-3">
                  Response Time
                </h3>
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

export default Contact;
