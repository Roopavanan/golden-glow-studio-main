import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, MessageCircle, Sparkles } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-card relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-primary" />
            <span className="text-xs tracking-[0.3em] text-primary uppercase font-body">
              Get in Touch
            </span>
            <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-primary" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-medium text-gold-gradient mb-4">
            Book Your Slot
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto font-body font-light text-lg">
            Let's create your perfect look!
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="luxury-card rounded-xl p-6 flex items-center gap-5">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
                  Location
                </div>
                <div className="font-body text-foreground">
                  Puducherry, India
                </div>
              </div>
            </div>

            <div className="luxury-card rounded-xl p-6 flex items-center gap-5">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
                  Phone
                </div>
                <div className="font-body text-foreground">+91 95663 10321</div>
              </div>
            </div>

            <div className="luxury-card rounded-xl p-6 flex items-center gap-5">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
                  Email
                </div>
                <div className="font-body text-foreground">
                  glambyjoshiba@gmail.com
                </div>
              </div>
            </div>

            <div className="luxury-card rounded-xl p-6 flex items-center gap-5 border-gold-glow animate-gold-pulse">
              <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                <MessageCircle className="w-6 h-6 text-primary" />
              </div>
              <div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
                  WhatsApp
                </div>
                <div className="font-body text-foreground">
                  Available for quick inquiries
                </div>
              </div>
            </div>
          </div>

          {/* CTA Card */}
          <div className="luxury-card rounded-2xl p-10 text-center flex flex-col items-center justify-center space-y-6">
            <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
              <Sparkles className="w-10 h-10 text-primary" />
            </div>
            <h3 className="font-display text-2xl text-gold-gradient">
              Ready for Your Transformation?
            </h3>
            <p className="text-muted-foreground font-body font-light">
              Book your appointment today and let's create something beautiful
              together.
            </p>
            <div className="flex flex-col gap-4 w-full max-w-xs">
              <a
                href="https://wa.me/919566310321"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full
             h-14 rounded-md px-10 text-base
             bg-gradient-to-r from-[hsl(43,74%,35%)]
             via-[hsl(43,74%,49%)]
             to-[hsl(43,60%,65%)]
             text-[hsl(0,0%,4%)] font-semibold tracking-wide
             transition-all duration-300
             hover:shadow-[0_0_30px_hsl(43_74%_49%_/_0.4)]
             hover:scale-[1.02]"
              >
                <Sparkles className="w-5 h-5 shrink-0" />
                <span>Book Your Slot Now</span>
              </a>
              <a
                href="https://wa.me/919566310321"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full
             h-11 rounded-md px-8
             border-2 border-primary text-primary bg-transparent
             font-semibold tracking-wide
             transition-all duration-300
             hover:bg-primary/10
             hover:shadow-[0_0_25px_hsl(43_74%_49%_/_0.3)]
             hover:scale-[1.02]"
              >
                <MessageCircle className="w-5 h-5 shrink-0" />
                <span>WhatsApp Me</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
