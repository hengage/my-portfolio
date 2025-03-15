
import { Github, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react";

interface ContactInfoProps {
  className?: string;
}

export function ContactInfo({ className }: ContactInfoProps) {
  return (
    <div className={className}>
      <h2 className="text-2xl font-medium mb-6">Contact Information</h2>
      
      <div className="space-y-6 mb-8">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
            <Mail size={18} />
          </div>
          <div>
            <h3 className="font-medium mb-1">Email</h3>
            <a 
              href="mailto:hello@example.com" 
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              hello@example.com
            </a>
          </div>
        </div>
        
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
            <Phone size={18} />
          </div>
          <div>
            <h3 className="font-medium mb-1">Phone</h3>
            <a 
              href="tel:+1234567890" 
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              +1 (234) 567-890
            </a>
          </div>
        </div>
        
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
            <MapPin size={18} />
          </div>
          <div>
            <h3 className="font-medium mb-1">Location</h3>
            <p className="text-muted-foreground">
              San Francisco, California
            </p>
          </div>
        </div>
      </div>
      
      <h3 className="font-medium mb-4">Connect with me</h3>
      <div className="flex items-center gap-4">
        <a 
          href="https://github.com" 
          target="_blank" 
          rel="noreferrer" 
          className="p-3 border border-border rounded-lg hover:bg-accent transition-colors"
          aria-label="GitHub"
        >
          <Github size={20} />
        </a>
        <a 
          href="https://linkedin.com" 
          target="_blank" 
          rel="noreferrer" 
          className="p-3 border border-border rounded-lg hover:bg-accent transition-colors"
          aria-label="LinkedIn"
        >
          <Linkedin size={20} />
        </a>
        <a 
          href="https://twitter.com" 
          target="_blank" 
          rel="noreferrer" 
          className="p-3 border border-border rounded-lg hover:bg-accent transition-colors"
          aria-label="Twitter"
        >
          <Twitter size={20} />
        </a>
      </div>
    </div>
  );
}
