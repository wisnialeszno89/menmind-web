import Container from "@/components/ui/Container"
import CategoryIntro from "@/components/ui/CategoryIntro"
import ArticleGrid from "@/components/ui/ArticleGrid"

import { getWorldArticles } from "@/lib/getWorldArticles"

export default function Page(){

const articles = getWorldArticles("odbudowa")

return(

<main className="py-16 md:py-24">

<Container>

<CategoryIntro
title="Odbudowa"
description="Etap odzyskiwania stabilności po kryzysie"
/>

<ArticleGrid
articles={articles}
base="odbudowa"
/>

</Container>

</main>

)

}