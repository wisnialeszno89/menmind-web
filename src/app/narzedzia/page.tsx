import Link from "next/link"
import { tools } from "@/content/tools"

export default function Page() {

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
            key={tool.slug}
            href={`/narzedzia/${tool.slug}`}
            className="border rounded-xl p-6 card-hover bg-white"
          >

            <h3 className="font-semibold mb-2">
              {tool.title}
            </h3>

            {tool.description && (
              <p className="text-sm text-neutral-500">
                {tool.description}
              </p>
            )}

          </Link>

        ))}

      </div>

    </main>

  )

}