"use client"

import { useState } from "react"
import Link from "next/link"
import { stateScale } from "@/lib/stateScale"

const questions = [
"Czujesz zmęczenie mimo odpoczynku",
"Praca przestała dawać sens",
"Trudno Ci się zmotywować",
"Czujesz frustrację",
"Masz poczucie że wszystko Cię męczy"
]

export default function BurnoutTest(){

const [step,setStep]=useState(0)
const [score,setScore]=useState(0)

function answer(yes:boolean){

if(yes) setScore(score+1)

setStep(step+1)

}

if(step>=questions.length){

const level=Math.min(Math.floor(score/1.5),4)
const state=stateScale[level]

return(

<main className="bg-white min-h-screen">

<div className="max-w-xl mx-auto px-6 py-24">

<h1 className="text-3xl font-semibold mb-4">
Poziom: {state.label}
</h1>

<p className="text-gray-700 mb-10">
{state.meaning}
</p>

<div className="space-y-4">

{state.actions.map((a)=>(
<Link
key={a.href}
href={a.href}
className="block border p-4 rounded-lg"
>
{a.label}
</Link>
))}

</div>

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