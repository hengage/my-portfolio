
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const PROJECTS = [
  {
    id: 1,
    title: "Hearts & Hands Humanitarian Foundation",
    description:
      "A full-stack platform for a non-governmental organisation, enabling online donations, event registrations, and outreach management. Designed and built end-to-end with a focus on accessibility and reliable donation flows.",
    technologies: ["React", "Node.js", "PostgreSQL", "Payments"],
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    link: "https://3hf.ngo",
  },
  {
    id: 2,
    title: "Kanem Care & Support Initiative",
    description:
      "A full-stack platform supporting literacy programs and child protection initiatives for an active Nigerian NGO — enabling online donations, volunteer signups, partner showcasing, and community impact reporting.",
    technologies: ["React", "Node.js", "PostgreSQL", "Tailwind CSS"],
    image: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    link: "https://kanemcare.org",
  },
  {
    id: 3,
    title: "Modular File Management Service",
    description:
      "Redesigned a monolithic file management system at Carrotsuite into a modular, entity-agnostic service — eliminating schema sprawl, enabling concurrent multi-file uploads, instant file access, and reducing feature integration time by ~80% with full backward compatibility.",
    technologies: ["TypeScript", "Node.js", "PostgreSQL", "Repository Pattern"],
    image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    link: "#",
  },
  {
    id: 4,
    title: "Real-time Rider Tracking (Mr Delivery)",
    description:
      "Architected a geospatial solution for real-time rider location tracking using WebSockets, paired with a proximity-based search algorithm for matching customers to available riders across Ghana — backed by composite indexes for fast geospatial queries.",
    technologies: ["Node.js", "WebSockets", "Redis", "PostgreSQL"],
    image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    link: "#",
  },
  {
    id: 5,
    title: "Wallet Microservice (PursCliq)",
    description:
      "Built and maintained a user wallet microservice with RabbitMQ-based event messaging — enforcing database transactions on every balance mutation, applying idempotency keys to prevent double-processing, and using targeted indexing to keep performance predictable at scale.",
    technologies: ["Node.js", "RabbitMQ", "PostgreSQL", "Microservices"],
    image: "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    link: "#",
  },
  {
    id: 6,
    title: "Product Authentication on AWS Serverless (EnsuredNg)",
    description:
      "Built a barcode/QR code scanning pipeline linking physical product seals to authenticated product records on AWS Lambda + DynamoDB + S3 — enabling real-time product verification at scale with structured CloudWatch observability.",
    technologies: ["AWS Lambda", "DynamoDB", "S3", "CloudWatch", "TypeScript"],
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    link: "#",
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
                    {project.link !== "#" && (
                      <div className="flex items-center gap-4">
                        <a
                          href={project.link}
                          className="inline-flex items-center gap-2 text-primary hover:underline"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Visit Site
                          <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </a>
                      </div>
                    )}
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
