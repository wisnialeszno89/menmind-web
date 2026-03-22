import { partners } from "@/data/partners"

export function getPartnersByCategory(
  category: string,
  city?: string
) {

  // 🔥 jeśli nie ma miasta → zwróć wszystkich z kategorii
  if (!city) {
    return partners.filter(
      (partner) => partner.category === category
    )
  }

  // 🔥 najpierw lokalni
  const local = partners.filter(
    (partner) =>
      partner.category === category &&
      partner.city === city
  )

  if (local.length > 0) {
    return local
  }

  // 🔥 fallback online
  const online = partners.filter(
    (partner) =>
      partner.category === category &&
      partner.locationType === "online"
  )

  if (online.length > 0) {
    return online
  }

  // 🔥 fallback national
  return partners.filter(
    (partner) =>
      partner.category === category &&
      partner.locationType === "national"
  )
}