import { motion } from "framer-motion";
import { Shirt, Sparkles, Scroll, ShieldCheck, ArrowRight } from "lucide-react";

const SERVICES = [
  {
    icon: Shirt,
    title: "Ironing",
    description:
      "Crisp, wrinkle-free finishing for everyday wear and formal outfits alike.",
  },
  {
    icon: Sparkles,
    title: "Dry Cleaning",
    description:
      "Gentle, professional-grade cleaning that protects delicate fabrics and colors.",
  },
  {
    icon: Scroll,
    title: "Saree Rolling",
    description:
      "Careful folding and rolling to keep sarees crease-free and ready to wear.",
  },
  {
    icon: ShieldCheck,
    title: "Garment Care",
    description:
      "Stain treatment and fabric-safe handling that extends the life of your clothes.",
  },
];

const Services = () => {
  return (
    <section id="services" className="relative bg-blue-50/40 py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-[#0B2C6B]">
            Our Services
          </span>
          <h2 className="mt-5 text-3xl font-extrabold leading-tight text-[#0B2C6B] sm:text-4xl md:text-5xl">
            Care Crafted for Every Garment
          </h2>
          <p className="mt-4 text-base text-slate-600 sm:text-lg">
            From daily wear to your finest sarees, every service is handled
            with the same precision we&apos;ve trusted since 1975.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service, idx) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: idx * 0.12, ease: "easeOut" }}
              className="group relative overflow-hidden rounded-3xl border border-blue-100 bg-white p-7 shadow-sm shadow-blue-900/5 transition-all duration-300 hover:-translate-y-2 hover:border-transparent hover:shadow-2xl hover:shadow-blue-900/15"
            >
              {/* Gradient wash on hover */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#0B2C6B] to-[#164a9e] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="relative z-10">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-[#0B2C6B] transition-all duration-300 group-hover:scale-110 group-hover:bg-white/15 group-hover:text-white">
                  <service.icon className="h-7 w-7" strokeWidth={1.75} />
                </div>

                <h3 className="mt-6 text-xl font-bold text-[#0B2C6B] transition-colors duration-300 group-hover:text-white">
                  {service.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-slate-600 transition-colors duration-300 group-hover:text-blue-100">
                  {service.description}
                </p>

                <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-[#0B2C6B] opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100 group-hover:text-white">
                  Learn more
                  <ArrowRight className="h-4 w-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;