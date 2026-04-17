import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-background">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background z-10" />
        <img
          src="https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=1920&q=80"
          alt="Cinematic Wedding Photography"
          className="w-full h-full object-cover object-center scale-105 origin-center animate-[kenburns_20s_ease-out_infinite_alternate]"
        />
      </div>

      <div className="relative z-20 container mx-auto px-6 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="inline-block mb-6 px-4 py-1.5 border border-primary/30 bg-background/50 backdrop-blur-sm"
        >
          <span className="text-primary text-xs font-semibold tracking-[0.2em] uppercase">
            Clykur Studios
          </span>
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-5xl md:text-7xl lg:text-8xl font-serif text-white leading-tight mb-8"
        >
          We Capture <br className="hidden md:block" />
          <span className="italic font-light text-primary">Stories That Sell.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-lg md:text-xl text-white/70 max-w-2xl mb-12 font-light"
        >
          Premium photography agency for brands, campaigns, and luxury events. 
          Crafting visual legacies through a cinematic lens.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-6"
        >
          <a
            href="#portfolio"
            className="px-8 py-4 bg-primary text-primary-foreground font-semibold tracking-widest uppercase hover:bg-primary/90 transition-colors"
          >
            View Portfolio
          </a>
          <a
            href="#contact"
            className="px-8 py-4 bg-transparent border border-white/20 text-white font-semibold tracking-widest uppercase hover:bg-white/5 transition-colors"
          >
            Inquire Now
          </a>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center"
        >
          <span className="text-xs text-white/50 tracking-[0.3em] uppercase mb-4">Scroll</span>
          <div className="w-[1px] h-16 bg-gradient-to-b from-white/50 to-transparent" />
        </motion.div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes kenburns {
          0% { transform: scale(1.05); }
          100% { transform: scale(1.15); }
        }
      `}} />
    </section>
  );
}
