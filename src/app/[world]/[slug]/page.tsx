import { notFound } from "next/navigation"
import ArticleLayout from "@/components/article/ArticleLayout"

import { kryzys } from "@/content/kryzys"
import { ojcostwo } from "@/content/ojcostwo"
import { odbudowa } from "@/content/odbudowa"
import { wzrost } from "@/content/wzrost"

const worlds = {
kryzys,
ojcostwo,
odbudowa,
wzrost
}

export default function Page({ params }) {

const { world, slug } = params

const articles = worlds[world]

if (!articles) return notFound()

const article = articles.find(a => a.slug === slug)

if (!article) return notFound()

return (

<ArticleLayout
title={article.title}
description={article.description}
>

{article.content.split("\n\n").map((p, i) => (
<p key={i}>{p}</p>
))}

</ArticleLayout>

)

}