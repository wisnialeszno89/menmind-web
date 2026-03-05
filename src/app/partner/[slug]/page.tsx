import Link from "next/link"
import { getPartner } from "@/lib/getPartners"

export default async function PartnerPage({
params,
}:{
params:{ slug:string }
}){

const partner = await getPartner(params.slug)

if(!partner){

return(

<main className="min-h-screen flex items-center justify-center bg-gray-100">
<p>Partner nie istnieje.</p>
</main>

)

}

return(

<main className="bg-gray-100 min-h-screen">

<div className="max-w-4xl mx-auto px-6 py-20">

{/* BREADCRUMBS */}

<nav className="text-sm text-gray-500 mb-6">

<Link href="/">MenMind</Link>

<span className="mx-2">/</span>

<Link href="/propozycje">
propozycje
</Link>

<span className="mx-2">/</span>

<span>{partner.name}</span>

</nav>

{/* TYTUŁ */}

<h1 className="text-4xl font-semibold text-gray-900 mb-4">
{partner.name}
</h1>

<p className="text-gray-600 mb-10 capitalize">
{partner.category} • {partner.city}
</p>

{/* OPIS */}

<p className="text-gray-700 mb-12 max-w-2xl">
{partner.description}
</p>

{/* STRONA */}

{partner.website && (

<a
href={partner.website}
target="_blank"
className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg"
>

Przejdź do strony →

</a>

)}

{/* CTA */}

<section className="mt-20 border-t border-gray-300 pt-10">

<p className="text-gray-700 mb-4">

Szukasz podobnego wsparcia w swoim mieście?

</p>

<Link
href={`/kategoria/${partner.category}/${partner.city}`}
className="text-blue-600 hover:underline"
>

Zobacz więcej →

</Link>

</section>

</div>

</main>

)

}