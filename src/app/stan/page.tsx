"use client"

import { useEffect, useState } from "react"
import { getResults } from "@/lib/userState"

export default function StatePage(){

const [results,setResults]=useState<any[]>([])

useEffect(()=>{

setResults(getResults())

},[])

return(

<main className="min-h-screen bg-white">

<div className="max-w-3xl mx-auto px-6 py-24">

<h1 className="text-3xl font-semibold mb-12">
Twój stan
</h1>

{results.length === 0 && (

<p className="text-gray-600">
Nie masz jeszcze zapisanych wyników testów.
</p>

)}

<div className="space-y-6">

{results.map((r,i)=>(

<div
key={i}
className="border rounded-lg p-6"
>

<p className="text-sm text-gray-500 mb-2">
Test: {r.id}
</p>

<p className="text-2xl font-semibold">
{r.percent}%
</p>

</div>

))}

</div>

</div>

</main>

)

}