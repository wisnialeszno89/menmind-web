"use client"

import Link from "next/link"
import { stateScale } from "@/lib/stateScale"

export default function StatePage(){

// przykładowy wynik (później podłączymy localStorage)

const level = 2

const state = stateScale[level]

return(

<main className="bg-white min-h-screen">

<div className="max-w-2xl mx-auto px-6 py-24">

<h1 className="text-4xl font-semibold mb-10">
Twój stan
</h1>

<div className="border rounded-xl p-8">

<h2 className={`text-2xl font-semibold mb-4 ${state.color}`}>
{state.label}
</h2>

<p className="text-gray-700 mb-6">
{state.meaning}
</p>

</div>

<div className="mt-10">

<h3 className="font-semibold mb-4">
Co możesz zrobić teraz
</h3>

<div className="space-y-3">

{state.actions.map((a)=>(
<Link
key={a.href}
href={a.href}
className="block border p-4 rounded-lg hover:shadow"
>
{a.label}
</Link>
))}

</div>

</div>

<div className="mt-12 text-sm text-gray-600">

<p>
Stan może się zmieniać wraz z Twoimi działaniami.
Małe rzeczy jak sen, ruch i struktura dnia mają ogromny wpływ.
</p>

</div>

</div>

</main>

)

}