import { Partner } from "@/data/partners"

export function rankPartners(partners: (Partner & { clicks?: number })[]) {

  return partners
    .map((partner) => {

      let score = 0

      if (partner.featured) score += 100
      if (partner.verified) score += 50

      if (partner.tier === "pro") score += 80
      if (partner.tier === "strategic") score += 200

      if (partner.views) score += Math.floor(partner.views / 10)
      if (partner.reviews) score += partner.reviews * 2
      if (partner.rating) score += Math.round(partner.rating * 10)

      if (partner.clicks) score += partner.clicks * 5

      return { ...partner, score }
    })
    .sort((a, b) => b.score - a.score)
}