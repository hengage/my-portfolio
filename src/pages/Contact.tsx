
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import { motion } from "framer-motion";
import { ContactInfo } from "@/components/contact/ContactInfo";
import { ContactForm } from "@/components/contact/ContactForm";

const Contact = () => {
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
                Get In Touch
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-muted-foreground text-lg"
              >
                Have a project in mind or just want to say hello? I'd love to hear from you.
              </motion.p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="lg:col-span-2 blur-card p-6 md:p-8 h-fit"
              >
                <ContactInfo />
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="lg:col-span-3 blur-card p-6 md:p-8"
              >
                <ContactForm />
              </motion.div>
            </div>
          </section>
        </main>
      </PageTransition>
      <Footer />
    </>
  );
};

export default Contact;
