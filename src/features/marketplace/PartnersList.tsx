import Link from "next/link"
import { Partner } from "@/data/partners"
import RatingStars from "@/components/RatingStars"
import PartnerBadges from "@/features/marketplace/PartnerBadges"

export default function PartnersList({
partners
}:{
partners: Partner[]
}){

if(!partners.length){

return(

<div className="border rounded-xl p-8 text-center text-gray-600">
Brak partnerów w tej kategorii.
</div>

)

}

return(

<div className="grid md:grid-cols-2 gap-6">

{partners.map((partner)=>(

<div
key={partner.slug}
className="border rounded-xl p-6 hover:shadow transition"
>

<h3 className="text-xl font-semibold mb-2">
{partner.name}
</h3>

{/* RATING */}

{partner.rating && (

<div className="flex items-center gap-2 mb-2">

<RatingStars rating={partner.rating} />

<span className="text-sm text-gray-500">
{partner.reviews || 0} opinii
</span>

</div>

)}

<p className="text-gray-700 mb-4">
{partner.description}
</p>

<div className="flex gap-4 text-sm">

{partner.website && (

<a
href={partner.website}
target="_blank"
className="underline"
>
Strona
</a>

)}

<Link
href={`/partner/${partner.slug}`}
className="underline"
>
Profil
</Link>

</div>

</div>

))}

</div>

)

}