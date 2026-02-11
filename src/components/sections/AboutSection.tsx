import portraitImage from "@/assets/portrait-artist.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-background relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Portrait with gold frame */}
          <div className="relative group">
            <div className="gold-frame rounded-lg overflow-hidden shadow-2xl">
              <img
                src={portraitImage}
                alt="Saranya Joshiba.M - Professional Makeup Artist"
                className="w-full aspect-[3/4] object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border border-primary/30 rounded-lg -z-10" />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 border border-primary/20 rounded-lg -z-10" />
          </div>

          {/* Text content */}
          <div className="space-y-8">
            {/* Section label */}
            <div className="flex items-center gap-4">
              <div className="decorative-line" />
              <span className="text-xs tracking-[0.3em] text-primary uppercase font-body">About Me</span>
            </div>

            {/* Title */}
            <h2 className="font-display text-4xl md:text-5xl font-medium">
              <span className="text-gold-gradient">Saranya Joshiba.M</span>
            </h2>

            {/* Description */}
            <div className="space-y-6 text-muted-foreground font-body font-light leading-relaxed">
              <p>
                Saranya Joshiba.M is a professional makeup artist based in Puducherry, with over 
                <span className="text-primary font-medium"> 15+ years </span> 
                of hands-on experience in the beauty and fashion industry. Holding an MBA in Finance, 
                she brings professionalism, precision, and creative excellence to every client she works with.
              </p>
              <p>
                Since 2007, Saranya has been transforming brides and clients with elegant, long-lasting 
                makeup tailored to individual skin tones, face structures, and occasions. Her work blends 
                traditional techniques with modern trends for flawless, camera-ready results.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-border/50">
              <div className="text-center">
                <div className="font-display text-3xl text-gold-gradient font-medium">15+</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider mt-1">Years Exp</div>
              </div>
              <div className="text-center">
                <div className="font-display text-3xl text-gold-gradient font-medium">2000+</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider mt-1">Happy Brides</div>
              </div>
              <div className="text-center">
                <div className="font-display text-3xl text-gold-gradient font-medium">500+</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider mt-1">Events</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
