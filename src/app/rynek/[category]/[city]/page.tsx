import Container from "@/components/layout/Container"
import Link from "next/link"

import { partners } from "@/data/partners"
import { cities } from "@/data/cities"
import { marketCategories } from "@/data/marketCategories"

export default function Page({ params }) {

const category = marketCategories.find(
c => c.slug === params.category
)

const city = cities.find(
c => c.slug === params.city
)

const results = partners.filter(

p =>
p.category === params.category &&
p.city === params.city

)

return(

<main className="py-16 md:py-24">

<Container>

<h1 className="text-3xl font-semibold mb-6">
{category?.name} — {city?.name}
</h1>

{results.length === 0 && (

<p className="text-neutral-600">
Brak partnerów w tej kategorii w tym mieście.
</p>

)}

<div className="grid md:grid-cols-2 gap-6">

{results.map(partner =>(

<Link
key={partner.slug}
href={`/partner/${partner.slug}`}
className="border p-6 hover:border-black"
>

<h3 className="font-medium mb-2">
{partner.name}
</h3>

<p className="text-sm text-neutral-600">
{partner.description}
</p>

</Link>

))}

</div>

</Container>

</main>

)

}