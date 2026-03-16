import Container from "@/components/layout/Container"
import Link from "next/link"

import { cities } from "@/data/cities"
import { marketCategories } from "@/data/marketCategories"

export default function Page({ params }) {

const category = marketCategories.find(
c => c.slug === params.category
)

return(

<main className="py-16 md:py-24">

<Container>

<h1 className="text-3xl font-semibold mb-6">
{category?.name}
</h1>

<p className="text-neutral-700 mb-10">
Wybierz miasto
</p>

<div className="grid md:grid-cols-3 gap-6">

{cities.map(city =>(

<Link
key={city.slug}
href={`/rynek/${params.category}/${city.slug}`}
className="border p-6 hover:border-black"
>

{city.name}

</Link>

))}

</div>

</Container>

</main>

)

}