import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";

const testimonials = [
  {
    text: "For the awesome makeup and the great drape! All thanks to you for the cool look you gave me! Thank you for giving me exactly What i had in my mind! Loved your work.",
    author: "Kruthika.",
    role: "Editorial, 2025",
  },
  {
    text: "Very professional and friendly. She understood exactly what I wanted and delivered beyond my expectations. My reception look was absolutely stunning!",
    author: "Kavitha S.",
    role: "Bride, 2023",
  },
  {
    text: "I've worked with many makeup artists, but Saranya's attention to detail and use of premium products sets her apart. Highly recommend for any special occasion.",
    author: "Deepika R.",
    role: "Fashion Model",
  },
  {
    text: "The airbrush makeup was so lightweight yet flawless. It photographed beautifully and I felt confident throughout my entire wedding day. Thank you, Saranya!",
    author: "Anitha K.",
    role: "Bride, 2024",
  },
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-24 bg-card relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-primary/10 rounded-full" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-primary/10 rounded-full" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-primary" />
            <span className="text-xs tracking-[0.3em] text-primary uppercase font-body">Testimonials</span>
            <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-primary" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-medium text-gold-gradient">
            Client Love
          </h2>
        </div>

        {/* Testimonial Slider */}
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Quote Icon */}
            <div className="absolute -top-8 left-1/2 -translate-x-1/2">
              <Quote className="w-16 h-16 text-primary/20" />
            </div>

            {/* Testimonial Card */}
            <div className="luxury-card rounded-2xl p-10 md:p-12 text-center">
              {/* Stars */}
              <div className="flex justify-center gap-1 mb-8">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>

              {/* Quote Text */}
              <blockquote className="font-display text-xl md:text-2xl text-foreground italic leading-relaxed mb-8">
                "{testimonials[currentIndex].text}"
              </blockquote>

              {/* Author */}
              <div className="space-y-1">
                <div className="font-body font-medium text-foreground">
                  {testimonials[currentIndex].author}
                </div>
                <div className="text-sm text-muted-foreground">
                  {testimonials[currentIndex].role}
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-center items-center gap-6 mt-8">
              <button
                onClick={prevTestimonial}
                className="w-12 h-12 rounded-full border border-primary/30 flex items-center justify-center hover:bg-primary/10 hover:border-primary transition-all"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5 text-primary" />
              </button>

              {/* Dots */}
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentIndex
                        ? "bg-primary w-6"
                        : "bg-primary/30 hover:bg-primary/50"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                className="w-12 h-12 rounded-full border border-primary/30 flex items-center justify-center hover:bg-primary/10 hover:border-primary transition-all"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5 text-primary" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
