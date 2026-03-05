import Link from "next/link"

export const metadata = {
title: "Dołącz jako partner | MenMind",
description:
"Dołącz do platformy MenMind i docieraj do mężczyzn szukających wsparcia, rozwoju i aktywności."
}

export default function PartnerPage() {

return (

<main className="bg-gray-100 min-h-screen">

<div className="max-w-4xl mx-auto px-6 py-20">

<h1 className="text-4xl font-semibold text-gray-900 mb-6">
Dołącz jako partner
</h1>

<div className="h-px w-16 bg-blue-600 mb-10" />

<p className="text-gray-700 mb-12 max-w-2xl">

MenMind to platforma dla mężczyzn, którzy szukają
realnego wsparcia w kryzysie, ojcostwie,
rozwoju i zdrowiu.

Jeśli prowadzisz działalność, która może
pomóc mężczyznom – możesz dołączyć jako partner.

</p>

<section className="mb-16">

<h2 className="text-2xl font-semibold mb-4">
Dlaczego warto
</h2>

<ul className="space-y-3 text-gray-700">

<li>– widoczność w wyszukiwarce MenMind</li>
<li>– ruch z artykułów i poradników</li>
<li>– profil partnera</li>
<li>– możliwość dotarcia do nowych klientów</li>

</ul>

</section>

<Link
href="/dla-partnerow/zgloszenie"
className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition"
>

Zgłoś się jako partner →

</Link>

</div>

</main>

)

}