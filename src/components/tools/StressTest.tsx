"use client"

import { useState } from "react"

const questions=[
"Trudno mi się skoncentrować",
"Czuję napięcie w ciele",
"Mam problemy ze snem",
"Łatwo się irytuję",
"Czuję że mam za dużo na głowie"
]

export default function StressTest(){

const [score,setScore]=useState(0)
const [done,setDone]=useState(false)

function answer(value:number){

setScore(score+value)

if(score>8){

setDone(true)

}

}

if(done){

return(

<div className="border rounded-xl p-6 bg-white">

<h2 className="text-xl font-semibold text-black mb-4">
Twój poziom stresu
</h2>

<p className="text-black mb-4">
Możliwe że jesteś w stanie przeciążenia.
</p>

<a
href="/narzedzia/stabilizacja"
className="bg-black text-white px-4 py-2 rounded"
>
Zobacz narzędzia stabilizacji
</a>

</div>

)

}

return(

<div className="border rounded-xl p-6 bg-white">

<h2 className="text-xl font-semibold text-black mb-6">
Test poziomu stresu
</h2>

{questions.map((q,i)=>(

<div key={i} className="mb-4">

<p className="text-black mb-2">{q}</p>

<div className="flex gap-2">

<button onClick={()=>answer(0)} className="border px-3 py-1 rounded">
Nie
</button>

<button onClick={()=>answer(1)} className="border px-3 py-1 rounded">
Czasami
</button>

<button onClick={()=>answer(2)} className="border px-3 py-1 rounded">
Często
</button>

</div>

</div>

))}

</div>

)

}