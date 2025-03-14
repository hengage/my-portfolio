
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import { ArrowUpRight, Github } from "lucide-react";
import { motion } from "framer-motion";

const PROJECTS = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce platform with payment processing and inventory management, built with React and Node.js. The platform includes a responsive front-end interface, secure authentication, product management dashboard, and integration with multiple payment gateways.",
    technologies: ["React", "Node.js", "MongoDB", "Stripe", "Redux", "Express"],
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    link: "#",
    github: "#"
  },
  {
    id: 2,
    title: "Task Management App",
    description: "An intuitive task management application with real-time updates and team collaboration features. This app helps teams organize tasks, set deadlines, assign responsibilities, and track progress in real-time. It includes notification systems and detailed analytics for project managers.",
    technologies: ["React", "Firebase", "Tailwind CSS", "React Query", "Framer Motion"],
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    link: "#",
    github: "#"
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "A sleek weather dashboard that provides real-time weather data and forecasts for any location. This app leverages modern API integrations to display current conditions, hourly forecasts, and 7-day predictions with beautiful visualizations and animations. Users can save favorite locations and receive weather alerts.",
    technologies: ["React", "OpenWeather API", "Chart.js", "Tailwind CSS", "Axios"],
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    link: "#",
    github: "#"
  },
  {
    id: 4,
    title: "Social Media Analytics Tool",
    description: "A comprehensive analytics dashboard for social media marketers to track campaign performance across multiple platforms. This tool aggregates data from various social networks, providing actionable insights with custom reporting, trend analysis, and competitor tracking.",
    technologies: ["Vue.js", "Node.js", "GraphQL", "PostgreSQL", "D3.js"],
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    link: "#",
    github: "#"
  },
  {
    id: 5,
    title: "Fitness Tracking App",
    description: "A mobile-first fitness application that helps users track workouts, nutrition, and progress towards health goals. This app features custom workout plans, integration with wearable devices, meal planning tools, and social features for connecting with friends and fitness communities.",
    technologies: ["React Native", "Firebase", "Redux", "Node.js", "Express"],
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    link: "#",
    github: "#"
  },
  {
    id: 6,
    title: "Real Estate Platform",
    description: "A modern real estate marketplace that connects buyers, sellers, and agents with powerful search and filtering capabilities. This platform includes virtual tours, mortgage calculators, neighborhood insights, and a secure messaging system for inquiries and negotiations.",
    technologies: ["Next.js", "Prisma", "PostgreSQL", "Mapbox", "Cloudinary"],
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    link: "#",
    github: "#"
  }
];

const Projects = () => {
  return (
    <>
      <Navbar />
      <PageTransition>
        <main className="pt-24 pb-20">
          <section className="section-container">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-4xl md:text-5xl font-semibold mb-4"
              >
                My Projects
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-muted-foreground text-lg"
              >
                A collection of my work that showcases my skills and experience in building digital products.
              </motion.p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              {PROJECTS.map((project, index) => (
                <motion.div 
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="blur-card overflow-hidden group"
                >
                  <div className="h-64 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6 md:p-8">
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
                    <h2 className="text-2xl font-medium mb-3">{project.title}</h2>
                    <p className="text-muted-foreground mb-5">{project.description}</p>
                    <div className="flex items-center gap-4">
                      <a 
                        href={project.link} 
                        className="inline-flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Live Demo
                        <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </a>
                      <a 
                        href={project.github} 
                        className="inline-flex items-center gap-2 text-foreground/80 hover:text-foreground transition-colors"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Github size={16} />
                        View Code
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        </main>
      </PageTransition>
      <Footer />
    </>
  );
};

export default Projects;
