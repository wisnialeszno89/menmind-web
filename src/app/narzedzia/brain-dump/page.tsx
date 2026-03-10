"use client"

import { useState } from "react"

export default function BrainDumpPage(){

const [text,setText]=useState("")
const [focus,setFocus]=useState("")

return(

<main className="bg-white min-h-screen">

<div className="max-w-2xl mx-auto px-6 py-24">

<h1 className="text-3xl font-semibold text-black mb-6">
Brain Dump
</h1>

<p className="text-gray-700 mb-10">
Wyrzuć wszystkie myśli z głowy. Bez struktury.
</p>

<textarea
className="w-full border rounded-lg p-4 mb-8"
rows={6}
value={text}
onChange={(e)=>setText(e.target.value)}
/>

<label className="block text-sm text-gray-600 mb-2">
Jedna rzecz którą ruszysz teraz
</label>

<input
className="w-full border rounded-lg p-4"
value={focus}
onChange={(e)=>setFocus(e.target.value)}
/>

</div>

</main>

)

}