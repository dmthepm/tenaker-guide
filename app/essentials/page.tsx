import { venues } from "@/data/venues";
import { PageHeader } from "@/components/layout/page-header";
import { VenueCard } from "@/components/ui/venue-card";
import { Footer } from "@/components/layout/footer";
import { WifiSlash, WifiHigh, WifiX } from "@phosphor-icons/react/dist/ssr";

export const metadata = {
  title: "Essentials | Ten Aker Wood",
  description: "Gas, groceries, cell service, pharmacy, and hardware near Cazadero. Everything you need for daily life in rural Sonoma County.",
  openGraph: {
    title: "Essentials | Ten Aker Wood",
    description: "Gas, groceries, cell service, pharmacy, and hardware near Cazadero. Everything you need for daily life in rural Sonoma County.",
    images: ["/og-image.png"],
  },
};

export default function EssentialsPage() {
  const essentialVenues = venues.filter((v) => v.category === "essentials");
  const gas = essentialVenues.filter((v) => v.subcategory === "gas");
  const grocery = essentialVenues.filter((v) => v.subcategory === "grocery");
  const other = essentialVenues.filter(
    (v) => v.subcategory !== "gas" && v.subcategory !== "grocery"
  );

  return (
    <>
      <PageHeader
        title="Essentials"
        subtitle="Gas, groceries, cell service, and everything else you need to know for daily life in Cazadero."
      />
      <div className="px-6 max-w-5xl mx-auto space-y-10 pb-12">
        {/* Cell service info */}
        <section>
          <h2 className="font-mono text-xs uppercase tracking-widest text-muted mb-4">
            Cell Service
          </h2>
          <div className="bg-accent/5 border border-accent/15 rounded-2xl p-5 mb-4">
            <p className="text-sm font-semibold text-foreground">
              Cell service is unreliable in Cazadero and on the coast.
            </p>
            <p className="text-xs text-muted mt-1">
              Every carrier is spotty. Nobody counts on cellular up here. Download maps, music, and anything you need before you lose service.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="bg-card border border-border rounded-xl p-4 text-center">
              <WifiSlash size={28} className="text-emergency mx-auto" weight="duotone" />
              <p className="text-sm font-semibold text-foreground mt-2">Cazadero</p>
              <p className="text-xs text-emergency font-medium">Unreliable</p>
              <p className="text-xs text-muted mt-1">If you get a bar, it's a bonus.</p>
            </div>
            <div className="bg-card border border-border rounded-xl p-4 text-center">
              <WifiHigh size={28} className="text-sage-dark mx-auto" weight="duotone" />
              <p className="text-sm font-semibold text-foreground mt-2">Guerneville / Monte Rio</p>
              <p className="text-xs text-sage-dark font-medium">Works</p>
              <p className="text-xs text-muted mt-1">Catch up on texts and calls here.</p>
            </div>
            <div className="bg-card border border-border rounded-xl p-4 text-center">
              <WifiX size={28} className="text-emergency mx-auto" weight="duotone" />
              <p className="text-sm font-semibold text-foreground mt-2">Coast</p>
              <p className="text-xs text-emergency font-medium">Nothing</p>
              <p className="text-xs text-muted mt-1">No service at Jenner, Goat Rock, or the beaches.</p>
            </div>
          </div>
          <div className="mt-4 bg-sage/30 border border-sage/50 rounded-xl p-4 flex items-start gap-3">
            <WifiHigh size={24} className="text-sage-dark shrink-0 mt-0.5" weight="duotone" />
            <div>
              <p className="text-sm font-semibold text-foreground">Free WiFi in Cazadero</p>
              <p className="text-xs text-muted mt-0.5">
                The General Store and the firehouse both have free WiFi. Look for the network <span className="font-mono font-semibold text-foreground">EQAC</span>.
              </p>
            </div>
          </div>
        </section>

        {gas.length > 0 && (
          <section>
            <h2 className="font-mono text-xs uppercase tracking-widest text-muted mb-4">
              Gas Stations
            </h2>
            <div className="bg-accent/5 border border-accent/15 rounded-xl p-4 mb-4">
              <p className="text-sm text-foreground font-medium">
                There is no gas station in Cazadero.
              </p>
              <p className="text-xs text-muted mt-1">
                Always fill up before heading to set. The closest options are below.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {gas.map((v, i) => (
                <div key={v.slug} className="animate-fade-in h-full" style={{ animationDelay: `${i * 80}ms` }}>
                  <VenueCard venue={v} />
                </div>
              ))}
            </div>
          </section>
        )}

        {grocery.length > 0 && (
          <section>
            <h2 className="font-mono text-xs uppercase tracking-widest text-muted mb-4">
              Groceries
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {grocery.map((v, i) => (
                <div key={v.slug} className="animate-fade-in h-full" style={{ animationDelay: `${i * 80}ms` }}>
                  <VenueCard venue={v} />
                </div>
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
              {other.map((v, i) => (
                <div key={v.slug} className="animate-fade-in h-full" style={{ animationDelay: `${i * 80}ms` }}>
                  <VenueCard venue={v} />
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
      <Footer />
    </>
  );
}
