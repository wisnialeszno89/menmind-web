"use client"

import { useState } from "react"
import Link from "next/link"

const questions = [
"Czuję że moje życie zaczyna się sypać",
"Brakuje mi energii",
"Nie wiem w którą stronę iść",
"Czuję duży stres",
"Moje relacje są napięte"
]

export default function SituationTest(){

const [step,setStep]=useState(0)
const [score,setScore]=useState(0)

function answer(yes:boolean){

if(yes) setScore(score+1)

setStep(step+1)

}

if(step >= questions.length){

let state="stabilnie"
let description="Twoja sytuacja wygląda na względnie stabilną."

if(score>=2){
state="przeciążenie"
description="W Twoim życiu pojawia się przeciążenie."
}

if(score>=4){
state="możliwy kryzys"
description="Możliwe że przechodzisz trudniejszy moment."
}

return(

<main className="bg-white min-h-screen">

<div className="max-w-xl mx-auto px-6 py-24">

<h1 className="text-3xl font-semibold mb-6">
Twój stan: {state}
</h1>

<p className="text-gray-700 mb-10">
{description}
</p>

<h2 className="text-lg font-semibold mb-4">
Co możesz zrobić
</h2>

<div className="space-y-4">

<Link
href="/narzedzia/reset"
className="block border p-4 rounded-lg"
>
Zrób szybki reset
</Link>

<Link
href="/sciezki"
className="block border p-4 rounded-lg"
>
Zobacz ścieżki działania
</Link>

<Link
href="/propozycje"
className="block bg-black text-white px-6 py-3 rounded-lg text-center"
>
Znajdź wsparcie
</Link>

</div>

</div>

</main>

)

}

return(

<main className="bg-white min-h-screen">

<div className="max-w-xl mx-auto px-6 py-24">

<h1 className="text-2xl mb-10">
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