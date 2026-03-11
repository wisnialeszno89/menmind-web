import Link from "next/link";

export const metadata = {
title: "Matka utrudnia kontakt z dzieckiem – co zrobić | MenMind",
description:
"Co zrobić gdy drugi rodzic utrudnia kontakt z dzieckiem. Sprawdź jakie masz prawa i jakie kroki możesz podjąć.",
};

export default function MatkaUtrudniaKontaktPage(){

return(

<main className="bg-[#111827] text-zinc-100">

<section className="px-6 py-24">

<div className="max-w-4xl mx-auto">

<h1 className="text-4xl md:text-5xl font-semibold text-blue-500 mb-6">
Matka utrudnia kontakt z dzieckiem
</h1>

<div className="h-px w-16 bg-blue-500 mb-12" />

<p className="text-lg text-zinc-400 mb-16 max-w-2xl">
Utrudnianie kontaktów z dzieckiem jest niestety częstą sytuacją po rozstaniu.
Warto wiedzieć jakie masz prawa i jakie działania możesz podjąć.
</p>

<div className="space-y-12">

<section>

<h2 className="text-2xl font-semibold mb-4">
1. Ojciec ma prawo do kontaktu
</h2>

<p className="text-zinc-400">
Nawet jeśli dziecko mieszka z drugim rodzicem,
ojciec ma prawo do kontaktu z dzieckiem.
</p>

</section>

<section>

<h2 className="text-2xl font-semibold mb-4">
2. Co zrobić gdy kontakt jest utrudniany
</h2>

<p className="text-zinc-400">
W pierwszej kolejności warto spróbować mediacji.
Jeśli to nie działa, można złożyć wniosek do sądu o uregulowanie kontaktów.
</p>

</section>

</div>

<div className="mt-20 border-t border-neutral-800 pt-10">

<Link
href="/ojcostwo/prawa-ojca"
className="text-blue-500 underline underline-offset-4 hover:text-blue-400"
>
Sprawdź swoje prawa →
</Link>

</div>

</div>

</section>

</main>

)

}