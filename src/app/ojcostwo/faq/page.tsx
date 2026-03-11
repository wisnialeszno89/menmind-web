import Link from "next/link"

export const metadata = {
title: "FAQ ojców | MenMind",
description:
"Najczęstsze pytania ojców dotyczące rozwodu, kontaktów z dzieckiem i praw rodzicielskich."
}

export default function FAQPage(){

return(

<main className="bg-[#111827] text-zinc-100 min-h-screen">

<div className="max-w-4xl mx-auto px-6 py-24">

<h1 className="text-4xl md:text-5xl font-semibold text-blue-500 mb-6">
Najczęstsze pytania ojców
</h1>

<div className="h-px w-16 bg-blue-500 mb-12"/>

<div className="space-y-10">

<section>
<h2 className="text-xl font-semibold mb-3">
Czy matka może zabronić kontaktu z dzieckiem?
</h2>

<p className="text-zinc-400">
Co do zasady nie. Ojciec ma prawo do kontaktu z dzieckiem,
nawet jeśli nie mieszka z nim na co dzień.
</p>

<Link
href="/ojcostwo/kontakty-z-dzieckiem"
className="text-blue-500 underline hover:text-blue-400"
>
Więcej o kontaktach →
</Link>

</section>

<section>
<h2 className="text-xl font-semibold mb-3">
Czy ojciec ma prawo do opieki naprzemiennej?
</h2>

<p className="text-zinc-400">
Tak. Jeśli warunki na to pozwalają,
sąd może ustalić opiekę naprzemienną.
</p>

<Link
href="/ojcostwo/opieka-naprzemienna"
className="text-blue-500 underline hover:text-blue-400"
>
Sprawdź zasady →
</Link>

</section>

<section>
<h2 className="text-xl font-semibold mb-3">
Czy alimenty zawsze płaci ojciec?
</h2>

<p className="text-zinc-400">
Nie. Alimenty zależą od sytuacji finansowej rodziców
i potrzeb dziecka.
</p>

<Link
href="/ojcostwo/alimenty"
className="text-blue-500 underline hover:text-blue-400"
>
Jak działają alimenty →
</Link>

</section>

</div>

<div className="mt-20 border-t border-neutral-800 pt-10">

<Link
href="/ojcostwo"
className="text-blue-500 underline hover:text-blue-400"
>
← Wróć do Ojcostwa
</Link>

</div>

</div>

</main>

)

}