import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Pricing from "@/components/Pricing";

const Index = () => {
  return (
    <main className="min-h-screen">
  <Hero />
  <About />
  <Services />
  <Pricing />
  <Gallery />
  <Contact />
  <Footer />
</main>
  );
};

export default Index;
