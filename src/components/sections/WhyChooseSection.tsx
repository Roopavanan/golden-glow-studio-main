import { Check } from "lucide-react";

const reasons = [
  "15+ years of professional experience",
  "Personalized makeup based on skin & occasion",
  "Premium & skin-friendly products",
  "Hygienic tools & professional workflow",
  "On-time, calm & client-focused approach",
  "Camera-friendly & long-lasting finish",
];

const WhyChooseSection = () => {
  return (
    <section id="why-choose" className="py-24 bg-background relative">
      {/* Decorative lines */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-primary" />
              <span className="text-xs tracking-[0.3em] text-primary uppercase font-body">Why Choose Me</span>
              <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-primary" />
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-medium text-gold-gradient">
              The Difference
            </h2>
          </div>

          {/* Checklist */}
          <div className="grid md:grid-cols-2 gap-6">
            {reasons.map((reason, index) => (
              <div
                key={reason}
                className="flex items-center gap-4 p-5 luxury-card rounded-lg group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                  <Check className="w-5 h-5 text-primary" />
                </div>
                <span className="font-body text-foreground font-light">
                  {reason}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
