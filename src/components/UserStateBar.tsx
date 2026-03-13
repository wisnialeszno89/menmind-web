"use client"

import { useEffect, useState } from "react"
import { getResults } from "@/lib/userState"
import Link from "next/link"

export default function UserStateBar(){

const [avg,setAvg] = useState<number | null>(null)

useEffect(()=>{

const results = getResults()

if(results.length === 0) return

const value =
results.reduce((a,b)=>a + b.percent,0) / results.length

setAvg(Math.round(value))

},[])

if(avg === null) return null

return(

<div className="bg-black text-white py-3">

<div className="max-w-6xl mx-auto px-6 flex justify-between">

<p>
Twój ostatni stan: <strong>{avg}%</strong>
</p>

<Link
href="/stan"
className="underline"
>
Zobacz panel
</Link>

</div>

</div>

)

}