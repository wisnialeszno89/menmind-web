"use client"

import { useState } from "react"

export default function MicroPlan(){

const [task,setTask]=useState("")
const [tasks,setTasks]=useState<string[]>([])

function addTask(){

if(!task) return

setTasks([...tasks,task])
setTask("")

}

return(

<div className="border rounded-xl p-6 bg-white">

<h2 className="text-xl font-semibold text-black mb-4">
Plan dnia (3 rzeczy)
</h2>

<input
value={task}
onChange={(e)=>setTask(e.target.value)}
placeholder="Dodaj zadanie"
className="border p-2 w-full mb-4"
/>

<button
onClick={addTask}
className="bg-black text-white px-4 py-2 rounded mb-6"
>
Dodaj
</button>

<ul className="space-y-2">

{tasks.map((t,i)=>(
<li key={i} className="border p-2 rounded">
{t}
</li>
))}

</ul>

</div>

)

}