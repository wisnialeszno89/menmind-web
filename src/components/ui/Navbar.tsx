"use client"

import Link from "next/link"

export default function Navbar() {

return (

<header className="border-b border-neutral-200 bg-white">

<div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

<Link href="/" className="font-semibold text-lg">
MenMind
</Link>

<nav className="hidden md:flex gap-6 text-sm text-neutral-700">

<Link href="/kryzys">Kryzys</Link>
<Link href="/odbudowa">Odbudowa</Link>
<Link href="/wzrost">Wzrost</Link>
<Link href="/ojcostwo">Ojcostwo</Link>
<Link href="/rynek">Rynek</Link>
<Link href="/artykuly">Artykuły</Link>

<Link
href="/navimind"
className="font-medium text-black"
>
NaviMind
</Link>
<Link href="/wydarzenia">
Wydarzenia
</Link>

</nav>

</div>

</header>

)

}