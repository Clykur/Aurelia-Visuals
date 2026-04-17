import { motion } from "framer-motion";

export function Philosophy() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2 relative"
          >
            <div className="aspect-[3/4] overflow-hidden relative">
              <img 
                src="https://images.pexels.com/photos/1684481/pexels-photo-1684481.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Photographer behind the scenes"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
              />
              <div className="absolute inset-0 border border-white/10 m-6 pointer-events-none" />
            </div>
            {/* Decorative block */}
            <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-primary/10 -z-10" />
            <div className="absolute top-12 -left-6 bg-background border border-white/10 p-6 shadow-2xl backdrop-blur-sm hidden md:block">
              <p className="font-serif text-white text-xl">Est. 2018</p>
              <p className="text-primary text-xs tracking-widest uppercase mt-1">New York</p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <span className="text-primary text-sm font-semibold tracking-[0.2em] uppercase block mb-6">
              Our Philosophy
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-8 leading-tight">
              We don't take photographs. <br/>
              <span className="italic text-white/50">We make them.</span>
            </h2>
            <div className="space-y-6 text-white/60 font-light text-lg leading-relaxed">
              <p>
                At Clykur Studios, we believe that true luxury lies in the details that others overlook. Every frame we capture is meticulously composed, lit, and directed to evoke a specific emotional response.
              </p>
              <p>
                Our aesthetic is rooted in cinematic storytelling. Whether we are shooting a high-fashion editorial in Paris or a clandestine elopement in Lake Como, our approach remains the same: finding the extraordinary in the authentic.
              </p>
              <p>
                We are not for everyone. We are for those who understand that an image is not just a memory—it is a legacy.
              </p>
            </div>
            
            <div className="mt-12 flex items-center gap-4">
              <div className="h-[1px] w-12 bg-primary" />
              <p className="text-white text-sm font-semibold tracking-widest uppercase">
                The Clykur Standard
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
