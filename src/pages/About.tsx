
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import { motion } from "framer-motion";
import { CheckCircle2, Download, Github, Linkedin, Mail } from "lucide-react";

const EXPERIENCE = [
  {
    role: "Backend Engineer",
    company: "Carrotsuite",
    period: "Jan 2025 – Present",
    location: "Nigeria",
    description:
      "Redesigned a monolithic file management system into a modular, entity-agnostic service — enabling concurrent multi-file uploads and reducing feature integration time by ~80%. Architected enterprise modules across contracts, inspections, scheduling, project planning, and performance appraisal. Established team-wide standards (repository pattern, service layer, JSDoc + TypeScript conventions), reducing duplication by ~60%.",
    tech: ["TypeScript", "Node.js", "NestJS", "PostgreSQL", "Repository Pattern"],
  },
  {
    role: "Backend Engineer",
    company: "EnsuredNg",
    period: "Jul 2024 – Jan 2025",
    location: "Nigeria",
    description:
      "Built a barcode/QR scanning pipeline linking physical product seals to authenticated records on AWS serverless infrastructure. Managed secure image ingestion via S3 and integrated CloudWatch for structured logging — enabling rapid incident diagnosis and reducing MTTR.",
    tech: ["Node.js", "TypeScript", "AWS Lambda", "DynamoDB", "S3", "CloudWatch"],
  },
  {
    role: "Lead Backend Engineer",
    company: "Mr Delivery",
    period: "Aug 2023 – Feb 2024",
    location: "Ghana",
    description:
      "Led backend architecture for a Ghana-based on-demand delivery platform. Designed the core shopping and order processing system, architected a geospatial real-time rider tracking solution with WebSockets and proximity search, and integrated First Atlantic Bank Ghana payments.",
    tech: ["Node.js", "WebSockets", "Redis", "PostgreSQL", "Geospatial"],
  },
  {
    role: "Backend Engineer",
    company: "PursCliq",
    period: "Dec 2022 – Aug 2023",
    location: "Nigeria",
    description:
      "Built and maintained a user wallet microservice with RabbitMQ event messaging — enforcing DB transactions and idempotency keys to guarantee consistency. Automated invoicing and receipt generation, reducing manual billing overhead by over 60%.",
    tech: ["Node.js", "RabbitMQ", "PostgreSQL", "Sematext", "Microservices"],
  },
  {
    role: "Full Stack Engineer",
    company: "TechPet Engineering Global",
    period: "Feb 2021 – Aug 2022",
    location: "Nigeria",
    description:
      "Built task and goal tracking modules for a Learning Management System. Developed a shared React component library adopted across multiple client projects, reducing UI inconsistencies by 30%. Built authentication using Django REST Framework, Simple JWT, and Djoser.",
    tech: ["React.js", "Django REST Framework", "Cypress", "Jest"],
  },
];

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
                  Software Engineer building scalable, secure systems
                </h1>
                <p className="text-muted-foreground text-lg mb-8">
                  I'm Henry Chizoba Udeh — a Software Engineer with 5+ years of experience designing and shipping scalable, secure, and maintainable systems across fintech, logistics, and SaaS domains, spanning both backend services and full-stack product features.
                </p>

                <div className="space-y-6 mb-8">
                  <h2 className="text-xl font-medium">My Approach</h2>
                  <p className="text-muted-foreground">
                    I have a proven ability to own services end-to-end — from system design and data modelling to deployment, observability, and incident response. I enjoy working with cross-functional teams and non-technical stakeholders to translate complex requirements into reliable, business-focused solutions.
                  </p>
                  <p className="text-muted-foreground">
                    I'm currently deepening my AWS cloud expertise across cloud-native and serverless architectures, while continuing to champion clean architecture, repository patterns, and thorough technical documentation (ADRs, RFCs).
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <a
                    href="/henry_chizoba_software_engineer.pdf"
                    download
                    className="flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors group"
                  >
                    <Download size={18} />
                    Download Resume
                  </a>
                  <div className="flex items-center gap-4">
                    <a
                      href="https://github.com/hengage"
                      target="_blank"
                      rel="noreferrer"
                      className="p-3 border border-border rounded-lg hover:bg-accent transition-colors"
                      aria-label="GitHub"
                    >
                      <Github size={20} />
                    </a>
                    <a
                      href="https://linkedin.com/in/henrychizoba"
                      target="_blank"
                      rel="noreferrer"
                      className="p-3 border border-border rounded-lg hover:bg-accent transition-colors"
                      aria-label="LinkedIn"
                    >
                      <Linkedin size={20} />
                    </a>
                    <a
                      href="mailto:henrychizobaudeh@gmail.com"
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
                    alt="Henry Chizoba Udeh"
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
                  <h3 className="text-xl font-medium mb-4">Backend</h3>
                  <ul className="space-y-3">
                    {["Node.js", "Express", "NestJS", "Django REST Framework", "TypeScript", "Python"].map((skill) => (
                      <li key={skill} className="flex items-center gap-2">
                        <CheckCircle2 size={16} className="text-primary" />
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="blur-card p-6">
                  <h3 className="text-xl font-medium mb-4">Cloud & Data</h3>
                  <ul className="space-y-3">
                    {["AWS (Lambda, S3, DynamoDB, SQS)", "PostgreSQL", "MongoDB", "Redis", "Docker", "GitHub Actions"].map((skill) => (
                      <li key={skill} className="flex items-center gap-2">
                        <CheckCircle2 size={16} className="text-primary" />
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="blur-card p-6">
                  <h3 className="text-xl font-medium mb-4">Frontend & Practices</h3>
                  <ul className="space-y-3">
                    {["React.js", "Next.js", "Tailwind CSS", "Microservices & Event-driven", "TDD (Jest, Cypress)", "System Design"].map((skill) => (
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
                {EXPERIENCE.map((job) => (
                  <div key={`${job.company}-${job.period}`} className="blur-card p-6 md:p-8">
                    <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
                      <div>
                        <h3 className="text-xl font-medium">{job.role}</h3>
                        <p className="text-primary">{job.company} · {job.location}</p>
                      </div>
                      <span className="px-3 py-1 text-xs font-medium bg-secondary rounded-md">
                        {job.period}
                      </span>
                    </div>
                    <p className="text-muted-foreground mb-4">{job.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {job.tech.map((tech) => (
                        <span key={tech} className="px-2 py-1 text-xs font-medium bg-secondary rounded-md">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <h2 className="text-2xl md:text-3xl font-semibold mb-8">Education</h2>

              <div className="blur-card p-6 md:p-8 mb-16">
                <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-medium">Bachelor of Applied Science, Software Development</h3>
                    <p className="text-primary">Brigham Young University – Idaho (BYU-Idaho)</p>
                  </div>
                </div>
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
