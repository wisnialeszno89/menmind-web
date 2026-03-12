type Props = {
children: React.ReactNode
}

export default function Highlight({children}:Props){

return(

<div className="bg-neutral-100 p-4 my-8 text-sm leading-relaxed">
{children}
</div>

)

}