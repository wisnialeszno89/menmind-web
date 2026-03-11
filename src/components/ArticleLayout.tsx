import VerifiedContent from "@/components/VerifiedContent"
import ArticleCredibility from "@/components/ArticleCredibility"
import ArticleNext from "@/components/ArticleNext"
import ArticleUpdate from "@/components/ArticleUpdate"

type Props = {
  title: string
  intro: string
  children: React.ReactNode
}

export default function ArticleLayout({
  title,
  intro,
  children
}: Props){

return(

<main className="bg-[#111827] text-zinc-100">

<section className="px-6 py-24">

<div className="max-w-4xl mx-auto">

<h1 className="text-4xl md:text-5xl font-semibold text-blue-500 mb-6">
{title}
</h1>

<VerifiedContent />

<div className="h-px w-16 bg-blue-500 mb-12"/>

<p className="text-lg text-zinc-400 mb-16 max-w-2xl">
{intro}
</p>

<div className="space-y-12">

{children}

</div>

<ArticleNext />

<ArticleCredibility />

<ArticleUpdate />

</div>

</section>

</main>

)

}