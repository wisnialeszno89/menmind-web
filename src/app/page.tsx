import Link from "next/link"
import TrustSection from "@/components/TrustSection"
import QuickScan from "@/components/QuickScan"

export default function HomePage() {

return (

<main className="bg-white min-h-screen">

<div className="max-w-6xl mx-auto px-6 py-24">

{/* HERO */}

<h1 className="text-5xl font-semibold text-black mb-6">
MenMind
</h1>

<p className="text-black max-w-2xl mb-12">
Przestrzeń dla mężczyzn którzy chcą odzyskać kierunek,
spokój lub zbudować coś więcej.
</p>

{/* QUICK SCAN */}

<QuickScan/>

{/* ŚWIATY */}

<h2 className="text-3xl font-semibold text-black mb-8">
Od czego chcesz zacząć?
</h2>

<div className="grid md:grid-cols-2 gap-8 mb-24">

<Link
href="/kryzys"
className="border rounded-xl p-10 hover:shadow transition"
>

<h3 className="text-2xl font-semibold text-black mb-2">
Kryzys
</h3>

<p className="text-gray-600">
Gdy życie zaczyna się komplikować.
</p>

</Link>

<Link
href="/odbudowa"
className="border rounded-xl p-10 hover:shadow transition"
>

<h3 className="text-2xl font-semibold text-black mb-2">
Odbudowa
</h3>

<p className="text-gray-600">
Powrót do energii, struktury i stabilności.
</p>

</Link>

<Link
href="/wzrost"
className="border rounded-xl p-10 hover:shadow transition"
>

<h3 className="text-2xl font-semibold text-black mb-2">
Wzrost
</h3>

<p className="text-gray-600">
Rozwój osobisty, kierunek życia i możliwości.
</p>

</Link>

<Link
href="/ojcostwo"
className="border rounded-xl p-10 hover:shadow transition"
>

<h3 className="text-2xl font-semibold text-black mb-2">
Ojcostwo
</h3>

<p className="text-gray-600">
Relacja z dzieckiem i rola ojca.
</p>

</Link>

</div>

{/* TRUST */}

<TrustSection/>

</div>

</main>

)

}