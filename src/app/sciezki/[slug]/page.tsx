import Link from "next/link"
import { paths } from "@/data/paths"
import { getPathArticles } from "@/lib/getPathArticles"

export async function generateStaticParams() {
  return paths.map((path) => ({
    slug: path.slug
  }))
}

export default function PathPage({
  params
}:{
  params:{slug:string}
}){

const path = paths.find((p)=>p.slug===params.slug)

if(!path) return null

const articles = getPathArticles(params.slug)

return(

<main className="bg-white min-h-screen">

<div className="max-w-4xl mx-auto px-6 py-24">

<h1 className="text-4xl font-semibold text-black mb-6">
{path.title}
</h1>

<p className="text-black mb-12">
{path.description}
</p>

<h2 className="text-2xl font-semibold text-black mb-4">
Artykuły
</h2>

<div className="space-y-4 mb-12">

{articles.map((article)=>(
<Link
key={article.slug}
href={`/content/${article.slug}`}
className="block border p-4 rounded-lg hover:shadow"
>

<h3 className="font-semibold text-black">
{article.title}
</h3>

<p className="text-black text-sm">
{article.intro}
</p>

</Link>
))}

</div>

<h2 className="text-2xl font-semibold text-black mb-4">
Narzędzia
</h2>

<Link
href="/narzedzia/stabilizacja"
className="block border p-4 rounded-lg mb-12 hover:shadow"
>
Narzędzia stabilizacji
</Link>

<h2 className="text-2xl font-semibold text-black mb-4">
Wsparcie
</h2>

<Link
href="/propozycje"
className="block border p-4 rounded-lg mb-12 hover:shadow"
>
Znajdź specjalistę
</Link>

<Link
href={`/navimind?state=${path.navimindState}`}
className="inline-block bg-black text-white px-6 py-3 rounded-lg"
>
Porozmawiaj w NaviMind
</Link>

</div>

</main>

)

}