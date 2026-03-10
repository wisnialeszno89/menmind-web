"use client"

import { useState } from "react"

export default function MinimumPage(){

const [checked,setChecked]=useState<string[]>([])

const tasks=[
"7 godzin snu",
"20 minut ruchu",
"jedna trudna rzecz",
"zero alkoholu"
]

function toggle(task:string){

setChecked(prev=>
prev.includes(task)
? prev.filter(t=>t!==task)
: [...prev,task]
)

}

return(

<main className="bg-white min-h-screen">

<div className="max-w-2xl mx-auto px-6 py-24">

<h1 className="text-3xl font-semibold text-black mb-10">
Minimum dnia
</h1>

<div className="space-y-4">

{tasks.map(task=>(
<div
key={task}
onClick={()=>toggle(task)}
className="border rounded-lg p-4 cursor-pointer flex justify-between"
>

<span className={checked.includes(task) ? "line-through text-gray-500" : ""}>
{task}
</span>

<span>
{checked.includes(task) ? "✓" : ""}
</span>

</div>
))}

</div>

</div>

</main>

)

}