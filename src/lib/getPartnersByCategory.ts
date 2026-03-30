import { partners, placeholderPartners } from "@/data/partners"

export function getPartnersByCategory(
  category: string,
  city?: string
) {

  const matchesCategory = (p:any) =>
    p.category?.some(
      (c:string) => c.toLowerCase() === category.toLowerCase()
    )

  const matchesCity = (p:any) =>
    p.city?.some(
      (c:string) => c.toLowerCase() === city?.toLowerCase()
    )

  // 🔥 brak miasta → zwróć wszystkich + placeholder
  if (!city) {

    const real = partners.filter(matchesCategory)
    const fallback = placeholderPartners.filter(matchesCategory)

    return [...real, ...fallback]
  }

  // 🔥 lokalni
  const local = partners.filter(
    (p) => matchesCategory(p) && matchesCity(p)
  )

  if (local.length > 0) {
    return local
  }

  // 🔥 online fallback
  const online = partners.filter(
    (p) =>
      matchesCategory(p) &&
      p.locationType === "online"
  )

  if (online.length > 0) {
    return online
  }

  // 🔥 national fallback
  const national = partners.filter(
    (p) =>
      matchesCategory(p) &&
      p.locationType === "national"
  )

  if (national.length > 0) {
    return national
  }

  // 🔥 ostatni fallback → placeholder
  return placeholderPartners.filter(matchesCategory)

}