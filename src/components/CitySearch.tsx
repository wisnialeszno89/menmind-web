"use client"

import { useState } from "react"
import { cities } from "@/data/cities"
import { useRouter } from "next/navigation"

export default function CitySearch() {

const [query,setQuery] = useState("")
const router = useRouter()

const results = cities.filter(city =>
city.name.toLowerCase().includes(query.toLowerCase())
)

return (

<div className="max-w-md">

<input
type="text"
placeholder="Wpisz miasto..."
value={query}
onChange={(e)=>setQuery(e.target.value)}
className="border rounded-lg px-4 py-2 w-full"
/>

{query && (

<div className="border mt-2 rounded-lg">

{results.slice(0,8).map(city => (

<div
key={city.slug}
onClick={()=>router.push(`/propozycje/${city.slug}`)}
className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
>

{city.name}

</div>

))}

</div>

)}

</div>

)

}