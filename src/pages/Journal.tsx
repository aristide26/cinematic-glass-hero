import Navbar from "@/components/Navbar";

const DISPLAY_FONT = "'Instrument Serif', serif";

const Journal = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <section className="flex flex-col items-center text-center px-6 pt-32 pb-20">
      <h1
        className="animate-fade-rise text-5xl sm:text-7xl md:text-8xl leading-[0.95] tracking-[-2.46px] font-normal text-foreground"
        style={{ fontFamily: DISPLAY_FONT }}
      >
        Journal
      </h1>
      <p className="animate-fade-rise-delay text-muted-foreground text-base sm:text-lg max-w-2xl mt-8 leading-relaxed">
        Thoughts on design, photography, and the creative process — written for those who find beauty in the details.
      </p>
    </section>
  </div>
);

export default Journal;
