export default function HowItWorks() {
  const steps = [
    "Opisujesz swoją sytuację",
    "Dostajesz kierunek",
    "Korzystasz z narzędzi",
    "Podejmujesz kolejny krok"
  ]

  return (
    <section className="py-20 border-t">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl font-semibold text-center mb-10">
          Jak działa MenMind
        </h2>

        <div className="grid md:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <div
              key={i}
              className="border rounded-xl p-6 text-center"
            >
              <div className="text-3xl font-bold mb-2">
                {i + 1}
              </div>
              <p className="text-neutral-600">{s}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}