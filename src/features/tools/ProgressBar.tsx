type Props = {
step: number
total: number
}

export default function ProgressBar({ step, total }: Props){

const percent = Math.round((step / total) * 100)

return(

<div className="mb-10">

<div className="flex justify-between text-sm text-gray-500 mb-2">
<span>Pytanie {step} z {total}</span>
<span>{percent}%</span>
</div>

<div className="w-full bg-gray-200 h-2 rounded">

<div
className="bg-black h-2 rounded transition-all"
style={{width:`${percent}%`}}
/>

</div>

</div>

)

}