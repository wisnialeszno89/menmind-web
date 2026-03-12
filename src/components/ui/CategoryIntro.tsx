type Props = {
title:string
description:string
}

export default function CategoryIntro({title,description}:Props){

return(

<div className="max-w-2xl mb-12">

<h1 className="text-3xl md:text-4xl font-semibold mb-4">
{title}
</h1>

<p className="text-neutral-700 text-base md:text-lg leading-relaxed">
{description}
</p>

</div>

)

}