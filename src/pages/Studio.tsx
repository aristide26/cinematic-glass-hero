import Navbar from "@/components/Navbar";

const DISPLAY_FONT = "'Instrument Serif', serif";

const Studio = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <section className="flex flex-col items-center text-center px-6 pt-32 pb-20">
      <h1
        className="animate-fade-rise text-5xl sm:text-7xl md:text-8xl leading-[0.95] tracking-[-2.46px] font-normal text-foreground"
        style={{ fontFamily: DISPLAY_FONT }}
      >
        The Studio
      </h1>
      <p className="animate-fade-rise-delay text-muted-foreground text-base sm:text-lg max-w-2xl mt-8 leading-relaxed">
        A curated collection of our finest work — spanning brand identities, editorial photography, and immersive digital experiences crafted for visionary clients.
      </p>
    </section>
  </div>
);

export default Studio;
