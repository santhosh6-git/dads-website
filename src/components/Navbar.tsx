import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Pricing", href: "#pricing" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

const PHONE_NUMBER = "+91 98843 38168";
const PHONE_HREF = "tel:+919884338168";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    setIsMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header
      className={[
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out",
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-[0_8px_30px_-12px_rgba(15,27,45,0.25)] border-b border-slate-100"
          : "bg-transparent border-b border-transparent",
      ].join(" ")}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-10">
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, "#home")}
          className="group flex flex-col leading-none"
        >
          <span
            className={[
              "text-2xl sm:text-3xl font-extrabold tracking-[0.18em] transition-colors duration-500",
              isScrolled ? "text-[#0F1B2D]" : "text-white",
            ].join(" ")}
          >
            ABIRAMI
          </span>
          <span
            className={[
              "mt-0.5 text-[11px] sm:text-xs font-medium italic tracking-[0.35em] transition-colors duration-500",
              isScrolled ? "text-[#1FA88A]" : "text-[#5FE3C4]",
            ].join(" ")}
          >
            Dry&nbsp;Cleaners
          </span>
        </a>

        {/* Desktop Links */}
        <ul className="hidden items-center gap-9 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={[
                  "relative text-sm font-semibold uppercase tracking-wide transition-colors duration-300 after:absolute after:-bottom-1.5 after:left-0 after:h-[2px] after:w-0 after:bg-[#1FA88A] after:transition-all after:duration-300 hover:after:w-full",
                  isScrolled
                    ? "text-[#0F1B2D]/80 hover:text-[#0F1B2D]"
                    : "text-white/90 hover:text-white",
                ].join(" ")}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden items-center gap-4 lg:flex">
          <a
            href={PHONE_HREF}
            className={[
              "text-sm font-semibold transition-colors duration-300",
              isScrolled ? "text-[#0F1B2D]/70" : "text-white/80",
            ].join(" ")}
          >
            {PHONE_NUMBER}
          </a>
          <a
            href={PHONE_HREF}
            className="flex items-center gap-2 rounded-full bg-[#1FA88A] px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-[#1FA88A]/30 transition-all duration-300 hover:bg-[#188872] hover:shadow-lg hover:shadow-[#1FA88A]/40 active:scale-95"
          >
            <Phone className="h-4 w-4" />
            Call Now
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          type="button"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className={[
            "relative z-50 flex h-10 w-10 items-center justify-center rounded-full transition-colors duration-300 lg:hidden",
            isScrolled
              ? "text-[#0F1B2D]"
              : isMenuOpen
              ? "text-[#0F1B2D]"
              : "text-white",
          ].join(" ")}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={[
          "fixed inset-0 z-40 flex flex-col bg-white transition-all duration-500 ease-out lg:hidden",
          isMenuOpen
            ? "translate-x-0 opacity-100 pointer-events-auto"
            : "translate-x-full opacity-0 pointer-events-none",
        ].join(" ")}
      >
        <div className="flex flex-1 flex-col items-center justify-center gap-8 px-6">
          <ul className="flex flex-col items-center gap-6">
            {NAV_LINKS.map((link, idx) => (
              <li
                key={link.href}
                className={[
                  "transition-all duration-500",
                  isMenuOpen
                    ? "translate-y-0 opacity-100"
                    : "translate-y-4 opacity-0",
                ].join(" ")}
                style={{ transitionDelay: isMenuOpen ? `${idx * 60}ms` : "0ms" }}
              >
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-2xl font-bold uppercase tracking-wide text-[#0F1B2D] transition-colors duration-300 hover:text-[#1FA88A]"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex flex-col items-center gap-4 pt-4">
            <a
              href={PHONE_HREF}
              className="text-base font-semibold text-[#0F1B2D]/70"
            >
              {PHONE_NUMBER}
            </a>
            <a
              href={PHONE_HREF}
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center gap-2 rounded-full bg-[#1FA88A] px-8 py-3 text-base font-semibold text-white shadow-md shadow-[#1FA88A]/30 transition-all duration-300 hover:bg-[#188872] active:scale-95"
            >
              <Phone className="h-5 w-5" />
              Call Now
            </a>
          </div>
        </div>

        <div className="pb-8 text-center text-xs font-medium uppercase tracking-[0.3em] text-[#0F1B2D]/40">
          Abirami Dry Cleaners
        </div>
      </div>
    </header>
  );
}