import Link from "next/link"

export const metadata = {
title: "Historie ojców | MenMind",
description:
"Prawdziwe historie ojców po rozwodzie i w trudnych momentach życia."
}

export default function HistoriePage(){

return(

<main className="bg-[#111827] text-zinc-100 min-h-screen">

<div className="max-w-5xl mx-auto px-6 py-24">

<h1 className="text-4xl md:text-5xl font-semibold text-blue-500 mb-6">
Historie ojców
</h1>

<div className="h-px w-16 bg-blue-500 mb-12" />

<p className="text-lg text-zinc-400 max-w-2xl mb-16">
Czasem najważniejsze jest zobaczyć,
że ktoś przeszedł przez podobną drogę.
</p>

<div className="grid md:grid-cols-2 gap-6">

<Link
href="/ojcostwo/historie/historia-1"
className="border border-neutral-800 rounded-xl p-6 hover:shadow"
>

<h3 className="font-semibold mb-2">
Rozwód i walka o kontakt z córką
</h3>

<p className="text-zinc-400 text-sm">
Jak jeden z ojców odzyskał relację z dzieckiem
po bardzo trudnym rozstaniu.
</p>

</Link>

<Link
href="/ojcostwo/historie/historia-2"
className="border border-neutral-800 rounded-xl p-6 hover:shadow"
>

<h3 className="font-semibold mb-2">
Gdy nastolatek przestał rozmawiać
</h3>

<p className="text-zinc-400 text-sm">
Historia odbudowy relacji krok po kroku.
</p>

</Link>

</div>

<div className="mt-20 border-t border-neutral-800 pt-10">

<p className="text-zinc-400 mb-4">
Każda historia jest inna.
Ale wiele emocji jest podobnych.
</p>

<Link
href="/ojcostwo"
className="text-blue-500 underline hover:text-blue-400"
>
← Wróć do świata Ojcostwo
</Link>

</div>
<div className="mt-16">

<Link
href="/ojcostwo/dodaj-historie"
className="text-blue-500 underline hover:text-blue-400"
>
Podziel się swoją historią →
</Link>
<div className="mt-12 text-sm text-zinc-500">

Historie publikowane są anonimowo.
Każda historia jest sprawdzana
przed publikacją.

</div>
</div>
</div>

</main>

)

}