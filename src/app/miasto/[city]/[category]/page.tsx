import { places } from "@/data/places"

export default function CategoryPage({params}){

const results=places.filter(
p=>p.city===params.city && p.category===params.category
)

return(

<main className="bg-white min-h-screen">

<div className="max-w-5xl mx-auto px-6 py-24">

<h1 className="text-4xl font-semibold mb-10">
{params.category} — {params.city}
</h1>

<div className="grid md:grid-cols-2 gap-6">

{results.map(place=>(
<div key={place.name} className="border rounded-xl p-6">

<h3 className="font-semibold mb-2">
{place.name}
</h3>

<p className="text-gray-600 mb-4">
{place.description}
</p>

<a href={place.website} target="_blank">
Strona →
</a>

</div>
))}

</div>

</div>

</main>

)

}