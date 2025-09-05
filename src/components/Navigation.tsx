import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-smooth pt-1 ${
        isScrolled 
          ? 'bg-surface/80 backdrop-blur-md border-b border-border/50' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-5">
        <div className="flex items-center justify-between">
          <div 
            onClick={() => scrollToSection("hero")}
            className="cursor-pointer relative flex items-center pt-2"
          >
            <span 
              className="text-2xl relative inline-block signature-logo"
              style={{ 
                fontFamily: 'Rockybilly, cursive',
                color: 'hsl(0, 72%, 51%)', /* using primary color */
                textShadow: '1px 1px 2px rgba(0,0,0,0.15)',
                animation: 'float 3s ease-in-out infinite',
                fontWeight: '400'
              }}
            >
              <span className="transition-all duration-300 hover:text-white relative z-10 block py-1">
                Deivyansh
                <span className="absolute inset-0 bg-gradient-to-r from-red-500 to-red-600 opacity-0 hover:opacity-100 transition-opacity duration-300 blur-sm -z-10"></span>
              </span>
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection("about")}
              className="text-text-secondary hover:text-primary transition-smooth"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection("experience")}
              className="text-text-secondary hover:text-primary transition-smooth"
            >
              Experience
            </button>
            <button 
              onClick={() => scrollToSection("projects")}
              className="text-text-secondary hover:text-primary transition-smooth"
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection("contact")}
              className="text-text-secondary hover:text-primary transition-smooth"
            >
              Contact
            </button>
          </div>

          <Button 
            variant="outline"
            onClick={() => scrollToSection("contact")}
            className="border-primary/20 text-text-secondary hover:bg-primary/10 hover:text-primary hover:border-primary/50 transition-smooth"
          >
            Get in touch
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;