import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/919884338168", "_blank");
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-brand-blue" style={{ textShadow: 'var(--text-glow-blue)' }}>
            Abirami Dry Cleaners
          </h1>
          <p className="text-2xl md:text-3xl font-semibold mb-4 text-accent">
            Trusted Dry Cleaning Since 1975
          </p>
          <p className="text-lg md:text-xl mb-8 text-muted-foreground max-w-2xl mx-auto">
            Over 50 years of quality service, dedication, and personal touch for your garments
          </p>
          <Button 
            size="lg" 
            onClick={handleWhatsAppClick}
            className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <Phone className="mr-2 h-5 w-5" />
            Call Now on WhatsApp
          </Button>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
