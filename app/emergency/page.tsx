import { emergencyContacts, safetyTips } from "@/data/emergency";
import { PageHeader } from "@/components/layout/page-header";
import { Footer } from "@/components/layout/footer";
import { Phone } from "@phosphor-icons/react/dist/ssr";

export const metadata = {
  title: "Emergency | Ten Aker Wood",
  description: "Hospitals, urgent care, poison oak, ticks, fire evacuation, and emergency contacts near Cazadero. Bookmark this page.",
  openGraph: {
    title: "Emergency | Ten Aker Wood",
    description: "Hospitals, urgent care, poison oak, ticks, fire evacuation, and emergency contacts near Cazadero. Bookmark this page.",
    images: ["/og-image.png"],
  },
};

const tipIcons: Record<string, string> = {
  "Poison Oak": "🌿",
  "Ticks": "🪲",
  "Mountain Lions": "🦁",
  "Rattlesnakes": "🐍",
  "Ocean Safety": "🌊",
  "Fire Evacuation": "🔥",
  "Road Safety": "🦌",
  "Cell Service": "📵",
  "Yellow Jackets": "🐝",
  "Mosquito Hour": "🦟",
  "No Gas": "⛽",
  "No Nearby ER": "🏥",
};

export default function EmergencyPage() {
  const medical = emergencyContacts.filter(c =>
    ["911 Emergency", "Santa Rosa Memorial Hospital", "Russian River Health Center", "Sebastopol Urgent Care"].includes(c.name)
  );
  const safety = emergencyContacts.filter(c =>
    ["Cazadero Volunteer Fire", "Poison Control", "PG&E Power Outage"].includes(c.name)
  );
  const other = emergencyContacts.filter(c =>
    ["VCA PetCare East (24/7 Emergency Vet)", "Noel's Automotive (closest mechanic)", "Occidental Towing"].includes(c.name)
  );

  return (
    <>
      <PageHeader
        title="Emergency"
        subtitle="Hospitals, safety tips, and what to do when things go wrong. Bookmark this page."
      />
      <div className="px-6 max-w-5xl mx-auto space-y-10 pb-12">
        {/* 911 Banner */}
        <a
          href="tel:911"
          className="block bg-emergency/10 border-2 border-emergency/30 rounded-2xl p-6 text-center hover:bg-emergency/15 transition-colors active:scale-[0.99]"
        >
          <p className="text-4xl mb-2">🚨</p>
          <h2 className="text-2xl font-semibold text-emergency font-[family-name:var(--font-fraunces)]">
            Call 911
          </h2>
          <p className="text-sm text-muted mt-2 max-w-md mx-auto">
            Sonoma County dispatch covers Cazadero. Response times are 20-45 minutes. Know your address. If someone needs a hospital, drive them yourself.
          </p>
        </a>

        {/* Medical Contacts */}
        <section>
          <h2 className="font-mono text-xs uppercase tracking-widest text-muted mb-4">
            🏥 Medical
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {medical.filter(c => c.name !== "911 Emergency").map((contact) => (
              <div
                key={contact.name}
                className="bg-card border border-border rounded-xl p-5 flex flex-col"
              >
                <h3 className="text-sm font-semibold text-foreground">
                  {contact.name}
                </h3>
                <p className="text-xs text-muted mt-1 flex-1">
                  {contact.description}
                </p>
                {contact.address && (
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(contact.name + ", " + contact.address)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-muted/70 mt-2 font-mono underline decoration-border hover:text-accent hover:decoration-accent transition-colors block"
                  >
                    {contact.address} ↗
                  </a>
                )}
                {contact.driveTime && (
                  <p className="text-xs text-accent font-mono font-medium mt-1">
                    {contact.driveTime} from Cazadero
                  </p>
                )}
                {contact.phone && (
                  <a
                    href={`tel:${contact.phone}`}
                    className="mt-3 flex items-center justify-center gap-1.5 bg-emergency text-white text-sm font-medium px-4 py-2.5 rounded-xl transition-colors hover:bg-emergency/90 active:scale-[0.98]"
                  >
                    <Phone size={16} weight="fill" />
                    Call
                  </a>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Fire & Safety Contacts */}
        <section>
          <h2 className="font-mono text-xs uppercase tracking-widest text-muted mb-4">
            🔥 Fire & Safety
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {safety.map((contact) => (
              <div
                key={contact.name}
                className="bg-card border border-border rounded-xl p-5 flex flex-col"
              >
                <h3 className="text-sm font-semibold text-foreground">
                  {contact.name}
                </h3>
                <p className="text-xs text-muted mt-1 flex-1">
                  {contact.description}
                </p>
                {contact.phone && (
                  <a
                    href={`tel:${contact.phone}`}
                    className="mt-3 flex items-center justify-center gap-1.5 bg-accent text-white text-sm font-medium px-4 py-2.5 rounded-xl transition-colors hover:bg-accent-hover active:scale-[0.98]"
                  >
                    <Phone size={16} weight="fill" />
                    Call
                  </a>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Other Contacts */}
        <section>
          <h2 className="font-mono text-xs uppercase tracking-widest text-muted mb-4">
            🔧 Vet, Mechanic & Towing
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {other.map((contact) => (
              <div
                key={contact.name}
                className="bg-card border border-border rounded-xl p-5 flex flex-col"
              >
                <h3 className="text-sm font-semibold text-foreground">
                  {contact.name}
                </h3>
                <p className="text-xs text-muted mt-1 flex-1">
                  {contact.description}
                </p>
                {contact.address && (
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(contact.name + ", " + contact.address)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-muted/70 mt-2 font-mono underline decoration-border hover:text-accent hover:decoration-accent transition-colors block"
                  >
                    {contact.address} ↗
                  </a>
                )}
                {contact.driveTime && (
                  <p className="text-xs text-accent font-mono font-medium mt-1">
                    {contact.driveTime} from Cazadero
                  </p>
                )}
                {contact.phone && (
                  <a
                    href={`tel:${contact.phone}`}
                    className="mt-3 flex items-center justify-center gap-1.5 bg-border/80 text-foreground text-sm font-medium px-4 py-2.5 rounded-xl transition-colors hover:bg-border active:scale-[0.98]"
                  >
                    <Phone size={16} />
                    Call
                  </a>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Emergency Alert Signups */}
        <section>
          <h2 className="font-mono text-xs uppercase tracking-widest text-muted mb-4">
            📲 Sign Up for Alerts
          </h2>
          <p className="text-sm text-muted mb-3">
            Best to do this before you arrive. These alerts can save your life in a fire evacuation.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <a
              href="https://socoemergency.org/get-ready/sign-up/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-card border border-border rounded-xl p-5 hover:border-accent/30 transition-colors"
            >
              <p className="text-sm font-semibold text-foreground">SoCoAlert</p>
              <p className="text-xs text-muted mt-1">Sonoma County emergency alerts. Phone, text, or email.</p>
              <p className="text-xs text-accent font-medium mt-2">Sign up &rarr;</p>
            </a>
            <a
              href="https://pgealerts.alerts.pge.com/outage-tools/get-psps-alerts/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-card border border-border rounded-xl p-5 hover:border-accent/30 transition-colors"
            >
              <p className="text-sm font-semibold text-foreground">PG&E PSPS Alerts</p>
              <p className="text-xs text-muted mt-1">Power shutoff notifications. Outages last 24-72+ hours.</p>
              <p className="text-xs text-accent font-medium mt-2">Sign up &rarr;</p>
            </a>
            <div className="bg-card border border-border rounded-xl p-5">
              <p className="text-sm font-semibold text-foreground">Nixle</p>
              <p className="text-xs text-muted mt-1">Text your ZIP code to sign up for local alerts.</p>
              <p className="text-sm font-mono font-semibold text-foreground mt-2">
                Text <span className="text-accent">95421</span> to <span className="text-accent">888777</span>
              </p>
            </div>
          </div>
        </section>

        {/* Safety Tips */}
        <section>
          <h2 className="font-mono text-xs uppercase tracking-widest text-muted mb-4">
            ⚠️ Safety Tips
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {safetyTips.map((tip, i) => (
              <div
                key={tip.title}
                className="bg-card border border-border rounded-xl p-5 animate-fade-in h-full"
                style={{ animationDelay: `${i * 60}ms` }}
              >
                <p className="text-2xl mb-2">{tipIcons[tip.title] || "⚠️"}</p>
                <h3 className="text-base font-semibold text-foreground">{tip.title}</h3>
                <p className="text-sm text-muted mt-1 leading-relaxed">
                  {tip.content}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
