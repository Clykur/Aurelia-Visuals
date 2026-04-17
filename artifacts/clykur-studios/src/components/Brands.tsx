import { motion } from "framer-motion";

const brands = [
  "Vogue",
  "Harper's Bazaar",
  "Chanel",
  "Gucci",
  "LVMH",
  "Elle",
];

export function Brands() {
  return (
    <section className="py-12 border-y border-white/5 bg-background overflow-hidden">
      <div className="container mx-auto px-6">
        <p className="text-center text-xs tracking-[0.2em] text-white/40 uppercase mb-8">
          Trusted by iconic brands worldwide
        </p>
        <motion.div
          className="flex flex-wrap justify-center items-center gap-10 md:gap-20 opacity-50 hover:opacity-80 transition-all duration-700"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.5 }}
          viewport={{ once: true }}
        >
          {brands.map((brand) => (
            <span
              key={brand}
              className="text-white font-serif text-xl md:text-2xl tracking-widest uppercase hover:text-primary transition-colors cursor-default"
            >
              {brand}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
