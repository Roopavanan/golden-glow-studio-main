import { Heart, Sparkles, Camera, Star } from "lucide-react";

const services = [
  {
    icon: Heart,
    title: "Bridal Makeup",
    description: "Traditional • Reception • Engagement • Destination Weddings",
    features: ["Customized to skin tone", "Long-lasting finish", "Touch-up kit included"],
  },
  {
    icon: Star,
    title: "Party & Event Makeup",
    description: "Birthday • Cocktail • Festival • Special Occasions",
    features: ["Glamorous looks", "Quick application", "Any occasion"],
  },
  {
    icon: Sparkles,
    title: "HD & Airbrush Makeup",
    description: "Long-lasting • Lightweight • Camera-ready",
    features: ["Flawless coverage", "No cakey effect", "Sweat-proof formula"],
  },
  {
    icon: Camera,
    title: "Photoshoot & Editorial",
    description: "Portfolio • Fashion • Brand Shoots",
    features: ["Creative looks", "Camera optimization", "Multiple changes"],
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-card relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 border border-primary rounded-full" />
        <div className="absolute bottom-20 right-10 w-48 h-48 border border-primary rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-primary rounded-full" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-primary" />
            <span className="text-xs tracking-[0.3em] text-primary uppercase font-body">What I Offer</span>
            <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-primary" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-medium text-gold-gradient mb-4">
            Services
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto font-body font-light">
            Transforming your vision into reality with personalized makeup artistry for every occasion
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="luxury-card rounded-xl p-8 text-center group cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <service.icon className="w-8 h-8 text-primary" />
              </div>

              {/* Title */}
              <h3 className="font-display text-xl font-medium text-foreground mb-3">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-muted-foreground font-body mb-6">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="text-xs text-muted-foreground/80 font-body flex items-center justify-center gap-2"
                  >
                    <span className="w-1 h-1 rounded-full bg-primary" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Hover line */}
              <div className="mt-6 h-[2px] w-0 group-hover:w-full bg-gradient-to-r from-transparent via-primary to-transparent transition-all duration-500 mx-auto" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
