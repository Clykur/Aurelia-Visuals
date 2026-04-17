import { motion } from "framer-motion";

const BG_IMAGE =
  "https://images.pexels.com/photos/3014853/pexels-photo-3014853.jpeg?auto=compress&cs=tinysrgb&w=1920&q=90";

export function Hero() {
  return (
    <section
      className="relative h-screen w-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${BG_IMAGE})`,
        backgroundSize: "cover",
        backgroundPosition: "center 25%",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/55 to-[#0f0f0f] z-10" />

      {/* Kenburns zoom layer */}
      <div
        className="absolute inset-0 animate-[kenburns_20s_ease-out_infinite_alternate] z-0"
        style={{
          backgroundImage: `url(${BG_IMAGE})`,
          backgroundSize: "cover",
          backgroundPosition: "center 25%",
          backgroundRepeat: "no-repeat",
        }}
      />

      <div className="relative z-20 w-full px-6 sm:px-8 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="inline-block mb-5 px-4 py-1.5 border border-primary/30 bg-black/40 backdrop-blur-sm"
        >
          <span className="text-primary text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase block">
            Aurelia Visuals
          </span>
          <span className="text-white/55 text-[9px] sm:text-[10px] font-medium tracking-[0.18em] uppercase mt-1.5 block">
            A Clykur product
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
          0%  { transform: scale(1.00); }
          100%{ transform: scale(1.08); }
        }
      `}} />
    </section>
  );
}
