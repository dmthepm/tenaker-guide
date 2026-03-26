import Link from "next/link";
import {
  ForkKnife,
  Flower,
  Mountains,
  Toolbox,
  Car,
  FirstAidKit,
} from "@phosphor-icons/react/dist/ssr";

const links = [
  {
    href: "/food",
    label: "Food & Drink",
    description: "Restaurants, cafes, bakeries",
    icon: ForkKnife,
    color: "text-accent",
  },
  {
    href: "/wellness",
    label: "Wellness",
    description: "Spas, massage, soaking",
    icon: Flower,
    color: "text-sage-dark",
  },
  {
    href: "/outdoors",
    label: "Outdoors",
    description: "Hikes, beaches, day trips",
    icon: Mountains,
    color: "text-accent",
  },
  {
    href: "/essentials",
    label: "Essentials",
    description: "Gas, groceries, cell service",
    icon: Toolbox,
    color: "text-sage-dark",
  },
  {
    href: "/getting-around",
    label: "Getting Around",
    description: "Distances, roads, tips",
    icon: Car,
    color: "text-accent",
  },
  {
    href: "/emergency",
    label: "Emergency",
    description: "Hospital, safety, SOS",
    icon: FirstAidKit,
    color: "text-emergency",
  },
];

export function QuickLinks() {
  return (
    <section className="px-6 py-8 max-w-5xl mx-auto">
      <h2 className="font-[family-name:var(--font-fraunces)] text-2xl font-semibold text-foreground mb-5">
        Quick Links
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {links.map((link, i) => {
          const Icon = link.icon;
          return (
            <Link
              key={link.href}
              href={link.href}
              className="animate-fade-in bg-card border border-border rounded-xl p-4 md:p-5 transition-all hover:border-accent/30 hover:-translate-y-0.5 active:scale-[0.98]"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <Icon size={24} className={link.color} weight="duotone" />
              <h3 className="mt-2 text-sm font-semibold text-foreground">
                {link.label}
              </h3>
              <p className="mt-0.5 text-xs text-muted">{link.description}</p>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
