import Link from "next/link"
import { cities } from "@/data/cities"
import { categories } from "@/data/categories"

export async function generateStaticParams(){

return cities.map((city)=>({

city:city.slug

}))

}

export async function generateMetadata({params}:{params:{city:string}}){

return{

title:`Pomoc dla mężczyzn ${params.city} | MenMind`,
description:`Znajdź wsparcie dla mężczyzn w mieście ${params.city}. Psycholog, mediator, wsparcie prawne.`

}

}

export default function CitySupportPage({params}:{params:{city:string}}){

return(

<main className="bg-white min-h-screen">

<div className="max-w-5xl mx-auto px-6 py-24">

<h1 className="text-4xl font-semibold text-black mb-6">
Pomoc dla mężczyzn – {params.city}
</h1>

<p className="text-black max-w-xl mb-16">
Jeśli przechodzisz przez trudny moment życia,
możesz znaleźć wsparcie w swoim mieście.
</p>

{/* KATEGORIE */}

<h2 className="text-2xl font-semibold text-black mb-6">
Dostępne wsparcie
</h2>

<div className="grid md:grid-cols-2 gap-6 mb-20">

{categories.map((cat)=>(

<Link
key={cat.slug}
href={`/kategoria/${cat.slug}/${params.city}`}
className="border rounded-xl p-6 hover:shadow"
>

<h3 className="font-semibold text-black mb-2">
{cat.name}
</h3>

<p className="text-black text-sm">
Sprawdź dostępnych specjalistów.
</p>

</Link>

))}

</div>

{/* ROZMOWA */}

<h2 className="text-2xl font-semibold text-black mb-6">
Możesz też zacząć od rozmowy
</h2>

<Link
href={`/navimind?state=${params.city}`}
className="inline-block bg-black text-white px-6 py-3 rounded-lg mb-20"
>

Porozmawiaj w NaviMind

</Link>

{/* NARZĘDZIA */}

<h2 className="text-2xl font-semibold text-black mb-6">
Możesz spróbować
</h2>

<div className="grid md:grid-cols-2 gap-6">

<Link
href="/narzedzia/oddech-4-7-8"
className="border rounded-xl p-6 hover:shadow"
>

Regulacja oddechu 4-7-8

</Link>

<Link
href="/narzedzia/test-stresu"
className="border rounded-xl p-6 hover:shadow"
>

Sprawdź poziom stresu

</Link>

</div>

</div>

</main>

)

}