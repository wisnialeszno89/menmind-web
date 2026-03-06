import Link from "next/link"
import { paths } from "@/data/paths"

export default function SciezkiPage(){

return(

<main className="bg-white min-h-screen">

<div className="max-w-6xl mx-auto px-6 py-24">

<h1 className="text-4xl font-semibold text-black mb-10">
Ścieżki
</h1>

<div className="grid md:grid-cols-2 gap-6">

{paths.map((path)=>(
<Link
key={path.slug}
href={`/sciezki/${path.slug}`}
className="border rounded-xl p-6 hover:shadow"
>

<h3 className="text-xl font-semibold text-black mb-2">
{path.title}
</h3>

<p className="text-black">
{path.description}
</p>

</Link>
))}

</div>

</div>

</main>

)

}