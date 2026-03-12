import Container from "@/components/ui/Container"

import { partners } from "@/data/partners"

export default function Page({ params }) {

const partner = partners.find(
p => p.slug === params.slug
)

if(!partner){

return(

<main className="py-24">
<Container>
Partner nie istnieje
</Container>
</main>

)

}

return(

<main className="py-16 md:py-24">

<Container>

<h1 className="text-3xl font-semibold mb-6">
{partner.name}
</h1>

<p className="text-neutral-700 mb-6">
{partner.description}
</p>

<p className="text-sm text-neutral-500 mb-4">
Miasto: {partner.city}
</p>

{partner.website && (

<a
href={partner.website}
target="_blank"
className="underline text-sm"
>
Strona partnera
</a>

)}

</Container>

</main>

)

}