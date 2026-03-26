import { Venue, Category } from "./types";

export function filterByCategory(
  venues: Venue[],
  category: Category
): Venue[] {
  return venues.filter((v) => v.category === category);
}

export function filterByTags(venues: Venue[], tags: string[]): Venue[] {
  return venues.filter((v) => tags.some((tag) => v.tags.includes(tag)));
}

export function getDirectionsUrl(venue: Venue): string {
  const query = encodeURIComponent(venue.address);
  return `https://maps.apple.com/?daddr=${query}`;
}

export function getGoogleDirectionsUrl(venue: Venue): string {
  const { lat, lng } = venue.coordinates;
  return `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`;
}
