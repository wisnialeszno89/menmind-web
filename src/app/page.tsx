import Link from "next/link";
import WhereYouAre from "@/components/where/WhereYouAre";
import { MICROCOPY } from "@/content/microcopy";

export default function Home() {
  return (
    <main className="min-h-screen px-6 py-16">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm text-zinc-400">MenMind</p>

        <h1 className="mt-3 text-4xl md:text-5xl font-semibold tracking-tight">
          {MICROCOPY.heroTitle}
        </h1>

        <p className="mt-4 text-zinc-300 max-w-2xl mx-auto leading-relaxed">
          {MICROCOPY.heroLead}
        </p>

        <div className="mt-10 rounded-2xl border border-zinc-800/70 bg-zinc-900/40 p-6 shadow-lg shadow-black/20 backdrop-blur">
          <WhereYouAre />
        </div>

        {/* Szybki skrót */}
        <div className="mt-6 grid grid-cols-1 gap-3 text-left">
          <Link
            href="/navimind?state=relationship"
            className="block rounded-2xl border border-zinc-800/70 bg-zinc-900/40 p-5 transition hover:bg-zinc-900/55 hover:border-zinc-700/70 hover:shadow-lg hover:shadow-black/30"
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <h2 className="text-lg font-semibold text-zinc-100">
                  Problem w związku
                </h2>
                <p className="mt-2 text-sm text-zinc-400 leading-relaxed">
                  Ciągłe kłótnie, napięcie, chaos. Najpierw rozmowa — potem decyzje.
                </p>
              </div>

              <span className="shrink-0 rounded-full bg-cyan-500/15 px-3 py-1 text-xs text-cyan-200 ring-1 ring-cyan-400/20">
                Szybko
              </span>
            </div>

            <p className="mt-3 text-sm text-cyan-200">
              Porozmawiaj teraz →
            </p>
          </Link>
        </div>

        <p className="text-xs text-zinc-500 mt-10">
          {MICROCOPY.footerNote}
        </p>
      </div>
    </main>
  );
}