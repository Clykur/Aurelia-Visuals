import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-background">
      {/* Background Image — absolutely fills entire section */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/50 to-background z-10" />
        <img
          src="https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=1920&q=80"
          alt="Cinematic Wedding Photography"
          style={{ objectPosition: "55% center" }}
          className="absolute inset-0 w-full h-full object-cover animate-[kenburns_20s_ease-out_infinite_alternate]"
        />
      </div>

      <div className="relative z-20 w-full px-6 sm:px-8 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="inline-block mb-5 px-4 py-1.5 border border-primary/30 bg-background/50 backdrop-blur-sm"
        >
          <span className="text-primary text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase">
            Clykur Studios
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-[2.6rem] sm:text-5xl md:text-7xl lg:text-8xl font-serif text-white leading-[1.1] mb-5 md:mb-8"
        >
          We Capture{" "}
          <span className="italic font-light text-primary block sm:inline">
            Stories That Sell.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-sm sm:text-base md:text-xl text-white/75 max-w-xl md:max-w-2xl mb-8 md:mb-12 font-light leading-relaxed"
        >
          Premium photography agency for brands, campaigns, and luxury events.
          Crafting visual legacies through a cinematic lens.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-3 sm:gap-6 w-full max-w-xs sm:max-w-none sm:w-auto"
        >
          <a
            href="#portfolio"
            className="px-8 py-4 bg-primary text-primary-foreground font-semibold tracking-widest uppercase hover:bg-primary/90 transition-colors text-sm text-center"
          >
            View Portfolio
          </a>
          <a
            href="#contact"
            className="px-8 py-4 bg-transparent border border-white/25 text-white font-semibold tracking-widest uppercase hover:bg-white/5 transition-colors text-sm text-center"
          >
            Inquire Now
          </a>
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
