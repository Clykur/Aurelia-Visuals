import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function FloatingButton() {
  const [pastHero, setPastHero] = useState(false);
  const [nearFooter, setNearFooter] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setPastHero(window.scrollY > window.innerHeight * 0.8);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const footer = document.querySelector("footer");
    if (!footer) return;

    const observer = new IntersectionObserver(
      ([entry]) => setNearFooter(entry.isIntersecting),
      { threshold: 0.05 }
    );
    observer.observe(footer);
    return () => observer.disconnect();
  }, []);

  const isVisible = pastHero && !nearFooter;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 16 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed bottom-5 right-4 sm:bottom-8 sm:right-8 z-50 flex flex-col items-end gap-1.5 sm:gap-2"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.15 }}
            className="hidden sm:block text-[10px] tracking-[0.18em] uppercase text-white/40 mr-1"
          >
            Limited slots this month
          </motion.p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center gap-2 sm:gap-3 bg-primary text-black text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase px-4 sm:px-6 py-3 sm:py-4 shadow-xl shadow-primary/20 touch-manipulation"
          >
            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-black/30 animate-pulse" />
            Book Now
          </motion.a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
