import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A modern, full-stack e-commerce solution built with React, Node.js, and PostgreSQL. Features real-time inventory management, secure payments, and an intuitive admin dashboard.",
      image: "/api/placeholder/600/400",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "Redis"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
      featured: true
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      image: "/api/placeholder/600/400",
      technologies: ["Next.js", "TypeScript", "Prisma", "WebSocket", "Tailwind"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
      featured: true
    },
    {
      title: "Weather Dashboard",
      description: "A beautiful weather dashboard that provides detailed forecasts, interactive maps, and personalized weather insights for multiple locations.",
      image: "/api/placeholder/600/400",
      technologies: ["React", "D3.js", "OpenWeather API", "Chart.js"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
      featured: false
    },
    {
      title: "Portfolio Website",
      description: "A responsive portfolio website showcasing creative projects with smooth animations and an elegant design system.",
      image: "/api/placeholder/600/400",
      technologies: ["React", "Framer Motion", "Tailwind CSS", "Vite"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
      featured: false
    }
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              A collection of projects that showcase my skills in development and design. 
              Each project represents a unique challenge and solution.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="space-y-12">
            {projects.map((project, index) => (
              <div 
                key={project.title}
                className={`grid lg:grid-cols-2 gap-8 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                {/* Project Image */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <Card className="group bg-surface border-border/50 hover:border-primary/20 transition-smooth overflow-hidden">
                    <div className="aspect-video bg-surface-elevated relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20 opacity-0 group-hover:opacity-100 transition-smooth"></div>
                      <div className="absolute inset-0 flex items-center justify-center text-text-muted">
                        <div className="text-center">
                          <div className="w-16 h-16 mx-auto mb-4 rounded-lg bg-surface border border-border/50 flex items-center justify-center">
                            <ExternalLink size={24} />
                          </div>
                          <p className="text-sm">Project Preview</p>
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>

                {/* Project Details */}
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  {project.featured && (
                    <Badge className="bg-primary/20 text-primary border-primary/30 hover:bg-primary/30">
                      Featured Project
                    </Badge>
                  )}
                  
                  <h3 className="text-3xl font-bold text-text-primary">
                    {project.title}
                  </h3>
                  
                  <p className="text-text-secondary leading-relaxed text-lg">
                    {project.description}
                  </p>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge 
                        key={tech} 
                        variant="outline"
                        className="border-border/50 text-text-secondary hover:border-primary/20 hover:text-primary transition-smooth"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  {/* Project Links */}
                  <div className="flex gap-4">
                    <Button 
                      asChild
                      className="bg-primary hover:bg-primary/90 text-primary-foreground transition-smooth shadow-glow/50 hover:shadow-glow"
                    >
                      <a 
                        href={project.liveUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        <ExternalLink size={16} />
                        Live Demo
                      </a>
                    </Button>
                    
                    <Button 
                      variant="outline"
                      asChild
                      className="border-primary/20 text-text-secondary hover:bg-primary/10 hover:text-primary hover:border-primary/50 transition-smooth"
                    >
                      <a 
                        href={project.githubUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        <Github size={16} />
                        Source Code
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;