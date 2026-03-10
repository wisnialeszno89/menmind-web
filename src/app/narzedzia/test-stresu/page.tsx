"use client"

import { useState } from "react"
import Link from "next/link"

const questions = [
"Czy masz problemy ze snem?",
"Czy czujesz napięcie w ciele?",
"Czy łatwo się irytujesz?",
"Czy masz trudność z koncentracją?",
"Czy czujesz przeciążenie obowiązkami?"
]

export default function StressTest(){

const [step,setStep]=useState(0)
const [score,setScore]=useState(0)

function answer(yes:boolean){

if(yes) setScore(score+1)

setStep(step+1)

}

if(step>=questions.length){

let level="niski"
let description="Twój poziom stresu wygląda na niski."

if(score>=2){
level="umiarkowany"
description="Pojawiają się oznaki napięcia."
}

if(score>=4){
level="wysoki"
description="Twój organizm może być przeciążony."
}

return(

<main className="bg-white min-h-screen">

<div className="max-w-xl mx-auto px-6 py-24">

<h1 className="text-3xl font-semibold mb-6">
Poziom stresu: {level}
</h1>

<p className="text-gray-700 mb-10">
{description}
</p>

<div className="space-y-4">

<Link
href="/narzedzia/reset"
className="block border p-4 rounded-lg"
>
Zrób szybki reset
</Link>

<Link
href="/narzedzia/plan-72h"
className="block border p-4 rounded-lg"
>
Plan stabilizacji 72h
</Link>

<Link
href="/propozycje"
className="block bg-black text-white px-6 py-3 rounded-lg text-center"
>
Znajdź wsparcie
</Link>

</div>
<Link
href="/stan"
className="block bg-black text-white px-6 py-3 rounded-lg text-center mt-6"
>
Zobacz swój ogólny stan
</Link>
</div>

</main>

)

}

return(

<main className="bg-white min-h-screen">

<div className="max-w-xl mx-auto px-6 py-24">

<h1 className="text-xl mb-8">
{questions[step]}
</h1>

<div className="space-y-4">

<button
onClick={()=>answer(true)}
className="block w-full border p-4 rounded-lg"
>
Tak
</button>

<button
onClick={()=>answer(false)}
className="block w-full border p-4 rounded-lg"
>
Nie
</button>

</div>

</div>

</main>

)

}