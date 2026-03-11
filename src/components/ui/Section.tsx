type Props={
title:string
children:any
}

export default function Section({title,children}:Props){

return(

<section className="mt-24">

<h2 className="text-3xl font-semibold mb-10">
{title}
</h2>

{children}

</section>

)

}