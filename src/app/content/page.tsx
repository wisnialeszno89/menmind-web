import Link from "next/link"
import { articles } from "@/content/articles"

export const metadata = {
title: "Artykuły | MenMind",
description:
"Wiedza i artykuły dla mężczyzn: kryzys, rozwój, ojcostwo i kierunek w życiu."
}

export default function ContentPage(){

const worlds = ["kryzys","ojcostwo","wzrost"]

return(

<main className="bg-white min-h-screen">

<div className="max-w-5xl mx-auto px-6 py-24">

<h1 className="text-4xl font-semibold text-black mb-6">
Artykuły
</h1>

<p className="text-black max-w-xl mb-16">
Wiedza pomagająca uporządkować sytuację,
zrozumieć mechanizmy i odzyskać kierunek.
</p>

{worlds.map((world)=>{

const worldArticles = articles.filter(
(a)=>a.world === world
)

if(worldArticles.length === 0) return null

return(

<section key={world} className="mb-20">

<h2 className="text-2xl font-semibold text-black mb-6 capitalize">
{world}
</h2>

<div className="grid md:grid-cols-2 gap-6">

{worldArticles.map((article)=>(

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

})}

</div>

</main>

)

}