import { motion } from "framer-motion";

const packages = [
  {
    name: "Editorial",
    price: "From ₹75,000",
    desc: "For brands and individuals seeking striking, magazine-quality visual content.",
    features: [
      "4 Hours Coverage",
      "Creative Direction",
      "Studio or Location",
      "25 Retouched Images",
      "Commercial Rights"
    ]
  },
  {
    name: "The Signature",
    price: "From ₹1,50,000",
    desc: "Our most sought-after package for comprehensive brand campaigns and events.",
    features: [
      "8 Hours Coverage",
      "Creative Direction & Styling",
      "Multi-location Setup",
      "75 Retouched Images",
      "Cinematic Short Film (1 min)",
      "Priority Delivery"
    ],
    featured: true
  },
  {
    name: "Elite Vision",
    price: "Custom",
    desc: "Bespoke, multi-day productions for luxury weddings and global brand campaigns.",
    features: [
      "Multi-day Coverage",
      "Full Production Team",
      "Unlimited Locations",
      "Complete Image Gallery",
      "Cinematic Feature Film",
      "Dedicated Content Manager"
    ]
  }
];

export function Pricing() {
  return (
    <section id="pricing" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-5 sm:px-6">
        <div className="text-center mb-10 md:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-serif text-white mb-4 md:mb-6"
          >
            Investment
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/60 text-base md:text-lg font-light max-w-2xl mx-auto"
          >
            Transparent pricing for uncompromising quality. Every project is tailored to your unique vision.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 md:gap-8 max-w-6xl mx-auto">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className={`p-6 sm:p-8 md:p-10 flex flex-col relative ${
                pkg.featured
                  ? "bg-white/5 border border-primary"
                  : "border border-white/10"
              }`}
            >
              {pkg.featured && (
                <div className="absolute -top-px left-1/2 -translate-x-1/2 -translate-y-full bg-primary px-4 py-1 text-[10px] font-bold uppercase tracking-widest text-black whitespace-nowrap">
                  Most Popular
                </div>
              )}
              <h3 className="text-xl sm:text-2xl font-serif text-white mb-2">{pkg.name}</h3>
              <div className="text-2xl sm:text-3xl font-light text-primary mb-4 md:mb-6">{pkg.price}</div>
              <p className="text-white/60 font-light text-sm mb-6 md:mb-8 pb-6 md:pb-8 border-b border-white/10">
                {pkg.desc}
              </p>

              <ul className="space-y-3 md:space-y-4 mb-8 md:mb-10 flex-grow">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="flex items-start text-sm text-white/80">
                    <span className="text-primary mr-3 text-base leading-none mt-[1px]">•</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`w-full py-3.5 md:py-4 text-center text-xs sm:text-sm font-semibold tracking-widest uppercase transition-colors ${
                  pkg.featured
                    ? "bg-primary text-black hover:bg-primary/90"
                    : "bg-white/5 text-white hover:bg-white/10"
                }`}
              >
                Inquire
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
