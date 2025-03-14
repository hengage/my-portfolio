
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  return (
    <>
      <Navbar />
      <PageTransition>
        <main className="min-h-[80vh] flex items-center justify-center py-20">
          <div className="text-center px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-8xl md:text-9xl font-bold text-primary mb-4">404</h1>
              <h2 className="text-3xl md:text-4xl font-semibold mb-4">Page Not Found</h2>
              <p className="text-muted-foreground text-lg max-w-md mx-auto mb-8">
                The page you are looking for might have been removed or is temporarily unavailable.
              </p>
              <Link 
                to="/" 
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors group"
              >
                <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
                Back to Home
              </Link>
            </motion.div>
          </div>
        </main>
      </PageTransition>
      <Footer />
    </>
  );
};

export default NotFound;
