"use client"

import { useState } from "react"

export default function StressReset(){

const steps=[
"Weź powolny wdech przez nos",
"Wstrzymaj oddech na chwilę",
"Wypuść powietrze ustami",
"Rozluźnij ramiona"
]

const [step,setStep]=useState(0)

return(

<div className="border rounded-xl p-6 bg-white">

<h2 className="text-xl font-semibold text-black mb-6">
Reset stresu (2 min)
</h2>

<p className="text-black mb-6">
{steps[step]}
</p>

<button
onClick={()=>setStep((step+1)%steps.length)}
className="bg-black text-white px-4 py-2 rounded"
>
Dalej
</button>

</div>

)

}