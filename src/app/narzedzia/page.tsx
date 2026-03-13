import Link from "next/link"
import { tools } from "@/data/tools"

export default function ToolsPage(){

return(

<main className="bg-white min-h-screen">

<div className="max-w-5xl mx-auto px-6 py-24">

<h1 className="text-4xl font-semibold text-black mb-6">
Narzędzia
</h1>

<p className="text-gray-700 mb-16 max-w-xl">
Proste narzędzia które pomagają odzyskać spokój,
energię i kierunek działania. Możesz zacząć od testu
albo wybrać narzędzie które najbardziej pasuje do Twojej sytuacji.
</p>

{/* SEKCJA DIAGNOZY */}

<div className="border rounded-xl p-8 mb-16 bg-gray-50">

<h2 className="text-2xl font-semibold mb-4">
Sprawdź swój stan
</h2>

<p className="text-gray-700 mb-6 max-w-xl">
Jeśli nie wiesz od czego zacząć, zrób jeden z krótkich testów.
Pomoże Ci zobaczyć gdzie jesteś i jaki kierunek może być najlepszy.
</p>

<div className="grid md:grid-cols-2 gap-4">

<Link
href="/narzedzia/test-stresu"
className="border rounded-lg p-4 hover:shadow"
>
Test poziomu stresu
</Link>

<Link
href="/narzedzia/test-wypalenia"
className="border rounded-lg p-4 hover:shadow"
>
Test wypalenia
</Link>

<Link
href="/narzedzia/test-sytuacji"
className="border rounded-lg p-4 hover:shadow"
>
Test sytuacji życiowej
</Link>

<Link
href="/narzedzia/test-zycia"
className="border rounded-lg p-4 hover:shadow"
>
Test kierunku życia
</Link>

</div>

<Link
href="/sciezki/kompas"
className="inline-block mt-6 text-black underline"
>
Zobacz swój kierunek →
</Link>

</div>

{/* SEKCJA NARZĘDZI */}

<h2 className="text-2xl font-semibold mb-8">
Narzędzia działania
</h2>

<div className="grid md:grid-cols-2 gap-6">

{tools.map(tool=>(

<Link
key={tool.slug}
href={`/narzedzia/${tool.slug}`}
className="border rounded-xl p-6 hover:shadow transition"
>

<h3 className="text-xl font-semibold text-black mb-2">
{tool.title}
</h3>

<p className="text-gray-700">
{tool.description}
</p>

</Link>

))}

</div>

</div>

</main>

)

}