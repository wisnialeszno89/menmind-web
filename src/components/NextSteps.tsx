import Link from "next/link"

export default function NextSteps({world}:{world:string}){

let pathLink="/sciezki"
let toolLink="/narzedzia"
let navimindLink="/navimind"
let supportLink="/propozycje"

if(world==="kryzys"){

pathLink="/kryzys"
toolLink="/narzedzia/stabilizacja"
navimindLink="/navimind?state=kryzys"

}

if(world==="ojcostwo"){

pathLink="/ojcostwo"
toolLink="/narzedzia/ojcostwo"
navimindLink="/navimind?state=ojcostwo"

}

if(world==="wzrost"){

pathLink="/wzrost"
toolLink="/narzedzia/energia"
navimindLink="/navimind?state=wzrost"

}

return(

<section className="mt-20 border rounded-xl p-8">

<h2 className="text-2xl font-semibold text-black mb-6">
Jeśli to Twoja sytuacja
</h2>

<div className="grid md:grid-cols-2 gap-4">

<Link
href={pathLink}
className="border rounded-lg p-4 hover:shadow"
>
Zobacz ścieżkę
</Link>

<Link
href={toolLink}
className="border rounded-lg p-4 hover:shadow"
>
Spróbuj narzędzia
</Link>

<Link
href={navimindLink}
className="border rounded-lg p-4 hover:shadow"
>
Porozmawiaj w NaviMind
</Link>

<Link
href={supportLink}
className="border rounded-lg p-4 hover:shadow"
>
Znajdź wsparcie
</Link>

</div>

</section>

)

}