import { notFound } from "next/navigation"
import ArticleLayout from "@/components/article/ArticleLayout"
import RelatedArticles from "@/components/RelatedArticles"
import ArticlePartners from "@/components/ArticlePartners"

import { kryzys } from "@/content/kryzys"
import { ojcostwo } from "@/content/ojcostwo"
import { odbudowa } from "@/content/odbudowa"
import { wzrost } from "@/content/wzrost"

import { readingTime } from "@/lib/readingTime"

const worlds: Record<string, any[]> = {
kryzys,
ojcostwo,
odbudowa,
wzrost
}

export default function Page({
params
}:{
params:{ world:string; slug:string }
}){

const { world, slug } = params

const articles = worlds[world]

if(!articles) return notFound()

const article = articles.find((a)=>a.slug === slug)

if(!article) return notFound()

const minutes = readingTime(article.content)

const paragraphs = article.content.split("\n\n")

const headings = paragraphs
.filter((p:string)=>p.startsWith("## "))
.map((p:string)=>p.replace("## ",""))

return(

<ArticleLayout
title={article.title}
description={article.description}
world={world}
>

{/* META */}

<p className="text-sm text-gray-500 mb-8">
{minutes} min czytania
</p>

{/* SPIS TREŚCI */}

{headings.length > 0 && (

<div className="bg-gray-50 p-6 rounded-xl mb-12">

<h3 className="font-semibold mb-4">
W tym artykule
</h3>

<ul className="space-y-2 text-gray-700">

{headings.map((h:string,i:number)=>(
<li key={i}>• {h}</li>
))}

</ul>

</div>

)}

{/* TREŚĆ */}

{paragraphs.map((paragraph:string,i:number)=>{

/* H2 */

if(paragraph.startsWith("## ")){

const text = paragraph.replace("## ","")

return(
<h2 key={i} className="text-2xl font-semibold mt-12 mb-4">
{text}
</h2>
)

}

/* CYTAT */

if(paragraph.startsWith(">> ")){

const text = paragraph.replace(">> ","")

return(
<div
key={i}
className="border-l-4 border-black pl-4 py-2 italic text-gray-700 my-8"
>
{text}
</div>
)

}

/* FORMATOWANIE */

let formatted = paragraph
.replace(/\*\*(.*?)\*\*/g,"<strong>$1</strong>")
.replace(/__(.*?)__/g,"<u>$1</u>")
.replace(/^- (.*?)(\n|$)/gm,"<li>$1</li>")
.replace(/• (.*?)(\n|$)/g,"<li>$1</li>")

if(formatted.includes("<li>")){

return(
<ul
key={i}
dangerouslySetInnerHTML={{ __html: formatted }}
className="list-disc pl-6 space-y-2 mb-6"
/>
)

}

return(
<p
key={i}
dangerouslySetInnerHTML={{ __html: formatted }}
className="text-lg leading-relaxed mb-6"
/>
)

})}

{/* WSPARCIE */}

<div className="mt-16 p-8 bg-gray-50 rounded-xl">

<h3 className="text-xl font-semibold mb-3">
Co może Ci teraz pomóc
</h3>

<p className="text-gray-600 mb-4">
Jeśli ten temat jest Ci bliski, możesz też skorzystać z narzędzi które pomagają uporządkować myśli i odzyskać kierunek.
</p>

<a
href="/narzedzia"
className="text-black font-medium underline"
>
Zobacz narzędzia
</a>

</div>

<hr className="my-16 border-gray-200" />

{/* POLECANE ARTYKUŁY */}

<RelatedArticles
world={world}
slug={slug}
/>

{/* PARTNERZY */}

<ArticlePartners world={world} />

</ArticleLayout>

)

}