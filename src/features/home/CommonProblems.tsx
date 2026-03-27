import Link from "next/link"

export default function CommonProblems(){

  const problems = [
    {
      title: "Rozstanie",
      href: "/artykuly/jak-poradzic-sobie-z-rozstaniem"
    },
    {
      title: "Chaos w życiu",
      href: "/narzedzia/test-sytuacji"
    },
    {
      title: "Brak motywacji",
      href: "/artykuly/brak-motywacji"
    },
    {
      title: "Stres",
      href: "/narzedzia/test-stresu"
    },
    {
      title: "Brak kierunku",
      href: "/narzedzia/test-kierunku"
    },
    {
      title: "Samotność",
      href: "/artykuly/samotnosc-u-mezczyzny"
    }
  ]

  return (
    <section className="py-20 border-t">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-2xl font-semibold mb-8">
          Najczęstsze problemy
        </h2>

        <div className="grid md:grid-cols-3 gap-4">

          {problems.map(p=>(
            <Link
              key={p.title}
              href={p.href}
              className="border rounded-xl p-5 card-hover"
            >
              {p.title}
            </Link>
          ))}

        </div>

      </div>
    </section>
  )
}