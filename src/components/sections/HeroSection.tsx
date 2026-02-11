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
          <Button variant="gold" size="xl" className="min-w-[220px]">
            <Phone className="w-5 h-5" />
            Book an Appointment
          </Button>
          <Button variant="goldOutline" size="xl" className="min-w-[220px]">
            <MessageCircle className="w-5 h-5" />
            WhatsApp Me
          </Button>
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
