import Container from "@/components/ui/Container"
import CategoryIntro from "@/components/ui/CategoryIntro"
import ArticleGrid from "@/components/ui/ArticleGrid"

import { wzrost } from "@/content/wzrost"

export default function Page(){

return(

<main className="py-16 md:py-24">

<Container>

<CategoryIntro
title="Wzrost"
description="Budowanie silniejszej wersji siebie."
/>

<ArticleGrid
articles={wzrost}
base="wzrost"
/>

</Container>

</main>

)

}