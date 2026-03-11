"use client"

import { useState } from "react"

export default function DodajHistoriePage(){

const [sent,setSent] = useState(false)

function handleSubmit(e:React.FormEvent){

e.preventDefault()

setSent(true)

/* tu później podepniemy API */

}

if(sent){

return(

<main className="bg-[#111827] text-zinc-100 min-h-screen flex items-center justify-center">

<div className="text-center max-w-lg px-6">

<h1 className="text-3xl font-semibold text-blue-500 mb-6">
Dziękujemy za podzielenie się historią
</h1>

<p className="text-zinc-400">
Twoja historia zostanie przeczytana
i może pomóc innym ojcom.
</p>

</div>

</main>

)

}

return(

<main className="bg-[#111827] text-zinc-100 min-h-screen">

<div className="max-w-3xl mx-auto px-6 py-24">

<h1 className="text-4xl font-semibold text-blue-500 mb-6">
Podziel się swoją historią
</h1>

<div className="h-px w-16 bg-blue-500 mb-12"/>

<p className="text-zinc-400 mb-12 max-w-xl">
Twoja historia może pomóc innemu ojcu
który przechodzi przez podobny moment.
Możesz pozostać anonimowy.
</p>

<form
onSubmit={handleSubmit}
className="space-y-8"
>

<div>

<label className="block text-sm text-zinc-400 mb-2">
Tytuł historii
</label>

<input
required
className="w-full bg-[#0f172a] border border-neutral-700 rounded-lg px-4 py-3"
/>

</div>

<div>

<label className="block text-sm text-zinc-400 mb-2">
Twoja historia
</label>

<textarea
required
rows={8}
className="w-full bg-[#0f172a] border border-neutral-700 rounded-lg px-4 py-3"
/>

</div>

<div>

<label className="block text-sm text-zinc-400 mb-2">
Imię (opcjonalnie)
</label>

<input
className="w-full bg-[#0f172a] border border-neutral-700 rounded-lg px-4 py-3"
/>

</div>

<button
className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-400"
>
Wyślij historię
</button>

</form>

</div>

</main>

)

}