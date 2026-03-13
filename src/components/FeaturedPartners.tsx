import Link from "next/link"
import { partners } from "@/data/partners"

export default function FeaturedPartners(){

const featured = partners.filter(p => p.featured)

if(!featured.length) return null

return(

<div className="mt-20">

<h2 className="text-2xl font-semibold mb-6">
Polecane miejsca
</h2>

<div className="grid md:grid-cols-3 gap-6">

{featured.map(p => (

<Link
key={p.slug}
href={`/partner/${p.slug}`}
className="border rounded-xl p-6 hover:shadow"
>

<h3 className="font-semibold mb-2">
{p.name}
</h3>

<p className="text-sm text-gray-600">
{p.description}
</p>

</Link>

))}

</div>

</div>

)

}