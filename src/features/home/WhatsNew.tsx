export default function WhatsNew() {

  const items = [
    "Nowy test sytuacji życiowej",
    "Ścieżka stabilizacji",
    "Plan 72h",
    "Nowe artykuły o kryzysie"
  ]

  return (
    <section className="py-20 border-t">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-2xl font-semibold mb-6">
          Nowości w MenMind
        </h2>

        <div className="space-y-3">
          {items.map((item, i) => (
            <div
              key={i}
              className="flex gap-3 text-neutral-700"
            >
              <span>🆕</span>
              {item}
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}