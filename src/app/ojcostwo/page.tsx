import Link from "next/link"
import { ojcostwo } from "@/content/ojcostwo"

export default function Page(){

return(

<div className="max-w-4xl mx-auto px-6 py-16">

<h1 className="text-3xl font-semibold mb-10">
Ojcostwo
</h1>

<div className="space-y-8">

{ojcostwo.map((article)=>(

<Link
key={article.slug}
href={`/ojcostwo/${article.slug}`}
className="block border-b pb-6 hover:opacity-70"
>

<h2 className="text-xl font-semibold mb-2">
{article.title}
</h2>

<p className="text-gray-600">
{article.description}
</p>

</Link>

))}

</div>

</div>

)

}