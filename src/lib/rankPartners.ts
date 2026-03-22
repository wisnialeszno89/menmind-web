import { Partner } from "@/data/partners"

export function rankPartners(
  partners: (Partner & { clicks?: number })[]
) {

  return partners
    .map((partner) => {

      let score = 0

      // 💎 TIER (najważniejsze)
      if (partner.tier === "strategic") score += 10000
      if (partner.tier === "pro") score += 3000
      if (partner.tier === "basic") score += 500

      // ⭐ featured
      if (partner.featured) score += 2000

      // 🌍 online
      if (partner.locationType === "online") score += 1500
      if (partner.locationType === "national") score += 800

      // ⭐ rating
      if (partner.rating) score += Math.round(partner.rating * 100)

      // 👥 reviews
      if (partner.reviews) score += partner.reviews * 10

      // 🔥 kliknięcia
      if (partner.clicks) score += partner.clicks * 5

      return { ...partner, score }

    })
    .sort((a, b) => b.score - a.score)

}