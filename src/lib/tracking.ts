export function trackEvent(event: string, payload?: Record<string, any>) {
  if (typeof window === "undefined") return

  // 🔍 DEV LOG
  if (process.env.NODE_ENV === "development") {
    console.log("TRACK:", event, payload)
  }

  // 🔥 ZAPIS DO LOCALSTORAGE
  const key = "tracking-data"

  const existing = localStorage.getItem(key)

  let data: Record<string, any[]> = {}

  if (existing) {
    data = JSON.parse(existing)
  }

  if (!data[event]) {
    data[event] = []
  }

  data[event].push({
    ...payload,
    timestamp: Date.now()
  })

  localStorage.setItem(key, JSON.stringify(data))
}
export function getPartnerClicks(): Record<string, number> {
  if (typeof window === "undefined") return {}

  const data = localStorage.getItem("tracking-data")

  if (!data) return {}

  const parsed = JSON.parse(data)

  const clicks: Record<string, number> = {}

  if (!parsed.partner_click) return {}

  parsed.partner_click.forEach((item: any) => {
    const slug = item.slug
    clicks[slug] = (clicks[slug] || 0) + 1
  })

  return clicks
}