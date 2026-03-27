import Link from "next/link"

const articles = [
  {
    title: "Jak ogarnąć życie gdy wszystko się sypie",
    href: "/artykuly/jak-ogarnac-zycie",
    time: "5 min"
  },
  {
    title: "Brak motywacji – co robić",
    href: "/artykuly/brak-motywacji",
    time: "4 min"
  },
  {
    title: "Chaos w życiu – jak to poukładać",
    href: "/artykuly/chaos-w-zyciu",
    time: "5 min"
  },
  {
    title: "Samotność u mężczyzny",
    href: "/artykuly/samotnosc-u-mezczyzny",
    time: "6 min"
  },
  {
    title: "Brak energii – co robić",
    href: "/artykuly/brak-energii",
    time: "5 min"
  },
  {
    title: "Jak radzić sobie ze stresem",
    href: "/artykuly/jak-poradzic-sobie-ze-stresem",
    time: "6 min"
  },

  // NOWE SEO
  {
    title: "Kryzys po 35 roku życia u mężczyzny",
    href: "/artykuly/kryzys-po-35",
    time: "7 min",
    isNew: true
  },
  {
    title: "Brak sensu życia u mężczyzny",
    href: "/artykuly/brak-sensu-zycia-mezczyzna",
    time: "6 min",
    isNew: true
  },
  {
    title: "Co zrobić po rozstaniu",
    href: "/artykuly/co-robic-po-rozstaniu-mezczyzna",
    time: "7 min",
    isNew: true
  },
  {
    title: "Kryzys w małżeństwie",
    href: "/artykuly/kryzys-w-malzenstwie-mezczyzna",
    time: "6 min",
    isNew: true
  },
  {
    title: "Brak motywacji do pracy",
    href: "/artykuly/brak-motywacji-do-pracy-mezczyzna",
    time: "6 min",
    isNew: true
  },
  {
    title: "Wypalenie po 30",
    href: "/artykuly/wypalenie-po-30",
    time: "6 min",
    isNew: true
  },
  {
    title: "Jak ogarnąć finanse",
    href: "/artykuly/jak-ogarnac-finanse-mezczyzna",
    time: "7 min",
    isNew: true
  },
  {
    title: "Chaos w życiu mężczyzny",
    href: "/artykuly/chaos-w-zyciu-mezczyzna",
    time: "6 min",
    isNew: true
  }
]

export default function HomeSeoArticles(){

  const sorted = [
    ...articles.filter(a => a.isNew),
    ...articles.filter(a => !a.isNew)
  ]

  return(

    <section className="py-20 border-t">

      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-3xl font-semibold mb-4">
          Przeczytaj i poukładaj sytuację
        </h2>

        <p className="text-gray-600 mb-4">
          Krótkie artykuły, które pomagają zobaczyć kierunek działania.
        </p>

        <div className="text-sm text-neutral-500 mb-8">
          🔥 Najczęściej czytane teraz
        </div>

        <div className="grid md:grid-cols-3 gap-6">

          {sorted.map(article => (

            <Link
              key={article.href}
              href={article.href}
              className="border rounded-xl p-6 card-hover hover:shadow transition bg-white"
            >

              <div className="flex justify-between items-start mb-2">

                <span className="font-medium leading-snug">
                  {article.title}
                </span>

                {article.isNew && (
                  <span className="text-xs bg-black text-white px-2 py-1 rounded ml-2 whitespace-nowrap">
                    Nowe
                  </span>
                )}

              </div>

              <div className="text-xs text-neutral-500 flex justify-between">

                <span>{article.time} czytania</span>

                {article.isNew && (
                  <span>🆕</span>
                )}

              </div>

            </Link>

          ))}

        </div>

      </div>

    </section>

  )

}