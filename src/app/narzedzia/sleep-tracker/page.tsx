"use client"

import { useState } from "react"
import Link from "next/link"

export default function SleepTracker(){

const [hours,setHours]=useState(7)

return(

<main className="bg-white min-h-screen">

<div className="max-w-xl mx-auto px-6 py-24">

<h1 className="text-3xl font-semibold text-black mb-8">
Tracker snu
</h1>

<input
type="range"
min="3"
max="10"
value={hours}
onChange={(e)=>setHours(Number(e.target.value))}
className="w-full"
/>

<p className="mt-6 text-gray-700">
Spałeś: {hours} godzin
</p>

<div className="mt-10">

<Link
href="/propozycje"
className="text-blue-600 underline"
>
Zobacz wsparcie które pomaga odzyskać energię
</Link>

</div>

</div>

</main>

)

}