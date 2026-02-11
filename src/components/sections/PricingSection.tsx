import { Check, Crown } from "lucide-react";
import { Button } from "@/components/ui/button";

const packages = [
  {
    name: "Essential",
    price: "₹5,000",
    description: "Perfect for party & casual events",
    features: [
      "HD Makeup Application",
      "Basic Hair Styling",
      "Touch-up Kit",
      "2 Hours Session",
    ],
    popular: false,
  },
  {
    name: "Bridal",
    price: "₹15,000",
    description: "Complete bridal transformation",
    features: [
      "Airbrush Makeup",
      "Elaborate Hair Styling",
      "Eye Lashes Included",
      "Draping Assistance",
      "Touch-up Kit",
      "Pre-wedding Consultation",
    ],
    popular: true,
  },
  {
    name: "Premium",
    price: "₹25,000",
    description: "Ultimate luxury experience",
    features: [
      "Everything in Bridal",
      "Reception Look Included",
      "Travel to Venue",
      "Personal Attendant",
      "Premium Products Only",
      "Unlimited Touch-ups",
    ],
    popular: false,
  },
];

const PricingSection = () => {
  return (
    <section id="pricing" className="py-24 bg-background relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-primary" />
            <span className="text-xs tracking-[0.3em] text-primary uppercase font-body">Investment</span>
            <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-primary" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-medium text-gold-gradient mb-4">
            Packages
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto font-body font-light">
            Choose the perfect package for your special occasion
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`relative rounded-2xl p-8 ${
                pkg.popular
                  ? "bg-gradient-to-b from-primary/20 to-background border-2 border-primary shadow-[0_0_40px_hsl(43_74%_49%_/_0.2)]"
                  : "luxury-card"
              }`}
            >
              {/* Popular Badge */}
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="bg-gradient-to-r from-[hsl(43,74%,35%)] via-[hsl(43,74%,49%)] to-[hsl(43,60%,65%)] text-[hsl(0,0%,4%)] text-xs font-body font-semibold px-4 py-1.5 rounded-full flex items-center gap-1.5">
                    <Crown className="w-3.5 h-3.5" />
                    Most Popular
                  </div>
                </div>
              )}

              {/* Package Name */}
              <div className="text-center mb-8">
                <h3 className="font-display text-2xl font-medium text-foreground mb-2">
                  {pkg.name}
                </h3>
                <p className="text-sm text-muted-foreground font-body">
                  {pkg.description}
                </p>
              </div>

              {/* Price */}
              <div className="text-center mb-8">
                <div className="font-display text-4xl font-medium text-gold-gradient">
                  {pkg.price}
                </div>
                <div className="text-xs text-muted-foreground mt-1">Starting from</div>
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-8">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-sm text-foreground font-body font-light">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Button
                variant={pkg.popular ? "gold" : "goldOutline"}
                className="w-full"
                size="lg"
              >
                Book Now
              </Button>
            </div>
          ))}
        </div>

        {/* Note */}
        <p className="text-center text-sm text-muted-foreground mt-12 font-body">
          Custom packages available. Contact for destination weddings & corporate events.
        </p>
      </div>
    </section>
  );
};

export default PricingSection;
