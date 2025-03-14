
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

export default function HeroSection() {
  const backgroundRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!backgroundRef.current) return;
      
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      const xPercent = (clientX / innerWidth - 0.5) * 2;
      const yPercent = (clientY / innerHeight - 0.5) * 2;
      
      backgroundRef.current.style.transform = `translate(${xPercent * -10}px, ${yPercent * -10}px)`;
    };
    
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative overflow-hidden min-h-screen flex items-center pt-32 pb-20">
      {/* Background gradient */}
      <div 
        ref={backgroundRef}
        className="absolute inset-0 transition-transform duration-200 ease-out"
        style={{ 
          background: "radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.1) 0%, rgba(0, 0, 0, 0) 70%)",
          filter: "blur(80px)",
          willChange: "transform"
        }}
      />
      
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-8 items-center">
          <div className="lg:col-span-3 space-y-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col space-y-3"
            >
              <span className="px-3 py-1 text-xs font-medium text-primary bg-primary/10 rounded-full w-fit">
                Full Stack Developer
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold">
                Crafting Digital <br />
                <span className="text-primary">Experiences</span> That Matter
              </h1>
            </motion.div>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-lg text-muted-foreground max-w-2xl"
            >
              I'm a passionate full-stack developer who transforms ideas into elegant, functional digital solutions. With expertise in modern web technologies, I build applications that deliver exceptional user experiences.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link 
                to="/projects" 
                className="flex items-center justify-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors group"
              >
                View my work
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/contact" 
                className="flex items-center justify-center px-6 py-3 border border-border rounded-lg hover:bg-accent transition-colors"
              >
                Contact me
              </Link>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="flex items-center gap-6 pt-4"
            >
              <div className="h-px bg-border flex-1" />
              <div className="flex items-center gap-4">
                <a 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="p-2 rounded-full hover:bg-accent transition-colors"
                  aria-label="GitHub"
                >
                  <Github size={20} />
                </a>
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="p-2 rounded-full hover:bg-accent transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
                <a 
                  href="https://twitter.com" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="p-2 rounded-full hover:bg-accent transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter size={20} />
                </a>
              </div>
              <div className="h-px bg-border flex-1" />
            </motion.div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-2 blur-card p-6 md:p-8 h-fit"
          >
            <div className="aspect-square bg-muted/50 rounded-lg overflow-hidden relative">
              <img 
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                alt="Developer working on code" 
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/70 to-transparent" />
            </div>
            
            <div className="mt-6 space-y-4">
              <h3 className="text-xl font-medium">Let's build something amazing together</h3>
              <p className="text-muted-foreground">
                With a focus on clean code and thoughtful design, I create solutions that stand out.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
