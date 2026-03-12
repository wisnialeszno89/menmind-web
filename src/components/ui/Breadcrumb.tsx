import Link from "next/link"

type Props = {
section:string
}

export default function Breadcrumb({section}:Props){

return(

<div className="text-xs text-neutral-500 mb-6">

<Link href="/">MenMind</Link>
<span> / </span>
<span>{section}</span>

</div>

)

}