import { motion } from "framer-motion";

import shop1 from "@/assets/gallery/shop1.jpg";
import shop2 from "@/assets/gallery/shop2.jpg";
import shop3 from "@/assets/gallery/shop3.jpg";
import shop4 from "@/assets/gallery/shop4.jpg";
import shop5 from "@/assets/gallery/shop5.jpg";

const GALLERY_ITEMS = [
  { id: 1, label: "Ironing", image: shop1 },
  { id: 2, label: "Dry Cleaning", image: shop2 },
  { id: 3, label: "Saree Rolling", image: shop3 },
  { id: 4, label: "Garment Care", image: shop4 },
  { id: 5, label: "Our Store", image: shop5 },
];

const Gallery = () => {
  return (
    <section id="gallery" className="relative bg-white py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#0B2C6B]">
            Gallery
          </span>

          <h2 className="mt-5 text-4xl font-extrabold text-[#0B2C6B] md:text-5xl">
            Our Work
          </h2>

          <p className="mt-4 text-lg text-slate-600">
            Quality you can see.
          </p>
        </motion.div>

        {/* Gallery */}

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

          {GALLERY_ITEMS.map((item, index) => (

            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-3xl shadow-xl cursor-pointer"
            >

              <img
                src={item.image}
                alt={item.label}
                className="h-72 w-full object-cover transition duration-500 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#0B2C6B]/80 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

              <div className="absolute bottom-5 left-5 opacity-0 transition duration-500 group-hover:opacity-100">
                <h3 className="text-lg font-bold text-white">
                  {item.label}
                </h3>
              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
};

export default Gallery;