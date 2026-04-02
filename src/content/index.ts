import { Article } from "@/types/article"

import { kryzys } from "./kryzys"
import { odbudowa } from "./odbudowa"
import { wzrost } from "./wzrost"
import { ojcostwo } from "./ojcostwo"
import { articles as seoArticles } from "./articles"

export const worlds = {
  kryzys,
  odbudowa,
  wzrost,
  ojcostwo
}

export type WorldKey = keyof typeof worlds

const seoMapped: Article[] = seoArticles.map(a => ({
  slug: a.slug,
  title: a.title,
  description: a.intro,
  world: a.world as Article["world"],
  category: "seo",
  keywords: [],
  content: ""
}))

export const allArticles: Article[] = [
  ...kryzys,
  ...odbudowa,
  ...wzrost,
  ...ojcostwo,
  ...seoMapped
]