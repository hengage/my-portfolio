
import { motion } from "framer-motion";

interface LocationMapProps {
  className?: string;
}

export function LocationMap({ className }: LocationMapProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.6 }}
      className={`blur-card p-6 md:p-8 rounded-2xl overflow-hidden h-96 ${className}`}
    >
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100939.98555098464!2d-122.50764017948266!3d37.75781499229416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2suk!4v1682452973562!5m2!1sen!2suk" 
        width="100%" 
        height="100%" 
        style={{ border: 0 }} 
        allowFullScreen 
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Location map"
      />
    </motion.div>
  );
}
