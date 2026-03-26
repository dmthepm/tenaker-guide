"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  House,
  ForkKnife,
  Mountains,
  Toolbox,
  FirstAidKit,
  Flower,
  Car,
} from "@phosphor-icons/react";

const tabs = [
  { href: "/", label: "Home", icon: House },
  { href: "/essentials", label: "Essentials", icon: Toolbox },
  { href: "/food", label: "Food", icon: ForkKnife },
  { href: "/outdoors", label: "Outdoors", icon: Mountains },
  { href: "/emergency", label: "SOS", icon: FirstAidKit },
];

const desktopLinks = [
  { href: "/", label: "Home" },
  { href: "/essentials", label: "Essentials" },
  { href: "/food", label: "Food & Drink" },
  { href: "/outdoors", label: "Outdoors" },
  { href: "/wellness", label: "Wellness" },
  { href: "/getting-around", label: "Getting Around" },
  { href: "/emergency", label: "Emergency" },
];

export function Nav() {
  const pathname = usePathname();

  return (
    <>
      {/* Desktop nav */}
      <nav className="hidden md:block sticky top-0 z-40 bg-background/90 backdrop-blur-sm border-b border-border">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link
            href="/"
            className="font-[family-name:var(--font-fraunces)] text-lg font-semibold text-foreground tracking-tight"
          >
            Ten Aker Wood
          </Link>
          <div className="flex items-center gap-6">
            {desktopLinks.slice(1).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm transition-colors ${
                  pathname === link.href
                    ? "text-accent font-medium"
                    : "text-muted hover:text-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* Mobile bottom tab bar */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-background/95 backdrop-blur-md border-t border-border safe-area-bottom">
        <div className="flex items-center justify-around px-2 pt-2 pb-1">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = pathname === tab.href;
            const isEmergency = tab.href === "/emergency";
            return (
              <Link
                key={tab.href}
                href={tab.href}
                className={`flex flex-col items-center gap-0.5 py-1 px-3 rounded-lg transition-colors min-w-[56px] ${
                  isActive
                    ? isEmergency
                      ? "text-emergency"
                      : "text-accent"
                    : "text-muted"
                }`}
              >
                <Icon
                  size={22}
                  weight={isActive ? "fill" : "regular"}
                />
                <span className="text-[10px] font-medium">{tab.label}</span>
              </Link>
            );
          })}
        </div>
      </nav>
    </>
  );
}
