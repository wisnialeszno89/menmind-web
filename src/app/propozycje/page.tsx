import ProposalsGrid from "@/components/ProposalsGrid"
import CitySearch from "@/components/suggestions/CitySearch"
import Link from "next/link"
import FeaturedPartners from "@/features/marketplace/FeaturedPartners"

export default function ProposalsPage() {

return(

<main className="bg-white min-h-screen">

<div className="max-w-6xl mx-auto px-6 py-24">

<h1 className="text-4xl font-semibold mb-6">
Znajdź coś dla siebie
</h1>

<p className="text-gray-700 max-w-xl mb-16">
Miejsca, wydarzenia i doświadczenia które pomagają
rozwijać życie, poznawać ludzi i zdobywać nowe doświadczenia.
</p>

{/* SZYBKI START */}

<div className="grid md:grid-cols-3 gap-6 mb-20">

<Link
href="/narzedzia/test-sytuacji"
className="border rounded-xl p-6 hover:shadow"
>
Sprawdź swoją sytuację
</Link>

<Link
href="/sciezki/kompas"
className="border rounded-xl p-6 hover:shadow"
>
Zobacz swój kierunek
</Link>

<Link
href="/narzedzia"
className="border rounded-xl p-6 hover:shadow"
>
Zobacz narzędzia
</Link>

</div>

{/* KATEGORIE */}

<h2 className="text-2xl font-semibold mb-8">
Kategorie
</h2>

<ProposalsGrid />

{/* WYSZUKIWARKA MIAST */}

<div className="mt-20">

<h2 className="text-2xl font-semibold mb-6">
Znajdź coś w swojej okolicy
</h2>

<CitySearch
baseHref="/propozycje"
state=""
city=""
cities={[]}
placeholder="Wpisz miasto"
tip="Znajdź wydarzenia i miejsca w swojej okolicy"
/>

</div>
<FeaturedPartners />
</div>

</main>

)

}