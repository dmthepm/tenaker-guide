import { venues } from "@/data/venues";
import { PageHeader } from "@/components/layout/page-header";
import { VenueCard } from "@/components/ui/venue-card";
import { Footer } from "@/components/layout/footer";
import { CellSignalFull, CellSignalNone, WifiHigh } from "@phosphor-icons/react/dist/ssr";

export const metadata = {
  title: "Essentials — Ten Aker Wood Guide",
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
          <div className="bg-card border border-border rounded-2xl p-5 space-y-3">
            <div className="flex items-start gap-3">
              <CellSignalNone size={20} className="text-emergency/60 mt-0.5 shrink-0" />
              <div>
                <p className="text-sm font-medium text-foreground">Cazadero — Very Limited</p>
                <p className="text-xs text-muted mt-0.5">
                  AT&T has very spotty coverage. T-Mobile and Verizon are effectively dead. Some spots near the General Store get a bar or two. Download maps, music, and anything you need before driving up.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CellSignalFull size={20} className="text-sage-dark mt-0.5 shrink-0" />
              <div>
                <p className="text-sm font-medium text-foreground">Guerneville & Monte Rio — Good</p>
                <p className="text-xs text-muted mt-0.5">
                  All major carriers work in Guerneville and Monte Rio. This is where you will catch up on texts, emails, and calls.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CellSignalNone size={20} className="text-emergency/60 mt-0.5 shrink-0" />
              <div>
                <p className="text-sm font-medium text-foreground">Coast (Jenner, Goat Rock) — Dead</p>
                <p className="text-xs text-muted mt-0.5">
                  No cell service on most of the Sonoma Coast. Tell someone where you are going before heading out.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <WifiHigh size={20} className="text-sage-dark mt-0.5 shrink-0" />
              <div>
<p className="text-sm font-medium text-foreground">Free WiFi in Cazadero</p>
                <p className="text-xs text-muted mt-0.5">
                  The General Store and the firehouse both have free WiFi — look for the network <span className="font-mono font-medium text-foreground">EQAC</span>. In Guerneville, Coffee Bazaar has free WiFi and opens at 6am.
                </p>
              </div>
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
              {gas.map((v) => (
                <VenueCard key={v.slug} venue={v} />
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
              {grocery.map((v) => (
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
