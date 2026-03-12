import Container from "@/components/ui/Container"
import CategoryIntro from "@/components/ui/CategoryIntro"
import ArticleGrid from "@/components/ui/ArticleGrid"

import { odbudowa } from "@/content/odbudowa"

export default function Page(){

return(

<main className="py-16 md:py-24">

<Container>

<CategoryIntro
title="Odbudowa"
description="Etap odzyskiwania stabilności po kryzysie."
/>

<ArticleGrid
articles={odbudowa}
base="odbudowa"
/>

</Container>

</main>

)

}