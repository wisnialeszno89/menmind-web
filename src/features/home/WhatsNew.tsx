export default function WhatsNew() {
  const items = [
    "Nowy test sytuacji życiowej",
    "Ścieżka stabilizacji",
    "Plan 72h",
    "Nowe artykuły o kryzysie"
  ]

  return (
    <section className="py-16 border-t bg-neutral-50">
      <div className="max-w-4xl mx-auto px-6">

        <h2 className="text-xl font-semibold mb-6">
          Nowości w MenMind
        </h2>

        <ul className="space-y-3">
          {items.map((i, idx) => (
            <li key={idx} className="flex gap-3">
              <span>🆕</span>
              {i}
            </li>
          ))}
        </ul>

      </div>
    </section>
  )
}