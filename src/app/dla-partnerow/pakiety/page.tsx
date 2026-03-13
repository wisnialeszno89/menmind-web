import Link from "next/link"

export default function PakietyPage() {

return(

<main className="min-h-screen px-6 py-24 bg-white">

<div className="max-w-6xl mx-auto">

<h1 className="text-4xl font-semibold mb-12">
Pakiety współpracy
</h1>

<div className="grid md:grid-cols-3 gap-8">

{/* BASIC */}

<div className="border rounded-xl p-8">

<h2 className="text-xl font-semibold mb-4">
Basic
</h2>

<p className="text-3xl font-semibold mb-6">
59 zł / miesiąc
</p>

<ul className="space-y-2 text-gray-600 mb-8">

<li>• profil firmy</li>
<li>• obecność w katalogu</li>
<li>• link do strony</li>

</ul>

<Link
href="/dla-partnerow/zgloszenie"
className="block text-center bg-black text-white px-6 py-3 rounded-lg"
>
Dołącz
</Link>

</div>


{/* PRO */}

<div className="border rounded-xl p-8 bg-gray-50">

<h2 className="text-xl font-semibold mb-4">
Pro
</h2>

<p className="text-3xl font-semibold mb-6">
149 zł / miesiąc
</p>

<ul className="space-y-2 text-gray-600 mb-8">

<li>• wszystko z planu Basic</li>
<li>• ⭐ polecany partner</li>
<li>• wyższa pozycja w wynikach</li>
<li>• statystyki w panelu</li>

</ul>

<Link
href="/dla-partnerow/zgloszenie"
className="block text-center bg-black text-white px-6 py-3 rounded-lg"
>
Dołącz
</Link>

</div>


{/* STRATEGIC */}

<div className="border rounded-xl p-8">

<h2 className="text-xl font-semibold mb-4">
Strategic
</h2>

<p className="text-3xl font-semibold mb-6">
399 zł / miesiąc
</p>

<ul className="space-y-2 text-gray-600 mb-8">

<li>• wszystko z planu Pro</li>
<li>• 🏆 partner strategiczny</li>
<li>• sekcja polecana</li>
<li>• polecenia w artykułach</li>

</ul>

<Link
href="/dla-partnerow/zgloszenie"
className="block text-center bg-black text-white px-6 py-3 rounded-lg"
>
Dołącz
</Link>

</div>

</div>

</div>

</main>

)

}