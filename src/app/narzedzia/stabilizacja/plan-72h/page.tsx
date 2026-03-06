"use client"

import { useState } from "react"
import Link from "next/link"

const tasks=[
"śpij minimum 7h",
"30 minut ruchu",
"jedna konkretna decyzja",
"ogranicz wiadomości i social media"
]

export default function Plan72(){

const [done,setDone]=useState<string[]>([])

const toggle=(task:string)=>{

setDone(prev=>
prev.includes(task)
? prev.filter(t=>t!==task)
: [...prev,task]
)

}

return(

<main className="min-h-screen px-6 py-20">

<div className="max-w-xl mx-auto">

<h1 className="text-3xl font-semibold mb-10">
Plan 72h
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