import { places } from "@/data/places"
import Link from "next/link"

export default function CityPage({params}){

const cityPlaces=places.filter(p=>p.city===params.city)

const categories=[...new Set(cityPlaces.map(p=>p.category))]

return(

<main className="bg-white min-h-screen">

<div className="max-w-6xl mx-auto px-6 py-24">

<h1 className="text-4xl font-semibold mb-10">
{params.city}
</h1>

<div className="grid md:grid-cols-3 gap-6">

{categories.map(cat=>(
<Link
key={cat}
href={`/miasto/${params.city}/${cat}`}
className="border rounded-xl p-6 hover:shadow"
>
{cat}
</Link>
))}

</div>

</div>

</main>

)

}