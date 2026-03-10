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
let color="text-green-600"

if(score>=2){
state="przeciążenie"
description="W Twoim życiu pojawia się przeciążenie."
color="text-orange-600"
}

if(score>=4){
state="możliwy kryzys"
description="Możliwe że przechodzisz trudniejszy moment."
color="text-red-600"
}

return(

<main className="bg-white min-h-screen">

<div className="max-w-xl mx-auto px-6 py-24">

<h1 className={`text-3xl font-semibold mb-6 ${color}`}>
Twój stan: {state}
</h1>

<p className="text-gray-700 mb-10">
{description}
</p>

<h2 className="text-lg font-semibold mb-4">
Co możesz zrobić teraz
</h2>

<div className="space-y-4">

<Link
href="/narzedzia/reset"
className="block border p-4 rounded-lg hover:shadow"
>
Zrób szybki reset
</Link>

<Link
href="/sciezki"
className="block border p-4 rounded-lg hover:shadow"
>
Zobacz ścieżki działania
</Link>

<Link
href="/propozycje"
className="block border p-4 rounded-lg hover:shadow"
>
Znajdź wsparcie
</Link>

</div>

<Link
href="/stan"
className="block bg-black text-white px-6 py-3 rounded-lg text-center mt-8"
>
Zobacz swój ogólny stan
</Link>

<div className="mt-10 border rounded-lg p-4 text-sm text-gray-600">

<p className="font-semibold mb-2">
Skala MenMind
</p>

<ul className="space-y-1">
<li className="text-green-600">0 – stabilnie</li>
<li className="text-yellow-600">1 – napięcie</li>
<li className="text-orange-600">2 – przeciążenie</li>
<li className="text-red-600">3 – kryzys</li>
<li className="text-red-700">4 – alarm</li>
</ul>

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
className="block w-full border p-4 rounded-lg hover:shadow"
>
Tak
</button>

<button
onClick={()=>answer(false)}
className="block w-full border p-4 rounded-lg hover:shadow"
>
Nie
</button>

</div>

<p className="text-sm text-gray-500 mt-8">
Pytanie {step+1} z {questions.length}
</p>

</div>

</main>

)

}