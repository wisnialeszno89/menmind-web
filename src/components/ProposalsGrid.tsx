import Link from "next/link"
import { proposalSections } from "@/data/proposalSections"

export default function ProposalsGrid(){

return(

<div className="space-y-16">

{proposalSections.map(section => (

<div key={section.slug}>

<h2 className="text-2xl font-semibold mb-6">
{section.name}
</h2>

<div className="grid md:grid-cols-3 gap-4">

{section.categories.map(category => (

<Link
key={category.slug}
href={`/propozycje/${category.slug}`}
className="border rounded-xl p-5 hover:shadow transition"
>

<h3 className="font-semibold mb-1">
{category.name}
</h3>

<p className="text-sm text-gray-600">
Zobacz propozycje
</p>

</Link>

))}

</div>

</div>

))}

</div>

)

}