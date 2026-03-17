"use client"

import { useState } from "react"

export default function Reset90Page(){

const steps=[
"Oddychaj powoli przez nos przez 30 sekund.",
"Napnij ciało na 10 sekund i rozluźnij.",
"Powolny wdech i wydech przez 30 sekund."
]

const [step,setStep]=useState(0)

function next(){
setStep(step+1)
}

return(

<main className="bg-white min-h-screen">

<div className="max-w-xl mx-auto px-6 py-24">

<h1 className="text-3xl font-semibold text-black mb-8">
Reset 90 sekund
</h1>

{step < steps.length ? (

<div>

<p className="mb-8 text-gray-700">
{steps[step]}
</p>

<button
onClick={next}
className="bg-black text-white px-6 py-3 rounded-lg"
>
Dalej
</button>

</div>

):( 

<p className="text-green-600">
Ciało zaczyna się uspokajać.
</p>

)}

</div>

</main>

)

}