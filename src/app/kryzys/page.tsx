import Link from "next/link"
import FAQSection from "@/components/FAQSection"

export const metadata = {
title: "Kryzys mężczyzny | MenMind",
description:
"Wsparcie dla mężczyzn w kryzysie: rozstanie, stres, brak kierunku. Narzędzia, rozmowa i pomoc specjalistów."
}

export default function KryzysPage(){

return(

<main className="bg-white min-h-screen">

<div className="max-w-5xl mx-auto px-6 py-24">

<h1 className="text-4xl font-semibold text-black mb-6">
Kryzys
</h1>

<p className="text-black max-w-xl mb-16">
Moment, w którym życie przestaje układać się tak jak wcześniej.
Rozstanie, presja, brak kierunku lub przeciążenie.
To miejsce, gdzie możesz zacząć porządkować sytuację.
</p>

<h2 className="text-2xl font-semibold text-black mb-6">
Najczęstsze sytuacje
</h2>

<div className="grid md:grid-cols-2 gap-6 mb-20">

<Link href="/sciezki/rozstanie" className="border rounded-xl p-6 hover:shadow">

<h3 className="text-xl font-semibold text-black mb-2">
Rozstanie
</h3>

<p className="text-black text-sm">
Jak przejść przez rozpad relacji i odzyskać stabilność.
</p>

</Link>

<Link href="/sciezki/stres" className="border rounded-xl p-6 hover:shadow">

<h3 className="text-xl font-semibold text-black mb-2">
Przeciążenie i stres
</h3>

<p className="text-black text-sm">
Kiedy napięcie zaczyna przejmować kontrolę.
</p>

</Link>

<Link href="/sciezki/brak-kierunku" className="border rounded-xl p-6 hover:shadow">

<h3 className="text-xl font-semibold text-black mb-2">
Brak kierunku
</h3>

<p className="text-black text-sm">
Moment kiedy nie wiesz co dalej zrobić.
</p>

</Link>

<Link href="/sciezki/problemy-finansowe" className="border rounded-xl p-6 hover:shadow">

<h3 className="text-xl font-semibold text-black mb-2">
Problemy finansowe
</h3>

<p className="text-black text-sm">
Presja pieniędzy i odpowiedzialności.
</p>

</Link>

</div>

<h2 className="text-2xl font-semibold text-black mb-6">
Możesz spróbować
</h2>

<div className="grid md:grid-cols-2 gap-6 mb-20">

<Link href="/narzedzia/oddech-4-7-8" className="border rounded-xl p-6 hover:shadow">
Regulacja oddechu 4-7-8
</Link>

<Link href="/narzedzia/reset-stresu" className="border rounded-xl p-6 hover:shadow">
Reset stresu
</Link>

<Link href="/narzedzia/test-stresu" className="border rounded-xl p-6 hover:shadow">
Sprawdź poziom stresu
</Link>

<Link href="/narzedzia/dziennik-mysli" className="border rounded-xl p-6 hover:shadow">
Dziennik myśli
</Link>

</div>

<h2 className="text-2xl font-semibold text-black mb-6">
Możesz też porozmawiać
</h2>

<div className="mb-20">

<Link
href="/navimind?state=kryzys"
className="inline-block bg-black text-white px-6 py-3 rounded-lg"
>

Rozpocznij rozmowę w NaviMind

</Link>

</div>

<h2 className="text-2xl font-semibold text-black mb-6">
Znajdź wsparcie
</h2>

<div className="grid md:grid-cols-3 gap-4">

<Link href="/kategoria/psycholog/warszawa" className="border rounded-lg p-4 hover:shadow">
Psycholog – Warszawa
</Link>

<Link href="/kategoria/psycholog/krakow" className="border rounded-lg p-4 hover:shadow">
Psycholog – Kraków
</Link>

<Link href="/kategoria/psycholog/wroclaw" className="border rounded-lg p-4 hover:shadow">
Psycholog – Wrocław
</Link>

</div>

<FAQSection world="kryzys"/>

</div>

</main>

)

}