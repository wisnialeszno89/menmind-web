import Container from "@/components/ui/Container"
import CategoryIntro from "@/components/ui/CategoryIntro"
import ArticleGrid from "@/components/ui/ArticleGrid"

import { getWorldArticles } from "@/lib/getWorldArticles"

export default function Page(){

const articles = getWorldArticles("wzrost")

return(

<main className="py-16 md:py-24">

<Container>

<CategoryIntro
title="Wzrost"
description="Budowanie silniejszej wersji siebie"
/>

<ArticleGrid
articles={articles}
base="wzrost"
/>

</Container>

</main>

)

}