import { motion } from "framer-motion";

export function FinalCTA() {
  return (
    <section className="py-32 relative flex items-center justify-center overflow-hidden bg-primary text-primary-foreground">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-primary/90 mix-blend-multiply z-10" />
        <img 
          src="https://images.pexels.com/photos/1572878/pexels-photo-1572878.jpeg?auto=compress&cs=tinysrgb&w=1920&q=80" 
          alt="Abstract Studio Light" 
          className="w-full h-full object-cover grayscale opacity-40"
        />
      </div>
      
      <div className="container mx-auto px-6 relative z-20 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-7xl font-serif mb-6 text-black"
        >
          Ready to capture <br/><span className="italic font-light">your legacy?</span>
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-black/70 text-lg md:text-xl font-light mb-12 max-w-2xl mx-auto"
        >
          Our calendar is highly curated. Contact us today to secure your dates for the upcoming season.
        </motion.p>
        
        <motion.a 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          href="#contact"
          className="inline-block px-10 py-5 bg-black text-white font-semibold tracking-[0.2em] uppercase hover:bg-black/80 transition-all duration-300 hover:scale-105"
        >
          Request a Consultation
        </motion.a>
      </div>
    </section>
  );
}
