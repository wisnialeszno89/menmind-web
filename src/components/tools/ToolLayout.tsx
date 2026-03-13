type Props = {
title: string
description?: string
children: React.ReactNode
}

export default function ToolLayout({ title, description, children }: Props) {

return (

<main className="max-w-3xl mx-auto px-6 py-20">

<h1 className="text-4xl font-semibold mb-6">
{title}
</h1>

{description && (
<p className="text-xl text-gray-600 mb-12">
{description}
</p>
)}

<div className="space-y-8 text-lg leading-relaxed">

{children}

</div>

</main>

)

}