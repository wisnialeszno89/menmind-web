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
description="Moment gdy zaczynasz świadomie budować silniejsze życie."
/>

<ArticleGrid
articles={wzrost}
base="wzrost"
/>

</Container>

</main>

)

}