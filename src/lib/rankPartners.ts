import { Partner } from "@/data/partners"

export function rankPartners(partners: (Partner & { clicks?: number })[]) {

  return partners
    .map((partner) => {

      let score = 0

// 🔥 TIER = NAJWAŻNIEJSZE (pieniądz)
if (partner.tier === "strategic") score += 1000
if (partner.tier === "pro") score += 300
if (partner.tier === "basic") score += 50

// featured
if (partner.featured) score += 200

// verified
if (partner.verified) score += 100

// ruch
if (partner.clicks) score += partner.clicks * 10

// opinie
if (partner.reviews) score += partner.reviews * 2

// rating
if (partner.rating) score += Math.round(partner.rating * 10)

      if (partner.clicks) score += partner.clicks * 5

      return { ...partner, score }
    })
    .sort((a, b) => b.score - a.score)
}