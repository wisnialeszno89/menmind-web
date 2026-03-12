import Container from "@/components/ui/Container"
import CategoryIntro from "@/components/ui/CategoryIntro"
import ArticleGrid from "@/components/ui/ArticleGrid"

import { ojcostwo } from "@/content/ojcostwo"

export default function Page(){

return(

<main className="py-16 md:py-24">

<Container>

<CategoryIntro
title="Ojcostwo"
description="Relacja z dzieckiem i odpowiedzialność ojca."
/>

<ArticleGrid
articles={ojcostwo}
base="ojcostwo"
/>

</Container>

</main>

)

}