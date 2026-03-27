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
  },

  // NOWE SEO
  {
    title: "Kryzys po 35 roku życia u mężczyzny",
    href: "/artykuly/kryzys-po-35",
    isNew: true
  },
  {
    title: "Brak sensu życia u mężczyzny",
    href: "/artykuly/brak-sensu-zycia-mezczyzna",
    isNew: true
  },
  {
    title: "Co zrobić po rozstaniu",
    href: "/artykuly/co-robic-po-rozstaniu-mezczyzna",
    isNew: true
  },
  {
    title: "Kryzys w małżeństwie",
    href: "/artykuly/kryzys-w-malzenstwie-mezczyzna",
    isNew: true
  },
  {
    title: "Brak motywacji do pracy",
    href: "/artykuly/brak-motywacji-do-pracy-mezczyzna",
    isNew: true
  },
  {
    title: "Wypalenie po 30",
    href: "/artykuly/wypalenie-po-30",
    isNew: true
  },
  {
    title: "Jak ogarnąć finanse",
    href: "/artykuly/jak-ogarnac-finanse-mezczyzna",
    isNew: true
  },
  {
    title: "Chaos w życiu mężczyzny",
    href: "/artykuly/chaos-w-zyciu-mezczyzna",
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

        <p className="text-gray-600 mb-10">
          Krótkie artykuły, które pomagają zobaczyć kierunek działania.
        </p>

        <div className="grid md:grid-cols-3 gap-6">

          {sorted.map(article => (

            <Link
              key={article.href}
              href={article.href}
              className="border rounded-xl p-6 card-hover hover:shadow transition bg-white"
            >
              <div className="flex items-center justify-between">

                <span>{article.title}</span>

                {article.isNew && (
                  <span className="text-xs bg-black text-white px-2 py-1 rounded">
                    Nowe
                  </span>
                )}

              </div>

            </Link>

          ))}

        </div>

      </div>

    </section>

  )

}