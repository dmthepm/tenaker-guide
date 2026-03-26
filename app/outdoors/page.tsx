import { venues } from "@/data/venues";
import { PageHeader } from "@/components/layout/page-header";
import { VenueCard } from "@/components/ui/venue-card";
import { Footer } from "@/components/layout/footer";

export const metadata = {
  title: "Outdoors - Ten Aker Wood Guide",
};

export default function OutdoorsPage() {
  const outdoorVenues = venues.filter((v) => v.category === "outdoors");
  const hikes = outdoorVenues.filter((v) => v.subcategory === "hike");
  const beaches = outdoorVenues.filter((v) => v.subcategory === "beach");
  const swimming = outdoorVenues.filter((v) => v.subcategory === "swimming");
  const other = outdoorVenues.filter(
    (v) =>
      v.subcategory !== "hike" &&
      v.subcategory !== "beach" &&
      v.subcategory !== "swimming"
  );

  return (
    <>
      <PageHeader
        title="Outdoors"
        subtitle="Old-growth redwoods, the Sonoma Coast, and the Russian River. This is why people move here."
      />
      <div className="px-6 max-w-5xl mx-auto space-y-10 pb-12">
        {/* Nature & Wildlife */}
        <section>
          <h2 className="font-mono text-xs uppercase tracking-widest text-muted mb-4">
            Nature & Wildlife
          </h2>

          <div className="space-y-4">
            {/* Banana Slugs */}
            <div className="bg-card border border-border rounded-xl p-5">
              <h3 className="text-sm font-semibold text-foreground">
                Banana Slugs
              </h3>
              <p className="text-xs text-muted mt-1 italic">
                The film&apos;s aesthetic is literally called &ldquo;slug gaze&rdquo;
              </p>
              <ul className="mt-2 text-xs text-muted space-y-1.5 list-disc list-inside">
                <li>Up to 10 inches long, bright yellow, completely harmless</li>
                <li>Most active on cool, damp mornings. April is prime season</li>
                <li>Best spotted on forest trails after rain</li>
                <li>The slime rule: dry your hand first, then wipe. Water makes it worse and spread.</li>
              </ul>
            </div>

            {/* Redwood Forest */}
            <div className="bg-card border border-border rounded-xl p-5">
              <h3 className="text-sm font-semibold text-foreground">
                Redwood Forest
              </h3>
              <ul className="mt-2 text-xs text-muted space-y-1.5 list-disc list-inside">
                <li>Coast redwoods are the tallest trees on Earth</li>
                <li>The bark is spongy and fire-resistant. Feels like thick cork</li>
                <li>Understory: sword ferns, bay laurel, redwood sorrel (leaves fold in sunlight)</li>
              </ul>
            </div>

            {/* What You Might See */}
            <div className="bg-card border border-border rounded-xl p-5">
              <h3 className="text-sm font-semibold text-foreground">
                What You Might See
              </h3>
              <ul className="mt-2 text-xs text-muted space-y-1.5 list-disc list-inside">
                <li>Harbor seals at Goat Rock (pupping season April&ndash;May)</li>
                <li>Gray whales migrating north along the coast (April is peak)</li>
                <li>Great blue herons, turkey vultures, Steller&apos;s jays, osprey, owls at night</li>
                <li>Deer at dawn and dusk (also a driving hazard)</li>
                <li>River otters on Austin Creek (rare but magical)</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Devon creek note */}
        <div className="bg-sage/30 rounded-xl px-5 py-4 border border-sage/50">
          <p className="text-sm text-sage-dark leading-relaxed">
            <span className="font-semibold">Devon:</span> The creeks here are beautiful.
            You&apos;re welcome to come hang at our creek. We&apos;ll try to do a few
            creek days on weekends if the weather is good. Ask me on set and I&apos;ll show
            you the best spots.
          </p>
        </div>

        {hikes.length > 0 && (
          <section>
            <h2 className="font-mono text-xs uppercase tracking-widest text-muted mb-4">
              Hikes & Nature
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {hikes.map((v) => (
                <VenueCard key={v.slug} venue={v} />
              ))}
            </div>
          </section>
        )}
        {beaches.length > 0 && (
          <section>
            <h2 className="font-mono text-xs uppercase tracking-widest text-muted mb-4">
              Beaches & Coast
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {beaches.map((v) => (
                <VenueCard key={v.slug} venue={v} />
              ))}
            </div>
          </section>
        )}
        {swimming.length > 0 && (
          <section>
            <h2 className="font-mono text-xs uppercase tracking-widest text-muted mb-4">
              Swimming
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {swimming.map((v) => (
                <VenueCard key={v.slug} venue={v} />
              ))}
            </div>
          </section>
        )}
        {other.length > 0 && (
          <section>
            <h2 className="font-mono text-xs uppercase tracking-widest text-muted mb-4">
              Day Trips & More
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {other.map((v) => (
                <VenueCard key={v.slug} venue={v} />
              ))}
            </div>
          </section>
        )}
      </div>
      <Footer />
    </>
  );
}
