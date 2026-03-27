export default function Testimonials() {
  const items = [
    {
      text: "Pierwszy raz ktoś to poukładał prosto. Bez motywacyjnego bełkotu.",
      author: "Tomek, 34"
    },
    {
      text: "Zacząłem od testu i w końcu wiem od czego ruszyć.",
      author: "Paweł, 41"
    },
    {
      text: "Proste narzędzia, ale działają. Szczególnie plan 72h.",
      author: "Kamil, 29"
    }
  ]

  return (
    <section className="py-20 border-t">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl font-semibold text-center mb-10">
          Co mówią użytkownicy
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {items.map((i, idx) => (
            <div key={idx} className="border rounded-xl p-6">
              <p className="mb-4 text-neutral-700">
                "{i.text}"
              </p>

              <div className="text-sm text-neutral-500">
                {i.author}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}