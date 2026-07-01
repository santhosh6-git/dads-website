import { motion } from "framer-motion";
import { ImageIcon } from "lucide-react";

const GALLERY_ITEMS = [
  { id: 1, label: "Ironing" },
  { id: 2, label: "Dry Cleaning" },
  { id: 3, label: "Saree Rolling" },
  { id: 4, label: "Garment Care" },
  { id: 5, label: "Delivery" },
  { id: 6, label: "Our Store" },
];

const Gallery = () => {
  return (
    <section id="gallery" className="relative bg-white py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-[#0B2C6B]">
            Gallery
          </span>
          <h2 className="mt-5 text-3xl font-extrabold leading-tight text-[#0B2C6B] sm:text-4xl md:text-5xl">
            Our Work
          </h2>
          <p className="mt-4 text-base text-slate-600 sm:text-lg">
            Quality you can see.
          </p>
        </motion.div>

        {/* Image grid */}
        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {GALLERY_ITEMS.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: "easeOut" }}
              className="group relative aspect-[4/3] overflow-hidden rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 to-white shadow-md shadow-blue-900/5 transition-shadow duration-300 hover:shadow-2xl hover:shadow-blue-900/20"
            >
              {/* Placeholder content — swap this div for an <img> */}
              <div className="flex h-full w-full items-center justify-center transition-transform duration-500 ease-out group-hover:scale-110">
                <div className="flex flex-col items-center gap-3 text-blue-300">
                  <ImageIcon className="h-12 w-12" strokeWidth={1.5} />
                  <span className="text-xs font-medium uppercase tracking-widest">
                    Image Placeholder
                  </span>
                </div>
              </div>

              {/* Overlay label */}
              <div className="pointer-events-none absolute inset-0 flex items-end bg-gradient-to-t from-[#0B2C6B]/80 via-[#0B2C6B]/0 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span className="p-5 text-sm font-semibold uppercase tracking-wide text-white">
                  {item.label}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;