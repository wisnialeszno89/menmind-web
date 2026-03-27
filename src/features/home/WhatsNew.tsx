export default function WhatsNew() {

  const items = [
    "Nowy test sytuacji życiowej",
    "Ścieżka stabilizacji",
    "Plan 72h",
    "Nowe artykuły o kryzysie"
  ]

  return (
    <section className="py-20 border-t">
      <div className="max-w-6xl mx-auto px-6 text-center">

        <h2 className="text-2xl font-semibold mb-6">
          Nowości w MenMind
        </h2>

        <div className="space-y-3 max-w-xl mx-auto">
          {items.map((item, i) => (
            <div key={i} className="text-neutral-700">
              🆕 {item}
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}