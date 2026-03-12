import ArticleCard from "./ArticleCard"

type Article={
slug:string
title:string
description:string
}

type Props={
articles:Article[]
base:string
}

export default function ArticleGrid({articles,base}:Props){

return(

<div className="grid md:grid-cols-2 gap-6">

{articles.map(article=>(

<ArticleCard
key={article.slug}
title={article.title}
description={article.description}
href={`/${base}/${article.slug}`}
/>

))}

</div>

)

}