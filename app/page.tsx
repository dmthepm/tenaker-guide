import { Hero } from "@/components/home/hero";
import { QuickLinks } from "@/components/home/quick-links";
import { TopPicks } from "@/components/home/top-picks";
import { Footer } from "@/components/layout/footer";
import { CellSignalNone, Warning } from "@phosphor-icons/react/dist/ssr";

export default function Home() {
  return (
    <>
      <Hero />

      {/* Know Before You Go */}
      <section className="px-6 py-6 max-w-5xl mx-auto">
        <div className="bg-accent/5 border border-accent/15 rounded-xl p-5">
          <h2 className="font-[family-name:var(--font-fraunces)] text-lg font-semibold text-foreground flex items-center gap-2">
            <Warning size={20} className="text-accent" weight="fill" />
            Know Before You Go
          </h2>
          <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="flex items-start gap-2.5">
              <CellSignalNone
                size={18}
                className="text-emergency/60 mt-0.5 shrink-0"
              />
              <div>
                <p className="text-sm font-medium text-foreground">
                  Cell service is limited
                </p>
                <p className="text-xs text-muted mt-0.5">
                  AT&T is spotty, T-Mobile and Verizon are dead. Free WiFi
                  at the General Store and firehouse (network: EQAC). Download
                  maps and music before driving up.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-2.5">
              <span className="text-accent mt-0.5 shrink-0 text-base">
                &#9981;
              </span>
              <div>
                <p className="text-sm font-medium text-foreground">
                  No gas in Cazadero
                </p>
                <p className="text-xs text-muted mt-0.5">
                  Fill up in Monte Rio or Guerneville before heading to set.
                  Nearest station is 15 min away.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-2.5">
              <span className="text-sage-dark mt-0.5 shrink-0 text-base">
                &#127795;
              </span>
              <div>
                <p className="text-sm font-medium text-foreground">
                  Roads are narrow and winding
                </p>
                <p className="text-xs text-muted mt-0.5">
                  No streetlights. Deer at dawn and dusk. Drive slowly,
                  especially at night. Honk before blind curves.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-2.5">
              <span className="text-sage-dark mt-0.5 shrink-0 text-base">
                &#127807;
              </span>
              <div>
                <p className="text-sm font-medium text-foreground">
                  Poison oak is everywhere
                </p>
                <p className="text-xs text-muted mt-0.5">
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
        </div>
      </section>


      {/* A Note About the Locals */}
      <section className="px-6 py-4 max-w-5xl mx-auto">
        <div className="bg-sage/30 rounded-xl px-5 py-4 border border-sage/50">
          <h2 className="font-[family-name:var(--font-fraunces)] text-lg font-semibold text-foreground">
            A Note About the Locals
          </h2>
          <p className="text-sm text-sage-dark leading-relaxed mt-2">
            Most of the people out here are wonderful, but many are reclusive.
            They&apos;re not used to the level of activity a film production brings. People ride
            dirt bikes and horses to the General Store. We&apos;re a bit stuck in
            a different time, and that&apos;s by choice.
          </p>
          <p className="text-sm text-sage-dark leading-relaxed mt-2">
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
