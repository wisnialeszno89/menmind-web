import { notFound } from "next/navigation"
import { words } from "../../../data/words"
import Link from "next/link"

export function generateStaticParams() {
  return words.map((word) => ({
    slug: word.slug,
  }))
}

export default function WordPage({ params }: { params: { slug: string } }) {
  const word = words.find((w) => w.slug === params.slug)

  if (!word) return notFound()

  return (
    <main className="bg-white min-h-screen">
      <div className="max-w-3xl mx-auto px-6 py-24">
        <h1 className="text-4xl font-semibold mb-6">{word.title}</h1>

        <p className="text-gray-700 mb-12">
{word.title} to pojęcie często pojawiające się w kontekście sytuacji życiowych
związanych ze światem "{word.world}". Na MenMind znajdziesz artykuły,
narzędzia i drogi działania które pomagają zrozumieć tę sytuację
oraz przejść przez nią krok po kroku.
</p>

        {word.world && (
          <Link
            href={`/world/${word.world}`}
            className="border px-4 py-2 rounded hover:bg-gray-50"
          >
            Zobacz więcej w sekcji {word.world}
          </Link>
        )}
      </div>
    </main>
  )
}