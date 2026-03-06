"use client"

import { useState } from "react"
import Link from "next/link"

const questions=[
"czy brakuje Ci energii rano",
"czy praca przestała dawać satysfakcję",
"czy czujesz zmęczenie psychiczne",
"czy trudno Ci się zmotywować"
]

export default function BurnoutTest(){

const [score,setScore]=useState(0)
const [step,setStep]=useState(0)

const answer=(yes:boolean)=>{

if(yes) setScore(score+1)

setStep(step+1)

}

if(step>=questions.length){

let result="ok"

if(score>=2) result="uwaga"
if(score>=3) result="możliwe wypalenie"

return(

<main className="min-h-screen px-6 py-20">

<div className="max-w-xl mx-auto">

<h1 className="text-3xl font-semibold mb-6">
Wynik: {result}
</h1>

<Link
href="/propozycje"
className="bg-black text-white px-6 py-3 rounded-lg"
>
Sprawdź dostępne wsparcie
</Link>

</div>

</main>

)

}

return(

<main className="min-h-screen px-6 py-20">

<div className="max-w-xl mx-auto">

<h1 className="text-xl mb-8">
{questions[step]}
</h1>

<button
onClick={()=>answer(true)}
className="block w-full border p-4 rounded-lg mb-4"
>
tak
</button>

<button
onClick={()=>answer(false)}
className="block w-full border p-4 rounded-lg"
>
nie
</button>

</div>

</main>

)

}