import { proposals } from "@/data/proposals"
import { notFound } from "next/navigation"
import Link from "next/link"

export default function PartnerPage({ params }) {

const partner = proposals.find(
p => p.slug === params.slug
)

if(!partner) return notFound()

return (

<main className="bg-white min-h-screen">

<div className="max-w-4xl mx-auto px-6 py-24">

<h1 className="text-4xl font-semibold mb-4">
{partner.name}
</h1>

<p className="text-gray-600 mb-10">
{partner.description}
</p>

{/* OBRAZ */}

{partner.image && (

<img
src={partner.image}
alt={partner.name}
className="rounded-xl mb-10"
/>

)}

{/* INFORMACJE */}

<div className="border rounded-xl p-6 mb-10">

<p className="text-gray-700 mb-2">
Miasto: <span className="font-semibold">{partner.city}</span>
</p>

<p className="text-gray-700">
Kategoria: <span className="font-semibold">{partner.category}</span>
</p>

</div>

{/* LINK */}

{partner.link && (

<a
href={partner.link}
target="_blank"
rel="noopener noreferrer"
className="inline-block bg-black text-white px-6 py-3 rounded-lg"
>

Przejdź do strony partnera

</a>

)}

{/* POWRÓT */}

<div className="mt-16">

<Link
href="/propozycje"
className="text-gray-600 underline"
>

← Wróć do propozycji

</Link>

</div>

</div>

</main>

)

}