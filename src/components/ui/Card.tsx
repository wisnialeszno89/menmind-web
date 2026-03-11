import Link from "next/link"

type Props = {
title:string
description?:string
href?:string
badge?:string
}

export default function Card({
title,
description,
href,
badge
}:Props){

const content=(

<div className="border border-neutral-200 rounded-xl p-6 hover:shadow-md transition bg-white">

{badge &&(

<span className="text-xs bg-neutral-100 px-2 py-1 rounded mb-3 inline-block">
{badge}
</span>

)}

<h3 className="text-lg font-semibold mb-2">
{title}
</h3>

{description &&(

<p className="text-gray-600 text-sm">
{description}
</p>

)}

</div>

)

if(href){

return <Link href={href}>{content}</Link>

}

return content

}