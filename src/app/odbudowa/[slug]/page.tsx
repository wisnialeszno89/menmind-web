import { notFound } from "next/navigation"
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

<p>Artykuł w trakcie ładowania.</p>

</ArticleLayout>

)

}