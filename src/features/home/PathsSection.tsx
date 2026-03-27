import Link from "next/link"

export default function PathsSection(){
  return (
    <section className="py-20 border-t">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-2xl font-semibold mb-8">
          Wybierz ścieżkę
        </h2>

        <div className="grid md:grid-cols-4 gap-4">

          <Link
            href="/sciezki/kryzys"
            className="border rounded-xl p-6 card-hover"
          >
            Kryzys
          </Link>

          <Link
            href="/sciezki/stabilizacja"
            className="border rounded-xl p-6 card-hover"
          >
            Stabilizacja
          </Link>

          <Link
            href="/sciezki/wzrost"
            className="border rounded-xl p-6 card-hover"
          >
            Wzrost
          </Link>

          <Link
            href="/sciezki/energia"
            className="border rounded-xl p-6 card-hover"
          >
            Energia
          </Link>

        </div>
src/app/page.tsx
      </div>
    </section>
  )
}