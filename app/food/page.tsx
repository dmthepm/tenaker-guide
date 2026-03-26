import { venues } from "@/data/venues";
import { PageHeader } from "@/components/layout/page-header";
import { VenueCard } from "@/components/ui/venue-card";
import { Footer } from "@/components/layout/footer";

export const metadata = {
  title: "Food & Drink - Ten Aker Wood Guide",
};

export default function FoodPage() {
  const foodVenues = venues.filter((v) => v.category === "food");
  const cafes = foodVenues.filter((v) => v.subcategory === "cafe");
  const restaurants = foodVenues.filter((v) => v.subcategory === "restaurant");
  const bakeries = foodVenues.filter((v) => v.subcategory === "bakery");
  const other = foodVenues.filter(
    (v) =>
      v.subcategory !== "cafe" &&
      v.subcategory !== "restaurant" &&
      v.subcategory !== "bakery"
  );

  return (
    <>
      <PageHeader
        title="Food & Drink"
        subtitle="From the Caz General Store five minutes away to farm-to-table restaurants worth the drive. Sorted by what's closest."
      />
      <div className="px-6 max-w-5xl mx-auto space-y-10 pb-12">
        {cafes.length > 0 && (
          <section>
            <h2 className="font-mono text-xs uppercase tracking-widest text-muted mb-4">
              Cafes & Coffee
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {cafes.map((v) => (
                <VenueCard key={v.slug} venue={v} />
              ))}
            </div>
          </section>
        )}
        {bakeries.length > 0 && (
          <section>
            <h2 className="font-mono text-xs uppercase tracking-widest text-muted mb-4">
              Bakeries
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {bakeries.map((v) => (
                <VenueCard key={v.slug} venue={v} />
              ))}
            </div>
          </section>
        )}
        {restaurants.length > 0 && (
          <section>
            <h2 className="font-mono text-xs uppercase tracking-widest text-muted mb-4">
              Restaurants
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {restaurants.map((v) => (
                <VenueCard key={v.slug} venue={v} />
              ))}
            </div>
          </section>
        )}
        {other.length > 0 && (
          <section>
            <h2 className="font-mono text-xs uppercase tracking-widest text-muted mb-4">
              More
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
