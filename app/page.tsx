import { Hero } from "@/components/home/hero";
import { QuickLinks } from "@/components/home/quick-links";
import { TopPicks } from "@/components/home/top-picks";
import { Footer } from "@/components/layout/footer";
import { CellSignalNone, Warning, GasPump, RoadHorizon, Leaf } from "@phosphor-icons/react/dist/ssr";

export default function Home() {
  return (
    <>
      <Hero />

      {/* Know Before You Go */}
      <section className="px-6 py-4 max-w-5xl mx-auto">
        <div className="bg-accent/5 border border-accent/15 rounded-xl p-6 md:p-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <h2 className="font-[family-name:var(--font-fraunces)] text-xl font-semibold text-foreground flex items-center gap-2.5">
            <Warning size={24} className="text-accent" weight="fill" />
            Know Before You Go
          </h2>
          <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="flex items-start gap-3">
              <CellSignalNone
                size={24}
                className="text-emergency mt-1 shrink-0"
                weight="fill"
              />
              <div>
                <p className="text-base font-medium text-foreground">
                  Cell service is limited
                </p>
                <p className="text-sm text-muted mt-1 leading-relaxed">
                  Cell service is unreliable on every carrier up here. Free
                  WiFi at the General Store and firehouse (network: EQAC).
                  Download maps and music before driving up.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <GasPump
                size={24}
                className="text-accent mt-1 shrink-0"
                weight="duotone"
              />
              <div>
                <p className="text-base font-medium text-foreground">
                  No gas in Cazadero
                </p>
                <p className="text-sm text-muted mt-1 leading-relaxed">
                  Fill up in Guerneville or Jenner before heading to set.
                  Nearest station is 15 min away.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <RoadHorizon
                size={24}
                className="text-sage-dark mt-1 shrink-0"
                weight="duotone"
              />
              <div>
                <p className="text-base font-medium text-foreground">
                  Roads are narrow and winding
                </p>
                <p className="text-sm text-muted mt-1 leading-relaxed">
                  No streetlights. Deer at dawn and dusk. Drive slowly,
                  especially at night. 
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Leaf
                size={24}
                className="text-sage-dark mt-1 shrink-0"
                weight="duotone"
              />
              <div>
                <p className="text-base font-medium text-foreground">
                  Poison oak is everywhere
                </p>
                <p className="text-sm text-muted mt-1 leading-relaxed">
                  Leaves of three, let it be. Wear long pants on hikes. Check
                  the{" "}
                  <a href="/emergency" className="text-accent underline">
                    emergency page
                  </a>{" "}
                  for more.
                </p>
              </div>
            </div>
          </div>
          <a
            href="/essentials"
            className="mt-5 inline-flex items-center text-sm font-medium text-accent hover:text-accent-hover transition-colors"
          >
            Full essentials guide (gas, groceries, pharmacy, hardware) &rarr;
          </a>
        </div>
      </section>


      {/* A Note About the Locals */}
      <section className="px-6 py-4 max-w-5xl mx-auto">
        <div className="bg-sage/30 rounded-xl px-6 py-5 md:px-8 md:py-6 border border-sage/50 animate-fade-in" style={{ animationDelay: "0.35s" }}>
          <h2 className="font-[family-name:var(--font-fraunces)] text-xl font-semibold text-foreground">
            A Note About the Locals
          </h2>
          <p className="text-base text-sage-dark leading-relaxed mt-3">
            Most of the people out here are wonderful, but many are reclusive.
            They&apos;re not used to the level of activity a film production brings. People ride
            dirt bikes and horses to the General Store. We&apos;re a bit stuck in
            a different time, and that&apos;s by choice.
          </p>
          <p className="text-base text-sage-dark leading-relaxed mt-3">
            I&apos;ve found that a little patience and respect goes a long way. Most folks
            will warm up to you and be genuinely interested in what you&apos;re doing.
          </p>
        </div>
      </section>

      <QuickLinks />
      <TopPicks />
      <Footer />
    </>
  );
}
