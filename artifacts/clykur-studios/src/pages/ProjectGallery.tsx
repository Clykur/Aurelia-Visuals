import { useParams, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { projects } from "@/data/projects";

export default function ProjectGallery() {
  const { slug } = useParams<{ slug: string }>();
  const [, navigate] = useLocation();
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen bg-[#0f0f0f] flex items-center justify-center">
        <div className="text-center">
          <p className="text-white/40 text-sm tracking-widest uppercase mb-4">Project not found</p>
          <button
            onClick={() => navigate("/")}
            className="text-primary text-sm tracking-widest uppercase hover:opacity-70 transition-opacity"
          >
            ← Back to Home
          </button>
        </div>
      </div>
    );
  }

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  const goPrev = () => setLightboxIndex((i) => (i !== null ? (i - 1 + project.images.length) % project.images.length : null));
  const goNext = () => setLightboxIndex((i) => (i !== null ? (i + 1) % project.images.length : null));

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white">

      {/* Header / Nav */}
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-5 bg-[#0f0f0f]/90 backdrop-blur-md border-b border-white/5">
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 text-white/50 hover:text-white transition-colors text-sm tracking-widest uppercase group"
        >
          <span className="group-hover:-translate-x-1 transition-transform inline-block">←</span>
          <span>Back</span>
        </button>
        <span
          className="font-serif text-lg text-white cursor-pointer"
          onClick={() => navigate("/")}
        >
          Clykur<span className="text-primary">.</span>
        </span>
        <a
          href="/#contact"
          className="text-sm tracking-widest uppercase text-primary border border-primary/40 px-4 py-1.5 hover:bg-primary hover:text-black transition-all"
        >
          Book Now
        </a>
      </header>

      {/* Hero */}
      <section className="pt-32 pb-16 px-6 md:px-16 max-w-6xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-primary text-xs tracking-[0.25em] uppercase mb-4"
        >
          {project.category}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-6xl font-serif text-white mb-6 leading-tight"
        >
          {project.title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-white/50 text-lg font-light leading-relaxed max-w-2xl"
        >
          {project.description}
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-6 text-white/25 text-xs tracking-widest uppercase"
        >
          {project.images.length} photographs
        </motion.div>
      </section>

      {/* Cover Image */}
      <motion.section
        initial={{ opacity: 0, scale: 1.02 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="px-6 md:px-16 max-w-6xl mx-auto mb-4"
      >
        <div
          className="w-full aspect-[16/7] overflow-hidden cursor-zoom-in"
          onClick={() => openLightbox(0)}
        >
          <img
            src={project.images[0]}
            alt={project.title}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
          />
        </div>
      </motion.section>

      {/* Gallery Grid */}
      <section className="px-6 md:px-16 max-w-6xl mx-auto pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {project.images.slice(1).map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.07 }}
              className="group relative aspect-[4/5] overflow-hidden cursor-zoom-in"
              onClick={() => openLightbox(index + 1)}
            >
              <img
                src={img}
                alt={`${project.title} — ${index + 2}`}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500 flex items-center justify-center">
                <span className="text-white text-xs tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  View
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="border-t border-white/5 py-20 px-6 text-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-white/40 text-xs tracking-[0.25em] uppercase mb-4"
        >
          Ready to create your story?
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-5xl font-serif text-white mb-8"
        >
          Let's work together.
        </motion.h2>
        <a
          href="/#contact"
          className="inline-block bg-primary text-black text-sm font-semibold tracking-widest uppercase px-10 py-4 hover:bg-primary/80 transition-colors"
        >
          Get a Quote
        </a>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center"
            onClick={closeLightbox}
          >
            {/* Close */}
            <button
              className="absolute top-6 right-8 text-white/50 hover:text-white text-3xl font-light transition-colors z-10"
              onClick={closeLightbox}
            >
              ×
            </button>

            {/* Prev */}
            <button
              className="absolute left-4 md:left-10 text-white/40 hover:text-white text-4xl transition-colors z-10 p-4"
              onClick={(e) => { e.stopPropagation(); goPrev(); }}
            >
              ‹
            </button>

            {/* Image */}
            <motion.img
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.3 }}
              src={project.images[lightboxIndex]}
              alt={`${project.title} — ${lightboxIndex + 1}`}
              className="max-h-[85vh] max-w-[90vw] object-contain"
              onClick={(e) => e.stopPropagation()}
            />

            {/* Next */}
            <button
              className="absolute right-4 md:right-10 text-white/40 hover:text-white text-4xl transition-colors z-10 p-4"
              onClick={(e) => { e.stopPropagation(); goNext(); }}
            >
              ›
            </button>

            {/* Counter */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/30 text-xs tracking-widest">
              {lightboxIndex + 1} / {project.images.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
