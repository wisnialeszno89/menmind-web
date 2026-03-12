import Container from "@/components/ui/Container"
import CategoryIntro from "@/components/ui/CategoryIntro"
import ArticleGrid from "@/components/ui/ArticleGrid"
import { getWorldArticles } from "@/lib/getWorldArticles"

export default function Page(){

const articles = getWorldArticles("kryzys")

return(

<main className="py-16 md:py-24">

<Container>

<CategoryIntro
title="Kryzys"
description="Moment gdy życie się rozpada"
/>

<ArticleGrid
articles={articles}
base="kryzys"
/>

</Container>

</main>

)

}