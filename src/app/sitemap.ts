import { MetadataRoute } from "next"
import { cities } from "@/data/cities"
import { marketCategories as categories } from "@/data/marketCategories"

const baseUrl = "https://menmind.app"

// 🔥 ścieżki (SEO)
const paths = [
  "rozstanie",
  "stres",
  "finanse",
  "samotnosc",
  "energia",
  "stabilnosc",
  "rutyna",
  "kariera",
  "dyscyplina",
  "relacja",
  "prawo"
]

export default function sitemap(): MetadataRoute.Sitemap {

  // 🔥 statyczne
  const staticPages = [
    "",
    "/kryzys",
    "/odbudowa",
    "/ojcostwo",
    "/wzrost",
    "/dla-partnerow",
    "/propozycje",
    "/narzedzia",
    "/sciezki"
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
  }))

  // 🔥 ścieżki
  const pathPages = paths.map((slug) => ({
    url: `${baseUrl}/sciezki/${slug}`,
    lastModified: new Date(),
  }))

  // 🔥 kategorie marketplace
  const categoryPages = categories.map((cat) => ({
    url: `${baseUrl}/propozycje/${cat.slug}`,
    lastModified: new Date(),
  }))

  // 🔥 miasta marketplace
  const cityPages = categories.flatMap((cat) =>
    cities.map((city) => ({
      url: `${baseUrl}/propozycje/${cat.slug}/${city.slug}`,
      lastModified: new Date(),
    }))
  )

  return [
    ...staticPages,
    ...pathPages,
    ...categoryPages,
    ...cityPages
  ]
}