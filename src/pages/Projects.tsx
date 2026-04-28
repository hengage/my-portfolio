
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import { ArrowUpRight, Github } from "lucide-react";
import { motion } from "framer-motion";

type Project = {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  type: "live" | "open-source";
};

const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Hearts & Hands Humanitarian Foundation",
    description:
      "A full-stack platform for a non-governmental organisation, enabling online donations, event registrations, and outreach management. Designed and built end-to-end with a focus on accessibility and reliable donation flows.",
    technologies: ["React", "Node.js", "PostgreSQL", "Payments"],
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    liveUrl: "https://3hf.ngo",
    type: "live",
  },
  {
    id: 2,
    title: "Kanem Care & Support Initiative",
    description:
      "A full-stack platform supporting literacy programs and child protection initiatives for an active Nigerian NGO — enabling online donations, volunteer signups, partner showcasing, and community impact reporting.",
    technologies: ["React", "Node.js", "PostgreSQL", "Tailwind CSS"],
    image: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    liveUrl: "https://kanemcare.org",
    type: "live",
  },
  {
    id: 3,
    title: "BillFlow — Idempotent Payments Engine",
    description:
      "A payments service that models idempotency as a state machine, with a 4-phase atomic ACID flow guaranteeing at-most-once charges even under flaky networks and retries. Includes an auto subscription renewal engine that decides whether to retry a failed attempt based on meaningful, classified error responses.",
    technologies: ["Python", "Django", "PostgreSQL", "State Machine", "ACID", "Idempotency"],
    image: "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    githubUrl: "https://github.com/hengage/billflow",
    type: "open-source",
  },
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
                Selected Work
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-muted-foreground text-lg"
              >
                A mix of shipped client platforms and core systems I've designed and built across fintech, logistics, and SaaS.
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
                      <span
                        className={`px-2 py-1 text-xs font-medium rounded-md ${
                          project.type === "open-source"
                            ? "bg-primary/10 text-primary"
                            : "bg-accent text-accent-foreground"
                        }`}
                      >
                        {project.type === "open-source" ? "Open Source" : "Live"}
                      </span>
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
                    <div className="flex items-center gap-4 flex-wrap">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          className="inline-flex items-center gap-2 text-primary hover:underline"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Visit Site
                          <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </a>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          className="inline-flex items-center gap-2 text-foreground/80 hover:text-foreground transition-colors"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <Github size={16} />
                          View on GitHub
                        </a>
                      )}
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
