import Link from "next/link"

export const metadata = {
title: "Historia ojca – odzyskanie relacji z córką | MenMind",
description:
"Historia ojca który po rozwodzie odbudował relację z córką."
}

export default function Historia1Page(){

return(

<main className="bg-[#111827] text-zinc-100 min-h-screen">

<div className="max-w-3xl mx-auto px-6 py-24">

<h1 className="text-4xl font-semibold text-blue-500 mb-6">
Rozwód i walka o kontakt z córką
</h1>

<div className="h-px w-16 bg-blue-500 mb-12" />

<p className="text-zinc-400 mb-10">
Ta historia została opowiedziana anonimowo.
</p>

<div className="space-y-6 text-zinc-400 leading-relaxed">

<p>
Po rozwodzie przez kilka miesięcy
prawie nie widziałem córki.
</p>

<p>
Każda rozmowa kończyła się konfliktem.
Czułem, że powoli tracę relację.
</p>

<p>
Najtrudniejszy moment był wtedy,
gdy córka przestała odbierać telefon.
</p>

<p>
Dopiero kiedy przestałem walczyć
z byłą partnerką i skupiłem się
na spokojnym budowaniu relacji,
coś zaczęło się zmieniać.
</p>

<p>
Małe rzeczy:
spacery,
rozmowy,
obecność.
</p>

<p>
Relacja nie wróciła od razu.
Ale powoli zaczęła się odbudowywać.
</p>

</div>

<div className="mt-20 border-t border-neutral-800 pt-10">

<Link
href="/ojcostwo/odbudowa-relacji"
className="text-blue-500 underline hover:text-blue-400 block mb-4"
>
Jak odbudować relację →
</Link>

<Link
href="/ojcostwo/historie"
className="text-zinc-400 underline hover:text-zinc-200"
>
← Wróć do historii
</Link>

</div>

</div>

</main>

)

}