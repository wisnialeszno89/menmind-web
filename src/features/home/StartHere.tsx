import Link from "next/link"

export default function StartHere(){

  const items = [
    {
      title: "Zrób szybki test",
      description: "Zobacz gdzie jesteś i od czego zacząć",
      href: "/narzedzia/test-sytuacji"
    },
    {
      title: "Wybierz pierwsze narzędzie",
      description: "Proste kroki na początek",
      href: "/narzedzia"
    },
    {
      title: "Zobacz ścieżkę działania",
      description: "Spokojny plan krok po kroku",
      href: "/sciezki"
    }
  ]

  return(
    <section className="py-20 border-t bg-neutral-50">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-2xl font-semibold mb-8">
          Tu zaczyna większość mężczyzn
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          {items.map((item, i)=>(
            <Link
              key={i}
              href={item.href}
              className="border rounded-xl p-6 card-hover bg-white"
            >
              <h3 className="font-semibold mb-2">
                {item.title}
              </h3>

              <p className="text-sm text-neutral-600">
                {item.description}
              </p>

            </Link>
          ))}

        </div>

      </div>
    </section>
  )
}