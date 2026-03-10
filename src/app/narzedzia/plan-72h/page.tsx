"use client"

import { useState } from "react"
import Link from "next/link"

export default function Plan72(){

const tasks=[
"śpij minimum 7 godzin",
"30 minut ruchu",
"jedna konkretna decyzja",
"ogranicz media i wiadomości"
]

const [done,setDone]=useState<string[]>([])

function toggle(task:string){

setDone(prev=>
prev.includes(task)
? prev.filter(t=>t!==task)
: [...prev,task]
)

}

return(

<main className="bg-white min-h-screen">

<div className="max-w-xl mx-auto px-6 py-24">

<h1 className="text-3xl font-semibold text-black mb-10">
Plan stabilizacji 72h
</h1>

<div className="space-y-4">

{tasks.map(task=>(
<div
key={task}
onClick={()=>toggle(task)}
className="border rounded-lg p-4 cursor-pointer"
>
{task}
</div>
))}

</div>

<div className="mt-12">

<Link
href="/propozycje"
className="text-blue-600 underline"
>
Jeśli sytuacja jest trudna → zobacz wsparcie
</Link>

</div>

</div>

</main>

)

}