export type Partner = {
  name: string;
  city: string; // slug miasta
  category: "psycholog" | "prawo" | "sport" | "masaz" | "grupy" | "inne";
  premium: boolean;
  description: string;
  url: string;
};

export const partners: Partner[] = [
  {
    name: "Centrum Psychologii Męskiej",
    city: "warszawa",
    category: "psycholog",
    premium: true,
    description: "Wsparcie w kryzysie, rozstaniach i wypaleniu.",
    url: "https://example.com"
  },
  {
    name: "Trening Siły Kraków",
    city: "krakow",
    category: "sport",
    premium: false,
    description: "Trening personalny dla mężczyzn 30+.",
    url: "https://example.com"
  }
];