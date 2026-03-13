type Props = {
title: string
description?: string
children: React.ReactNode
}

export default function ArticleLayout({ title, description, children }: Props) {

return (

<main className="max-w-3xl mx-auto px-6 py-20">

<header className="mb-14">

<h1 className="text-4xl md:text-5xl font-semibold leading-tight mb-6">
{title}
</h1>

{description && (
<p className="text-xl text-gray-600 leading-relaxed">
{description}
</p>
)}

</header>

<article className="text-lg leading-relaxed space-y-6">

{children}

</article>

</main>

)

}