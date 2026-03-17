import Link from "next/link"

const items = [
  {
    title: "Sprawdź gdzie jesteś",
    desc: "Krótki test który pokaże Twój stan",
    href: "/narzedzia/test-sytuacji"
  },
  {
    title: "Zrób plan 72h",
    desc: "Ustabilizuj najbliższe dni",
    href: "/narzedzia/plan-72h"
  },
  {
    title: "Reset 90 sekund",
    desc: "Szybkie uspokojenie ciała",
    href: "/narzedzia/reset-90"
  },
  {
    title: "Wyrzuć z głowy",
    desc: "Zapisz wszystko co masz w środku",
    href: "/narzedzia/brain-dump"
  }
]

export default function QuickStart() {
  return (
    <section className="py-20 border-t">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-3xl font-semibold mb-4">
          Zacznij od tego
        </h2>

        <p className="text-neutral-600 mb-10">
          Jeśli nie wiesz co zrobić — wybierz jeden z kroków poniżej.
        </p>

        <div className="grid md:grid-cols-2 gap-6">

          {items.map(item => (
            <Link
              key={item.href}
              href={item.href}
              className="border rounded-xl p-6 hover:shadow transition"
            >
              <h3 className="font-semibold mb-2">
                {item.title}
              </h3>

              <p className="text-sm text-neutral-600">
                {item.desc}
              </p>
            </Link>
          ))}

        </div>

      </div>
    </section>
  )
}