"use client"

import { useState } from "react"
import Link from "next/link"

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

let result="stabilizacja"

if(score>=2) result="odbudowa"
if(score>=4) result="kryzys"
if(score<=1) result="wzrost"

return(

<main className="min-h-screen flex items-center justify-center">

<div className="max-w-xl text-center">

<h1 className="text-3xl font-semibold mb-6">
Twój etap: {result}
</h1>

<Link
href={`/${result}`}
className="bg-black text-white px-6 py-3 rounded-lg"
>

Zobacz kierunek

</Link>

</div>

</main>

)

}

return(

<main className="min-h-screen flex items-center justify-center">

<div className="max-w-xl text-center">

<h1 className="text-2xl font-semibold mb-10">
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
<div className="w-full bg-gray-200 h-2 rounded mb-6">

<div
className="bg-black h-2 rounded"
style={{width:`${(step/questions.length)*100}%`}}
/>

</div>
<button
onClick={() =>
navigator.share({
title:"Sprawdź swój etap życia",
url:window.location.href
})
}
className="border px-4 py-2 rounded mt-6"
>
Udostępnij test
</button>
</div>

</main>

)

}