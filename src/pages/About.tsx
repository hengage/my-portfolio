
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import { motion } from "framer-motion";
import { CheckCircle2, Download, Github, Linkedin, Mail, Twitter } from "lucide-react";

const About = () => {
  return (
    <>
      <Navbar />
      <PageTransition>
        <main className="pt-24 pb-20">
          <section className="section-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <span className="px-3 py-1 text-xs font-medium text-primary bg-primary/10 rounded-full">
                  About Me
                </span>
                <h1 className="text-4xl md:text-5xl font-semibold mt-3 mb-6">
                  Full Stack Developer with a passion for elegant solutions
                </h1>
                <p className="text-muted-foreground text-lg mb-8">
                  I'm a full-stack developer with over 5 years of experience building web applications. I specialize in creating beautiful, functional, and user-centered digital experiences.
                </p>
                
                <div className="space-y-6 mb-8">
                  <h2 className="text-xl font-medium">My Journey</h2>
                  <p className="text-muted-foreground">
                    My journey in web development began at a young age when I built my first website. Since then, I've worked with startups and established companies, helping them build products that solve real problems and deliver exceptional user experiences.
                  </p>
                  <p className="text-muted-foreground">
                    I hold a Bachelor's degree in Computer Science and am constantly learning new technologies and approaches to stay at the forefront of the industry. I believe in clean code, thoughtful architecture, and user-centered design.
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <a 
                    href="#" 
                    className="flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors group"
                  >
                    <Download size={18} />
                    Download Resume
                  </a>
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
                    <a 
                      href="mailto:hello@example.com" 
                      className="p-3 border border-border rounded-lg hover:bg-accent transition-colors"
                      aria-label="Email"
                    >
                      <Mail size={20} />
                    </a>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="blur-card overflow-hidden"
              >
                <div className="aspect-square bg-muted/50 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                    alt="Developer portrait" 
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </motion.div>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-20"
            >
              <h2 className="text-2xl md:text-3xl font-semibold mb-8">Skills & Expertise</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                <div className="blur-card p-6">
                  <h3 className="text-xl font-medium mb-4">Frontend Development</h3>
                  <ul className="space-y-3">
                    {["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"].map((skill) => (
                      <li key={skill} className="flex items-center gap-2">
                        <CheckCircle2 size={16} className="text-primary" />
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="blur-card p-6">
                  <h3 className="text-xl font-medium mb-4">Backend Development</h3>
                  <ul className="space-y-3">
                    {["Node.js", "Express", "MongoDB", "PostgreSQL", "GraphQL"].map((skill) => (
                      <li key={skill} className="flex items-center gap-2">
                        <CheckCircle2 size={16} className="text-primary" />
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="blur-card p-6">
                  <h3 className="text-xl font-medium mb-4">Other Skills</h3>
                  <ul className="space-y-3">
                    {["UI/UX Design", "DevOps", "Serverless", "Testing", "Performance Optimization"].map((skill) => (
                      <li key={skill} className="flex items-center gap-2">
                        <CheckCircle2 size={16} className="text-primary" />
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <h2 className="text-2xl md:text-3xl font-semibold mb-8">Work Experience</h2>
              
              <div className="space-y-8 mb-16">
                <div className="blur-card p-6 md:p-8">
                  <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
                    <div>
                      <h3 className="text-xl font-medium">Senior Frontend Developer</h3>
                      <p className="text-primary">TechCorp Inc.</p>
                    </div>
                    <span className="px-3 py-1 text-xs font-medium bg-secondary rounded-md">
                      2020 - Present
                    </span>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Led the development of multiple web applications, focusing on performance optimization, accessibility, and responsive design. Collaborated with designers and backend developers to create seamless user experiences.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["React", "TypeScript", "Next.js", "GraphQL", "Tailwind CSS"].map((tech) => (
                      <span key={tech} className="px-2 py-1 text-xs font-medium bg-secondary rounded-md">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="blur-card p-6 md:p-8">
                  <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
                    <div>
                      <h3 className="text-xl font-medium">Full Stack Developer</h3>
                      <p className="text-primary">StartupX</p>
                    </div>
                    <span className="px-3 py-1 text-xs font-medium bg-secondary rounded-md">
                      2018 - 2020
                    </span>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Developed and maintained web applications from concept to deployment. Implemented frontend and backend features, integrated third-party APIs, and optimized database queries for improved performance.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["Node.js", "Express", "MongoDB", "React", "Redux"].map((tech) => (
                      <span key={tech} className="px-2 py-1 text-xs font-medium bg-secondary rounded-md">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              <h2 className="text-2xl md:text-3xl font-semibold mb-8">Education</h2>
              
              <div className="blur-card p-6 md:p-8 mb-16">
                <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-medium">Bachelor of Science in Computer Science</h3>
                    <p className="text-primary">University of Technology</p>
                  </div>
                  <span className="px-3 py-1 text-xs font-medium bg-secondary rounded-md">
                    2014 - 2018
                  </span>
                </div>
                <p className="text-muted-foreground">
                  Focused on software engineering, data structures, algorithms, and web development. Graduated with honors and completed a capstone project building a real-time collaboration platform.
                </p>
              </div>
            </motion.div>
          </section>
        </main>
      </PageTransition>
      <Footer />
    </>
  );
};

export default About;
