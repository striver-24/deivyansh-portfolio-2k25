import { Card, CardContent } from "@/components/ui/card";
import { Code2, Palette, Rocket, Users } from "lucide-react";

const About = () => {
  const skills = [
    {
      icon: <Code2 className="w-6 h-6" />,
      title: "Development",
      description: "Full-stack development with modern frameworks and technologies"
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: "Design",
      description: "Creating beautiful and intuitive user interfaces and experiences"
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "Performance",
      description: "Optimizing applications for speed, accessibility, and user satisfaction"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Collaboration",
      description: "Working effectively with teams to deliver exceptional products"
    }
  ];

  const technologies = [
    "React", "TypeScript", "Node.js", "Python", "PostgreSQL", 
    "Docker", "AWS", "Figma", "Tailwind CSS", "Next.js"
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="text-gradient">Me</span>
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              I'm a passionate developer and designer who loves creating digital experiences 
              that make a difference. With a keen eye for design and a strong technical foundation, 
              I bridge the gap between beautiful interfaces and robust functionality.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Text Content */}
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-text-primary">
                Crafting Digital Excellence
              </h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                My journey in technology began with curiosity and has evolved into a passion 
                for creating meaningful digital experiences. I believe that great software 
                is not just about clean code, but also about understanding users and solving 
                real problems.
              </p>
              <p className="text-text-secondary leading-relaxed">
                When I'm not coding, you can find me exploring new design trends, 
                contributing to open source projects, or sharing knowledge with the 
                developer community.
              </p>
            </div>

            {/* Technologies */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-text-primary">
                Technologies I Love
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {technologies.map((tech) => (
                  <div 
                    key={tech}
                    className="px-4 py-3 rounded-lg bg-surface border border-border/50 text-center text-text-secondary hover:bg-surface-elevated hover:text-primary transition-smooth hover:border-primary/20"
                  >
                    {tech}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill) => (
              <Card 
                key={skill.title}
                className="group bg-surface border-border/50 hover:bg-surface-elevated hover:border-primary/20 transition-smooth cursor-pointer"
              >
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 mx-auto mb-4 text-primary group-hover:text-accent transition-smooth">
                    {skill.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-text-primary">
                    {skill.title}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {skill.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;