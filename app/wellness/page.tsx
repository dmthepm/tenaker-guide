import { venues } from "@/data/venues";
import { PageHeader } from "@/components/layout/page-header";
import { VenueCard } from "@/components/ui/venue-card";
import { Footer } from "@/components/layout/footer";

export const metadata = {
  title: "Wellness - Ten Aker Wood Guide",
};

export default function WellnessPage() {
  const wellnessVenues = venues.filter((v) => v.category === "wellness");

  return (
    <>
      <PageHeader
        title="Wellness"
        subtitle="Spas, massage, and soaking. You're in wine country. Treat yourself on a day off."
      />
      <div className="px-6 max-w-5xl mx-auto pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {wellnessVenues.map((v) => (
            <VenueCard key={v.slug} venue={v} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
