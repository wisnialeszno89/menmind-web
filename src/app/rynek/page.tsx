import Container from "@/components/layout/Container"
import Link from "next/link"

import { marketCategories } from "@/data/marketCategories"

export default function Page(){

return(

<main className="py-16 md:py-24">

<Container>

<h1 className="text-3xl md:text-4xl font-semibold mb-6">
Rynek MenMind
</h1>

<p className="text-neutral-700 max-w-xl mb-12">
Znajdź specjalistów, miejsca i aktywności które pomogą
Ci zadbać o zdrowie, rozwój i relacje.
</p>

<div className="grid md:grid-cols-3 gap-6">

{marketCategories.map(category =>(

<Link
key={category.slug}
href={`/rynek/${category.slug}`}
className="border p-6 hover:border-black"
>

<h3 className="font-medium mb-2">
{category.name}
</h3>

<p className="text-sm text-neutral-600">
{category.description}
</p>

</Link>

))}

</div>

</Container>

</main>

)

}