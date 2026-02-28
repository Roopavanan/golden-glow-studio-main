import { Button } from "@/components/ui/button";
import { Phone, MessageCircle } from "lucide-react";
import heroImage from "@/assets/hero-bridal.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Luxury bridal makeup"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/70 via-transparent to-background/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        {/* Decorative element */}
        <div
          className="flex justify-center mb-8 animate-fade-in-up"
          style={{ animationDelay: "0.2s" }}
        >
          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent" />
        </div>

        {/* Main Headline */}
        <h1
          className="font-display text-4xl md:text-6xl lg:text-7xl font-medium mb-6 text-gold-gradient opacity-0 animate-fade-in-up  pb-2"
          style={{ animationDelay: "0.4s" }}
        >
          Enhancing Beauty.
          <br />
          <span className="italic  inline-block leading-[1.2]">
            Creating Confidence.
          </span>
        </h1>

        {/* Sub-headline */}
        <p
          className="font-body text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 font-light opacity-0 animate-fade-in-up"
          style={{ animationDelay: "0.6s" }}
        >
          Professional Makeup Artist specializing in Bridal, Party & Editorial
          Makeup.
        </p>

        {/* CTA Buttons */}
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center opacity-0 animate-fade-in-up"
          style={{ animationDelay: "0.8s" }}
        >
          <a
            href="https://wa.me/919566310321"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 min-w-[220px] px-6 py-3
             bg-gradient-to-r from-[hsl(43,74%,35%)] 
             via-[hsl(43,74%,49%)] 
             to-[hsl(43,60%,65%)]
             text-[hsl(0,0%,4%)] font-semibold tracking-wide
             rounded-lg transition-all duration-300
             hover:shadow-[0_0_30px_hsl(43_74%_49%_/_0.4)]
             hover:scale-[1.02]"
          >
            <Phone className="w-5 h-5 shrink-0" />
            <span>Book an Appointment</span>
          </a>
          <a
            href="https://wa.me/919566310321"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 min-w-[220px] px-6 py-3
             border-2 border-primary text-primary bg-transparent
             hover:bg-primary/10
             hover:shadow-[0_0_25px_hsl(43_74%_49%_/_0.3)]
             font-semibold tracking-wide
             rounded-lg transition-all duration-300
             hover:scale-[1.02] active:scale-[0.98]"
          >
            <MessageCircle className="w-5 h-5 shrink-0" />
            <span>WhatsApp Me</span>
          </a>
        </div>

        {/* Bottom decorative element */}
        <div
          className="flex justify-center mt-16 opacity-0 animate-fade-in-up"
          style={{ animationDelay: "1s" }}
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs tracking-[0.3em] text-muted-foreground uppercase">
              Scroll to Explore
            </span>
            <div className="w-[1px] h-12 bg-gradient-to-b from-primary to-transparent animate-float" />
          </div>
        </div>
      </div>

      {/* Gold accent lines */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
    </section>
  );
};

export default HeroSection;
