
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const PROJECTS = [
  {
    id: 1,
    title: "Hearts & Hands Humanitarian Foundation",
    description: "Full-stack NGO platform enabling online donations, event registrations, and outreach management.",
    technologies: ["React", "Node.js", "PostgreSQL"],
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    link: "https://3hf.ngo"
  },
  {
    id: 2,
    title: "Kanem Care & Support Initiative",
    description: "Full-stack platform for a Nigerian NGO supporting literacy programs, donations, volunteer signups, and impact reporting.",
    technologies: ["React", "Node.js", "Tailwind CSS"],
    image: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    link: "https://kanemcare.org"
  },
  {
    id: 3,
    title: "Real-time Rider Tracking",
    description: "Geospatial WebSocket-based rider tracking with proximity-based matching for an on-demand delivery platform.",
    technologies: ["Node.js", "WebSockets", "Redis", "PostgreSQL"],
    image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    link: "/projects"
  }
];

export default function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  
  return (
    <section id="projects" className="py-20 md:py-32">
      <div className="section-container">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-16">
          <div>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="text-primary font-medium mb-2"
            >
              My Work
            </motion.p>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl md:text-4xl font-semibold"
            >
              Featured Projects
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link 
              to="/projects" 
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group"
            >
              View all projects
              <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
        
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="blur-card group overflow-hidden"
            >
              <div className="h-60 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech} 
                      className="px-2 py-1 text-xs font-medium bg-secondary rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-medium mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                {project.link.startsWith("http") ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-primary hover:underline"
                  >
                    Visit Site
                    <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </a>
                ) : (
                  <Link
                    to={project.link}
                    className="inline-flex items-center gap-2 text-primary hover:underline"
                  >
                    View Project
                    <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </Link>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
