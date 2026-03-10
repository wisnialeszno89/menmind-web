import { notFound } from "next/navigation"
import { cities } from "@/data/cities"
import { proposalCategories } from "@/data/proposalsCategories"

export default function ProposalCityPage({ params }) {

const category = proposalCategories.find(
c => c.slug === params.blok
)

const city = cities.find(
c => c.slug === params.miasto
)

if(!category || !city) return notFound()

return (

<main className="bg-white min-h-screen">

<div className="max-w-5xl mx-auto px-6 py-24">

<h1 className="text-4xl font-semibold mb-6">
{category.name} — {city.name}
</h1>

<p className="text-gray-700 mb-10">
W tym miejscu będą pojawiać się firmy i organizacje oferujące
aktywności w kategorii {category.name} w mieście {city.name}.
</p>

<div className="border rounded-xl p-6">

<p className="text-gray-600">
Lista partnerów pojawi się tutaj.
</p>

</div>

</div>

</main>

)

}