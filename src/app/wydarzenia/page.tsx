import Link from "next/link"
import { events } from "@/data/events"

export default function EventsPage(){

return(

<main className="bg-white min-h-screen">

<div className="max-w-6xl mx-auto px-6 py-24">

<h1 className="text-4xl font-semibold mb-10">
Wydarzenia dla mężczyzn
</h1>

<p className="text-gray-700 mb-16 max-w-xl">
Warsztaty, spotkania, wyprawy i wydarzenia
które pomagają budować siłę, relacje i kierunek życia.
</p>

<div className="grid md:grid-cols-2 gap-8">

{events.map(event=>(

<div
key={event.id}
className="border rounded-xl p-6"
>

<h2 className="text-xl font-semibold mb-3">
{event.title}
</h2>

<p className="text-gray-600 mb-4">
{event.description}
</p>

<p className="text-sm text-gray-500 mb-4">
{event.city} • {event.date}
</p>

{event.website && (

<a
href={event.website}
target="_blank"
className="inline-block bg-black text-white px-4 py-2 rounded"
>
Zobacz wydarzenie
</a>

)}

</div>

))}

</div>

</div>

</main>

)

}