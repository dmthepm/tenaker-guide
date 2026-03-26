import Link from "next/link";
import { venues } from "@/data/venues";
import { VenueCard } from "@/components/ui/venue-card";

const topPickSlugs = [
  "caz-general-store",
  "wild-flour-bread",
  "piknik",
  "altamont-general-store",
  "armstrong-redwoods",
  "jenner-headlands",
  "goat-rock",
  "osmosis",
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
        If I had to pick a handful of things, these are it.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {picks.map(
          (venue, i) => venue && (
            <div key={venue.slug} className="animate-fade-in h-full" style={{ animationDelay: `${i * 80}ms` }}>
              <VenueCard venue={venue} />
            </div>
          )
        )}
      </div>
      <div className="mt-6 flex flex-wrap gap-4">
        <Link
          href="/food"
          className="text-sm font-medium text-accent hover:text-accent-hover transition-colors"
        >
          All food &amp; drink &rarr;
        </Link>
        <Link
          href="/outdoors"
          className="text-sm font-medium text-accent hover:text-accent-hover transition-colors"
        >
          All outdoors &rarr;
        </Link>
        <Link
          href="/wellness"
          className="text-sm font-medium text-accent hover:text-accent-hover transition-colors"
        >
          All wellness &rarr;
        </Link>
      </div>
    </section>
  );
}
