"use client"

import Link from "next/link"

type Props = {
  slug: string
  world: "kryzys" | "odbudowa" | "wzrost" | "ojcostwo"
}

export default function ArticleNextSmart({ slug, world }: Props){

  // 1. slug mapping (najbardziej precyzyjne)
  const slugMap: Record<string, any> = {
    
    "dziecko-nie-chce-sie-ze-mna-spotykac": {
    test: "/narzedzia/test-relacji",
    tool: "/narzedzia/tracker-kontaktu-z-dzieckiem",
    },

    "praca-mnie-niszczy-psychicznie": {
    test: "/narzedzia/test-przeciazenia",
    tool: "/narzedzia/reset",
    },

    "nie-wiem-co-robic-ze-swoim-zyciem-po-30": {
    test: "/narzedzia/test-kierunku-zycia",
    tool: "/narzedzia/kompas-decyzji",
    },

    "nie-mam-sily-po-pracy": {
    test: "/narzedzia/test-energii",
    tool: "/narzedzia/reset",
    },

    "nie-lubie-swojej-pracy-ale-boje-sie-zmiany": {
    test: "/narzedzia/test-zmiany-pracy",
    tool: "/narzedzia/kompas-decyzji",
    },

    "nic-nie-jest-dramatyczne-ale-wszystko-mnie-meczy": {
      test: "/narzedzia/test-stagnacji",
      tool: "/narzedzia/reset",
    },

    "brak-energii": {
      test: "/narzedzia/test-energii",
      tool: "/narzedzia/reset",
    },

    "brak-celu-w-zyciu-mezczyzna": {
      test: "/narzedzia/test-kierunku",
      tool: "/narzedzia/kompas-decyzji",
    },

  }

  // 2. world fallback
  const worldMap = {
    kryzys: {
      test: "/narzedzia/test-stresu",
      tool: "/narzedzia/reset",
    },
    odbudowa: {
      test: "/narzedzia/test-kierunku",
      tool: "/narzedzia/plan-72h",
    },
    wzrost: {
      test: "/narzedzia/test-stagnacji",
      tool: "/narzedzia/mikro-kroki",
    },
    ojcostwo: {
      test: "/narzedzia/test-relacji",
      tool: "/narzedzia/plan-czasu-z-dzieckiem",
    },
  }

  const data = slugMap[slug] || worldMap[world]

  return(
    <section className="mt-12 border-t pt-8">

      <h3 className="font-semibold mb-4">
        Co może pomóc teraz
      </h3>

      <div className="space-y-3">

        <Link
          href={data.test}
          className="block border rounded-lg p-4"
        >
          👉 Zrób szybki test
        </Link>

        <Link
          href={data.tool}
          className="block border rounded-lg p-4"
        >
          Użyj narzędzia
        </Link>

        <Link
          href="/navimind"
          className="block text-sm underline"
        >
          Porozmawiaj w NaviMind
        </Link>

      </div>

    </section>
  )
}