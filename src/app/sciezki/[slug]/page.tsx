import Link from "next/link"
import { notFound } from "next/navigation"

export async function generateMetadata({ params }: any) {

  const titles: Record<string,string> = {
    rozstanie: "Co zrobić po rozstaniu",
    stres: "Jak radzić sobie ze stresem",
    finanse: "Problemy finansowe co zrobić",
    samotnosc: "Samotność u mężczyzny",
    energia: "Brak energii co robić",
    stabilnosc: "Jak odzyskać stabilność",
    rutyna: "Jak zbudować rutynę",
    kariera: "Zmiana kariery od czego zacząć",
    dyscyplina: "Jak zbudować dyscyplinę",
    relacja: "Problemy w relacji co robić",
    prawo: "Prawo rodzinne co zrobić"
  }

  const title = titles[params.slug] || "Ścieżka działania"

  return {
    title,
    description: `${title}. Konkretne kroki dla mężczyzn.`
  }
}

const content: Record<string, any> = {

  finanse: {
    title: "Finanse — odzyskaj kontrolę",
    desc: "Problemy finansowe zwiększają stres. Zacznij od prostych kroków.",
    steps: [
      "Sprawdź realne koszty",
      "Odetnij zbędne wydatki",
      "Ustal plan 30 dni"
    ],
    tool: "/narzedzia/plan-72h",
    support: "/propozycje/finanse"
  },

  samotnosc: {
    title: "Samotność — wyjdź z izolacji",
    desc: "Samotność potrafi pogłębiać chaos w głowie.",
    steps: [
      "Zacznij od jednej rozmowy",
      "Wyjdź do ludzi",
      "Znajdź społeczność"
    ],
    tool: "/narzedzia/minimum",
    support: "/propozycje/spotkania-mezczyzn"
  },

  energia: {
    title: "Energia — wróć do sił",
    desc: "Brak energii to często przeciążenie.",
    steps: [
      "Sen",
      "Ruch",
      "Mniej chaosu"
    ],
    tool: "/narzedzia/reset",
    support: "/propozycje/trening"
  },

  stabilnosc: {
    title: "Stabilność — wróć do podstaw",
    desc: "Stabilność zaczyna się od dnia.",
    steps: [
      "Jedzenie",
      "Sen",
      "Ruch"
    ],
    tool: "/narzedzia/stabilizacja",
    support: "/propozycje/coaching"
  },

  rutyna: {
    title: "Rutyna — zbuduj strukturę dnia",
    desc: "Rutyna zmniejsza chaos.",
    steps: [
      "Stała godzina pobudki",
      "Plan dnia",
      "Wieczorne zamknięcie"
    ],
    tool: "/narzedzia/minimum",
    support: "/propozycje/produktywnosc"
  },

  kariera: {
    title: "Kariera — określ kierunek",
    desc: "Brak kierunku powoduje stagnację.",
    steps: [
      "Określ co chcesz zmienić",
      "Sprawdź opcje",
      "Zrób pierwszy ruch"
    ],
    tool: "/narzedzia/brain-dump",
    support: "/propozycje/kariera"
  },

  dyscyplina: {
    title: "Dyscyplina — wróć do działania",
    desc: "Dyscyplina to małe powtarzalne kroki.",
    steps: [
      "Małe cele",
      "Stała pora",
      "Zero negocjacji"
    ],
    tool: "/narzedzia/minimum",
    support: "/propozycje/produktywnosc"
  },

  relacja: {
    title: "Relacja — popraw komunikację",
    desc: "Problemy w relacji wymagają spokoju.",
    steps: [
      "Zatrzymaj emocje",
      "Nazwij problem",
      "Rozmawiaj spokojnie"
    ],
    tool: "/narzedzia/reset",
    support: "/propozycje/mediator"
  },

  prawo: {
    title: "Prawo — uporządkuj sytuację",
    desc: "Prawo rodzinne wymaga jasności.",
    steps: [
      "Zbierz dokumenty",
      "Sprawdź opcje",
      "Skonsultuj"
    ],
    tool: "/narzedzia/brain-dump",
    support: "/propozycje/prawo"
  }

}

export default function PathPage({ params }: any) {

  const data = content[params.slug]

  if (!data) return notFound()

  return (

    <main className="bg-white min-h-screen">

      <div className="max-w-3xl mx-auto px-6 py-24">

        <h1 className="text-4xl font-semibold mb-6">
          {data.title}
        </h1>

        <p className="text-gray-700 mb-10">
          {data.desc}
        </p>

        <div className="space-y-4 mb-10">

          {data.steps.map((step: string, i: number) => (
            <div
              key={i}
              className="border rounded-lg p-4"
            >
              {step}
            </div>
          ))}

        </div>

        <Link
          href={data.tool}
          className="block border p-4 rounded-lg mb-4"
        >
          👉 Zrób pierwszy krok
        </Link>

        <Link
          href={data.support}
          className="block border p-4 rounded-lg"
        >
          👉 Znajdź wsparcie
        </Link>

      </div>

    </main>

  )

}