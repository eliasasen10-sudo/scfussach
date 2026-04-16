export interface Match {
  id: number;
  date: string;
  time: string;
  home: string;
  away: string;
  homeScore: number | null;
  awayScore: number | null;
  competition: string;
  team: TeamName;
  location: string;
  isHome: boolean;
}

export interface NewsItem {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  category: NewsCategory;
  slug: string;
  imageUrl?: string;
  imagePosition?: string;
  imageContain?: boolean;
  href?: string;
  featured?: boolean;
}

export interface Sponsor {
  id: number;
  name: string;
  tier: "gold" | "silver" | "bronze" | "partner";
  website?: string;
  logoPlaceholder: string;
  imageUrl?: string;
}

export interface TeamMember {
  id: number;
  name: string;
  position: string;
  number?: number;
  imageUrl?: string;
}

export interface Team {
  id: string;
  name: TeamName;
  shortName: string;
  description: string;
  trainer: string;
  league: string;
}

export type TeamName =
  | "1. Mannschaft"
  | "1b Mannschaft"
  | "Nachwuchs"
  | "BSK"
  | "Altherren";

export type NewsCategory =
  | "Vereinsnews"
  | "Spielbericht"
  | "Jugend"
  | "Veranstaltung"
  | "Transfer"
  | "Allgemein";
