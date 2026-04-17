import { motion } from "framer-motion";

const brands = [
  "Velour",
  "Aéline",
  "Maison Orev",
  "Solène Co.",
  "Kretz & Co",
  "Éclat",
];

export function Brands() {
  return (
    <section className="py-10 md:py-12 border-y border-white/5 bg-background overflow-hidden">
      <div className="container mx-auto px-5 sm:px-6">
        <p className="text-center text-[10px] sm:text-xs tracking-[0.2em] text-white/40 uppercase mb-6 md:mb-8">
          Trusted by 100+ brands worldwide
        </p>
        <motion.div
          className="flex flex-wrap justify-center items-center gap-6 sm:gap-10 md:gap-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {brands.map((brand, i) => (
            <motion.span
              key={brand}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 0.45, y: 0 }}
              whileHover={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.5 }}
              className="text-white font-serif text-lg sm:text-xl md:text-2xl tracking-widest uppercase cursor-default transition-opacity duration-300"
            >
              {brand}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
