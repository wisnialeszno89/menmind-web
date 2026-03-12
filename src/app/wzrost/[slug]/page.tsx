import ArticleLayout from "@/components/article/ArticleLayout"

type Params = {
  params: { slug: string }
}

export default function Page({ params }: Params) {

return (

<ArticleLayout
title={params.slug.replaceAll("-"," ")}
intro=""
>

<p>Treść artykułu.</p>

</ArticleLayout>

)

}