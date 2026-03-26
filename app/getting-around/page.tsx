import { PageHeader } from "@/components/layout/page-header";
import { Footer } from "@/components/layout/footer";
import { Car, Warning, MapPin, DownloadSimple, DeviceMobileCamera } from "@phosphor-icons/react/dist/ssr";

export const metadata = {
  title: "Getting Around — Ten Aker Wood Guide",
};

const distances = [
  { from: "SFO Airport", time: "1 hr 45 min", miles: "~85 mi" },
  { from: "OAK Airport", time: "2 hr", miles: "~95 mi" },
  { from: "STS (Santa Rosa Airport)", time: "50 min", miles: "~30 mi" },
  { from: "Monte Rio", time: "15 min", miles: "~8 mi" },
  { from: "Guerneville", time: "20 min", miles: "~12 mi" },
  { from: "Jenner (coast)", time: "25 min", miles: "~15 mi" },
  { from: "Sebastopol", time: "35 min", miles: "~22 mi" },
  { from: "Santa Rosa", time: "50 min", miles: "~35 mi" },
  { from: "Petaluma", time: "1 hr", miles: "~45 mi" },
];

export default function GettingAroundPage() {
  return (
    <>
      <PageHeader
        title="Getting Around"
        subtitle="Everything you need to know about driving, distances, and navigating rural Sonoma County."
      />
      <div className="px-6 max-w-5xl mx-auto space-y-8 pb-12">
        {/* Distances */}
        <section>
          <h2 className="font-mono text-xs uppercase tracking-widest text-muted mb-4 flex items-center gap-2">
            <MapPin size={14} />
            Drive Times from Cazadero
          </h2>
          <div className="bg-card border border-border rounded-2xl overflow-hidden">
            {distances.map((d, i) => (
              <div
                key={d.from}
                className={`flex items-center justify-between px-5 py-3 ${
                  i < distances.length - 1 ? "border-b border-border" : ""
                }`}
              >
                <span className="text-sm text-foreground">{d.from}</span>
                <div className="flex items-center gap-3">
                  <span className="text-xs text-muted font-mono">
                    {d.miles}
                  </span>
                  <span className="text-sm font-medium text-accent font-mono">
                    {d.time}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Offline Maps */}
        <section>
          <h2 className="font-mono text-xs uppercase tracking-widest text-muted mb-4 flex items-center gap-2">
            <DownloadSimple size={14} />
            Download Offline Maps
          </h2>
          <div className="bg-accent/5 border border-accent/15 rounded-2xl p-5">
            <p className="text-sm text-foreground font-medium">
              Do this before you leave WiFi. You will not have cell service for navigation in Cazadero.
            </p>
            <p className="text-xs text-muted mt-2">
              Download the area from Fort Ross (north) to Bodega Bay (south), Cazadero (west) to Sebastopol (east). This covers every destination in this guide.
            </p>
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-background rounded-xl p-4 border border-border">
                <h3 className="text-sm font-semibold text-foreground flex items-center gap-2">
                  <DeviceMobileCamera size={16} />
                  Google Maps
                </h3>
                <ol className="mt-2 text-xs text-muted space-y-1.5 list-decimal list-inside">
                  <li>Open Google Maps</li>
                  <li>Tap your profile picture (top right)</li>
                  <li>Tap <span className="font-semibold text-foreground">Offline maps</span></li>
                  <li>Tap <span className="font-semibold text-foreground">Select your own map</span></li>
                  <li>Pinch to zoom out until the blue rectangle covers the area from Fort Ross down to Bodega Bay and east to Sebastopol</li>
                  <li>Tap <span className="font-semibold text-foreground">Download</span></li>
                </ol>
                <p className="mt-2 text-xs text-muted italic">~150-250 MB. Use WiFi.</p>
              </div>
              <div className="bg-background rounded-xl p-4 border border-border">
                <h3 className="text-sm font-semibold text-foreground flex items-center gap-2">
                  <DeviceMobileCamera size={16} />
                  Apple Maps
                </h3>
                <ol className="mt-2 text-xs text-muted space-y-1.5 list-decimal list-inside">
                  <li>Open Apple Maps</li>
                  <li>Tap your profile picture (bottom right)</li>
                  <li>Tap <span className="font-semibold text-foreground">Offline Maps</span></li>
                  <li>Tap <span className="font-semibold text-foreground">Download New Map</span></li>
                  <li>Search for <span className="font-semibold text-foreground">Cazadero, CA</span></li>
                  <li>Resize the box to cover Fort Ross to Bodega Bay to Sebastopol</li>
                  <li>Tap <span className="font-semibold text-foreground">Download</span></li>
                </ol>
                <p className="mt-2 text-xs text-muted italic">~200-400 MB. Use WiFi.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Tips */}
        <section>
          <h2 className="font-mono text-xs uppercase tracking-widest text-muted mb-4 flex items-center gap-2">
            <Car size={14} />
            Road Tips
          </h2>
          <div className="space-y-3">
            <div className="bg-card border border-border rounded-xl p-4">
              <h3 className="text-sm font-semibold text-foreground">
                No Uber or Lyft up here
              </h3>
              <p className="text-xs text-muted mt-1">
                Rideshare does not work in Cazadero. You need a car. If you are
                arriving without one, coordinate with production for rides or
                rentals.
              </p>
            </div>
            <div className="bg-card border border-border rounded-xl p-4">
              <h3 className="text-sm font-semibold text-foreground">
                Gas up before you come up
              </h3>
              <p className="text-xs text-muted mt-1">
                No gas in Cazadero. Fill up in Monte Rio or Guerneville. If you
                are driving from the airport, there are stations all along
                Highway 116.
              </p>
            </div>
            <div className="bg-card border border-border rounded-xl p-4">
              <h3 className="text-sm font-semibold text-foreground">
                Download your maps offline
              </h3>
              <p className="text-xs text-muted mt-1">
                See the offline maps section below for step-by-step instructions. Do this before you leave WiFi.
              </p>
            </div>
            <div className="bg-card border border-border rounded-xl p-4">
              <h3 className="text-sm font-semibold text-foreground">
                Free WiFi in Cazadero
              </h3>
              <p className="text-xs text-muted mt-1">
                The General Store and the firehouse both have free WiFi.
                Look for the network name <span className="font-mono font-semibold">EQAC</span>.
                In Guerneville, Coffee Bazaar on Armstrong Woods Rd has free WiFi and opens at 6am.
              </p>
            </div>
            <div className="bg-sage/20 border border-sage/40 rounded-xl p-4">
              <h3 className="text-sm font-semibold text-foreground">
                Monte Rio vs. Cazadero — drive times differ
              </h3>
              <p className="text-xs text-muted mt-1">
                If you are staying in Monte Rio, everything is 10-15 min closer
                than the times shown above (which are from the Caz General Store).
                Monte Rio has cell service, and you are only 10 min from Guerneville
                for groceries, gas, and restaurants.
              </p>
            </div>
            <div className="bg-card border border-border rounded-xl p-4">
              <h3 className="text-sm font-semibold text-foreground">
                Night driving is real
              </h3>
              <p className="text-xs text-muted mt-1">
                No streetlights on any of these roads. Deer are active at dawn
                and dusk. Drive slowly, use high beams when safe, and honk
                before blind curves. The roads are narrow and winding.
              </p>
            </div>
            <div className="bg-card border border-border rounded-xl p-4">
              <h3 className="text-sm font-semibold text-foreground">
                SFO or STS?
              </h3>
              <p className="text-xs text-muted mt-1">
                SFO has more flights but is further. Charles M. Schulz Airport
                in Santa Rosa (STS) is closer and easier, but has limited
                routes. Check both. If flying into SFO, take 101 North to
                Petaluma, then cut over to the coast via Bodega Hwy.
              </p>
            </div>
            <div className="bg-accent/5 border border-accent/15 rounded-xl p-4">
              <h3 className="text-sm font-semibold text-foreground flex items-center gap-2">
                <Warning size={16} className="text-accent" weight="fill" />
                Spring weather
              </h3>
              <p className="text-xs text-muted mt-1">
                April-May can have rain, especially early in the shoot. Roads
                can flood in heavy rain. The creek rises fast. If water is
                flowing across a road, do not drive through it.
              </p>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
