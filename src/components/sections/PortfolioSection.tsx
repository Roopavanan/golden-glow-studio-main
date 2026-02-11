import { useState } from "react";
import { portfolioItems, Category } from "@/data/portfolioData";

const categories: { label: string; value: Category }[] = [
  { label: "All", value: "all" },
  { label: "Bridal", value: "bridal" },
  { label: "Party", value: "party" },
  { label: "Editorial", value: "editorial" },
  { label: "Photoshoot", value: "photoshoot" },
];

const ITEMS_PER_LOAD = 8;

const PortfolioSection = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("all");
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_LOAD);

  const filteredItems =
    activeCategory === "all"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory);

  const visibleItems = filteredItems.slice(0, visibleCount);

  const handleCategoryChange = (category: Category) => {
    setActiveCategory(category);
    setVisibleCount(ITEMS_PER_LOAD); 
  };

  const loadMore = () => {
    setVisibleCount((prev) => prev + ITEMS_PER_LOAD);
  };

  return (
    <section
      id="portfolio"
      className="py-24 bg-background relative overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(hsl(43 74% 49% / 0.5) 1px, transparent 1px), linear-gradient(90deg, hsl(43 74% 49% / 0.5) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-primary" />
            <span className="text-xs tracking-[0.3em] text-primary uppercase font-body">
              My Work
            </span>
            <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-primary" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-medium text-gold-gradient mb-4">
            Portfolio
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto font-body font-light">
            A glimpse of my recent makeup transformations—crafted with
            precision, creativity, and care.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => handleCategoryChange(cat.value)}
              className={`px-6 py-2 rounded-full text-sm font-body font-medium transition-all duration-300 ${
                activeCategory === cat.value
                  ? "bg-primary text-primary-foreground"
                  : "border border-primary/30 text-muted-foreground hover:border-primary hover:text-primary"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {visibleItems.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-lg aspect-[3/4] cursor-pointer"
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              {/* Gold border on hover */}
              <div className="absolute inset-0 border-2 border-primary/0 group-hover:border-primary/60 transition-all duration-300 rounded-lg" />
              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-sm font-body text-foreground capitalize">
                  {item.category} Makeup
                </span>
              </div>
            </div>
          ))}
          
        </div>
        {/* Load More Button */}
          {visibleCount < filteredItems.length && (
            <div className="text-center mt-12 flex justify-center items-center">
              <button
                onClick={loadMore}
                className="px-8 py-3 border border-primary text-primary rounded-full font-body font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                Load More
              </button>
            </div>
          )}
      </div>
    </section>
  );
};

export default PortfolioSection;
