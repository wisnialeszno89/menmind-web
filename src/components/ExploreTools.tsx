import Link from "next/link"
import { navimindLink } from "@/lib/navimind"

export default function ExploreTools(){

const navimind = navimindLink({})

return(

<section className="border rounded-xl p-6 bg-white mb-12">

<h2 className="text-2xl font-semibold text-black mb-6">
Możesz spróbować
</h2>

<div className="grid md:grid-cols-2 gap-4">

<Link
href="/narzedzia/test-sytuacji"
className="border rounded-lg p-4 hover:shadow"
>
Test sytuacji
</Link>

<Link
href="/narzedzia/test-stresu"
className="border rounded-lg p-4 hover:shadow"
>
Test poziomu stresu
</Link>

<Link
href="/narzedzia/reset"
className="border rounded-lg p-4 hover:shadow"
>
Narzędzia stabilizacji
</Link>

<a
href={navimind}
target="_blank"
className="border rounded-lg p-4 hover:shadow"
>
Rozmowa w NaviMind
</a>

</div>

</section>

)

}