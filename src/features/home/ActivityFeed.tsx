export default function ActivityFeed() {
  const activity = [
    "Nowy artykuł: Jak odzyskać kontrolę",
    "Dodano narzędzie: Plan 72h",
    "Nowa ścieżka: Stabilizacja",
    "Zaktualizowano test sytuacji",
    "Nowy przewodnik: Kryzys po rozstaniu"
  ]

  return (
    <section className="py-16 border-t">
      <div className="max-w-4xl mx-auto px-6">

        <h2 className="text-lg font-medium mb-6 text-neutral-700">
          Ostatnia aktywność
        </h2>

        <div className="space-y-3">
          {activity.map((item, i) => (
            <div
              key={i}
              className="text-sm text-neutral-600 flex gap-3"
            >
              <span className="text-neutral-400">•</span>
              {item}
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}