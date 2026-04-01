import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {

  const base = "https://menmind.app"

  const staticPages = [
    "",
    "/kryzys",
    "/odbudowa",
    "/wzrost",
    "/ojcostwo",
    "/narzedzia",
    "/artykuly",
    "/praca",
    "/navimind"
  ]

  const articles = [
    "jak-znalezc-lepsza-prace",
    "praca-bez-rozwoju-co-dalej",
    "chce-sie-rozwijac-ale-nie-wiem-od-czego-zaczac",
    "chce-zmienic-zycie-zawodowe",
    "chce-robic-cos-wiecej-niz-tylko-pracowac",
    "czy-warto-uczyc-sie-czegos-nowego-po-35",
    "praca-nie-daje-mi-satysfakcji"
  ]

  return [
    ...staticPages.map(url => ({
      url: `${base}${url}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8
    })),

    ...articles.map(slug => ({
      url: `${base}/artykuly/${slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.9
    }))
  ]
}