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
Przestrzeń dla mężczyzn.
Miejsce gdzie możesz uporządkować sytuację,
odbudować energię i znaleźć kierunek.
</p>

{/* QUICK SCAN */}

<QuickScan/>

{/* ŚWIATY */}

<WorldPreview/>

{/* TRUST */}

<TrustSection/>

</div>

</main>

)

}