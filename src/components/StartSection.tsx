import Link from "next/link"

export default function StartSection(){

return(

<section className="bg-gray-50 py-20">

<div className="max-w-5xl mx-auto px-6 text-center">

<h2 className="text-3xl font-semibold mb-6">
Nie wiesz od czego zacząć?
</h2>

<p className="text-gray-700 mb-10 max-w-xl mx-auto">
Możesz zacząć od krótkiego testu który pomoże zobaczyć
gdzie jesteś i jaki kierunek może być dla Ciebie najlepszy.
</p>

<div className="grid md:grid-cols-3 gap-6">

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

</div>

</section>

)
}