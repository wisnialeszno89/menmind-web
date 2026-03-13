type Props = {
value: number
}

export default function StateScale({ value }: Props) {

let label = "ok"
let color = "bg-green-500"

if (value < 20) {
label = "kryzys"
color = "bg-red-500"
}

else if (value < 40) {
label = "przeciążenie"
color = "bg-orange-500"
}

else if (value < 60) {
label = "niestabilność"
color = "bg-yellow-500"
}

else if (value < 80) {
label = "w normie"
color = "bg-green-400"
}

return (

<div className="mt-8">

<div className="text-sm mb-2">
Twój stan: <strong>{label}</strong>
</div>

<div className="w-full bg-gray-200 rounded h-3">

<div
className={`${color} h-3 rounded`}
style={{ width: `${value}%` }}
/>

</div>

</div>

)

}