import Container from "@/components/ui/Container"

type Props={
title:string
intro?:string
children:React.ReactNode
}

export default function ArticleLayout({title,intro,children}:Props){

return(

<main className="py-16 md:py-24">

<Container>

<article className="max-w-3xl mx-auto">

<h1 className="text-3xl md:text-4xl font-semibold mb-6">
{title}
</h1>

{intro && (

<p className="text-lg text-neutral-600 mb-10 leading-relaxed">
{intro}
</p>

)}

<div className="
prose
prose-neutral
max-w-none
text-base
md:text-lg
leading-relaxed
space-y-6
">

{children}

</div>

</article>

</Container>

</main>

)

}