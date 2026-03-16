"use client"

import { useState } from "react"
import Link from "next/link"
import StateScale from "@/features/tools/StateScale"
import ProgressBar from "@/features/tools/ProgressBar"
import { saveTestResult } from "@/lib/userState"

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

const percent = Math.round((score / questions.length) * 100)

saveTestResult({
 id: "sytuacja",
 score,
 percent,
 date: Date.now()
})

let state="stabilnie"
let description="Twoja sytuacja wygląda na względnie stabilną."
let color="text-green-600"

if(percent >= 40){
state="przeciążenie"
description="W Twoim życiu pojawia się przeciążenie."
color="text-orange-600"
}

if(percent >= 70){
state="możliwy kryzys"
description="Możliwe że przechodzisz trudniejszy moment."
color="text-red-600"
}

return(

<main className="min-h-screen bg-white">

<div className="max-w-xl mx-auto px-6 py-24">

<h1 className={`text-3xl font-semibold mb-4 ${color}`}>
Twój stan: {state}
</h1>

<p className="text-gray-700 mb-6">
{description}
</p>

<p className="text-sm text-gray-500 mb-10">
Wynik: {percent}%
</p>

<StateScale value={percent} />

<h2 className="text-lg font-semibold mt-12 mb-4">
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

</div>

</main>

)

}

return(

<main className="min-h-screen bg-white">

<div className="max-w-xl mx-auto px-6 py-24">

<ProgressBar
step={step+1}
total={questions.length}
/>

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

</div>

</main>

)

}