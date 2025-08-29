import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border/50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            {/* Brand */}
            <div>
              <div className="text-2xl font-bold text-gradient mb-2">
                Deivyansh Singh
              </div>
              <p className="text-text-muted text-sm">
                Developer & Designer
              </p>
            </div>

            {/* Social Links */}
            <div className="flex justify-center gap-6">
              <a 
                href="https://github.com/striver-24" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full text-text-muted hover:text-primary hover:bg-surface-elevated transition-smooth"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://linkedin.com/in/deivyansh-singh" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full text-text-muted hover:text-primary hover:bg-surface-elevated transition-smooth"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="mailto:deivyanshs@gmail.com"
                className="p-2 rounded-full text-text-muted hover:text-primary hover:bg-surface-elevated transition-smooth"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>

            {/* Copyright */}
            <div className="text-center md:text-right">
              <p className="text-text-muted text-sm">
                © {currentYear} Deivyansh Singh. All rights reserved.
              </p>
            </div>
          </div>

          {/* Credits */}
          <div className="mt-8 pt-8 border-t border-border/30">
            <p className="text-center text-text-muted text-sm flex items-center justify-center gap-2">
              Design inspired by{" "}
              <a 
                href="https://hamishw.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:text-accent transition-smooth font-medium"
              >
                Hamish Williams
              </a>
              <Heart size={14} className="text-primary" />
              Built with React & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;