import Link from "next/link"

export default function ExploreTools(){

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
href="/narzedzia/stres"
className="border rounded-lg p-4 hover:shadow"
>
Test poziomu stresu
</Link>

<Link
href="/narzedzia/stabilizacja"
className="border rounded-lg p-4 hover:shadow"
>
Narzędzia stabilizacji
</Link>

<Link
href="/navimind"
className="border rounded-lg p-4 hover:shadow"
>
Rozmowa w NaviMind
</Link>

</div>

</section>

)

}