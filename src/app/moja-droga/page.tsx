"use client"

import { useSaved } from "@/hooks/useSaved"
import { articles } from "@/content/articles"
import Link from "next/link"

export default function MyPath(){

const {items}=useSaved("saved_items")

const savedArticles=articles.filter(a=>items.includes(a.slug))

return(

<main className="bg-white min-h-screen">

<div className="max-w-4xl mx-auto px-6 py-24">

<h1 className="text-4xl font-semibold text-black mb-10">
Moja droga
</h1>

{savedArticles.length===0 &&(

<p className="text-black">
Nie zapisałeś jeszcze żadnych materiałów.
</p>

)}

<div className="space-y-6">

{savedArticles.map(article=>(

<Link
key={article.slug}
href={`/content/${article.slug}`}
className="block border p-4 rounded-lg hover:shadow"
>

<h3 className="font-semibold text-black">
{article.title}
</h3>

<p className="text-black text-sm">
{article.intro}
</p>

</Link>


))}
<Link href="/moja-droga">
Moja droga
</Link>
</div>

</div>

</main>

)

}