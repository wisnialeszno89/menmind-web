import Link from "next/link";
import { MICROCOPY } from "@/content/microcopy";

const states = [
  {
    slug: "broken",
    title: "Rozbity / wkurzony",
    description: "Dużo napięcia. Mało jasności.",
  },
  {
    slug: "breakup",
    title: "Po rozstaniu",
    description: "Koniec relacji, myśli w pętli.",
  },
  {
    slug: "father",
    title: "Ojciec w kryzysie",
    description: "Odpowiedzialność bez wsparcia.",
  },
  {
    slug: "empty",
    title: "Stabilny, ale pusty",
    description: "Jest OK, ale bez sensu.",
  },
  {
    slug: "ready",
    title: "Gotowy na zmianę",
    description: "Chcę ruszyć dalej świadomie.",
  },
];

export default function WhereYouAre() {
  return (
    <section className="mt-6 w-full max-w-4xl text-left">
      <h2 className="text-lg md:text-xl font-medium mb-2 text-zinc-200">
        {MICROCOPY.selectorTitle}
      </h2>

      <p className="text-sm text-zinc-500 mb-6">
        {MICROCOPY.selectorHint}
      </p>

      <div className="grid gap-4">
        {states.map((state) => (
          <Link
            key={state.slug}
            href={`/where/${state.slug}`}
            className="block rounded-lg border border-zinc-800 bg-zinc-900 hover:bg-zinc-800 transition p-5"
          >
            <h3 className="text-base font-semibold text-zinc-100">
              {state.title}
            </h3>
            <p className="text-zinc-400 text-sm mt-1">
              {state.description}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
