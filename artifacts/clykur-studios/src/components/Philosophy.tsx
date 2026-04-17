import { motion } from "framer-motion";

export function Philosophy() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-5 sm:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-24">

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="aspect-[4/3] sm:aspect-[3/4] overflow-hidden relative">
              <img
                src="https://images.pexels.com/photos/1684481/pexels-photo-1684481.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Photographer behind the scenes"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
              />
              <div className="absolute inset-0 border border-white/10 m-4 sm:m-6 pointer-events-none" />
            </div>
            <div className="absolute -bottom-4 -right-2 sm:-bottom-8 sm:-right-8 w-32 h-32 sm:w-48 sm:h-48 bg-primary/10 -z-10" />

            {/* Est. badge — only on sm+ */}
            <div className="hidden sm:block absolute top-10 -left-4 md:-left-6 bg-background border border-white/10 p-4 sm:p-6 shadow-2xl backdrop-blur-sm">
              <p className="font-serif text-white text-lg sm:text-xl">Est. 2025</p>
              <p className="text-primary text-xs tracking-widest uppercase mt-1">Bengaluru, India</p>
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2"
          >
            {/* Mobile-only badge */}
            <div className="flex items-center gap-3 mb-5 sm:hidden">
              <span className="text-primary text-xs tracking-widest uppercase font-semibold">Est. 2025 — Bengaluru, India</span>
            </div>

            <span className="text-primary text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase block mb-4 sm:mb-6">
              Our Philosophy
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-white mb-6 sm:mb-8 leading-snug">
              We don't take photographs.{" "}
              <span className="italic text-white/50">We make them.</span>
            </h2>
            <div className="space-y-4 sm:space-y-6 text-white/60 font-light text-base sm:text-lg leading-relaxed">
              <p>
                At Clykur Studios, we believe that true luxury lies in the details that others overlook. Every frame we capture is meticulously composed, lit, and directed to evoke a specific emotional response.
              </p>
              <p>
                Our aesthetic is rooted in cinematic storytelling. Whether we are shooting a high-fashion editorial or a clandestine elopement, our approach remains the same: finding the extraordinary in the authentic.
              </p>
              <p>
                We are not for everyone. We are for those who understand that an image is not just a memory — it is a legacy.
              </p>
            </div>

            <div className="mt-8 sm:mt-12 flex items-center gap-4">
              <div className="h-[1px] w-10 sm:w-12 bg-primary" />
              <p className="text-white text-xs sm:text-sm font-semibold tracking-widest uppercase">
                The Clykur Standard
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
