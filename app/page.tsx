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
                  Most of Cazadero has no cell reception. Guerneville and Monte
                  Rio have coverage. Download what you need before driving up.
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

      <QuickLinks />
      <TopPicks />
      <Footer />
    </>
  );
}
