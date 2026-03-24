import Link from "next/link"

export default function QuickProblems(){

  const items = [
    {
      title: "Rozstanie",
      href: "/sciezki/rozstanie"
    },
    {
      title: "Brak energii",
      href: "/sciezki/energia"
    },
    {
      title: "Problemy finansowe",
      href: "/sciezki/finanse"
    },
    {
      title: "Samotność",
      href: "/sciezki/samotnosc"
    }
  ]

  return (

    <section className="py-20 bg-gray-50">

      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-2xl font-semibold mb-8 text-center">
          Najczęstsze sytuacje
        </h2>

        <div className="grid md:grid-cols-4 gap-4">

          {items.map(item => (

            <Link
              key={item.title}
              href={item.href}
              className="border rounded-xl p-6 text-center hover:shadow transition"
            >
              {item.title}
            </Link>

          ))}

        </div>

      </div>

    </section>

  )

}