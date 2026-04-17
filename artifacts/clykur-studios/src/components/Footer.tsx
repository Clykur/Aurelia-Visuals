import { motion } from "framer-motion";

export function Footer() {
  return (
    <footer className="bg-background pt-16 md:pt-24 pb-8 md:pb-12 border-t border-white/10">
      <div className="container mx-auto px-5 sm:px-6">
        <div className="flex flex-col md:flex-row justify-between items-start gap-10 md:gap-8 mb-12 md:mb-16">

          {/* Brand */}
          <div className="max-w-xs">
            <a href="#" className="mb-3 block">
              <span className="text-2xl sm:text-3xl font-serif font-bold tracking-wider text-white block">
                Aurelia Visuals
              </span>
              <span className="text-[10px] sm:text-xs text-white/40 tracking-[0.2em] uppercase mt-1 block">
                A Clykur product
              </span>
            </a>
            <p className="text-white/50 font-light text-sm sm:text-base leading-relaxed">
              Premium photography for brands, weddings, and campaigns. Crafting visual legacies through a cinematic lens.
            </p>
            <p className="text-white/25 text-xs tracking-widest uppercase mt-3">
              Estd. 2025 — Bengaluru, India
            </p>
          </div>

          {/* Links */}
          <div className="flex gap-10 sm:gap-16">
            <div className="flex flex-col space-y-3 sm:space-y-4">
              <p className="text-white/30 text-xs tracking-widest uppercase mb-1">Navigate</p>
              <a href="#portfolio" className="text-sm text-white/70 hover:text-primary transition-colors tracking-wide uppercase">Portfolio</a>
              <a href="#services" className="text-sm text-white/70 hover:text-primary transition-colors tracking-wide uppercase">Services</a>
              <a href="#pricing" className="text-sm text-white/70 hover:text-primary transition-colors tracking-wide uppercase">Pricing</a>
              <a href="#contact" className="text-sm text-white/70 hover:text-primary transition-colors tracking-wide uppercase">Contact</a>
            </div>
            <div className="flex flex-col space-y-3 sm:space-y-4">
              <p className="text-white/30 text-xs tracking-widest uppercase mb-1">Social</p>
              <a href="#" className="text-sm text-white/70 hover:text-primary transition-colors tracking-wide uppercase">Instagram</a>
              <a href="#" className="text-sm text-white/70 hover:text-primary transition-colors tracking-wide uppercase">Vimeo</a>
              <a href="#" className="text-sm text-white/70 hover:text-primary transition-colors tracking-wide uppercase">Pinterest</a>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center pt-6 md:pt-8 border-t border-white/10 text-xs text-white/30 tracking-wider gap-3">
          <p>© {new Date().getFullYear()} Aurelia Visuals · A Clykur product. All rights reserved.</p>
          <div className="flex space-x-4 sm:space-x-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
