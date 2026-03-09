import { partners } from "@/data/partners"

export function getPartnersByCategory(category: string) {

  return partners.filter(
    (partner) => partner.category === category
  )

}