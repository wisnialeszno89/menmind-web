import Link from "next/link"

type Props = {
title: string
description?: string
world?: string
children: React.ReactNode
}

const worldLabels: Record<string,string> = {
kryzys:"Kryzys",
ojcostwo:"Ojcostwo",
odbudowa:"Odbudowa",
wzrost:"Wzrost"
}

export default function ArticleLayout({ title, description, world, children }: Props) {

return (

<main className="max-w-3xl mx-auto px-6 py-20">

{/* BREADCRUMBS */}

<div className="text-sm text-gray-500 mb-8">

<Link href="/" className="hover:underline">
MenMind
</Link>

<span className="mx-2">/</span>

{world && (
<>
<Link href={`/${world}`} className="hover:underline">
{worldLabels[world]}
</Link>

<span className="mx-2">/</span>
</>
)}

<span className="text-gray-700">
{title}
</span>

</div>


{/* WORLD LABEL */}

{world && (
<div className="text-xs uppercase tracking-wide text-gray-500 mb-4">
{worldLabels[world]}
</div>
)}


{/* TITLE */}

<h1 className="text-4xl md:text-5xl font-semibold leading-tight mb-6">
{title}
</h1>


{/* DESCRIPTION */}

{description && (
<p className="text-xl text-gray-600 leading-relaxed mb-12">
{description}
</p>
)}


{/* CONTENT */}

<article className="text-lg leading-relaxed space-y-6">

{children}

</article>

</main>

)

}