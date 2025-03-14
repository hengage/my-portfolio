
import { useRef } from "react";
import { useInView } from "framer-motion";
import { motion } from "framer-motion";
import { Code, Database, Layout, Server, Smartphone, Wand2 } from "lucide-react";

const SKILLS = [
  {
    icon: <Code size={24} />,
    name: "Frontend Development",
    description: "Creating responsive, accessible, and performant user interfaces with modern frameworks."
  },
  {
    icon: <Server size={24} />,
    name: "Backend Development",
    description: "Building robust APIs and server-side applications with scalable architectures."
  },
  {
    icon: <Database size={24} />,
    name: "Database Design",
    description: "Designing efficient database schemas and implementing data access strategies."
  },
  {
    icon: <Layout size={24} />,
    name: "UI/UX Design",
    description: "Crafting intuitive user experiences and visually appealing interfaces."
  },
  {
    icon: <Smartphone size={24} />,
    name: "Mobile Development",
    description: "Developing cross-platform mobile applications with native-like performance."
  },
  {
    icon: <Wand2 size={24} />,
    name: "DevOps",
    description: "Automating deployment workflows and implementing CI/CD pipelines."
  }
];

export default function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  
  return (
    <section className="py-20 md:py-32 bg-secondary/30">
      <div className="section-container">
        <div ref={ref} className="text-center max-w-3xl mx-auto mb-16">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-primary font-medium mb-2"
          >
            My Expertise
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-semibold mb-4"
          >
            Skills & Services
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted-foreground"
          >
            I offer a range of services to help businesses and individuals create beautiful, functional digital experiences that drive results.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {SKILLS.map((skill, index) => (
            <motion.div 
              key={skill.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="blur-card p-6 md:p-8 hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-4">
                {skill.icon}
              </div>
              <h3 className="text-xl font-medium mb-2">{skill.name}</h3>
              <p className="text-muted-foreground">{skill.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
