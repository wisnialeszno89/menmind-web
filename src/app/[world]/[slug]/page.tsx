import { notFound } from "next/navigation"
import ArticleLayout from "@/components/article/ArticleLayout"

import { kryzys } from "@/content/kryzys"
import { ojcostwo } from "@/content/ojcostwo"
import { odbudowa } from "@/content/odbudowa"
import { wzrost } from "@/content/wzrost"

const worlds: Record<string, any[]> = {
kryzys,
ojcostwo,
odbudowa,
wzrost
}

export default async function Page({ params }: any) {

const { world, slug } = await params

console.log("WORLD:", world)
console.log("SLUG:", slug)

const articles = worlds[world]

console.log("ARTICLES:", articles)

if (!articles) return notFound()

const article = articles.find((a) => a.slug === slug)

console.log("ARTICLE:", article)

if (!article) return notFound()

return (

<ArticleLayout
title={article.title}
description={article.description}
>

{article.content.split("\n\n").map((paragraph: string, i: number) => {

let formatted = paragraph
.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
.replace(/__(.*?)__/g, "<u>$1</u>")
.replace(/• (.*?)(\n|$)/g, "<li>$1</li>")

if (formatted.includes("<li>")) {
return (
<ul
key={i}
dangerouslySetInnerHTML={{ __html: formatted }}
className="list-disc pl-6 space-y-2"
/>
)
}

return (
<p
key={i}
dangerouslySetInnerHTML={{ __html: formatted }}
className="text-lg leading-relaxed"
/>
)

})}

</ArticleLayout>

)

}