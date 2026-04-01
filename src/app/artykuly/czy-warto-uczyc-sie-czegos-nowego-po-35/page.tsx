import Link from "next/link"

export const metadata = {
  title: "Czy warto uczyć się czegoś nowego po 35 | MenMind",
  description: "Po 35 roku życia rozwój nadal ma sens. Zobacz dlaczego."
}

export default function Page() {
  return (
    <article className="max-w-3xl mx-auto px-6 py-16 leading-relaxed">

      <h1 className="text-3xl font-semibold mb-6">
        Czy warto uczyć się czegoś nowego po 35
      </h1>

      <p className="mb-4">
        Wiele osób myśli,
        że po 35 jest za późno.
      </p>

      <p className="mb-8">
        To mit.
      </p>

      <h2 className="text-xl font-semibold mb-3">
        Dlaczego warto
      </h2>

      <ul className="list-disc pl-6 space-y-2 mb-8">
        <li>większe doświadczenie</li>
        <li>lepsze decyzje</li>
        <li>jasne cele</li>
        <li>motywacja</li>
      </ul>

      <p className="mb-8">
        To często lepszy moment niż po 20.
      </p>

      <div className="border rounded-xl p-6 mb-10">

        <h3 className="font-semibold mb-2">
          Sprawdź kierunki
        </h3>

        <Link
          href="/praca"
          className="inline-block border border-black px-5 py-2 rounded-lg hover:bg-black hover:text-white transition"
        >
          Zobacz wymagania rynku
        </Link>

      </div>

      <p>
        Nauka ma sens,
        jeśli prowadzi do zmiany.
      </p>

    </article>
  )
}