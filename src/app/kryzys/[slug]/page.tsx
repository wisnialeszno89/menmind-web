import ArticleLayout from "@/components/article/ArticleLayout"

export default function Page({ params }: { params: { slug: string } }) {

const title = params.slug
.replaceAll("-", " ")
.replace(/\b\w/g, l => l.toUpperCase())

return (

<ArticleLayout
title={title}
intro=""
>

<p>Treść artykułu znajduje się w jego pliku.</p>

</ArticleLayout>

)

}