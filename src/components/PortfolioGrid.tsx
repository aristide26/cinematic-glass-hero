import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import portfolio4 from "@/assets/portfolio-4.jpg";
import portfolio5 from "@/assets/portfolio-5.jpg";
import portfolio6 from "@/assets/portfolio-6.jpg";

const DISPLAY_FONT = "'Instrument Serif', serif";

const items = [
  { src: portfolio1, title: "Neon Reverie", category: "Portrait", w: 800, h: 1200 },
  { src: portfolio2, title: "Concrete Silence", category: "Architecture", w: 1200, h: 800 },
  { src: portfolio3, title: "Solitary Bloom", category: "Still Life", w: 800, h: 1000 },
  { src: portfolio4, title: "Above the Clouds", category: "Landscape", w: 1200, h: 800 },
  { src: portfolio5, title: "Crimson Motion", category: "Fashion", w: 800, h: 1100 },
  { src: portfolio6, title: "Brand Anatomy", category: "Design", w: 1000, h: 1000 },
];

const PortfolioGrid = () => {
  return (
    <section className="bg-background px-6 sm:px-8 py-24 max-w-7xl mx-auto">
      {/* Section header */}
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-16">
        <div>
          <p className="text-sm text-muted-foreground tracking-widest uppercase mb-3">Selected Work</p>
          <h2
            className="text-4xl sm:text-5xl md:text-6xl text-foreground font-normal leading-[1.05]"
            style={{ fontFamily: DISPLAY_FONT }}
          >
            Portfolio
          </h2>
        </div>
        <p className="text-muted-foreground text-sm max-w-xs leading-relaxed">
          A curated collection of photography and design work spanning portrait, editorial, landscape, and brand identity.
        </p>
      </div>

      {/* Masonry grid */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
        {items.map((item, i) => (
          <div
            key={item.title}
            className="break-inside-avoid group relative overflow-hidden rounded-lg cursor-pointer"
            style={{ animationDelay: `${i * 0.1}s` }}
          >
            <img
              src={item.src}
              alt={item.title}
              loading="lazy"
              width={item.w}
              height={item.h}
              className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
              <p className="text-xs text-muted-foreground tracking-widest uppercase mb-1">{item.category}</p>
              <h3
                className="text-2xl text-foreground font-normal"
                style={{ fontFamily: DISPLAY_FONT }}
              >
                {item.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PortfolioGrid;
