import Link from "next/link"

const related = [
  {
    title: "Jak ogarnąć życie",
    href: "/artykuly/jak-ogarnac-zycie"
  },
  {
    title: "Brak motywacji",
    href: "/artykuly/brak-motywacji"
  },
  {
    title: "Chaos w życiu",
    href: "/artykuly/chaos-w-zyciu"
  },
  {
    title: "Samotność u mężczyzny",
    href: "/artykuly/samotnosc-u-mezczyzny"
  },
  {
    title: "Brak energii",
    href: "/artykuly/brak-energii"
  },
  {
    title: "Jak radzić sobie ze stresem",
    href: "/artykuly/jak-poradzic-sobie-ze-stresem"
  }
]

export default function RelatedArticles(){

  return(

    <section className="mt-16 border-t pt-10">

      <h3 className="text-xl font-semibold mb-6">
        Powiązane artykuły
      </h3>

      <div className="grid md:grid-cols-3 gap-4">

        {related.map(article => (

          <Link
            key={article.href}
            href={article.href}
            className="border rounded-lg p-4 hover:shadow transition text-sm"
          >
            {article.title}
          </Link>

        ))}

      </div>

    </section>

  )

}