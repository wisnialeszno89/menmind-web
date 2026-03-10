import Link from "next/link"
import { words } from "../../data/words"

export default function WordsPage() {
  return (
    <main className="bg-white min-h-screen">
      <div className="max-w-5xl mx-auto px-6 py-24">
        <h1 className="text-4xl font-semibold mb-10">Słownik pojęć</h1>

        <div className="grid md:grid-cols-2 gap-6">
          {words.map((word) => (
            <Link
              key={word.slug}
              href={`/word/${word.slug}`}
              className="border rounded-xl p-6 hover:shadow"
            >
              <h3 className="font-semibold mb-2">{word.title}</h3>

              <p className="text-sm text-gray-600">
                {word.description.slice(0, 120)}...
              </p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}