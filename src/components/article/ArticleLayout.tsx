type Props = {
title: string
description?: string
children: React.ReactNode
}

export default function ArticleLayout({ title, description, children }: Props) {

return (

<main className="max-w-3xl mx-auto px-6 py-20">

<h1 className="text-4xl font-semibold mb-6">
{title}
</h1>

{description && (
<p className="text-gray-600 mb-10 text-lg">
{description}
</p>
)}

<article className="prose prose-lg max-w-none">

{children}

</article>

</main>

)

}