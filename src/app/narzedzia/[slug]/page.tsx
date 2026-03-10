import { tools } from "@/data/tools"
import Link from "next/link"
import { notFound } from "next/navigation"

export function generateStaticParams(){

return tools.map(tool=>({
slug:tool.slug
}))

}

export default function ToolPage({params}:{params:{slug:string}}){

const tool = tools.find(t=>t.slug===params.slug)

if(!tool) return notFound()

return(

<main className="bg-white min-h-screen">

<div className="max-w-3xl mx-auto px-6 py-24">

<h1 className="text-4xl font-semibold text-black mb-6">
{tool.title}
</h1>

<p className="text-gray-700 mb-12">
{tool.description}
</p>

<div className="border rounded-xl p-8 mb-16">

<p className="text-gray-700">
Tutaj pojawi się interaktywne narzędzie.
</p>

</div>

<h2 className="text-xl font-semibold text-black mb-6">
Co możesz zrobić dalej
</h2>

<div className="grid md:grid-cols-2 gap-4">

<Link
href="/navimind"
className="border rounded-lg p-4 hover:shadow"
>
Porozmawiaj w NaviMind
</Link>

<Link
href="/sciezki"
className="border rounded-lg p-4 hover:shadow"
>
Zobacz ścieżki działania
</Link>

<Link
href="/propozycje"
className="border rounded-lg p-4 hover:shadow"
>
Znajdź realne wsparcie
</Link>

</div>

</div>

</main>

)

}