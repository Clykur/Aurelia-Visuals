import { motion } from "framer-motion";

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-[#0a0a0a]">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/3 flex flex-col justify-center"
          >
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">
              Let's create <br/><span className="italic text-primary">something iconic.</span>
            </h2>
            
            <div className="inline-block mb-10 px-4 py-2 bg-primary/10 border border-primary/20 rounded-sm">
              <span className="text-primary text-sm font-semibold uppercase tracking-wider">
                Limited bookings available this month
              </span>
            </div>

            <div className="space-y-8">
              <div>
                <h4 className="text-white font-serif text-xl mb-2">Studio</h4>
                <p className="text-white/60 font-light">12 Lavelle Road, Studio 3A<br/>Bengaluru, Karnataka 560001</p>
              </div>
              <div>
                <h4 className="text-white font-serif text-xl mb-2">Inquiries</h4>
                <a href="mailto:hello@clykurstudios.com" className="text-white/60 font-light hover:text-primary transition-colors">hello@clykurstudios.com</a>
              </div>
              <div>
                <h4 className="text-white font-serif text-xl mb-2">Direct</h4>
                <a href="tel:+919900000199" className="text-white/60 font-light hover:text-primary transition-colors">+91 99000 00199</a>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-2/3 bg-background p-8 md:p-12 border border-white/5"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs tracking-widest text-white/50 uppercase">First Name</label>
                  <input type="text" className="w-full bg-transparent border-b border-white/20 pb-2 text-white focus:outline-none focus:border-primary transition-colors" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs tracking-widest text-white/50 uppercase">Last Name</label>
                  <input type="text" className="w-full bg-transparent border-b border-white/20 pb-2 text-white focus:outline-none focus:border-primary transition-colors" />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs tracking-widest text-white/50 uppercase">Email Address</label>
                  <input type="email" className="w-full bg-transparent border-b border-white/20 pb-2 text-white focus:outline-none focus:border-primary transition-colors" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs tracking-widest text-white/50 uppercase">Event/Project Date</label>
                  <input type="text" placeholder="Optional" className="w-full bg-transparent border-b border-white/20 pb-2 text-white focus:outline-none focus:border-primary transition-colors" />
                </div>
              </div>

              <div className="space-y-2 pt-4">
                <label className="text-xs tracking-widest text-white/50 uppercase">Project Details</label>
                <textarea rows={4} className="w-full bg-transparent border-b border-white/20 pb-2 text-white focus:outline-none focus:border-primary transition-colors resize-none"></textarea>
              </div>

              <div className="pt-8 flex flex-col sm:flex-row gap-4">
                <button type="submit" className="px-8 py-4 bg-primary text-primary-foreground font-semibold tracking-widest uppercase hover:bg-primary/90 transition-colors w-full sm:w-auto">
                  Submit Inquiry
                </button>
                <button type="button" className="px-8 py-4 bg-[#25D366]/10 text-[#25D366] border border-[#25D366]/30 font-semibold tracking-widest uppercase hover:bg-[#25D366]/20 transition-colors w-full sm:w-auto flex justify-center items-center gap-2">
                  WhatsApp Us
                </button>
              </div>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
