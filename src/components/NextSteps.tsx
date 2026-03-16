import Link from "next/link"
import { navimindLink } from "@/lib/navimind"

export default function NextSteps({world}:{world:string}){

let pathLink="/sciezki"
let toolLink="/narzedzia"
let navimind = navimindLink({state:world})

let supportLink="/propozycje"

if(world==="kryzys"){

pathLink="/kryzys"
toolLink="/narzedzia/reset"

}

if(world==="ojcostwo"){

pathLink="/ojcostwo"
toolLink="/narzedzia/relacje"

}

if(world==="wzrost"){

pathLink="/wzrost"
toolLink="/narzedzia/energia"

}

if(world==="odbudowa"){

pathLink="/odbudowa"
toolLink="/narzedzia/plan-72h"

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

<a
href={navimind}
target="_blank"
className="border rounded-lg p-4 hover:shadow"
>
Porozmawiaj z NaviMind
</a>

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