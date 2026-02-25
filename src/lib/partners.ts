export type Category =
  | "psycholog"
  | "psychiatra"
  | "prawo"
  | "sport"
  | "masaz"
  | "grupy"
  | "wyjazdy"
  | "inne";

export type Partner = {
  name: string;
  city: string;
  category: Category;
  premium: boolean;
  description: string;
  url: string;
};

export const categories: { label: string; value: Category }[] = [
  { label: "Psycholog", value: "psycholog" },
  { label: "Psychiatra", value: "psychiatra" },
  { label: "Prawo", value: "prawo" },
  { label: "Sport", value: "sport" },
  { label: "Masaż", value: "masaz" },
  { label: "Grupy wsparcia", value: "grupy" },
  { label: "Wyjazdy", value: "wyjazdy" },
  { label: "Inne", value: "inne" },
];

export const categoryLabels: Record<Category, string> = {
  psycholog: "Psycholog",
  psychiatra: "Psychiatra",
  prawo: "Prawo",
  sport: "Sport",
  masaz: "Masaż",
  grupy: "Grupy wsparcia",
  wyjazdy: "Wyjazdy",
  inne: "Inne",
};

export const partners: Partner[] = [
  {
    name: "Centrum Psychologii Męskiej",
    city: "warszawa",
    category: "psycholog",
    premium: true,
    description: "Wsparcie w kryzysie, rozstaniach i wypaleniu.",
    url: "https://example.com",
  },
  {
    name: "Trening Siły Kraków",
    city: "krakow",
    category: "sport",
    premium: false,
    description: "Trening personalny dla mężczyzn 30+.",
    url: "https://example.com",
  },
];