type Props = {
items:string[]
}

export default function Checklist({items}:Props){

return(

<ul className="space-y-2 my-6">

{items.map((item,i)=>(
<li key={i} className="flex gap-2">
<span>✓</span>
<span>{item}</span>
</li>
))}

</ul>

)

}