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
  },
  {
    id: "p2",
    name: "Akademia Ruchu",
    city: "Wrocław",
    category: "Trening",
    description: "Trening funkcjonalny i odbudowa energii.",
    state: "odbudowa",
    tier: "standard",
  },
  {
    id: "p3",
    name: "Mediacja Rodzinna Nowak",
    city: "Warszawa",
    category: "Prawo",
    description: "Mediacje w sprawach rodzinnych i opieki.",
    state: "ojcostwo",
    tier: "strategic",
    verified: true,
  },
  {
    id: "p4",
    name: "Reset Camp",
    city: "Zakopane",
    category: "Wyjazdy",
    description: "Weekendowy reset dla mężczyzn.",
    state: "wzrost",
    tier: "standard",
  },
];