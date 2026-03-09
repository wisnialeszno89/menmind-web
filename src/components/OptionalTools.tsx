import Link from "next/link"
import { getToolsByCategory } from "@/lib/getToolsByCategory"

export default function OptionalTools({category}:{category:string}){

const tools=getToolsByCategory(category)

if(tools.length===0) return null

return(

<section className="mt-16">

<h2 className="text-2xl font-semibold text-black mb-6">
Możesz spróbować
</h2>

<div className="grid md:grid-cols-2 gap-4">

{tools.slice(0,3).map((tool)=>(

<Link
key={tool.slug}
href={`/narzedzia/${tool.slug}`}
className="border rounded-lg p-4 hover:shadow"
>

<h3 className="font-semibold text-black">
{tool.title}
</h3>

<p className="text-black text-sm">
{tool.description}
</p>

</Link>

))}

</div>

</section>

)

}