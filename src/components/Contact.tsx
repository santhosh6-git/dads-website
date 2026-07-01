import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, MapPin, Calendar } from "lucide-react";

const Contact = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/919884338168", "_blank");
  };

  const handlePhoneClick = (number: string) => {
    window.location.href = `tel:${number}`;
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Get In <span className="text-accent">Touch</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            We're here to serve you with care and dedication
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <Card className="border-2 hover:border-primary transition-all duration-300 bg-card animate-fade-in">
            <CardHeader>
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-3 mx-auto">
                <Phone className="w-7 h-7 text-primary" />
              </div>
              <CardTitle className="text-center text-foreground">Call Us</CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-3">
              <Button
                variant="outline"
                onClick={() => handlePhoneClick("9884338168")}
                className="w-full font-semibold hover:bg-primary/10"
              >
                9884338168
              </Button>
              <Button
                variant="outline"
                onClick={() => handlePhoneClick("6374261464")}
                className="w-full font-semibold hover:bg-primary/10"
              >
                6374261464
              </Button>
              <Button
                onClick={handleWhatsAppClick}
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
              >
                WhatsApp Us
              </Button>
            </CardContent>
          </Card>

          <Card className="border-2 hover:border-primary transition-all duration-300 bg-card animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <CardHeader>
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-3 mx-auto">
                <MapPin className="w-7 h-7 text-primary" />
              </div>
              <CardTitle className="text-center text-foreground">Location</CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-3">
              <p className="text-muted-foreground text-sm leading-relaxed">
                41/20, Asiriyar St, MPM Street<br />
                Kakanji Colony, Vyasarpadi<br />
                Chennai, Tamil Nadu 600039
              </p>
              <Button
                variant="outline"
                onClick={() => window.open("https://maps.app.goo.gl/3LYRH8Jc3LHER47X7", "_blank")}
                className="w-full font-semibold hover:bg-primary/10"
              >
                View on Maps
              </Button>
            </CardContent>
          </Card>

          <Card className="border-2 hover:border-primary transition-all duration-300 bg-card animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <CardHeader>
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-3 mx-auto">
                <Calendar className="w-7 h-7 text-primary" />
              </div>
              <CardTitle className="text-center text-foreground">Hours</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground mb-2">
                Open 6 days a week
              </p>
              <div className="space-y-2 text-foreground">
                <p className="font-semibold">Wednesday - Monday</p>
                <p className="text-muted-foreground">Contact for timings</p>
              </div>
              <div className="mt-4 p-3 bg-accent/10 rounded-lg">
                <p className="font-bold text-accent">Tuesday Holiday</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
