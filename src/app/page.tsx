import Link from "next/link"
import TrustSection from "@/components/TrustSection"
import WorldPreview from "@/components/WorldPreview"
import QuickScan from "@/components/QuickScan"

export default function HomePage() {

return (

<main className="bg-white min-h-screen">

<div className="max-w-6xl mx-auto px-6 py-24">

{/* HERO */}

<h1 className="text-5xl font-semibold text-black mb-6">
MenMind
</h1>

<p className="text-black max-w-2xl mb-16">
Platforma wsparcia dla mężczyzn w trudnych momentach życia
oraz w rozwoju osobistym.
</p>

{/* QUICK SCAN */}

<QuickScan/>

{/* ALTERNATYWA – WYBÓR ŚWIATA */}

<h2 className="text-3xl font-semibold text-black mb-8">
Od czego chcesz zacząć?
</h2>

<div className="grid md:grid-cols-2 gap-8 mb-20">

<Link
href="/kryzys"
className="border rounded-xl p-10 hover:shadow transition"
>

<h2 className="text-2xl font-semibold text-black mb-2">
Kryzys
</h2>

<p className="text-black">
Rozstanie, stres, utrata pracy lub moment,
w którym wszystko się sypie.
</p>

</Link>

<Link
href="/odbudowa"
className="border rounded-xl p-10 hover:shadow transition"
>

<h2 className="text-2xl font-semibold text-black mb-2">
Odbudowa
</h2>

<p className="text-black">
Powrót do równowagi, energii i stabilności.
</p>

</Link>

<Link
href="/wzrost"
className="border rounded-xl p-10 hover:shadow transition"
>

<h2 className="text-2xl font-semibold text-black mb-2">
Wzrost
</h2>

<p className="text-black">
Budowanie siły, kierunku i mentalności.
</p>

</Link>

<Link
href="/ojcostwo"
className="border rounded-xl p-10 hover:shadow transition"
>

<h2 className="text-2xl font-semibold text-black mb-2">
Ojcostwo
</h2>

<p className="text-black">
Relacja z dzieckiem i rola ojca.
</p>

</Link>

</div>

{/* TRUST */}

<TrustSection/>

{/* ŚWIATY – PODGLĄD */}

<WorldPreview/>

</div>

</main>

)

}