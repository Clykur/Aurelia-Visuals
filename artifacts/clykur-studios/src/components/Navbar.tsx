import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      if (window.scrollY > 50) setMobileMenuOpen(false);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Portfolio", href: "#portfolio" },
    { name: "Services", href: "#services" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Pricing", href: "#pricing" },
  ];

  const close = () => setMobileMenuOpen(false);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || mobileMenuOpen
          ? "bg-[#0f0f0f]/95 backdrop-blur-md border-b border-white/5 py-3 md:py-4"
          : "bg-transparent py-5 md:py-6"
      }`}
    >
      <div className="container mx-auto px-5 sm:px-6 flex items-center justify-between">
        <a href="#" className="flex flex-col leading-tight group">
          <span className="text-xl sm:text-2xl font-serif font-bold tracking-wider text-white group-hover:text-white/90 transition-colors">
            Aurelia Visuals
          </span>
          <span className="text-[9px] sm:text-[10px] text-white/45 tracking-[0.2em] uppercase mt-0.5">
            A Clykur product
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-10">
          <div className="flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm text-white/70 hover:text-primary transition-colors tracking-wide uppercase"
              >
                {link.name}
              </a>
            ))}
          </div>
          <a
            href="#contact"
            className="px-6 py-2.5 bg-primary text-primary-foreground text-sm font-semibold tracking-widest uppercase hover:bg-primary/90 transition-colors"
          >
            Book Now
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white p-1 touch-manipulation"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-[#0f0f0f] overflow-hidden border-b border-white/10"
          >
            <div className="flex flex-col px-6 py-6 space-y-1">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={close}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="text-base font-serif text-white/80 hover:text-primary py-3 border-b border-white/5 last:border-0 transition-colors"
                >
                  {link.name}
                </motion.a>
              ))}
              <a
                href="#contact"
                onClick={close}
                className="mt-4 block text-center px-6 py-3.5 bg-primary text-black font-semibold tracking-widest uppercase text-sm"
              >
                Book Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
