import Container from "@/components/ui/Container"
import CategoryIntro from "@/components/ui/CategoryIntro"
import ArticleGrid from "@/components/ui/ArticleGrid"

import { kryzys } from "@/content/kryzys"

export default function Page(){

return(

<main className="py-16 md:py-24">

<Container>

<CategoryIntro
title="Kryzys"
description="Moment gdy życie się rozpada. Tu zaczyna się pierwszy krok."
/>

<ArticleGrid
articles={kryzys}
base="kryzys"
/>

</Container>

</main>

)

}