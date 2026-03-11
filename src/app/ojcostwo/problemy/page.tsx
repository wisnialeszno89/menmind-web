import Link from "next/link"

export const metadata = {
title: "Problemy ojców | MenMind",
description:
"Najczęstsze problemy ojców po rozstaniu i rozwodzie oraz możliwe rozwiązania."
}

export default function ProblemyOjcowPage(){

return(

<main className="bg-[#111827] text-zinc-100 min-h-screen">

<div className="max-w-5xl mx-auto px-6 py-24">

<h1 className="text-4xl md:text-5xl font-semibold text-blue-500 mb-6">
Problemy ojców
</h1>

<div className="h-px w-16 bg-blue-500 mb-12"/>

<p className="text-lg text-zinc-400 max-w-2xl mb-16">
Wielu ojców przechodzi przez podobne sytuacje.
Jeśli coś jest trudne – nie jesteś jedyny.
</p>

<div className="grid md:grid-cols-2 gap-6">

<Link
href="/ojcostwo/pierwsze-kroki"
className="border border-neutral-800 rounded-xl p-6 hover:shadow"
>
<h3 className="font-semibold mb-2">
Rozstanie lub rozwód
</h3>

<p className="text-zinc-400 text-sm">
Jak zacząć porządkować sytuację.
</p>
</Link>

<Link
href="/ojcostwo/kontakty-z-dzieckiem"
className="border border-neutral-800 rounded-xl p-6 hover:shadow"
>
<h3 className="font-semibold mb-2">
Utrudnianie kontaktów
</h3>

<p className="text-zinc-400 text-sm">
Co robić gdy kontakt z dzieckiem jest ograniczany.
</p>
</Link>

<Link
href="/ojcostwo/opieka-naprzemienna"
className="border border-neutral-800 rounded-xl p-6 hover:shadow"
>
<h3 className="font-semibold mb-2">
Opieka nad dzieckiem
</h3>

<p className="text-zinc-400 text-sm">
Jak działa opieka naprzemienna.
</p>
</Link>

<Link
href="/ojcostwo/alimenty"
className="border border-neutral-800 rounded-xl p-6 hover:shadow"
>
<h3 className="font-semibold mb-2">
Alimenty
</h3>

<p className="text-zinc-400 text-sm">
Fakty które warto znać.
</p>
</Link>

<Link
href="/ojcostwo/odbudowa-relacji"
className="border border-neutral-800 rounded-xl p-6 hover:shadow"
>
<h3 className="font-semibold mb-2">
Relacja z dzieckiem się pogorszyła
</h3>

<p className="text-zinc-400 text-sm">
Jak odbudować kontakt.
</p>
</Link>

<Link
href="/ojcostwo/relacja-z-nastolatkiem"
className="border border-neutral-800 rounded-xl p-6 hover:shadow"
>
<h3 className="font-semibold mb-2">
Problemy z nastolatkiem
</h3>

<p className="text-zinc-400 text-sm">
Jak rozmawiać i budować zaufanie.
</p>
</Link>

</div>

<div className="mt-20 border-t border-neutral-800 pt-10">

<Link
href="/ojcostwo"
className="text-blue-500 underline hover:text-blue-400"
>
← Wróć do świata Ojcostwo
</Link>

</div>

</div>

</main>

)

}