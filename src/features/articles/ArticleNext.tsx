import Link from "next/link"

export default function ArticleNext(){

return(

<div className="mt-20 border-t border-neutral-800 pt-10">

<h3 className="text-lg font-semibold mb-6">
Może pomóc również
</h3>

<div className="space-y-3">

<Link
href="/ojcostwo/prawa-ojca"
className="block text-blue-500 hover:text-blue-400"
>
Prawa ojca →
</Link>

<Link
href="/ojcostwo/kontakty-z-dzieckiem"
className="block text-blue-500 hover:text-blue-400"
>
Kontakty z dzieckiem →
</Link>

<Link
href="/ojcostwo/odbudowa-relacji"
className="block text-blue-500 hover:text-blue-400"
>
Odbudowa relacji →
</Link>

</div>

</div>

)

}