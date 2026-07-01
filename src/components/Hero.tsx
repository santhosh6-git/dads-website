import { motion } from "framer-motion";
import { Phone, Tag, Sparkles } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const STATS = [
  { value: "50+", label: "Years of Trust" },
  { value: "Quality", label: "Cleaning" },
  { value: "Affordable", label: "Pricing" },
];

const PHONE_HREF = "tel:+919884338168";

const Hero = () => {
  const scrollToPricing = () => {
    document
      .querySelector("#pricing")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-[#0B2C6B]">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B2C6B]/95 via-[#0B2C6B]/90 to-[#0B2C6B]" />
      </div>

      {/* Soft decorative glows */}
      <div className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full bg-blue-400/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-white/10 blur-3xl" />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-6xl px-5 py-28 sm:px-8 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex flex-col items-center text-center"
        >
          <h1 className="max-w-4xl leading-[1.05] text-white">
            <span className="block text-5xl font-extrabold tracking-[0.06em] sm:text-6xl md:text-7xl lg:text-8xl">
              ABIRAMI
            </span>
            <span className="mt-2 block text-2xl font-bold uppercase tracking-[0.3em] text-blue-200 sm:text-3xl md:text-4xl">
              Dry Cleaners
            </span>
          </h1>

          <span className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-amber-300 to-yellow-500 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.25em] text-[#0B2C6B] shadow-md shadow-amber-500/20">
            <Sparkles className="h-3.5 w-3.5" />
            Trusted Since 1975
          </span>

          <p className="mt-6 max-w-2xl text-lg font-medium text-blue-100 sm:text-xl md:text-2xl">
            Professional Dry Cleaning, Ironing &amp; Saree Care
          </p>

          <p className="mt-4 max-w-xl text-sm italic text-blue-200/80 sm:text-base">
            We Care For Your Clothes.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href={PHONE_HREF}
              className="flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-base font-semibold text-[#0B2C6B] shadow-lg shadow-black/20 transition-all duration-300 hover:scale-105 hover:shadow-xl active:scale-95"
            >
              <Phone className="h-5 w-5" />
              Call Now
            </a>
            <button
              type="button"
              onClick={scrollToPricing}
              className="flex items-center justify-center gap-2 rounded-full border-2 border-white/40 bg-transparent px-8 py-4 text-base font-semibold text-white transition-all duration-300 hover:scale-105 hover:border-white hover:bg-white/10 active:scale-95"
            >
              <Tag className="h-5 w-5" />
              View Pricing
            </button>
          </div>

          {/* Stat cards */}
          <div className="mt-16 grid w-full max-w-3xl grid-cols-1 gap-4 sm:grid-cols-3">
            {STATS.map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + idx * 0.15, ease: "easeOut" }}
                className="rounded-2xl border border-white/15 bg-white/10 px-6 py-6 text-center backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white/15"
              >
                <div className="text-3xl font-extrabold text-white sm:text-4xl">
                  {stat.value}
                </div>
                <div className="mt-1 text-sm font-medium uppercase tracking-wide text-blue-200">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Bottom fade into next section */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
};

export default Hero;