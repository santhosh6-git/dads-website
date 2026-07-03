import { motion } from "framer-motion";
import {
  Award,
  Sparkles,
  Shirt,
  HeartHandshake,
  BadgeCheck,
  Clock3,
} from "lucide-react";

const features = [
  {
    icon: Award,
    title: "Trusted Since 1975",
    description:
      "Serving our community with dedication and trusted garment care for over five decades.",
  },
  {
    icon: Shirt,
    title: "Professional Garment Care",
    description:
      "Every garment is handled with care to maintain its quality and appearance.",
  },
  {
    icon: Sparkles,
    title: "Special Care for Delicate Fabrics",
    description:
      "Extra attention for silk sarees, delicate garments and premium fabrics.",
  },
  {
    icon: HeartHandshake,
    title: "Family-Owned Business",
    description:
      "A local family business committed to honest service and long-term customer relationships.",
  },
  {
    icon: BadgeCheck,
    title: "Quality Service",
    description:
      "Our focus is delivering neat finishing, cleanliness and customer satisfaction.",
  },
  {
    icon: Clock3,
    title: "Affordable & Honest Service",
    description:
      "Fair pricing, transparent service and a commitment to quality over shortcuts.",
  },
];

const WhyChooseUs = () => {
  return (
    <section
      id="why-us"
      className="py-24 bg-gradient-to-b from-white to-blue-50"
    >
      <div className="container mx-auto px-4">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block bg-yellow-100 text-yellow-700 px-5 py-2 rounded-full font-semibold mb-5">
            WHY CHOOSE US
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-blue-900">
            Why Choose
            <br />
            Abirami Dry Cleaners?
          </h2>

          <p className="mt-6 text-gray-600 text-lg">
            For more than 50 years, we have been providing trusted garment care
            with quality workmanship, attention to detail and friendly customer
            service.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="bg-white rounded-3xl border border-blue-100 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 p-8"
              >
                <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center mb-6">
                  <Icon className="w-8 h-8 text-blue-900" />
                </div>

                <h3 className="text-2xl font-bold text-blue-900 mb-4">
                  {feature.title}
                </h3>

                <p className="text-gray-600 leading-7">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}

        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: .3 }}
          className="mt-16 text-center"
        >
          <a
            href="#contact"
            className="inline-flex items-center rounded-full bg-blue-900 px-8 py-4 text-white font-semibold hover:bg-blue-800 transition duration-300 shadow-lg"
          >
            Contact Us for Service Details
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default WhyChooseUs;