import { Phone, MapPin } from "lucide-react";

const QUICK_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Pricing", href: "#pricing" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

const PHONE_NUMBER = "9884338168";
const PHONE_HREF = "tel:+919884338168";
const ADDRESS_LINES = ["123, Main Bazaar Road,", "T. Nagar, Chennai,", "Tamil Nadu – 600017"];

const Footer = () => {
  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <footer className="relative bg-[#0B2C6B] text-white">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-2">
            <div className="flex flex-col leading-none">
              <span className="text-2xl font-extrabold tracking-[0.18em]">
                ABIRAMI
              </span>
              <span className="mt-1 text-xs font-medium italic tracking-[0.35em] text-blue-300">
                Dry&nbsp;Cleaners
              </span>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-blue-100/80">
              Trusted dry cleaning, ironing, saree rolling and garment care —
              serving customers with quality and care since 1975.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
              Quick Links
            </h3>
            <ul className="mt-5 space-y-3">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="text-sm font-medium text-blue-100/80 transition-colors duration-200 hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
              Get in Touch
            </h3>
            <div className="mt-5 space-y-4">
              <a
                href={PHONE_HREF}
                className="flex items-start gap-3 text-sm text-blue-100/80 transition-colors duration-200 hover:text-white"
              >
                <Phone className="mt-0.5 h-4 w-4 shrink-0" />
                <span>+91 {PHONE_NUMBER}</span>
              </a>
              <div className="flex items-start gap-3 text-sm text-blue-100/80">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                <span>
                  {ADDRESS_LINES.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-5 py-6 sm:px-8 lg:px-10">
          <p className="text-center text-xs text-blue-200/70 sm:text-sm">
            © {new Date().getFullYear()} Abirami Dry Cleaners. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;