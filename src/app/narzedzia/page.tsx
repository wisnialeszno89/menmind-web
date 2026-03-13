import Link from "next/link"

export default function Page() {

  const tools = [

    {
      slug: "test-stresu",
      title: "Test stresu"
    },

    {
      slug: "brain-dump",
      title: "Brain dump"
    },

    {
      slug: "plan-72h",
      title: "Plan 72h"
    },

    {
      slug: "reset",
      title: "Reset"
    }

  ]

  return (

    <div className="max-w-4xl mx-auto px-6 py-16">

      <h1 className="text-3xl font-semibold mb-10">
        Narzędzia
      </h1>

      <div className="grid gap-6">

        {tools.map((tool) => (

          <Link
            key={tool.slug}
            href={`/narzedzia/${tool.slug}`}
            className="border p-6 rounded-lg hover:bg-gray-50"
          >

            {tool.title}

          </Link>

        ))}

      </div>

    </div>

  )

}