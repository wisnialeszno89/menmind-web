"use client"

import { useState } from "react"

export default function EnergyMap(){

const [energy,setEnergy]=useState(5)

return(

<div className="border rounded-xl p-6 bg-white">

<h2 className="text-xl font-semibold text-black mb-6">
Mapa energii dnia
</h2>

<input
type="range"
min="0"
max="10"
value={energy}
onChange={(e)=>setEnergy(Number(e.target.value))}
className="w-full"
/>

<p className="text-black mt-4">
Poziom energii: {energy}
</p>

{energy<4 &&(
<p className="text-black mt-4">
Możliwe że potrzebujesz odpoczynku lub resetu.
</p>
)}

</div>

)

}