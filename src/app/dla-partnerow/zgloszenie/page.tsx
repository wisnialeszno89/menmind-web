"use client"

import { useState } from "react"

export default function PartnerFormPage() {

const [sent,setSent] = useState(false)

async function handleSubmit(e:any){

e.preventDefault()

const form = new FormData(e.target)

await fetch("/api/partner/apply",{
method:"POST",
body:JSON.stringify({
name:form.get("name"),
company:form.get("company"),
category:form.get("category"),
city:form.get("city"),
website:form.get("website"),
email:form.get("email")
})
})

setSent(true)

}

if(sent){

return(

<main className="min-h-screen flex items-center justify-center bg-gray-100">

<div className="text-center">

<h1 className="text-2xl font-semibold mb-4">
Dziękujemy za zgłoszenie
</h1>

<p className="text-gray-600">
Odezwemy się po weryfikacji.
</p>

</div>

</main>

)

}

return(

<main className="bg-gray-100 min-h-screen">

<div className="max-w-2xl mx-auto px-6 py-20">

<h1 className="text-3xl font-semibold mb-10">
Zgłoszenie partnera
</h1>

<form onSubmit={handleSubmit} className="space-y-6">

<input
name="name"
placeholder="Imię i nazwisko"
required
className="w-full border p-3 rounded"
/>

<input
name="company"
placeholder="Firma / działalność"
required
className="w-full border p-3 rounded"
/>

<input
name="category"
placeholder="Kategoria (np. psycholog)"
required
className="w-full border p-3 rounded"
/>

<input
name="city"
placeholder="Miasto"
required
className="w-full border p-3 rounded"
/>

<input
name="website"
placeholder="Strona internetowa"
className="w-full border p-3 rounded"
/>

<input
name="email"
placeholder="Email kontaktowy"
required
className="w-full border p-3 rounded"
/>

<button
type="submit"
className="bg-blue-600 text-white px-6 py-3 rounded"
>

Wyślij zgłoszenie

</button>

</form>

</div>

</main>

)

}