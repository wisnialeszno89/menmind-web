import Link from "next/link"
import ArticleLayout from "@/features/articles/ArticleLayout"
export default function Page(){
  return(
    <article className="max-w-3xl mx-auto py-12 px-6">

      <h1 className="text-3xl font-semibold mb-6">
        Kryzys po 35 roku życia u mężczyzny
      </h1>

      <p className="mb-4">
        Po 35 roku życia wielu mężczyzn doświadcza momentu zatrzymania...
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">
        Najczęstsze objawy
      </h2>

      <ul className="list-disc pl-6 space-y-2">
      <li>Brak sensu pracy</li>
      <li>Zmęczenie</li>
      <li>Chaos finansowy</li>
      <li>Problemy w relacji</li>
      </ul>

      <p className="text-sm text-gray-500 mt-8">
      Jeśli po 35 roku życia myślisz o zmianie pracy,{" "}
      <Link href="/praca" className="underline">
      zobacz aktualne ogłoszenia pracy
      </Link>.
      </p>

    </article>
  )
}