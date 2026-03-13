import Container from "@/components/ui/Container"
import Link from "next/link"
import WorldPreview from "@/components/WorldPreview"
import HomeArticles from "@/components/HomeArticles"

export default function Home() {

return (

<main>

<section className="py-24">

<Container>

<h1 className="text-4xl md:text-5xl font-semibold max-w-2xl mb-6">
Platforma dla mężczyzn w kryzysie i w rozwoju
</h1>

<p className="text-neutral-700 text-lg max-w-xl leading-relaxed">
MenMind pomaga przejść przez trudne momenty życia
i budować silniejsze życie krok po kroku.
</p>

</Container>

</section>



<section className="py-20 border-t">

<Container>

<h2 className="text-2xl font-semibold mb-12">
Droga przez kryzys
</h2>

<div className="grid md:grid-cols-2 gap-10">

<Link href="/kryzys" className="block border p-8 hover:border-black">

<h3 className="text-xl font-medium mb-3">
Kryzys
</h3>

<p className="text-neutral-600 text-sm">
Moment gdy wszystko się rozpada.
Tu zaczyna się pierwszy krok.
</p>

</Link>

<Link href="/odbudowa" className="block border p-8 hover:border-black">

<h3 className="text-xl font-medium mb-3">
Odbudowa
</h3>

<p className="text-neutral-600 text-sm">
Odzyskiwanie stabilności po chaosie.
</p>

</Link>

<Link href="/wzrost" className="block border p-8 hover:border-black">

<h3 className="text-xl font-medium mb-3">
Wzrost
</h3>

<p className="text-neutral-600 text-sm">
Budowanie silniejszej wersji siebie.
</p>

</Link>

<Link href="/ojcostwo" className="block border p-8 hover:border-black">

<h3 className="text-xl font-medium mb-3">
Ojcostwo
</h3>

<p className="text-neutral-600 text-sm">
Relacja z dzieckiem i odpowiedzialność.
</p>

</Link>

</div>

</Container>

</section>



<section className="py-24 border-t">

<Container>

<h2 className="text-2xl font-semibold mb-6">
Dlaczego powstał MenMind
</h2>

<p className="max-w-2xl text-neutral-700 leading-relaxed">
Wielu mężczyzn przechodzi przez trudne momenty w samotności.
Rozstania, kryzysy życiowe, utrata sensu.
MenMind powstał jako miejsce,
w którym można znaleźć wsparcie,
zrozumienie i kierunek działania.
</p>

</Container>
<WorldPreview />
<HomeArticles />

</section>

</main>

)

}