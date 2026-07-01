const About = () => {
  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-foreground">
            Our <span className="text-primary">Story</span>
          </h2>
          <div className="space-y-6 text-lg text-muted-foreground animate-fade-in">
            <p>
              Established in <span className="font-bold text-accent">1975</span>, Abirami Dry Cleaners 
              has been a trusted name in the community for over <span className="font-semibold">50 years</span>. 
              What started as a small family business has grown into a cornerstone of quality garment care 
              in our neighborhood.
            </p>
            <p>
              We take pride in our commitment to excellence, treating every garment with the same care 
              and attention as if it were our own. Our family-run business believes in building lasting 
              relationships with our customers through quality service, reliability, and a personal touch 
              that larger chains simply cannot match.
            </p>
            <p className="font-semibold text-foreground">
              From delicate sarees to everyday wear, we handle your clothes with expertise passed down 
              through generations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
