"use client";

import { useState } from "react";
import Link from "next/link";

const questions = [
"czy masz problemy ze snem",
"czy czujesz napięcie w ciele",
"czy trudno Ci się skoncentrować",
"czy łatwo się irytujesz",
"czy masz poczucie chaosu"
]

export default function StressTest(){

const [score,setScore] = useState(0)
const [step,setStep] = useState(0)

const answer = (yes:boolean)=>{

if(yes) setScore(score+1)

setStep(step+1)

}

if(step>=questions.length){

let result="niski"

if(score>=2) result="średni"
if(score>=4) result="wysoki"

return(

<main className="min-h-screen px-6 py-20">

<div className="max-w-xl mx-auto">

<h1 className="text-3xl font-semibold mb-6">
Twój poziom stresu: {result}
</h1>

<p className="mb-10">
To tylko orientacyjny wynik.
Jeśli napięcie utrzymuje się długo, warto poszukać wsparcia.
</p>

<Link
href="/propozycje"
className="bg-black text-white px-6 py-3 rounded-lg"
>
Zobacz możliwe wsparcie
</Link>

</div>

</main>

)

}

return(

<main className="min-h-screen px-6 py-20">

<div className="max-w-xl mx-auto">

<h1 className="text-2xl mb-8">
{questions[step]}
</h1>

<div className="space-y-4">

<button
onClick={()=>answer(true)}
className="block w-full border p-4 rounded-lg"
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

</div>

</main>

)

}