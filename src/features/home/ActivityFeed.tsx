export default function ActivityFeed() {

  const activity = [
    "Nowy artykuł: Jak odzyskać kontrolę",
    "Dodano narzędzie: Plan 72h",
    "Nowa ścieżka: Stabilizacja",
    "Zaktualizowano test sytuacji",
    "Nowy przewodnik: Kryzys po rozstaniu"
  ]

  return (
    <section className="py-20 border-t">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-2xl font-semibold mb-6">
          Ostatnia aktywność
        </h2>

        <div className="space-y-3">
          {activity.map((item, i) => (
            <div key={i} className="flex gap-3 text-neutral-700">
              <span>•</span>
              {item}
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}