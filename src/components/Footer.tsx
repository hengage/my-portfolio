
import { Link } from "react-router-dom";
import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "./ui/button";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="border-t border-border/50 bg-secondary/30 py-12">
      <div className="container px-6 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <Link 
              to="/" 
              className="font-display text-xl font-semibold tracking-tight hover:opacity-80 transition-opacity"
              aria-label="Home"
            >
              dev<span className="text-primary">portfolio</span>
            </Link>
            <p className="mt-4 text-muted-foreground">
              A minimal and elegant developer portfolio showcasing my skills, projects, and experiences.
            </p>
          </div>
          
          <div>
            <h3 className="font-medium text-base mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-muted-foreground hover:text-foreground transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-base mb-4">Connect</h3>
            <div className="flex space-x-4">
              <Button
                variant="ghost"
                size="icon"
                asChild
                className="p-0 h-auto w-auto hover:bg-transparent"
                aria-label="GitHub"
              >
                <a 
                  href="https://github.com/hengage" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Github size={20} />
                </a>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                asChild
                className="p-0 h-auto w-auto hover:bg-transparent"
                aria-label="LinkedIn"
              >
                <a 
                  href="https://linkedin.com/in/henrychizoba" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Linkedin size={20} />
                </a>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                asChild
                className="p-0 h-auto w-auto hover:bg-transparent"
                aria-label="Email"
              >
                <a 
                  href="mailto:hello@example.com" 
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Mail size={20} />
                </a>
              </Button>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-border/50 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Developer Portfolio. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground mt-4 sm:mt-0">
            Designed & Built with Precision
          </p>
        </div>
      </div>
    </footer>
  );
}
