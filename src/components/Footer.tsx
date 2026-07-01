import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-6">
          <div className="flex justify-center gap-6">
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-primary/20 hover:bg-primary flex items-center justify-center transition-colors duration-300"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-primary/20 hover:bg-primary flex items-center justify-center transition-colors duration-300"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-primary/20 hover:bg-primary flex items-center justify-center transition-colors duration-300"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5" />
            </a>
          </div>

          <div className="space-y-2">
            <h3 className="text-2xl font-bold text-brand-blue" style={{ textShadow: 'var(--text-glow-blue)' }}>Abirami Dry Cleaners</h3>
            <p className="text-background/80">Trusted Since 1975</p>
          </div>

          <div className="border-t border-background/20 pt-6">
            <p className="text-background/70">
              © 2025 Abirami Dry Cleaners. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
