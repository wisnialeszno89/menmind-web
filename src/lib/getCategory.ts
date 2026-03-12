import { marketCategories } from "@/data/marketCategories"

export function getCategory(slug: string) {

return marketCategories.find(
category => category.slug === slug
)

}