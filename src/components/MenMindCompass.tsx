import Link from "next/link"

type World = "kryzys" | "odbudowa" | "wzrost" | "ojcostwo"

export default function MenMindCompass({ world }: { world?: World }) {

const map:any = {

kryzys:{
title:"Jeśli jesteś w kryzysie",
text:"Najważniejsze teraz jest zatrzymanie chaosu i odzyskanie stabilności.",
tool:"/narzedzia/reset",
path:"/kryzys",
navimind:"/navimind?state=kryzys"
},

odbudowa:{
title:"Jeśli jesteś w odbudowie",
text:"Powoli odzyskujesz energię i porządek w życiu.",
tool:"/narzedzia/plan-72h",
path:"/odbudowa",
navimind:"/navimind?state=odbudowa"
},

wzrost:{
title:"Jeśli jesteś w rozwoju",
text:"To moment budowania silniejszej wersji siebie.",
tool:"/narzedzia/energia",
path:"/wzrost",
navimind:"/navimind?state=wzrost"
},

ojcostwo:{
title:"Jeśli jesteś ojcem",
text:"Twoja obecność i relacja z dzieckiem mają ogromne znaczenie.",
tool:"/narzedzia/relacje",
path:"/ojcostwo",
navimind:"/navimind?state=ojcostwo"
}

}

const state = world ? map[world] : null

return (

<section className="border rounded-xl p-8 bg-white mt-16">

<h2 className="text-2xl font-semibold mb-4">
Kompas MenMind
</h2>

{state ? (

<>

<h3 className="text-lg font-medium mb-2">
{state.title}
</h3>

<p className="text-neutral-600 mb-6">
{state.text}
</p>

<div className="grid md:grid-cols-3 gap-4">

<Link
href={state.tool}
className="border rounded-lg p-4 hover:shadow"
>
Spróbuj narzędzia
</Link>

<Link
href={state.path}
className="border rounded-lg p-4 hover:shadow"
>
Zobacz ścieżkę
</Link>

<Link
href={state.navimind}
className="border rounded-lg p-4 hover:shadow"
>
Porozmawiaj z NaviMind
</Link>

</div>

</>

) : (

<>

<p className="text-neutral-600 mb-6">
Jeśli nie wiesz gdzie jesteś — zacznij od sprawdzenia swojej sytuacji.
</p>

<div className="grid md:grid-cols-3 gap-4">

<Link
href="/narzedzia/test-sytuacji"
className="border rounded-lg p-4 hover:shadow"
>
Sprawdź swoją sytuację
</Link>

<Link
href="/narzedzia"
className="border rounded-lg p-4 hover:shadow"
>
Zobacz narzędzia
</Link>

<Link
href="/navimind"
className="border rounded-lg p-4 hover:shadow"
>
Porozmawiaj z NaviMind
</Link>

</div>

</>

)}

</section>

)

}