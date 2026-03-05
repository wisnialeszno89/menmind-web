import Link from "next/link"
import { categoryGroups } from "@/lib/categories"

export const metadata = {
title: "Propozycje wsparcia | MenMind",
description:
"Znajdź wsparcie, aktywność lub miejsce które pomoże Ci uporządkować sytuację i zrobić kolejny krok."
}

export default function PropozycjePage() {

return (

<main className="bg-gray-100 min-h-screen">

<div className="max-w-5xl mx-auto px-6 py-16">

{/* TYTUŁ */}

<h1 className="text-4xl font-semibold text-gray-900 mb-6">
Propozycje
</h1>

<div className="h-px w-16 bg-blue-600 mb-10" />

{/* OPIS */}

<p className="text-gray-700 max-w-2xl mb-16">

Jeśli potrzebujesz wsparcia, rozmowy lub miejsca
które pomoże Ci wrócić do równowagi — tutaj
znajdziesz dostępne możliwości.

Wybierz obszar życia i zobacz dostępne opcje.

</p>

{/* GRUPY KATEGORII */}

<div className="space-y-16">

{categoryGroups.map((group) => (

<section key={group.name}>

<h2 className="text-2xl font-semibold text-gray-900 mb-6">
{group.name}
</h2>

<div className="grid md:grid-cols-3 gap-4">

{group.categories.map((category) => (

<Link
key={category}
href={`/kategoria/${category}`}
className="border border-gray-300 rounded-lg p-4 hover:border-blue-600 transition capitalize"
>

{category.replaceAll("-", " ")}

</Link>

))}

</div>

</section>

))}

</div>

</div>

</main>

)

}