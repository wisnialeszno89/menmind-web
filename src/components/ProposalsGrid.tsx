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
  muzyka: "🎵",

  dietetyk: "🥗",
  "trener-personalny": "🏋️",
  "plan-treningowy": "📋",
  "redukcja-wagi": "⚖️",
  "budowa-masy": "💪",
  "trening-domowy": "🏠",
  
  mobilnosc: "🤸",
  "rehabilitacja-sportowa": "🦴",
  "testy-wydolnosci": "📊",
  "przygotowanie-motoryczne": "⚡",
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
              const count = Math.max(
              3,
            partners.filter(
            p =>
           p.category?.some(
        c => c.toLowerCase() === category.slug.toLowerCase()
      )
  ).length
)

        const hasOnline = partners.some(
        p =>
        p.locationType === "online" &&
        p.category?.some(
        c => c.toLowerCase() === category.slug.toLowerCase()
    )
)

              return(

                <Link
                  key={category.slug}
                  href={count === 0 
                  ? "/dla-partnerow" 
                  : `/propozycje/${category.slug}`}
                  className={`border rounded-xl p-5 hover:shadow transition hover:border-black ${
                  sectionIndex === 0 && index === 0
                  ? "border-black"
                  : ""
              }`}
            >

             <h3 className="font-semibold mb-1 flex items-center gap-2">
             <span>
                 {icons[category.slug] || "🔹"}
            </span>
                  {category.name}
            </h3>

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

            {count === 0 && (
            <div className="mt-3 text-xs text-green-700 bg-green-50 border border-green-200 rounded-lg px-3 py-2">
             Zostań 1. partnerem i odbierz darmowy pakiet strategiczny na 1 miesiąc
            </div>
          )}

            </Link>

              )

            })}

          </div>

        </div>

      ))}

    </div>

  )

}