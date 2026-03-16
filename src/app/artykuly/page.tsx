import Link from "next/link"
import { getAllArticles } from "@/lib/getAllArticles"
import Container from "@/components/layout/Container"

export default function ArtykulyPage() {

const articles = getAllArticles()

return (

<main className="py-20">

<Container>

<h1 className="text-3xl font-semibold mb-10">
Artykuły MenMind
</h1>

<div className="grid md:grid-cols-2 gap-8">

{articles.map(article => (

<Link
key={article.slug}
href={`/${article.world}/${article.slug}`}
className="border rounded-xl p-6 hover:shadow-md transition"
>

<h3 className="text-xl font-semibold mb-2">
{article.title}
</h3>

<p className="text-gray-600">
{article.description}
</p>

</Link>

))}

</div>

</Container>

</main>

)

}