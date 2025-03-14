
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { AnimatePresence } from "framer-motion";
import PageTransition from "@/components/PageTransition";

const Index = () => {
  return (
    <>
      <Navbar />
      <AnimatePresence mode="wait">
        <PageTransition>
          <main>
            <HeroSection />
            <ProjectsSection />
            <SkillsSection />
            <TestimonialsSection />
            <ContactSection />
          </main>
        </PageTransition>
      </AnimatePresence>
      <Footer />
    </>
  );
};

export default Index;
