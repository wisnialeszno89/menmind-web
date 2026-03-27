import Link from "next/link"

type Props = {
  pathHref: string
  toolHref: string
}

export default function TestNextSteps({ pathHref, toolHref }: Props) {

  return (
    <section className="mt-10 border-t pt-8">

      <h3 className="text-xl font-semibold mb-6 text-center">
        Co możesz zrobić teraz
      </h3>

      <div className="grid md:grid-cols-3 gap-4">

        <Link
          href={pathHref}
          className="border rounded-xl p-5 text-center hover:shadow transition"
        >
          <div className="font-semibold mb-1">
            Ścieżka działania
          </div>
          <div className="text-sm text-neutral-600">
            Przejdź krok po kroku
          </div>
        </Link>

        <Link
          href={toolHref}
          className="border rounded-xl p-5 text-center hover:shadow transition"
        >
          <div className="font-semibold mb-1">
            Narzędzie
          </div>
          <div className="text-sm text-neutral-600">
            Zrób pierwszy ruch
          </div>
        </Link>

        <Link
          href="/propozycje"
          className="border rounded-xl p-5 text-center hover:shadow transition"
        >
          <div className="font-semibold mb-1">
            Znajdź wsparcie
          </div>
          <div className="text-sm text-neutral-600">
            Jeśli potrzebujesz pomocy
          </div>
        </Link>

      </div>

    </section>
  )
}