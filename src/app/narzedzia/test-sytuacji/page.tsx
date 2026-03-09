"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

export default function TestPage(){

const router = useRouter()

const [score,setScore] = useState({
kryzys:0,
odbudowa:0,
wzrost:0
})

function answer(type:string){

setScore(prev=>({

...prev,

[type]:prev[type as keyof typeof prev]+1

}))

}

function finish(){

if(score.kryzys>score.odbudowa){

router.push("/sciezki/rozstanie")

}

else if(score.odbudowa>score.wzrost){

router.push("/sciezki/brak-kierunku")

}

else{

router.push("/sciezki/przywodztwo")

}

}

return(

<main className="bg-white min-h-screen">

<div className="max-w-xl mx-auto px-6 py-24">

<h1 className="text-3xl font-semibold text-black mb-8">
Krótki test sytuacji
</h1>

<div className="space-y-4">

<button
onClick={()=>answer("kryzys")}
className="w-full border p-4 rounded-lg"
>
Czuję że moje życie się sypie
</button>

<button
onClick={()=>answer("odbudowa")}
className="w-full border p-4 rounded-lg"
>
Chcę odzyskać energię i stabilność
</button>

<button
onClick={()=>answer("wzrost")}
className="w-full border p-4 rounded-lg"
>
Chcę rozwijać się i iść dalej
</button>

</div>

<button
onClick={finish}
className="mt-10 bg-black text-white px-6 py-3 rounded-lg"
>
Zobacz wynik
</button>

</div>

</main>

)

}