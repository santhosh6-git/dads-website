import { motion } from "framer-motion";
import {
  Phone,
  MapPin,
  MessageCircle,
  Clock,
  Navigation,
} from "lucide-react";

const PHONE_NUMBER = "9884338168";
const PHONE_HREF = "tel:+919884338168";
const WHATSAPP_HREF = "https://wa.me/919884338168";

const MAPS_HREF =
  "https://maps.app.goo.gl/bPtNCuiRSRgmxgeK8";

const ADDRESS_LINES = [
  "41/20, Asiriyar St,",
  "MPM Street, Kakanji Colony,",
  "Vyasarpadi, Chennai,",
  "Tamil Nadu 600039",
];

const HOURS = [
  { day: "Monday", time: "10:00 AM – 10:00 PM" },
  { day: "Tuesday", time: "Closed" },
  { day: "Wednesday", time: "10:00 AM – 10:00 PM" },
  { day: "Thursday", time: "10:00 AM – 10:00 PM" },
  { day: "Friday", time: "10:00 AM – 10:00 PM" },
  { day: "Saturday", time: "10:00 AM – 10:00 PM" },
  { day: "Sunday", time: "10:00 AM – 10:00 PM" },
];

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative bg-blue-50/40 py-24 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="inline-flex items-center rounded-full border border-blue-200 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#0B2C6B]">
            Contact Us
          </span>

          <h2 className="mt-5 text-4xl font-extrabold text-[#0B2C6B] md:text-5xl">
            Visit Our Shop
          </h2>

          <p className="mt-4 text-lg text-slate-600">
            We'd love to take care of your garments. Visit our shop or contact us directly.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-10 lg:grid-cols-5">

          {/* LEFT CARD */}

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl border border-blue-100 bg-white p-8 shadow-xl lg:col-span-2"
          >

            <div className="space-y-8">

              {/* Phone */}

              <div className="flex gap-4">

                <div className="rounded-2xl bg-blue-50 p-3">
                  <Phone className="text-[#0B2C6B]" />
                </div>

                <div>

                  <p className="text-xs uppercase tracking-widest text-slate-400">
                    Phone
                  </p>

                  <a
                    href={PHONE_HREF}
                    className="text-xl font-bold text-[#0B2C6B] hover:text-blue-600"
                  >
                    +91 {PHONE_NUMBER}
                  </a>

                </div>

              </div>

              {/* Address */}

              <div className="flex gap-4">

                <div className="rounded-2xl bg-blue-50 p-3">
                  <MapPin className="text-[#0B2C6B]" />
                </div>

                <div>

                  <p className="text-xs uppercase tracking-widest text-slate-400">
                    Address
                  </p>

                  <div className="mt-2 space-y-1">

                    {ADDRESS_LINES.map((line) => (
                      <p
                        key={line}
                        className="font-medium text-slate-700"
                      >
                        {line}
                      </p>
                    ))}

                  </div>

                </div>

              </div>

              {/* Opening Hours */}

              <div className="flex gap-4">

                <div className="rounded-2xl bg-blue-50 p-3">
                  <Clock className="text-[#0B2C6B]" />
                </div>

                <div className="w-full">

                  <p className="text-xs uppercase tracking-widest text-slate-400">
                    Opening Hours
                  </p>

                  <div className="mt-3 space-y-2">

                    {HOURS.map((item) => (

                      <div
                        key={item.day}
                        className="flex items-center justify-between rounded-xl px-3 py-2 transition-all duration-300 hover:bg-blue-50"
                      >

                        <span className="font-medium text-slate-700">
                          {item.day}
                        </span>

                        <span
                          className={`font-semibold ${
                            item.time === "Closed"
                              ? "rounded-full bg-red-100 px-3 py-1 text-red-600"
                              : "text-[#0B2C6B]"
                          }`}
                        >
                          {item.time}
                        </span>

                      </div>

                    ))}

                  </div>

                </div>

              </div>

            </div>

            {/* Buttons */}

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">

              <a
                href={WHATSAPP_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 rounded-full bg-[#25D366] py-4 text-center font-semibold text-white transition-all duration-300 hover:scale-105"
              >
                <MessageCircle className="mr-2 inline h-5 w-5" />
                WhatsApp
              </a>

              <a
                href={MAPS_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 rounded-full bg-[#0B2C6B] py-4 text-center font-semibold text-white transition-all duration-300 hover:scale-105"
              >
                <Navigation className="mr-2 inline h-5 w-5" />
                Google Maps
              </a>

            </div>

          </motion.div>

          {/* RIGHT MAP */}

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="overflow-hidden rounded-3xl border border-blue-100 shadow-xl lg:col-span-3"
          >

            <iframe
              title="Abirami Dry Cleaners"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3885.719333906236!2d80.24761927507893!3d13.116958387211955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265bc9047eaa3%3A0x7ff43ab2ddb7b00f!2sAbirami%20Dry%20Cleaners!5e0!3m2!1sen!2sin!4v1782889249292!5m2!1sen!2sin"
              width="100%"
              height="100%"
              className="min-h-[520px] w-full border-0"
              loading="lazy"
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
            />

          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default Contact;