import Link from "next/link"
import { proposalSections } from "@/data/proposalSections"
import { partners } from "@/data/partners"

export default function ProposalsGrid(){

  // 🔥 kolejność sekcji
  const order = [
    "wsparcie",
    "odbudowa",
    "wzrost",
    "relacje",
    "rozwoj",
    "zdrowie"
  ]

  const sortedSections = [...proposalSections].sort((a, b) => {
    const aIndex = order.indexOf(a.slug)
    const bIndex = order.indexOf(b.slug)

    if (aIndex === -1) return 1
    if (bIndex === -1) return -1

    return aIndex - bIndex
  })

  // 🔥 ikonki kategorii
  const icons: Record<string,string> = {

  // wsparcie
  psycholog: "🧠",
  psychiatra: "💊",
  psychoterapia: "🗣️",
  mediator: "🤝",
  prawo: "⚖️",
  "grupa-wsparcia": "👥",

  // odbudowa
  coaching: "🎯",
  mentor: "🧭",
  mental: "🧩",
  kariera: "💼",
  finanse: "💰",

  // wyjazdy
  "wyjazdy-meskie": "🏔️",
  reset: "🌄",
  "warsztaty-wyjazdowe": "🏕️",
  "wyprawy-przygodowe": "🧗",
  "wyjazdy-sportowe": "🚵",
  "wyjazdy-rozwojowe": "📍",

  // sport
  "sztuki-walki": "🥊",
  silownia: "🏋️",
  bieganie: "🏃",
  wspinaczka: "🧗",
  crossfit: "🔥",
  "sporty-zespolowe": "⚽",

  // zdrowie
  fizjoterapia: "🩺",
  masaze: "💆",
  medytacja: "🧘",
  oddech: "🌬️",
  sauna: "♨️",
  "terapia-zimnem": "🧊",

  // rozwoj
  "rozwoj-osobisty": "📈",
  "szkolenia-biznesowe": "📊",
  produktywnosc: "⚡",
  komunikacja: "💬",

  // społeczność
  "spotkania-mezczyzn": "👨",
  "kregi-meskie": "⭕",
  networking: "🔗",
  wolontariat: "🤲",

  // przygoda
  survival: "🔥",
  trekking: "🥾",
  "wyprawy-gorskie": "🏔️",
  offroad: "🚙",
  zeglarstwo: "⛵",
  strzelectwo: "🎯",

  // hobby
  fotografia: "📷",
  majsterkowanie: "🛠️",
  kolekcjonerstwo: "🏺",
  modelarstwo: "✈️",
  muzyka: "🎵"
}

  return(

    <div className="space-y-16">

      {sortedSections.map((section, sectionIndex) => (

        <div key={section.slug}>

          <h2 className="text-2xl font-semibold mb-6">
            {section.name}
          </h2>

          <div className="grid md:grid-cols-3 gap-4">

            {section.categories.map((category, index) => {

              // 🔥 liczba partnerów
              const count = partners.filter(
                p => p.category === category.slug
              ).length

              // 🔥 czy jest online
              const hasOnline = partners.some(
                p => p.category === category.slug && p.locationType === "online"
              )

              return(

                <Link
                  key={category.slug}
                  href={`/propozycje/${category.slug}`}
                  className={`border rounded-xl p-5 hover:shadow transition hover:border-black ${
                    sectionIndex === 0 && index === 0
                      ? "border-black"
                      : ""
                  }`}
                >

                  {/* 🔥 wyróżnienie */}
                  {sectionIndex === 0 && index === 0 && (
                    <div className="text-xs bg-black text-white inline-block px-2 py-1 rounded mb-2">
                      Najczęściej wybierane
                    </div>
                  )}

                  <h3 className="font-semibold mb-1 flex items-center gap-2">
                    <span>
                      {icons[category.slug] || "🔹"}
                    </span>
                    {category.name}
                  </h3>

                  {/* 🔥 meta info */}
                  <div className="flex items-center gap-3 text-xs text-gray-500 mt-2">

                    {count > 0 && (
                      <span>
                        {count} opcji
                      </span>
                    )}

                    {hasOnline && (
                      <span>
                        🌍 online
                      </span>
                    )}

                  </div>

                </Link>

              )

            })}

          </div>

        </div>

      ))}

    </div>

  )

}