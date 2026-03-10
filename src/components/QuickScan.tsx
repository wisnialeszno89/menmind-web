"use client"

import { useRouter } from "next/navigation"

export default function QuickScan(){

const router = useRouter()

function start(){

router.push("/narzedzia/test-sytuacji")

}

return(

<section className="border rounded-xl p-10 mb-16">

<h2 className="text-2xl font-semibold mb-4">
Skan stanu (60 sekund)
</h2>

<p className="text-gray-600 mb-6">
Jeśli nie wiesz od czego zacząć,
zrób szybki test który pokaże
Twój aktualny stan.
</p>

<button
onClick={start}
className="bg-black text-white px-6 py-3 rounded-lg"
>
Rozpocznij skan
</button>

</section>

)

}