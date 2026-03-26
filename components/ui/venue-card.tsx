import { Venue } from "@/lib/types";
import { getGoogleDirectionsUrl, getGoogleMapsUrl } from "@/lib/utils";
import { TagPill } from "./tag-pill";
import { DriveTime } from "./drive-time";
import {
  MapPin,
  Phone,
  Clock,
  NavigationArrow,
  MapTrifold,
  CellSignalFull,
  CellSignalNone,
  Star,
  ArrowSquareOut,
} from "@phosphor-icons/react/dist/ssr";

interface VenueCardProps {
  venue: Venue;
}

export function VenueCard({ venue }: VenueCardProps) {
  return (
    <article className="bg-card border border-border rounded-2xl p-5 md:p-6 transition-all hover:border-accent/20 h-full flex flex-col">
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <h3 className="font-[family-name:var(--font-fraunces)] text-lg font-semibold text-foreground leading-snug">
              {venue.name}
            </h3>
            {venue.priceRange && (
              <span className="text-xs text-muted font-mono">
                {venue.priceRange}
              </span>
            )}
          </div>
          {venue.subcategory && (
            <span className="text-xs text-muted uppercase tracking-wider font-mono">
              {venue.subcategory}
            </span>
          )}
        </div>
        <DriveTime time={venue.driveTime} />
      </div>

      <p className="mt-3 text-sm text-muted leading-relaxed">
        {venue.description}
      </p>

      {venue.devonNote && (
        <div className="mt-3 bg-sage/30 rounded-lg px-3.5 py-2.5 border border-sage/50">
          <p className="text-sm text-sage-dark leading-relaxed">
            <span className="font-medium">Devon:</span> {venue.devonNote}
          </p>
        </div>
      )}

      {venue.highlights && venue.highlights.length > 0 && (
        <ul className="mt-3 flex flex-wrap gap-1.5">
          {venue.highlights.map((h) => (
            <li key={h}>
              <TagPill label={h} />
            </li>
          ))}
        </ul>
      )}

      <div className="mt-4 flex flex-col gap-2 text-xs text-muted">
        {venue.hours && (
          <div className="flex items-center gap-1.5">
            <Clock size={14} className="shrink-0" />
            <span>{venue.hours}</span>
          </div>
        )}
        {venue.address && (
          <a
            href={getGoogleMapsUrl(venue)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-accent transition-colors"
          >
            <MapPin size={14} className="shrink-0" />
            <span className="truncate underline decoration-border hover:decoration-accent">
              {venue.address}
            </span>
            <ArrowSquareOut size={12} className="shrink-0" />
          </a>
        )}
        <div className="flex items-center gap-1.5 flex-wrap">
          {venue.cellService !== undefined && (
            <span className="flex items-center gap-1">
              {venue.cellService ? (
                <CellSignalFull size={16} className="text-sage-dark" weight="fill" />
              ) : (
                <CellSignalNone size={16} className="text-emergency" weight="fill" />
              )}
              <span>
                {venue.cellService ? "Cell service" : "No cell service"}
              </span>
            </span>
          )}
          {venue.reservation && (
            <span className="ml-3 flex items-center gap-1">
              <Star size={14} />
              Reservation recommended
            </span>
          )}
          {venue.cashOnly && <span className="ml-3">Cash only</span>}
        </div>
      </div>

      {/* Action buttons: icon-only on mobile, icon+label on sm+ */}
      <div className="mt-4 flex flex-wrap gap-1.5 sm:gap-2">
        <a
          href={getGoogleMapsUrl(venue)}
          target="_blank"
          rel="noopener noreferrer"
          title="Open in Google Maps"
          className="flex items-center justify-center gap-1.5 bg-accent text-white font-medium p-2.5 sm:px-4 sm:py-2.5 rounded-xl transition-colors hover:bg-accent-hover active:scale-[0.98]"
        >
          <MapTrifold size={18} weight="fill" className="sm:hidden" />
          <MapTrifold size={16} weight="fill" className="hidden sm:block" />
          <span className="hidden sm:inline text-sm">Map</span>
        </a>
        <a
          href={getGoogleDirectionsUrl(venue)}
          target="_blank"
          rel="noopener noreferrer"
          title="Get directions"
          className="flex items-center justify-center gap-1.5 bg-border/50 text-foreground font-medium p-2.5 sm:px-4 sm:py-2.5 rounded-xl transition-colors hover:bg-border active:scale-[0.98]"
        >
          <NavigationArrow size={18} weight="fill" className="sm:hidden" />
          <NavigationArrow size={16} weight="fill" className="hidden sm:block" />
          <span className="hidden sm:inline text-sm">Directions</span>
        </a>
        {venue.phone && (
          <a
            href={`tel:${venue.phone}`}
            title="Call"
            className="flex items-center justify-center gap-1.5 bg-border/50 text-foreground font-medium p-2.5 sm:px-4 sm:py-2.5 rounded-xl transition-colors hover:bg-border active:scale-[0.98]"
          >
            <Phone size={18} className="sm:hidden" />
            <Phone size={16} className="hidden sm:block" />
            <span className="hidden sm:inline text-sm">Call</span>
          </a>
        )}
        {venue.website && (
          <a
            href={venue.website}
            target="_blank"
            rel="noopener noreferrer"
            title="Visit website"
            className="flex items-center justify-center gap-1.5 bg-border/50 text-foreground font-medium p-2.5 sm:px-4 sm:py-2.5 rounded-xl transition-colors hover:bg-border active:scale-[0.98]"
          >
            <ArrowSquareOut size={18} className="sm:hidden" />
            <ArrowSquareOut size={16} className="hidden sm:block" />
            <span className="hidden sm:inline text-sm">Website</span>
          </a>
        )}
      </div>
    </article>
  );
}
