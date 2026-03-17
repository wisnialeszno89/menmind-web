import Link from "next/link"

export default function Page() {

  const tools = [

    {
      title: "Test sytuacji",
      href: "/narzedzia/test-sytuacji"
    },

    {
      title: "Test stresu",
      href: "/narzedzia/test-stresu"
    },

    {
      title: "Test wypalenia",
      href: "/narzedzia/test-wypalenia"
    },

    {
      title: "Plan 72h",
      href: "/narzedzia/plan-72h"
    },

    {
  title: "Reset 90 sekund",
  href: "/narzedzia/reset-90"
},
{
  title: "Mapa energii",
  href: "/narzedzia/energy-map"
}

  ]

  return (

    <main className="max-w-6xl mx-auto px-6 py-20">

      <header className="mb-16">

        <h1 className="text-4xl font-semibold mb-4">
          Narzędzia
        </h1>

        <p className="text-neutral-600">
          Proste narzędzia które pomagają odzyskać stabilność,
          zrozumieć swoją sytuację i zrobić kolejny krok.
        </p>

      </header>

      <div className="grid md:grid-cols-3 gap-6">

        {tools.map((tool) => (

          <Link
            key={tool.href}
            href={tool.href}
            className="border rounded-xl p-6 hover:shadow transition"
          >

            <h3 className="font-semibold mb-2">
              {tool.title}
            </h3>

          </Link>

        ))}

      </div>

    </main>

  )

}