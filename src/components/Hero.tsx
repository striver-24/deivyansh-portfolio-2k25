import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-surface via-background to-surface-elevated"></div>
      
      {/* Animated grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(hsl(var(--border))_1px,transparent_1px),linear-gradient(90deg,hsl(var(--border))_1px,transparent_1px)] bg-[size:50px_50px] opacity-20 animate-pulse"></div>
      
      {/* Glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Greeting */}
          <div className="mb-6">
            <span className="text-primary font-medium">Hello, I'm</span>
          </div>
          
          {/* Name */}
          <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight">
            <span className="text-gradient">Deivyansh</span>
            <br />
            <span className="text-text-primary">Singh</span>
          </h1>
          
          {/* Title */}
          <p className="text-xl md:text-2xl text-text-secondary mb-8 max-w-2xl mx-auto leading-relaxed">
            Developer, Analyst & A Budding Designer crafting digital experiences with code and creativity
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              onClick={() => scrollToSection("projects")}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg transition-smooth shadow-glow hover:shadow-glow/80"
            >
              View My Work
            </Button>
            <Button 
              variant="outline"
              onClick={() => scrollToSection("about")}
              className="border-primary/20 text-text-secondary hover:bg-primary/10 hover:text-primary hover:border-primary/50 px-8 py-3 text-lg transition-smooth"
            >
              About Me
            </Button>
          </div>
          
          {/* Social Links */}
          <div className="flex justify-center gap-6 mb-12">
            <a 
              href="https://github.com/striver-24" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-surface hover:bg-surface-elevated text-text-secondary hover:text-primary transition-smooth hover:shadow-glow/20"
            >
              <Github size={24} />
            </a>
            <a 
              href="https://linkedin.com/in/deivyansh-singh" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-surface hover:bg-surface-elevated text-text-secondary hover:text-primary transition-smooth hover:shadow-glow/20"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="mailto:deivyanshs@gmail.com"
              className="p-3 rounded-full bg-surface hover:bg-surface-elevated text-text-secondary hover:text-primary transition-smooth hover:shadow-glow/20"
            >
              <Mail size={24} />
            </a>
          </div>
          
          {/* Scroll indicator */}
          <button 
            onClick={() => scrollToSection("about")}
            className="animate-bounce text-text-muted hover:text-primary transition-smooth"
          >
            <ArrowDown size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;