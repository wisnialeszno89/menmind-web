"use client"

import { useState } from "react"
import Link from "next/link"
import ProgressBar from "@/components/tools/ProgressBar"
import StateScale from "@/components/tools/StateScale"
import { saveTestResult } from "@/lib/userState"

const questions = [
"Masz ostatnio mało energii",
"Czujesz chaos w życiu",
"Masz trudności ze snem",
"Czujesz że utknąłeś w miejscu",
"Masz poczucie że wszystko jest na Twojej głowie",
"Masz mało czasu dla siebie"
]

export default function LifeTestPage(){

const [step,setStep]=useState(0)
const [score,setScore]=useState(0)

function answer(val:boolean){

if(val) setScore(score+1)

setStep(step+1)

}

if(step>=questions.length){

const percent=Math.round((score/questions.length)*100)

saveTestResult({
 id:"zycie",
 score,
 percent,
 date:Date.now()
})

let stage="wzrost"
let desc="Twoje życie wygląda na stabilne."

if(percent>=30){
stage="stabilizacja"
desc="Twoje życie potrzebuje lekkiego uporządkowania."
}

if(percent>=60){
stage="odbudowa"
desc="Prawdopodobnie potrzebujesz czasu na odbudowę."
}

if(percent>=80){
stage="kryzys"
desc="Możliwe że przechodzisz trudniejszy moment życia."
}

return(

<main className="min-h-screen flex items-center justify-center bg-white">

<div className="max-w-xl text-center">

<h1 className="text-3xl font-semibold mb-4">
Twój etap: {stage}
</h1>

<p className="text-gray-600 mb-6">
{desc}
</p>

<StateScale value={percent}/>

<Link
href={`/${stage}`}
className="bg-black text-white px-6 py-3 rounded-lg block mt-8"
>
Zobacz kierunek
</Link>

</div>

</main>

)

}

return(

<main className="min-h-screen flex items-center justify-center bg-white">

<div className="max-w-xl text-center">

<ProgressBar step={step+1} total={questions.length}/>

<h1 className="text-2xl font-semibold mb-10">
{questions[step]}
</h1>

<div className="space-y-4">

<button onClick={()=>answer(true)} className="block w-full border p-4 rounded-lg hover:shadow">
Tak
</button>

<button onClick={()=>answer(false)} className="block w-full border p-4 rounded-lg hover:shadow">
Nie
</button>

</div>

</div>

</main>

)

}