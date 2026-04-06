import Navbar from "@/components/Navbar";

const DISPLAY_FONT = "'Instrument Serif', serif";

const About = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <section className="flex flex-col items-center text-center px-6 pt-32 pb-20">
      <h1
        className="animate-fade-rise text-5xl sm:text-7xl md:text-8xl leading-[0.95] tracking-[-2.46px] font-normal text-foreground"
        style={{ fontFamily: DISPLAY_FONT }}
      >
        About Us
      </h1>
      <p className="animate-fade-rise-delay text-muted-foreground text-base sm:text-lg max-w-2xl mt-8 leading-relaxed">
        We are a collective of designers and photographers who believe in the power of silence, craft, and intention. Every project is an invitation to see the world differently.
      </p>
    </section>
  </div>
);

export default About;
