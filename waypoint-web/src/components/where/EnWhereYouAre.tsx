import Link from "next/link";
import { MICROCOPY_EN } from "@/content/microcopy.en";

const states = [
  {
    slug: "broken",
    title: "Broken / angry",
    description: "High tension. Low clarity.",
  },
  {
    slug: "breakup",
    title: "After a breakup",
    description: "The relationship ended. The noise didn’t.",
  },
  {
    slug: "father",
    title: "Father in crisis",
    description: "Responsibility without support.",
  },
  {
    slug: "empty",
    title: "Stable but empty",
    description: "Everything works, nothing fulfills.",
  },
  {
    slug: "ready",
    title: "Ready for change",
    description: "Something closed. Space opened.",
  },
];

export default function EnWhereYouAre() {
  return (
    <section className="mt-6 w-full max-w-4xl text-left">
      <h2 className="text-lg md:text-xl font-medium mb-2 text-zinc-200">
        {MICROCOPY_EN.selectorTitle}
      </h2>

      <p className="text-sm text-zinc-500 mb-6">
        {MICROCOPY_EN.selectorHint}
      </p>

      <div className="grid gap-4">
        {states.map((state) => (
          <Link
            key={state.slug}
            href={`/en/where/${state.slug}`}
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