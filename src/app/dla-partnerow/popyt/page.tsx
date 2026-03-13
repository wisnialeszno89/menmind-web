"use client"

import { useEffect, useState } from "react"

type CityStats = {
city: string
views: number
clicks: number
conversion: string
}

export default function DemandPublicPage(){

const [data,setData]=useState<CityStats[]>([])

useEffect(()=>{

fetch("/api/stats/demand?range=30")
.then(res=>res.json())
.then(res=>setData(res))

},[])

return(

<main className="bg-white min-h-screen">

<div className="max-w-5xl mx-auto px-6 py-24">

<h1 className="text-4xl font-semibold mb-10">
Gdzie mężczyźni szukają pomocy
</h1>

<p className="text-gray-700 mb-16 max-w-xl">
Poniższe dane pokazują gdzie użytkownicy platformy
najczęściej szukają wsparcia i specjalistów.
</p>

<div className="space-y-6">

{data.map((item)=>(
<div
key={item.city}
className="border rounded-xl p-6 flex justify-between"
>

<div>

<p className="text-xl font-semibold">
{item.city}
</p>

<p className="text-gray-500 text-sm">
wejścia: {item.views}
</p>

</div>

<div className="text-blue-600 text-xl font-semibold">
{item.conversion}%
</div>

</div>
))}

</div>

</div>

</main>

)

}