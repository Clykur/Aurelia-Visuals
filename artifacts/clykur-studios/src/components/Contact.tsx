import { motion } from "framer-motion";
import { useState } from "react";

const WHATSAPP_NUMBER = "918179299096";

function buildWhatsAppUrl(fields: {
  firstName: string;
  lastName: string;
  email: string;
  date: string;
  projectType: string;
  message: string;
}) {
  const text = [
    `*New Inquiry — Aurelia Visuals (A Clykur product)*`,
    ``,
    `*Name:* ${fields.firstName} ${fields.lastName}`.trim(),
    `*Email:* ${fields.email || "—"}`,
    `*Event / Project Date:* ${fields.date || "—"}`,
    `*Project Type:* ${fields.projectType || "—"}`,
    `*Details:* ${fields.message || "—"}`,
  ].join("\n");

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

export function Contact() {
  const [fields, setFields] = useState({
    firstName: "",
    lastName: "",
    email: "",
    date: "",
    projectType: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const set = (key: keyof typeof fields) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setFields((prev) => ({ ...prev, [key]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.open(buildWhatsAppUrl(fields), "_blank");
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  const handleWhatsApp = () => {
    window.open(buildWhatsAppUrl(fields), "_blank");
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-[#0a0a0a]">
      <div className="container mx-auto px-5 sm:px-6 max-w-6xl">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-24">

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/3 flex flex-col justify-center"
          >
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">
              Let's create <br /><span className="italic text-primary">something iconic.</span>
            </h2>

            <div className="inline-block mb-10 px-4 py-2 bg-primary/10 border border-primary/20 rounded-sm">
              <span className="text-primary text-sm font-semibold uppercase tracking-wider">
                Limited bookings available this month
              </span>
            </div>

            <div className="space-y-8">
              <div>
                <h4 className="text-white font-serif text-xl mb-2">Studio</h4>
                <p className="text-white/60 font-light">Bengaluru, Karnataka</p>
              </div>
              <div>
                <h4 className="text-white font-serif text-xl mb-2">Inquiries</h4>
                <a href="mailto:info@clykur.com" className="text-white/60 font-light hover:text-primary transition-colors">info@clykur.com</a>
              </div>
              <div>
                <h4 className="text-white font-serif text-xl mb-2">WhatsApp</h4>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 font-light hover:text-primary transition-colors"
                >
                  +91 81792 99096
                </a>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-2/3 bg-background p-8 md:p-12 border border-white/5"
          >
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs tracking-widest text-white/50 uppercase">First Name</label>
                  <input
                    type="text"
                    value={fields.firstName}
                    onChange={set("firstName")}
                    className="w-full bg-transparent border-b border-white/20 pb-2 text-white focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs tracking-widest text-white/50 uppercase">Last Name</label>
                  <input
                    type="text"
                    value={fields.lastName}
                    onChange={set("lastName")}
                    className="w-full bg-transparent border-b border-white/20 pb-2 text-white focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs tracking-widest text-white/50 uppercase">Email Address</label>
                  <input
                    type="email"
                    value={fields.email}
                    onChange={set("email")}
                    className="w-full bg-transparent border-b border-white/20 pb-2 text-white focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs tracking-widest text-white/50 uppercase">Event / Project Date</label>
                  <input
                    type="text"
                    placeholder="Optional"
                    value={fields.date}
                    onChange={set("date")}
                    className="w-full bg-transparent border-b border-white/20 pb-2 text-white placeholder-white/20 focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs tracking-widest text-white/50 uppercase">Project Type</label>
                <select
                  value={fields.projectType}
                  onChange={set("projectType")}
                  className="w-full bg-transparent border-b border-white/20 pb-2 text-white/80 focus:outline-none focus:border-primary transition-colors appearance-none cursor-pointer"
                >
                  <option value="" className="bg-[#0a0a0a]">Select a type…</option>
                  <option value="Wedding" className="bg-[#0a0a0a]">Wedding</option>
                  <option value="Brand Campaign" className="bg-[#0a0a0a]">Brand Campaign</option>
                  <option value="Editorial" className="bg-[#0a0a0a]">Editorial</option>
                  <option value="Product Photography" className="bg-[#0a0a0a]">Product Photography</option>
                  <option value="Cinematic Videography" className="bg-[#0a0a0a]">Cinematic Videography</option>
                  <option value="Other" className="bg-[#0a0a0a]">Other</option>
                </select>
              </div>

              <div className="space-y-2 pt-2">
                <label className="text-xs tracking-widest text-white/50 uppercase">Project Details</label>
                <textarea
                  rows={4}
                  value={fields.message}
                  onChange={set("message")}
                  className="w-full bg-transparent border-b border-white/20 pb-2 text-white focus:outline-none focus:border-primary transition-colors resize-none"
                />
              </div>

              <div className="pt-6 flex flex-col sm:flex-row flex-wrap gap-4 items-center justify-center">
                <button
                  type="submit"
                  className="px-8 py-4 bg-primary text-black font-semibold tracking-widest uppercase hover:bg-primary/90 transition-colors w-full sm:w-auto"
                >
                  {submitted ? "Sent to WhatsApp ✓" : "Submit Inquiry"}
                </button>
                <button
                  type="button"
                  onClick={handleWhatsApp}
                  className="px-8 py-4 bg-[#25D366]/10 text-[#25D366] border border-[#25D366]/30 font-semibold tracking-widest uppercase hover:bg-[#25D366]/20 transition-colors w-full sm:w-auto flex justify-center items-center gap-2"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  WhatsApp Us
                </button>
              </div>

              <p className="text-white/20 text-xs tracking-wide pt-2 text-center max-w-lg mx-auto">
                Submitting opens WhatsApp with your inquiry pre-filled to +91 81792 99096.
              </p>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
