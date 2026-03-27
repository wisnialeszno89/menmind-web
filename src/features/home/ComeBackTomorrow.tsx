export default function ComeBackTomorrow(){

  const items = [
    "Dodajemy nowe narzędzia",
    "Rozwijamy sekcję kryzys",
    "Pojawiają się nowi partnerzy",
    "Rozbudowujemy testy"
  ]

  const text = items[new Date().getDay() % items.length]

  return (
    <section className="py-16 border-t">
      <div className="max-w-6xl mx-auto px-6">

        <div className="border rounded-xl p-6 bg-neutral-50">

          <h3 className="font-semibold mb-2">
            Wróć jutro
          </h3>

          <p className="text-sm text-neutral-600">
            {text}. Małymi krokami poukładasz sytuację.
          </p>

        </div>

      </div>
    </section>
  )
}