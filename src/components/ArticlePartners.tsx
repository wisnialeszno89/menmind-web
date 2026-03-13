import Link from "next/link"
import { partners } from "@/data/partners"

export default function ArticlePartners({
world
}:{
world:string
}){

const mapping:any = {

kryzys:["psycholog","mediator","coach"],

ojcostwo:["mediator","prawnik"],

odbudowa:["coach","warsztaty-meskie"],

wzrost:["coaching","rozwoj-osobisty"]

}

const categories = mapping[world] || []

const filtered = partners.filter(
p => categories.includes(p.category)
)

if(!filtered.length) return null

return(

<div className="mt-16">

<h3 className="text-xl font-semibold mb-6">
Polecane wsparcie
</h3>

<div className="grid md:grid-cols-2 gap-6">

{filtered.slice(0,4).map(p => (

<Link
key={p.slug}
href={`/partner/${p.slug}`}
className="border rounded-xl p-5 hover:shadow"
>

<h4 className="font-semibold mb-1">
{p.name}
</h4>

<p className="text-sm text-gray-600">
{p.description}
</p>

</Link>

))}

</div>

</div>

)

}