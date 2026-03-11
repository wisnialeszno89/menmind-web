import Link from "next/link"

export default function PomocPage(){

return(

<main className="bg-white min-h-screen">

<div className="max-w-4xl mx-auto px-6 py-24">

<h1 className="text-4xl font-semibold mb-6">
Wsparcie dla mężczyzn
</h1>

<p className="text-gray-600 mb-12">
Jeśli przechodzisz trudny moment,
istnieją miejsca które mogą pomóc.
</p>

<div className="space-y-4">

<Link
href="/propozycje"
className="block border rounded-xl p-6 hover:shadow"
>
Znajdź wsparcie w Twoim mieście
</Link>

<Link
href="/narzedzia/test-sytuacji"
className="block border rounded-xl p-6 hover:shadow"
>
Zrób szybki test sytuacji
</Link>

<Link
href="/kryzys"
className="block border rounded-xl p-6 hover:shadow"
>
Zobacz materiały o kryzysie
</Link>

</div>

</div>

</main>

)

}