import { odbudowa } from "@/content/odbudowa"
import ArticleLayout from "@/components/article/ArticleLayout"

export default function Page({ params }: { params: { slug: string } }) {

const article = odbudowa.find(a => a.slug === params.slug)

if(!article){
return <div>Brak artykułu</div>
}

return(

<ArticleLayout
title={article.title}
intro={article.description}
>

<p>
Treść artykułu pojawi się tutaj.
</p>

</ArticleLayout>

)

}