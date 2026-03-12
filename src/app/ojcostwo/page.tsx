import Container from "@/components/ui/Container"
import CategoryIntro from "@/components/ui/CategoryIntro"
import ArticleGrid from "@/components/ui/ArticleGrid"
import { getWorldArticles } from "@/lib/getWorldArticles"

export default function Page(){

const articles = getWorldArticles("ojcostwo")

return(

<main className="py-16 md:py-24">

<Container>

<CategoryIntro
title="Ojcostwo"
description="Relacja z dzieckiem i odpowiedzialność"
/>

<ArticleGrid
articles={articles}
base="ojcostwo"
/>

</Container>

</main>

)

}