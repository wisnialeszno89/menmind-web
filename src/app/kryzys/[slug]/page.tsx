import { kryzys } from "@/content/kryzys"
import ArticleLayout from "@/components/article/ArticleLayout"
import RelatedArticles from "@/components/RelatedArticles"

export default function Page({ params }) {

const article = kryzys.find(a => a.slug === params.slug)

if(!article){
return <div>Artykuł nie istnieje</div>
}

return(

<ArticleLayout
title={article.title}
intro={article.description}
>

<p>{article.content}</p>

<RelatedArticles
  world="kryzys"
  slug={params.slug}
/>

</ArticleLayout>

)

}