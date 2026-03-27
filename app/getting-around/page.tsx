import { PageHeader } from "@/components/layout/page-header";
import { Footer } from "@/components/layout/footer";
import { Car, MapPin, DownloadSimple, DeviceMobileCamera, Path } from "@phosphor-icons/react/dist/ssr";

export const metadata = {
  title: "Getting Around | Ten Aker Wood",
  description: "Drive times, offline maps, road tips, and scenic drives around Cazadero. No Uber up here. Download your maps before you lose service.",
  openGraph: {
    title: "Getting Around | Ten Aker Wood",
    description: "Drive times, offline maps, road tips, and scenic drives around Cazadero. No Uber up here. Download your maps before you lose service.",
    images: ["/og-image.png"],
  },
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
              Best to do this before you leave WiFi. There&apos;s no cell service for navigation in Cazadero.
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

        {/* Scenic Drives */}
        <section>
          <h2 className="font-mono text-xs uppercase tracking-widest text-muted mb-4 flex items-center gap-2">
            <Path size={14} />
            Scenic Drives
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="bg-card border border-border rounded-xl p-5">
              <p className="text-2xl mb-2">🌲</p>
              <h3 className="text-base font-semibold text-foreground">Fort Ross Road</h3>
              <p className="text-sm text-muted mt-1 leading-relaxed">
                The best drive. Enclosed redwood canyon opens suddenly to ocean views at the ridge. 10 miles from Cazadero to Hwy 1. On a clear day you can see to Mt. Tam.
              </p>
            </div>
            <div className="bg-card border border-border rounded-xl p-5">
              <p className="text-2xl mb-2">🌊</p>
              <h3 className="text-base font-semibold text-foreground">Coleman Valley Road</h3>
              <p className="text-sm text-muted mt-1 leading-relaxed">
                10 miles from Occidental to the coast. Climbs steeply through forest, crests with sweeping Pacific views, then drops to Coleman Beach. Mid-afternoon for clear views.
              </p>
            </div>
            <div className="bg-card border border-border rounded-xl p-5">
              <p className="text-2xl mb-2">🛤️</p>
              <h3 className="text-base font-semibold text-foreground">Bohemian Highway</h3>
              <p className="text-sm text-muted mt-1 leading-relaxed">
                Freestone &rarr; Occidental &rarr; Monte Rio. Redwood groves, pastures, tiny towns. Stop at Wild Flour Bread in Freestone (Fri&ndash;Mon only).
              </p>
            </div>
            <div className="bg-card border border-border rounded-xl p-5">
              <p className="text-2xl mb-2">🐄</p>
              <h3 className="text-base font-semibold text-foreground">Valley Ford to Bodega</h3>
              <p className="text-sm text-muted mt-1 leading-relaxed">
                A completely different landscape. Open dairy pasture, weathered barns, coastal pastoral. The town of Bodega has the church from Hitchcock&apos;s <em>The Birds</em>.
              </p>
            </div>
          </div>
        </section>

        {/* Tips */}
        <section>
          <h2 className="font-mono text-xs uppercase tracking-widest text-muted mb-4 flex items-center gap-2">
            <Car size={14} />
            Road Tips
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="bg-card border border-border rounded-xl p-5">
              <p className="text-2xl mb-2">🚗</p>
              <h3 className="text-base font-semibold text-foreground">No Uber or Lyft</h3>
              <p className="text-sm text-muted mt-1 leading-relaxed">
                Rideshare doesn&apos;t reach Cazadero. Locals use{" "}
                <a href="https://r2t2taxi.org/" target="_blank" rel="noopener noreferrer" className="text-accent underline">R2T2 Taxi</a>
                {" "}for rides and food delivery to lower Caz and Monte Rio.
              </p>
            </div>
            <div className="bg-card border border-border rounded-xl p-5">
              <p className="text-2xl mb-2">⛽</p>
              <h3 className="text-base font-semibold text-foreground">Gas up first</h3>
              <p className="text-sm text-muted mt-1 leading-relaxed">
                No gas in Cazadero. Guerneville and Jenner are the closest. If driving from the airport, stations all along Highway 116.
              </p>
            </div>
            <div className="bg-card border border-border rounded-xl p-5">
              <p className="text-2xl mb-2">📡</p>
              <h3 className="text-base font-semibold text-foreground">Free WiFi in Caz</h3>
              <p className="text-sm text-muted mt-1 leading-relaxed">
                General Store and firehouse both have free WiFi. Network: <span className="font-mono font-semibold">EQAC</span>. In Guerneville, Coffee Bazaar opens at 6am with WiFi.
              </p>
            </div>
            <div className="bg-card border border-border rounded-xl p-5">
              <p className="text-2xl mb-2">📍</p>
              <h3 className="text-base font-semibold text-foreground">Monte Rio vs. Cazadero</h3>
              <p className="text-sm text-muted mt-1 leading-relaxed">
                Staying in Monte Rio? Everything is 10-15 min closer than the times above. You have cell service and you&apos;re 10 min from Guerneville for groceries and gas.
              </p>
            </div>
            <div className="bg-card border border-border rounded-xl p-5">
              <p className="text-2xl mb-2">🦌</p>
              <h3 className="text-base font-semibold text-foreground">Night driving</h3>
              <p className="text-sm text-muted mt-1 leading-relaxed">
                No streetlights. Deer, foxes, and raccoons at dawn and dusk. Drive slow, high beams when safe. The roads are narrow and winding.
              </p>
            </div>
            <div className="bg-card border border-border rounded-xl p-5">
              <p className="text-2xl mb-2">👋</p>
              <h3 className="text-base font-semibold text-foreground">Let locals pass</h3>
              <p className="text-sm text-muted mt-1 leading-relaxed">
                If someone flashes their lights behind you, pull over and let them through. Locals know these roads. Plenty of pulloffs. Everybody&apos;s happier.
              </p>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
