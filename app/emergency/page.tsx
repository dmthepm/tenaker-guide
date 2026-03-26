import { emergencyContacts, safetyTips } from "@/data/emergency";
import { PageHeader } from "@/components/layout/page-header";
import { Footer } from "@/components/layout/footer";
import { Phone, Warning, FirstAidKit } from "@phosphor-icons/react/dist/ssr";

export const metadata = {
  title: "Emergency | Ten Aker Wood",
  description: "Hospitals, urgent care, poison oak, ticks, fire evacuation, and emergency contacts near Cazadero. Bookmark this page.",
  openGraph: {
    title: "Emergency | Ten Aker Wood",
    description: "Hospitals, urgent care, poison oak, ticks, fire evacuation, and emergency contacts near Cazadero. Bookmark this page.",
    images: ["/og-image.png"],
  },
};

export default function EmergencyPage() {
  return (
    <>
      <PageHeader
        title="Emergency"
        subtitle="Hospitals, safety tips, and what to do when things go wrong. Bookmark this page."
      />
      <div className="px-6 max-w-5xl mx-auto space-y-10 pb-12">
        {/* Emergency banner */}
        <div className="bg-emergency/5 border border-emergency/20 rounded-xl p-5">
          <div className="flex items-center gap-2 mb-2">
            <FirstAidKit size={20} className="text-emergency" weight="fill" />
            <h2 className="text-base font-semibold text-emergency">
              Call 911 for emergencies
            </h2>
          </div>
          <p className="text-sm text-muted">
            Sonoma County dispatch covers Cazadero. Response times are
            20-45 minutes due to the remote location. Know the address of
            wherever you are. If someone needs a hospital, do not wait for
            an ambulance. Drive them yourself.
          </p>
        </div>

        {/* Contacts */}
        <section>
          <h2 className="font-mono text-xs uppercase tracking-widest text-muted mb-4">
            Emergency Contacts
          </h2>
          <div className="space-y-2">
            {emergencyContacts.map((contact) => (
              <div
                key={contact.name}
                className="bg-card border border-border rounded-xl p-4"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-sm font-semibold text-foreground">
                      {contact.name}
                    </h3>
                    <p className="text-xs text-muted mt-1">
                      {contact.description}
                    </p>
                    {contact.address && (
                      <p className="text-xs text-muted/70 mt-1 font-mono">
                        {contact.address}
                      </p>
                    )}
                    {contact.driveTime && (
                      <p className="text-xs text-accent font-mono mt-1">
                        {contact.driveTime} from Cazadero
                      </p>
                    )}
                  </div>
                  {contact.phone && (
                    <a
                      href={`tel:${contact.phone}`}
                      className="flex items-center gap-1.5 bg-emergency text-white text-sm font-medium px-4 py-2.5 rounded-xl transition-colors hover:bg-emergency/90 active:scale-[0.98] shrink-0"
                    >
                      <Phone size={16} weight="fill" />
                      Call
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Emergency Alert Signups */}
        <section>
          <h2 className="font-mono text-xs uppercase tracking-widest text-muted mb-4">
            Sign Up for Emergency Alerts
          </h2>
          <div className="bg-accent/5 border border-accent/15 rounded-xl p-5">
            <p className="text-sm text-foreground font-medium mb-3">
              Best to do this before you arrive. These alerts can save your life in a fire evacuation.
            </p>
            <div className="space-y-2">
              <a
                href="https://socoemergency.org/get-ready/sign-up/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between bg-background border border-border rounded-lg px-4 py-3 hover:border-accent/30 transition-colors"
              >
                <div>
                  <p className="text-sm font-semibold text-foreground">SoCoAlert</p>
                  <p className="text-xs text-muted">Sonoma County official emergency alerts. Phone, text, or email.</p>
                </div>
                <span className="text-accent text-xs font-medium shrink-0 ml-3">Sign up &rarr;</span>
              </a>
              <a
                href="https://pgealerts.alerts.pge.com/outage-tools/get-psps-alerts/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between bg-background border border-border rounded-lg px-4 py-3 hover:border-accent/30 transition-colors"
              >
                <div>
                  <p className="text-sm font-semibold text-foreground">PG&E PSPS Alerts</p>
                  <p className="text-xs text-muted">Power shutoff notifications. Outages can last 24-72+ hours in Cazadero.</p>
                </div>
                <span className="text-accent text-xs font-medium shrink-0 ml-3">Sign up &rarr;</span>
              </a>
              <div className="bg-background border border-border rounded-lg px-4 py-3">
                <p className="text-sm font-semibold text-foreground">Nixle Local Alerts</p>
                <p className="text-xs text-muted">Text your ZIP code <span className="font-mono font-semibold text-foreground">95421</span> to <span className="font-mono font-semibold text-foreground">888777</span></p>
              </div>
            </div>
          </div>
        </section>

        {/* Safety Tips */}
        <section>
          <h2 className="font-mono text-xs uppercase tracking-widest text-muted mb-4 flex items-center gap-2">
            <Warning size={14} />
            Safety Tips
          </h2>
          <div className="space-y-3">
            {safetyTips.map((tip) => (
              <details
                key={tip.title}
                className="bg-card border border-border rounded-xl overflow-hidden group"
              >
                <summary className="px-4 py-3 cursor-pointer text-sm font-semibold text-foreground hover:bg-border/30 transition-colors list-none flex items-center justify-between">
                  {tip.title}
                  <span className="text-muted text-xs group-open:rotate-180 transition-transform">
                    &#9660;
                  </span>
                </summary>
                <div className="px-4 pb-4">
                  <p className="text-sm text-muted leading-relaxed">
                    {tip.content}
                  </p>
                </div>
              </details>
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
