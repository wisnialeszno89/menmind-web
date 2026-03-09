import { tools } from "@/data/tools"
import Link from "next/link"

export async function generateStaticParams(){

return tools.map((tool)=>({

slug:tool.slug

}))

}

export default function ToolPage({params}:{params:{slug:string}}){

const tool=tools.find((t)=>t.slug===params.slug)

if(!tool) return null

return(

<main className="bg-white min-h-screen">

<div className="max-w-4xl mx-auto px-6 py-24">

<h1 className="text-4xl font-semibold text-black mb-6">
{tool.title}
</h1>

<p className="text-black mb-12">
{tool.description}
</p>

<div className="border rounded-xl p-6 mb-16">

<p className="text-black">
Tutaj pojawi się interaktywne narzędzie.
</p>

</div>

<h2 className="text-2xl font-semibold text-black mb-6">
Możesz spróbować
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
Zobacz ścieżki
</Link>

<Link
href="/propozycje"
className="border rounded-lg p-4 hover:shadow"
>
Znajdź wsparcie
</Link>

</div>

</div>

</main>

)

}