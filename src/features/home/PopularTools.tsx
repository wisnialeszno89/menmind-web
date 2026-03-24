import Link from "next/link"

export default function PopularTools(){

  const tools = [
    {
      title: "Reset 90 sekund",
      href: "/narzedzia/reset"
    },
    {
      title: "Plan 72h",
      href: "/narzedzia/plan-72h"
    },
    {
      title: "Brain dump",
      href: "/narzedzia/brain-dump"
    },
    {
      title: "Test sytuacji",
      href: "/narzedzia/test-sytuacji"
    }
  ]

  return (

    <section className="py-20">

      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-2xl font-semibold mb-8 text-center">
          Najczęściej wybierane narzędzia
        </h2>

        <div className="grid md:grid-cols-4 gap-4">

          {tools.map(tool => (

            <Link
              key={tool.title}
              href={tool.href}
              className="border rounded-xl p-6 text-center hover:shadow transition"
            >
              {tool.title}
            </Link>

          ))}

        </div>

      </div>

    </section>

  )
}