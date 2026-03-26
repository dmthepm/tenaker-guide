export type Category =
  | "food"
  | "wellness"
  | "outdoors"
  | "essentials"
  | "emergency";

export type PriceRange = "$" | "$$" | "$$$";

export interface Venue {
  slug: string;
  name: string;
  category: Category;
  subcategory?: string;
  description: string;
  devonNote?: string;
  address: string;
  coordinates: { lat: number; lng: number };
  phone?: string;
  website?: string;
  hours?: string;
  driveTime: string;
  priceRange?: PriceRange;
  tags: string[];
  highlights?: string[];
  cellService?: boolean;
  reservation?: boolean;
  cashOnly?: boolean;
}

export interface EmergencyContact {
  name: string;
  phone?: string;
  address?: string;
  description: string;
  driveTime?: string;
}
