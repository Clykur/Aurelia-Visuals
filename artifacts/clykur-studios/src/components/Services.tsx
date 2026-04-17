import { motion } from "framer-motion";
import { Camera, Film, Image as ImageIcon } from "lucide-react";

const services = [
  {
    icon: <Camera className="w-8 h-8" />,
    title: "Brand Campaigns",
    desc: "High-impact visual narratives designed to elevate your brand's market positioning and resonate with your audience.",
  },
  {
    icon: <ImageIcon className="w-8 h-8" />,
    title: "Editorial & Fashion",
    desc: "Striking editorial photography that captures the essence of style, tailored for magazines and luxury labels.",
  },
  {
    icon: <Film className="w-8 h-8" />,
    title: "Luxury Weddings",
    desc: "Cinematic, documentary-style wedding coverage capturing authentic emotion and timeless elegance.",
  }
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-[#0a0a0a] relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 blur-[150px] pointer-events-none rounded-full" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary text-sm font-semibold tracking-[0.2em] uppercase block mb-4"
          >
            Our Expertise
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif text-white max-w-3xl mx-auto"
          >
            Crafting visual legacies with <span className="italic text-primary">uncompromising precision.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="p-8 md:p-10 border border-white/5 bg-background/50 backdrop-blur-sm hover:border-primary/30 transition-colors group"
            >
              <div className="text-primary mb-8 group-hover:scale-110 transition-transform duration-500 origin-left">
                {service.icon}
              </div>
              <h3 className="text-2xl font-serif text-white mb-4">{service.title}</h3>
              <p className="text-white/60 font-light leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
