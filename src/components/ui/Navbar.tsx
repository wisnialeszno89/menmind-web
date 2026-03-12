import Link from "next/link"
import Container from "./Container"

export default function Navbar() {

return (

<header className="border-b">

<Container>

<div className="flex items-center justify-between h-16">

<Link href="/" className="font-semibold text-lg">
MenMind
</Link>

<nav className="hidden md:flex gap-6 text-sm">

<Link href="/kryzys">Kryzys</Link>

<Link href="/odbudowa">Odbudowa</Link>

<Link href="/wzrost">Wzrost</Link>

<Link href="/ojcostwo">Ojcostwo</Link>

<Link href="/narzedzia">Narzędzia</Link>

<Link href="/specjalisci">Specjaliści</Link>

</nav>

</div>

</Container>

</header>

)

}