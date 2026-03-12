type Props={
children:React.ReactNode
}

export default function Quote({children}:Props){

return(

<div className="border-l-4 pl-4 my-8 text-neutral-700 italic">
{children}
</div>

)

}