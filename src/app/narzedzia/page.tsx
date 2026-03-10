import Link from "next/link"
import { tools } from "@/data/tools"

export default function ToolsPage(){

return(

<main className="bg-white min-h-screen">

<div className="max-w-5xl mx-auto px-6 py-24">

<h1 className="text-4xl font-semibold text-black mb-10">
Narzędzia
</h1>

<p className="text-gray-700 mb-16 max-w-xl">
Proste narzędzia które pomagają odzyskać spokój,
energię i kierunek działania.
</p>

<div className="grid md:grid-cols-2 gap-6">

{tools.map(tool=>(

<Link
key={tool.slug}
href={`/narzedzia/${tool.slug}`}
className="border rounded-xl p-6 hover:shadow transition"
>

<h2 className="text-xl font-semibold text-black mb-2">
{tool.title}
</h2>

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