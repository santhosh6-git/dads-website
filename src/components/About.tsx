import { motion } from "framer-motion";
import { Clock, Award, Tag, Users, ImageIcon } from "lucide-react";

const FEATURES = [
  { icon: Clock, label: "50+ Years" },
  { icon: Award, label: "Quality Service" },
  { icon: Tag, label: "Affordable Pricing" },
  { icon: Users, label: "Trusted Customers" },
];

const About = () => {
  return (
    <section id="about" className="relative bg-white py-24 sm:py-28">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20 lg:px-10">
        {/* Left: Image placeholder */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative"
        >
          <div className="relative flex aspect-[4/5] w-full items-center justify-center overflow-hidden rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 to-white shadow-xl shadow-blue-900/5">
            <div className="flex flex-col items-center gap-3 text-blue-300">
              <ImageIcon className="h-14 w-14" strokeWidth={1.5} />
              <span className="text-sm font-medium uppercase tracking-widest">
                Image Placeholder
              </span>
            </div>
          </div>

          {/* Floating established badge */}
          <div className="absolute -bottom-6 -right-4 flex flex-col items-center rounded-2xl bg-[#0B2C6B] px-6 py-4 text-center text-white shadow-lg shadow-blue-900/30 sm:-right-8">
            <span className="text-2xl font-extrabold leading-none sm:text-3xl">
              1975
            </span>
            <span className="mt-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-blue-200">
              Established
            </span>
          </div>
        </motion.div>

        {/* Right: Content */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-[#0B2C6B]">
            About Us
          </span>

          <h2 className="mt-5 text-3xl font-extrabold leading-tight text-[#0B2C6B] sm:text-4xl md:text-5xl">
            Trusted by Families for Generations
          </h2>

          <p className="mt-6 text-base leading-relaxed text-slate-600 sm:text-lg">
            For over five decades, Abirami Dry Cleaners has been serving
            customers with trusted dry cleaning, ironing, saree rolling and
            garment care.
          </p>
          <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
            Our focus is qualityand customer satisfaction.
          </p>

          {/* Feature cards */}
          <div className="mt-10 grid grid-cols-2 gap-4">
            {FEATURES.map((feature, idx) => (
              <motion.div
                key={feature.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, delay: 0.2 + idx * 0.1, ease: "easeOut" }}
                className="group flex flex-col items-start gap-3 rounded-2xl border border-blue-100 bg-blue-50/50 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:bg-blue-50 hover:shadow-lg hover:shadow-blue-900/5"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#0B2C6B] text-white transition-transform duration-300 group-hover:scale-110">
                  <feature.icon className="h-5 w-5" />
                </div>
                <span className="text-sm font-semibold text-[#0B2C6B] sm:text-base">
                  {feature.label}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;