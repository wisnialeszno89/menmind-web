import { notFound } from "next/navigation"
import Link from "next/link"
import FindSupportCTA from "@/components/FindSupportCTA"

const content: Record<string, any> = {

  rozstanie: {
    title: "Rozstanie",
    desc: "Rozstanie potrafi wywrócić życie. Zacznij od stabilizacji.",
    tool: "/narzedzia/reset"
  },

  stres: {
    title: "Silny stres",
    desc: "Gdy napięcie przejmuje kontrolę, zacznij od uspokojenia.",
    tool: "/narzedzia/reset"
  },

  finanse: {
    title: "Problemy finansowe",
    desc: "Chaos finansowy zwiększa stres. Zacznij od planu.",
    tool: "/narzedzia/plan-72h"
  },

  samotnosc: {
    title: "Samotność",
    desc: "Izolacja pogłębia problem. Zacznij od kontaktu.",
    tool: "/narzedzia/minimum"
  },

  energia: {
    title: "Powrót do energii",
    desc: "Energia wraca gdy uporządkujesz podstawy.",
    tool: "/narzedzia/reset"
  },

  stabilnosc: {
    title: "Nowa stabilność",
    desc: "Stabilność zaczyna się od rutyny.",
    tool: "/narzedzia/stabilizacja"
  },

  rutyna: {
    title: "Rutyna i dyscyplina",
    desc: "Powtarzalność zmniejsza chaos.",
    tool: "/narzedzia/minimum"
  },

  kariera: {
    title: "Kariera",
    desc: "Rozwój zawodowy wymaga kierunku.",
    tool: "/narzedzia/brain-dump"
  },

  dyscyplina: {
    title: "Dyscyplina",
    desc: "Małe kroki budują system.",
    tool: "/narzedzia/minimum"
  },

  relacja: {
    title: "Relacje",
    desc: "Silne relacje stabilizują życie.",
    tool: "/narzedzia/reset"
  },

  prawo: {
    title: "Sprawy prawne",
    desc: "Uporządkuj formalności spokojnie.",
    tool: "/narzedzia/brain-dump"
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

        <Link
          href={data.tool}
          className="block border p-4 rounded-lg mb-4"
        >
          👉 Zrób pierwszy krok
        </Link>

        <FindSupportCTA />

      </div>

    </main>

  )

}