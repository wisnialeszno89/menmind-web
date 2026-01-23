import Link from "next/link";

const states = [
  {
    slug: "broken",
    title: "Rozbity / wkurzony",
    description: "Wszystko się rozsypało albo właśnie pękło.",
  },
  {
    slug: "breakup",
    title: "Po rozstaniu",
    description: "Koniec relacji. Chaos w głowie.",
  },
  {
    slug: "father",
    title: "Ojciec w kryzysie",
    description: "Dzieci, sąd, odpowiedzialność.",
  },
  {
    slug: "empty",
    title: "Stabilny, ale pusty",
    description: "Niby ok, ale bez sensu.",
  },
  {
    slug: "ready",
    title: "Gotowy na zmianę",
    description: "Chcę ruszyć dalej. Świadomie.",
  },
];

export default function WhereYouAre() {
  return (
    <section className="mt-12 w-full max-w-4xl">
      <h2 className="text-xl md:text-2xl font-medium mb-6 text-zinc-200">
        Gdzie jesteś teraz?
      </h2>

      <div className="grid gap-4">
        {states.map((state) => (
          <Link
            key={state.slug}
            href={`/where/${state.slug}`}
            className="block rounded-lg border border-zinc-800 bg-zinc-900 hover:bg-zinc-800 transition p-5"
          >
            <h3 className="text-lg font-semibold text-zinc-100">
              {state.title}
            </h3>
            <p className="text-zinc-400 text-sm mt-1">
              {state.description}
            </p>
          </Link>
        ))}
      </div>

      <p className="text-xs text-zinc-500 mt-6">
        Nie musisz wybierać idealnie. To tylko punkt orientacyjny.
      </p>
    </section>
  );
}
