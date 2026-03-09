import { faq } from "@/content/faq"

export default function FAQSection({world}:{world:string}){

const questions = faq[world as keyof typeof faq]

if(!questions) return null

return(

<section className="mt-20">

<h2 className="text-2xl font-semibold text-black mb-6">
Najczęstsze pytania
</h2>

<div className="space-y-6">

{questions.map((item)=>(
<div key={item.q}>

<p className="font-semibold text-black mb-1">
{item.q}
</p>

<p className="text-black text-sm">
{item.a}
</p>

</div>
))}

</div>

</section>

)

}