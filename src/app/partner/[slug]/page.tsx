import { notFound } from "next/navigation"
import { partners } from "@/data/partners"

export default function PartnerPage({ params }: any){

const partner = partners.find(
p => p.slug === params.slug
)

if(!partner) return notFound()

return(

<main className="bg-white min-h-screen">

<div className="max-w-3xl mx-auto px-6 py-24">

<h1 className="text-4xl font-semibold mb-6">
{partner.name}
</h1>

<p className="text-gray-700 mb-8">
{partner.description}
</p>

{/* SPECJALIZACJE */}

{partner.specialties && (

<div className="mb-8">

<h2 className="font-semibold mb-3">
Specjalizacje
</h2>

<div className="flex flex-wrap gap-2">

{partner.specialties.map((s)=>(
<span
key={s}
className="text-sm bg-gray-100 px-3 py-1 rounded-full"
>
{s}
</span>
))}

</div>

</div>

)}

{/* DOŚWIADCZENIE */}

{partner.experience && (

<div className="mb-8">

<h2 className="font-semibold mb-2">
Doświadczenie
</h2>

<p className="text-gray-700">
{partner.experience}
</p>

</div>

)}

{/* STRONA */}

{partner.website && (

<a
href={partner.website}
target="_blank"
className="inline-block bg-black text-white px-6 py-3 rounded-lg"
>
Odwiedź stronę
</a>

)}

</div>

</main>

)

}