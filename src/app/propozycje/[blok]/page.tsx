import { cities } from "@/data/cities"
import { proposalCategories } from "@/data/proposalsCategories"
import Link from "next/link"
import { notFound } from "next/navigation"

export default function ProposalCategoryPage({
  params,
}: {
  params: { blok: string }
}) {

const category = proposalCategories.find(
  (c) => c.slug === params.blok
)

if (!category) return notFound()

return (

<main className="bg-white min-h-screen">

<div className="max-w-6xl mx-auto px-6 py-24">

<h1 className="text-4xl font-semibold mb-6">
{category.name}
</h1>

<p className="text-gray-700 mb-12 max-w-xl">
Zobacz miejsca, wydarzenia i firmy w kategorii {category.name}
w różnych miastach.
</p>

<div className="grid md:grid-cols-3 gap-4">

{cities.map((city) => (

<Link
key={city.slug}
href={`/propozycje/${category.slug}/${city.slug}`}
className="border rounded-lg p-4 hover:shadow transition"
>

<strong>
{city.name}
</strong>

<p className="text-sm text-gray-600">
{category.name}
</p>

</Link>

))}

</div>

</div>

</main>

)

}