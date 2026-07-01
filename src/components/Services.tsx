import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Sparkles, Flame, Shirt, Scissors } from "lucide-react";

const services = [
  {
    icon: Sparkles,
    title: "Dry Cleaning",
    description: "Professional dry cleaning for all your delicate garments using eco-friendly solutions.",
  },
  {
    icon: Flame,
    title: "Ironing",
    description: "Expert ironing services that leave your clothes crisp, fresh, and ready to wear.",
  },
  {
    icon: Shirt,
    title: "Saree Rolling",
    description: "Traditional saree rolling service with perfect pleating and careful handling.",
  },
  {
    icon: Scissors,
    title: "Darning",
    description: "Expert repair and darning services to extend the life of your favorite garments.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Our <span className="text-accent">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive garment care solutions tailored to your needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="border-2 hover:border-primary transition-all duration-300 hover:shadow-lg animate-scale-in bg-card group hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl font-bold text-foreground">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
