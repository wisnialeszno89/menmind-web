"use client"

import { useState } from "react"
import Link from "next/link"

export default function SleepTracker(){

const [hours,setHours]=useState(7)

return(

<main className="min-h-screen px-6 py-20">

<div className="max-w-xl mx-auto">

<h1 className="text-3xl font-semibold mb-8">
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

<p className="mt-4">
Spałeś: {hours} godzin
</p>

<div className="mt-12">

<Link
href="/propozycje"
className="text-blue-600 underline"
>
Potrzebujesz więcej energii → wsparcie
</Link>

</div>

</div>

</main>

)

}