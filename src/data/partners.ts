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

  views?: number;
  rating?: number;
  reviews?: number;

  website?: string;
};