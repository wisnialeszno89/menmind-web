"use client"

import { useEffect, useState } from "react"

export default function PartnerPanel(){

const [stats,setStats]=useState<any>(null)

useEffect(()=>{

fetch("/api/partner/stats")
.then(res=>res.json())
.then(data=>setStats(data))

},[])

if(!stats){

return(

<main className="min-h-screen flex items-center justify-center">

<p>Ładowanie danych...</p>

</main>

)

}

return(

<main className="bg-white min-h-screen">

<div className="max-w-4xl mx-auto px-6 py-24">

<h1 className="text-4xl font-semibold text-black mb-10">
Panel partnera
</h1>

<div className="grid md:grid-cols-3 gap-6 mb-20">

<div className="border rounded-xl p-6">

<h2 className="text-sm text-gray-500 mb-2">
Wyświetlenia profilu
</h2>

<p className="text-3xl font-semibold">
{stats.views}
</p>

</div>

<div className="border rounded-xl p-6">

<h2 className="text-sm text-gray-500 mb-2">
Kliknięcia strony
</h2>

<p className="text-3xl font-semibold">
{stats.clicks}
</p>

</div>

<div className="border rounded-xl p-6">

<h2 className="text-sm text-gray-500 mb-2">
Pozycja w rankingu
</h2>

<p className="text-3xl font-semibold">
#{stats.rank}
</p>

</div>

</div>

<p className="text-black max-w-xl">
Te statystyki pokazują aktywność Twojego profilu na platformie MenMind.
</p>

</div>

</main>

)

}