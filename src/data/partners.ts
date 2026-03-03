export type PartnerTier = "standard" | "strategic";

export type Partner = {
  id: string;
  name: string;
  city: string;
  category: string;
  description: string;
  state: "kryzys" | "odbudowa" | "wzrost" | "ojcostwo";
  tier: PartnerTier;
  verified?: boolean;
  featured?: boolean;
  website?: string; // ✅ DODANE
};

export const partners: Partner[] = [
  {
    id: "p1",
    name: "Centrum Terapii Męskiej",
    city: "Poznań",
    category: "Psycholog",
    description: "Wsparcie w kryzysie, rozstaniu, wypaleniu.",
    state: "kryzys",
    tier: "strategic",
    verified: true,
    website: "https://example.com",
  },
  {
    id: "p2",
    name: "Akademia Ruchu",
    city: "Wrocław",
    category: "Trening",
    description: "Trening funkcjonalny i odbudowa energii.",
    state: "odbudowa",
    tier: "standard",
    website: "https://example.com",
  },
  {
    id: "p3",
    name: "Mediacja Rodzinna Nowak",
    city: "Warszawa",
    category: "Prawo rodzinne",
    description: "Mediacje w sprawach rodzinnych i opieki.",
    state: "ojcostwo",
    tier: "strategic",
    verified: true,
    featured: true,
    website: "https://example.com",
  },
  {
    id: "p4",
    name: "Reset Camp",
    city: "Zakopane",
    category: "Wyjazdy",
    description: "Weekendowy reset dla mężczyzn.",
    state: "wzrost",
    tier: "standard",
    website: "https://example.com",
  },
];