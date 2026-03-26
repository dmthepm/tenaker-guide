import { venues } from "@/data/venues";
import { VenueCard } from "@/components/ui/venue-card";

const topPickSlugs = [
  "caz-general-store",
  "wild-flour-bread",
  "osmosis",
  "armstrong-redwoods",
  "goat-rock",
];

export function TopPicks() {
  const picks = topPickSlugs
    .map((slug) => venues.find((v) => v.slug === slug))
    .filter(Boolean);

  return (
    <section className="px-6 py-8 max-w-5xl mx-auto">
      <h2 className="font-[family-name:var(--font-fraunces)] text-2xl font-semibold text-foreground mb-2">
        Devon&apos;s Top Picks
      </h2>
      <p className="text-sm text-muted mb-5">
        If you only do five things while you&apos;re here, make it these.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {picks.map(
          (venue, i) => venue && (
            <div key={venue.slug} className="animate-fade-in" style={{ animationDelay: `${i * 80}ms` }}>
              <VenueCard venue={venue} />
            </div>
          )
        )}
      </div>
    </section>
  );
}
