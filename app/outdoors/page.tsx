import { venues } from "@/data/venues";
import { PageHeader } from "@/components/layout/page-header";
import { VenueCard } from "@/components/ui/venue-card";
import { Footer } from "@/components/layout/footer";

export const metadata = {
  title: "Outdoors — Ten Aker Wood Guide",
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
