import { motion } from "framer-motion";

export function Footer() {
  return (
    <footer className="bg-background pt-24 pb-12 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-8">
          <div>
            <a href="#" className="text-3xl font-serif font-bold tracking-wider text-white mb-4 block">
              CLYKUR<span className="text-primary">.</span>
            </a>
            <p className="text-white/50 font-light max-w-sm">
              Clykur Studios is a premium photography agency based in New York, capturing iconic moments globally.
            </p>
          </div>
          
          <div className="flex gap-12">
            <div className="flex flex-col space-y-4">
              <a href="#portfolio" className="text-sm text-white/70 hover:text-primary transition-colors tracking-wide uppercase">Portfolio</a>
              <a href="#services" className="text-sm text-white/70 hover:text-primary transition-colors tracking-wide uppercase">Services</a>
              <a href="#pricing" className="text-sm text-white/70 hover:text-primary transition-colors tracking-wide uppercase">Pricing</a>
            </div>
            <div className="flex flex-col space-y-4">
              <a href="#" className="text-sm text-white/70 hover:text-primary transition-colors tracking-wide uppercase">Instagram</a>
              <a href="#" className="text-sm text-white/70 hover:text-primary transition-colors tracking-wide uppercase">Vimeo</a>
              <a href="#" className="text-sm text-white/70 hover:text-primary transition-colors tracking-wide uppercase">Pinterest</a>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 text-xs text-white/40 tracking-wider">
          <p>© {new Date().getFullYear()} Clykur Studios. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
