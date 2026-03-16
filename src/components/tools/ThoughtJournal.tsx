"use client"

import { useState } from "react"

export default function ThoughtJournal(){

const [text,setText]=useState("")

function save(){

localStorage.setItem(
"menmind_journal",
text
)

alert("Zapisano")

}

return(

<div className="border rounded-xl p-6 bg-white">

<h2 className="text-xl font-semibold text-black mb-4">
Dziennik myśli
</h2>

<textarea
value={text}
onChange={(e)=>setText(e.target.value)}
placeholder="Co masz teraz w głowie?"
className="border w-full p-3 h-40 mb-4"
/>

<button
onClick={save}
className="bg-black text-white px-4 py-2 rounded"
>
Zapisz
</button>

</div>

)

}