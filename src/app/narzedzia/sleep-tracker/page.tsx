"use client"

import { useState } from "react"

export default function SleepTracker(){

const [hours,setHours]=useState(7)

function interpretation(){

if(hours<=4) return "alarm"
if(hours<=6) return "przeciążenie"
if(hours<=7) return "ok"
return "regeneracja"

}

return(

<main className="bg-white min-h-screen">

<div className="max-w-xl mx-auto px-6 py-24">

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

<p className="mt-6 text-gray-700">
Spałeś: {hours} godzin
</p>

<p className="mt-4 text-black">
Stan: {interpretation()}
</p>

</div>

</main>

)

}