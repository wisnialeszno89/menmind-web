import Link from "next/link"

export default function PopularTools(){

  const tools = [
    {
      title: "Reset 90 sekund",
      href: "/narzedzia/reset",
      badge: "Popularne"
    },
    {
      title: "Plan 72h",
      href: "/narzedzia/plan-72h",
      badge: "Popularne"
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
              className="border rounded-xl p-6 text-center card-hover hover:shadow transition bg-white"
            >

              {tool.badge && (
                <div className="text-xs bg-neutral-100 px-2 py-1 rounded mb-3 inline-block">
                  {tool.badge}
                </div>
              )}

              {tool.title}

            </Link>

          ))}

        </div>

      </div>

    </section>

  )
}