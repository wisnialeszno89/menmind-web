import Link from "next/link"
import { getRelatedArticles } from "@/lib/getRelatedArticles"

export default function RelatedArticles({world,slug}:{world:string,slug:string}){

const related=getRelatedArticles(world,slug)

if(related.length===0) return null

return(

<section className="mt-20">

<h2 className="text-2xl font-semibold text-black mb-6">
Możesz też przeczytać
</h2>

<div className="grid md:grid-cols-2 gap-6">

{related.map((article)=>(

<Link
key={article.slug}
href={`/content/${article.slug}`}
className="border rounded-xl p-6 hover:shadow"
>

<h3 className="font-semibold text-black mb-2">
{article.title}
</h3>

<p className="text-black text-sm">
{article.intro}
</p>

</Link>

))}

</div>

</section>

)

}