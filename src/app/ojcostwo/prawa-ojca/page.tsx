import Link from "next/link"
import ArticleLayout from "@/components/ArticleLayout"

export const metadata = {
title: "Prawa ojca – podstawy | MenMind",
description:
"Jakie prawa ma ojciec po rozstaniu lub rozwodzie."
}

export default function PrawaOjcaPage(){

return(

<ArticleLayout
title="Prawa ojca – podstawy"
intro="Znajomość swoich praw daje spokój i większą kontrolę nad sytuacją."
>

<section>

<h2 className="text-2xl font-semibold mb-4">
Kontakty z dzieckiem
</h2>

<p className="text-zinc-400">
Ojciec ma prawo do kontaktu z dzieckiem nawet jeśli
nie mieszka z nim na co dzień.
</p>

</section>

<section>

<h2 className="text-2xl font-semibold mb-4">
Opieka naprzemienna
</h2>

<p className="text-zinc-400">
W wielu sytuacjach możliwe jest ustalenie opieki naprzemiennej.
</p>

<Link
href="/ojcostwo/opieka-naprzemienna"
className="text-blue-500 underline hover:text-blue-400 mt-3 block"
>

Przeczytaj więcej →

</Link>

</section>

</ArticleLayout>

)

}