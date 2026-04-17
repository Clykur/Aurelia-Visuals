import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    quote: "Clykur Studios didn't just photograph our campaign; they elevated our entire brand identity. Their cinematic approach is unmatched in the industry.",
    author: "Elena Rostova",
    role: "Creative Director, Vogue"
  },
  {
    quote: "The way they capture light and raw emotion turned our wedding into a masterpiece. Looking at the photos feels like watching a beautiful film.",
    author: "James & Sarah Kensington",
    role: "Private Clients"
  },
  {
    quote: "Professional, visionary, and relentlessly perfectionist. Clykur is the only agency we trust with our high-stakes global product launches.",
    author: "Marcus Chen",
    role: "CMO, Aurum Luxury"
  }
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-32 bg-[#050505] relative flex items-center min-h-[70vh]">
      <div className="absolute inset-0 z-0 opacity-20">
        <img 
          src="https://images.pexels.com/photos/2749481/pexels-photo-2749481.jpeg?auto=compress&cs=tinysrgb&w=1920&q=80" 
          alt="Studio Texture" 
          className="w-full h-full object-cover object-center grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/80 to-[#050505]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <span className="text-primary text-6xl font-serif leading-none block mb-6">"</span>
            <p className="text-2xl md:text-4xl font-serif text-white leading-relaxed mb-12">
              {testimonials[currentIndex].quote}
            </p>
            <div>
              <p className="text-white font-semibold tracking-wide uppercase text-sm mb-1">
                {testimonials[currentIndex].author}
              </p>
              <p className="text-primary text-xs tracking-widest uppercase">
                {testimonials[currentIndex].role}
              </p>
            </div>
          </motion.div>

          <div className="flex justify-center items-center gap-8 mt-16">
            <button 
              onClick={prev}
              className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all"
            >
              <ChevronLeft size={20} />
            </button>
            <div className="flex gap-3">
              {testimonials.map((_, idx) => (
                <div 
                  key={idx} 
                  className={`h-[2px] transition-all duration-300 ${idx === currentIndex ? "w-8 bg-primary" : "w-4 bg-white/20"}`}
                />
              ))}
            </div>
            <button 
              onClick={next}
              className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
