import Link from "next/link"

export default function TrendingPaths() {
  const paths = [
    { name: "Stabilizacja", href: "/sciezki/stabilnosc" },
    { name: "Kryzys", href: "/sciezki/kryzys" },
    { name: "Energia", href: "/sciezki/energia" },
    { name: "Relacja", href: "/sciezki/relacja" }
  ]

  return (
    <section className="py-20 border-t">
      <div className="max-w-5xl mx-auto px-6 text-center">

        <h2 className="text-2xl font-semibold mb-8">
          Najczęściej wybierane ścieżki
        </h2>

        <div className="flex flex-wrap justify-center gap-4">
          {paths.map((p, i) => (
            <Link
              key={i}
              href={p.href}
              className="border px-5 py-3 rounded-xl hover:bg-black hover:text-white transition"
            >
              {p.name}
            </Link>
          ))}
        </div>

      </div>
    </section>
  )
}