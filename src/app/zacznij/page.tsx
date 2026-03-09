"use client"

import { useState } from "react"
import Link from "next/link"

type Mode = "kryzys" | "kierunek" | "rozwoj" | null

export default function StartPage(){

const [mode,setMode]=useState<Mode>(null)

return(

<main className="bg-white min-h-screen">

<div className="max-w-4xl mx-auto px-6 py-24">

<h1 className="text-4xl font-semibold text-black mb-6">
Od czego chcesz zacząć?
</h1>

<p className="text-black mb-12 max-w-xl">
Nie musisz wiedzieć dokładnie czego potrzebujesz.
Wybierz opcję najbliższą Twojej sytuacji.
</p>

{/* WYBÓR */}

<div className="grid md:grid-cols-3 gap-6 mb-16">

<button
onClick={()=>setMode("kryzys")}
className="border rounded-xl p-6 hover:shadow text-left"
>
<h2 className="font-semibold text-black mb-2">
Mam kryzys
</h2>

<p className="text-black text-sm">
Rozstanie, stres, problemy w życiu.
</p>

</button>

<button
onClick={()=>setMode("kierunek")}
className="border rounded-xl p-6 hover:shadow text-left"
>
<h2 className="font-semibold text-black mb-2">
Szukam kierunku
</h2>

<p className="text-black text-sm">
Czuję że utknąłem lub potrzebuję zmiany.
</p>

</button>

<button
onClick={()=>setMode("rozwoj")}
className="border rounded-xl p-6 hover:shadow text-left"
>
<h2 className="font-semibold text-black mb-2">
Chcę wzmocnić życie
</h2>

<p className="text-black text-sm">
Rozwój, energia, dyscyplina.
</p>

</button>

</div>

{/* REKOMENDACJE */}

{mode==="kryzys" &&(

<div className="space-y-6">

<h2 className="text-2xl font-semibold text-black">
Możesz zacząć od:
</h2>

<div className="grid md:grid-cols-2 gap-4">

<Link
href="/kryzys"
className="border rounded-lg p-4 hover:shadow"
>
Zobacz ścieżki kryzysu
</Link>

<Link
href="/narzedzia/stabilizacja"
className="border rounded-lg p-4 hover:shadow"
>
Narzędzia stabilizacji
</Link>

<Link
href="/navimind?state=kryzys"
className="border rounded-lg p-4 hover:shadow"
>
Porozmawiaj w NaviMind
</Link>

<Link
href="/propozycje"
className="border rounded-lg p-4 hover:shadow"
>
Znajdź wsparcie
</Link>

</div>

</div>

)}

{mode==="kierunek" &&(

<div className="space-y-6">

<h2 className="text-2xl font-semibold text-black">
Możesz sprawdzić:
</h2>

<div className="grid md:grid-cols-2 gap-4">

<Link
href="/odbudowa"
className="border rounded-lg p-4 hover:shadow"
>
Ścieżki odbudowy
</Link>

<Link
href="/narzedzia/mapa-energii"
className="border rounded-lg p-4 hover:shadow"
>
Mapa energii dnia
</Link>

<Link
href="/navimind?state=kierunek"
className="border rounded-lg p-4 hover:shadow"
>
Porozmawiaj w NaviMind
</Link>

</div>

</div>

)}

{mode==="rozwoj" &&(

<div className="space-y-6">

<h2 className="text-2xl font-semibold text-black">
Możesz eksplorować:
</h2>

<div className="grid md:grid-cols-2 gap-4">

<Link
href="/wzrost"
className="border rounded-lg p-4 hover:shadow"
>
Ścieżki wzrostu
</Link>

<Link
href="/narzedzia"
className="border rounded-lg p-4 hover:shadow"
>
Zobacz narzędzia
</Link>

<Link
href="/navimind?state=rozwoj"
className="border rounded-lg p-4 hover:shadow"
>
Porozmawiaj w NaviMind
</Link>

</div>

</div>

)}

</div>

</main>

)

}