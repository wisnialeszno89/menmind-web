import { Partner } from "@/data/partners";

export function calculatePartnerScore(partner: Partner) {

  let score = 0;

  if (partner.featured) score += 100;
  if (partner.verified) score += 50;
  if (partner.tier === "strategic") score += 40;

  if (partner.views) {
    score += Math.floor(partner.views / 10);
  }

  return score;
}

export function sortPartners(partners: Partner[]) {

  return partners.sort((a,b)=>{

    const scoreA = calculatePartnerScore(a);
    const scoreB = calculatePartnerScore(b);

    return scoreB - scoreA;

  });

}