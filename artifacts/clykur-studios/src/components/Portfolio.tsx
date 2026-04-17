import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "wouter";
import { projects } from "@/data/projects";

const categories = ["All", "Brand", "Wedding", "Editorial"];

export function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems = projects.filter(
    (p) => activeCategory === "All" || p.category === activeCategory
  );

  return (
    <section id="portfolio" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-5 sm:px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 md:mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl md:text-5xl font-serif text-white mb-3 md:mb-6"
            >
              Curated <span className="italic text-primary">Excellence</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-white/60 text-sm sm:text-base md:text-lg font-light"
            >
              A selection of our finest work across brand campaigns, editorial shoots, and luxury weddings.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex gap-5 sm:gap-6 overflow-x-auto pb-1 w-full md:w-auto scrollbar-none"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-xs sm:text-sm font-medium tracking-widest uppercase whitespace-nowrap transition-colors touch-manipulation py-1 ${
                  activeCategory === cat
                    ? "text-primary border-b border-primary"
                    : "text-white/40 hover:text-white/80"
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>
        </div>

        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8"
        >
          {filteredItems.map((project, i) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              key={project.id}
            >
              <Link href={`/project/${project.slug}`}>
                <div className="group relative aspect-[4/5] overflow-hidden bg-white/5 cursor-pointer">
                  <img
                    src={project.coverImg}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Hover overlay — desktop */}
                  <div className="hidden sm:flex absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex-col justify-end p-6 md:p-8">
                    <span className="text-primary text-xs font-semibold tracking-widest uppercase mb-2">
                      {project.category}
                    </span>
                    <h3 className="text-white text-lg md:text-xl font-serif mb-3">{project.title}</h3>
                    <span className="inline-flex items-center gap-2 text-white/70 text-xs tracking-widest uppercase group-hover:gap-3 transition-all">
                      View Project <span>→</span>
                    </span>
                  </div>
                  {/* Always-visible bottom bar — mobile only */}
                  <div className="sm:hidden absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/85 to-transparent p-4 flex flex-col justify-end">
                    <span className="text-primary text-[10px] font-semibold tracking-widest uppercase mb-1">
                      {project.category}
                    </span>
                    <h3 className="text-white text-sm font-serif">{project.title}</h3>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-10 md:mt-16 text-center">
          <a
            href="#contact"
            className="inline-flex items-center text-white/80 hover:text-primary transition-colors text-xs sm:text-sm tracking-widest uppercase group"
          >
            See More Work
            <span className="ml-2 group-hover:translate-x-2 transition-transform">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
