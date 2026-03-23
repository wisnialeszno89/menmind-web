import Link from "next/link"

const articles = [
  {
    title: "Jak ogarnąć życie gdy wszystko się sypie",
    href: "/artykuly/jak-ogarnac-zycie"
  },
  {
    title: "Brak motywacji – co robić",
    href: "/artykuly/brak-motywacji"
  },
  {
    title: "Chaos w życiu – jak to poukładać",
    href: "/artykuly/chaos-w-zyciu"
  },
  {
    title: "Samotność u mężczyzny",
    href: "/artykuly/samotnosc-u-mezczyzny"
  },
  {
    title: "Brak energii – co robić",
    href: "/artykuly/brak-energii"
  },
  {
    title: "Jak radzić sobie ze stresem",
    href: "/artykuly/jak-poradzic-sobie-ze-stresem"
  }
]

export default function HomeSeoArticles(){

  return(

    <section className="py-20 border-t">

      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-3xl font-semibold mb-4">
          Przeczytaj i poukładaj sytuację
        </h2>

        <p className="text-gray-600 mb-10">
          Krótkie artykuły, które pomagają zobaczyć kierunek działania.
        </p>

        <div className="grid md:grid-cols-3 gap-6">

          {articles.map(article => (

            <Link
              key={article.href}
              href={article.href}
              className="border rounded-xl p-6 hover:shadow transition"
            >
              {article.title}
            </Link>

          ))}

        </div>

      </div>

    </section>

  )

}