"use client"

import { useState } from "react"
import ProgressBar from "@/features/tools/ProgressBar"
import StateScale from "@/features/tools/StateScale"
import { saveTestResult } from "@/lib/userState"

const questions = [
"Czuję napięcie w ciele",
"Mam problemy ze snem",
"Łatwo się irytuję",
"Mam trudność z koncentracją",
"Czuję presję i przeciążenie"
]

export default function StressTest(){

const [step,setStep]=useState(0)
const [score,setScore]=useState(0)

function answer(val:boolean){

if(val) setScore(score+1)

setStep(step+1)

}

if(step>=questions.length){

const percent=Math.round((score/questions.length)*100)

saveTestResult({
 id:"stres",
 score,
 percent,
 date:Date.now()
})

let label="spokojnie"
let desc="Twój poziom stresu jest w normie."

if(percent>=40){
label="napięcie"
desc="Twój organizm zaczyna być przeciążony."
}

if(percent>=70){
label="wysoki stres"
desc="Twój organizm jest w stanie silnego napięcia."
}

return(

<main className="min-h-screen bg-white">

<div className="max-w-xl mx-auto px-6 py-24">

<h1 className="text-3xl font-semibold mb-4">
Poziom stresu: {label}
</h1>

<p className="text-gray-700 mb-6">
{desc}
</p>

<p className="text-sm text-gray-500 mb-10">
Wynik: {percent}%
</p>

<StateScale value={percent} />

</div>

</main>

)

}

return(

<main className="min-h-screen bg-white">

<div className="max-w-xl mx-auto px-6 py-24">

<ProgressBar step={step+1} total={questions.length}/>

<h1 className="text-xl mb-8">
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