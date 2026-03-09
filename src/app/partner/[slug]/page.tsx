import { partners } from "@/data/partners"
import Link from "next/link"

export default function PartnerProfilePage({params}:{params:{slug:string}}){

const partner=partners.find((p)=>p.slug===params.slug)

if(!partner) return null

return(

<main className="bg-white min-h-screen">

<div className="max-w-4xl mx-auto px-6 py-24">

{/* HEADER */}

<div className="flex gap-6 mb-10">

{partner.photo &&(

<img
src={partner.photo}
className="w-28 h-28 rounded-lg object-cover"
/>

)}

<div>

<h1 className="text-3xl font-semibold text-black mb-2">
{partner.name}
</h1>

<p className="text-black text-sm">
{partner.category} – {partner.city}
</p>

{partner.verified &&(

<span className="inline-block text-xs bg-green-100 text-green-800 px-2 py-1 rounded mt-2">
Zweryfikowany specjalista
</span>

)}

</div>

</div>

{/* OPIS */}

<p className="text-black mb-10">
{partner.description}
</p>

{/* DOŚWIADCZENIE */}

{partner.experience &&(

<div className="mb-10">

<h2 className="text-xl font-semibold text-black mb-3">
Doświadczenie
</h2>

<p className="text-black">
{partner.experience}
</p>

</div>

)}

{/* SPECJALIZACJE */}

{partner.specialties &&(

<div className="mb-10">

<h2 className="text-xl font-semibold text-black mb-3">
Specjalizacje
</h2>

<div className="flex flex-wrap gap-2">

{partner.specialties.map((s)=>(

<span
key={s}
className="border px-3 py-1 rounded text-sm"
>

{s}

</span>

))}

</div>

</div>

)}

{/* CTA */}

{partner.website &&(

<a
href={partner.website}
target="_blank"
className="inline-block bg-black text-white px-6 py-3 rounded-lg mb-12"
>

Przejdź do strony

</a>

)}

{/* NAVIMIND */}

<div className="border rounded-xl p-6">

<h2 className="text-xl font-semibold text-black mb-3">
Nie jesteś pewien czy to właściwa pomoc?
</h2>

<p className="text-black mb-4">
Możesz najpierw porozmawiać i uporządkować sytuację.
</p>

<Link
href="/navimind"
className="border px-4 py-2 rounded"
>

Rozmowa w NaviMind

</Link>

</div>

</div>

</main>

)

}