export default function ForYouSection(){

  const items = [
    "Czujesz chaos i nie wiesz od czego zacząć",
    "Masz pracę, ale coś jest nie tak",
    "Przechodzisz kryzys lub rozstanie",
    "Brakuje Ci energii i kierunku",
    "Chcesz poukładać życie krok po kroku"
  ]

  return(
    <section className="py-20 border-t bg-neutral-50">
      <div className="max-w-6xl mx-auto px-6 text-center">

        <h2 className="text-2xl font-semibold mb-6">
          To miejsce jest dla Ciebie jeśli:
        </h2>

        <div className="max-w-xl mx-auto space-y-3">
          {items.map((item,i)=>(
            <div key={i} className="text-neutral-700">
              • {item}
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}