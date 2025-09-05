import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const Experience = () => {
  const experiences = [
    {
      company: "Indian Oil Corporation Limited",
      role: "Summer Intern",
      duration: "June 2024 - July 2024",
    },
    {
      company: "Panacea Infosec Pvt. Ltd.",
      role: "AIML Intern",
      duration: "Feb 2025 - June 2025",
    },
    {
      company: "Career Simplified",
      role: "Full Stack Development Intern",
      duration: "July 2025 - Present",
    },
  ];

  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Professional <span className="text-gradient">Experience</span>
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              A brief overview of my recent roles and contributions.
            </p>
          </div>

          <div className="space-y-6">
            {experiences.map((exp) => (
              <Card key={`${exp.company}-${exp.role}`} className="bg-surface border-border/50 hover:border-primary/20 transition-smooth">
                <CardContent className="p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-semibold text-text-primary">{exp.company}</h3>
                    <p className="text-text-secondary mt-1">{exp.role}</p>
                  </div>
                  <Badge className="bg-primary/20 text-primary border-primary/30 w-fit md:w-auto">
                    {exp.duration}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
