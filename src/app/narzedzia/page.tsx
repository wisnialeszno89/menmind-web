import Link from "next/link"

export default function ToolsPage(){

return(

<main className="bg-white min-h-screen">

<div className="max-w-6xl mx-auto px-6 py-24">

<h1 className="text-4xl font-semibold text-black mb-10">
Narzędzia
</h1>

<p className="text-black max-w-xl mb-16">
Proste narzędzia pomagające odzyskać stabilność,
energię i kierunek.
</p>

<div className="grid md:grid-cols-2 gap-8">

<Link href="/narzedzia/stabilizacja" className="border rounded-xl p-6 hover:shadow">
<h2 className="text-xl font-semibold text-black mb-2">Stabilizacja</h2>
<p className="text-black">Regulacja stresu i emocji.</p>
</Link>

<Link href="/narzedzia/energia" className="border rounded-xl p-6 hover:shadow">
<h2 className="text-xl font-semibold text-black mb-2">Energia</h2>
<p className="text-black">Odzyskanie energii i struktury dnia.</p>
</Link>

<Link href="/narzedzia/refleksja" className="border rounded-xl p-6 hover:shadow">
<h2 className="text-xl font-semibold text-black mb-2">Refleksja</h2>
<p className="text-black">Uporządkowanie myśli i emocji.</p>
</Link>

<Link href="/narzedzia/ojcostwo" className="border rounded-xl p-6 hover:shadow">
<h2 className="text-xl font-semibold text-black mb-2">Ojcostwo</h2>
<p className="text-black">Relacja z dzieckiem.</p>
</Link>

</div>

</div>

</main>

)

}