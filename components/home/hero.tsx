export function Hero() {
  return (
    <section className="px-6 pt-16 pb-6 md:pt-24 md:pb-8 max-w-5xl mx-auto">
      <h1 className="font-[family-name:var(--font-fraunces)] text-4xl md:text-6xl font-semibold text-foreground tracking-tighter leading-none animate-fade-up">
        Welcome to Cazadero
      </h1>
      <p className="mt-4 text-muted text-lg md:text-xl max-w-[55ch] leading-relaxed animate-fade-up-delay">
        Your guide to the redwoods, the coast, and everything in between.
        Built for the Ten Aker Wood cast and crew.
      </p>
      <div className="mt-6 bg-sage/30 rounded-xl px-5 py-4 border border-sage/50 max-w-lg animate-fade-in" style={{ animationDelay: "0.3s" }}>
        <p className="text-sm text-sage-dark leading-relaxed">
          <span className="font-semibold">From Devon.</span>{" "}I&apos;ve lived up
          here for 7 years. This guide is everything I wish someone had handed
          me when I first arrived. If something is missing or wrong, find me on
          set or in the group chat.
        </p>
      </div>
    </section>
  );
}
