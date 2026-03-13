"use client"

import { useEffect, useState } from "react"
import { getResults } from "@/lib/userState"
import Link from "next/link"

export default function PathCompass(){

const [state,setState]=useState("")

useEffect(()=>{

const results = getResults()

if(results.length === 0) return

const avg =
results.reduce((a,b)=>a + b.percent,0) / results.length

if(avg < 30) setState("wzrost")
else if(avg < 60) setState("stabilizacja")
else if(avg < 80) setState("odbudowa")
else setState("kryzys")

},[])

return(

<main className="min-h-screen bg-white">

<div className="max-w-xl mx-auto px-6 py-24">

<h1 className="text-3xl font-semibold mb-6">
Twój kierunek
</h1>

{state === "" && (

<p className="text-gray-600">
Najpierw zrób test aby zobaczyć swój kierunek.
</p>

)}

{state !== "" && (

<>

<p className="text-gray-700 mb-8">

Na podstawie Twoich testów wygląda na to,
że jesteś w obszarze:

<strong> {state}</strong>

</p>

<Link
href={`/${state}`}
className="block bg-black text-white px-6 py-3 rounded-lg text-center"
>

Zobacz swoją ścieżkę

</Link>

</>

)}

</div>

</main>

)

}