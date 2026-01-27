import { Suspense } from "react";
import { MICROCOPY_EN } from "@/content/microcopy";

function NavimindContentEN({ searchParams }: { searchParams?: { state?: string } }) {
  const state = searchParams?.state ?? "unknown";

  return (
    <main className="min-h-[100dvh] px-6 py-12 md:py-16">
      <div className="mx-auto max-w-6xl">
        <header className="mb-8">
          <p className="text-base text-zinc-300">MenMind · conversation</p>

          <h1 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">
            Pause for a moment
          </h1>

          <p className="mt-4 max-w-2xl text-lg text-zinc-200 leading-relaxed">
            {MICROCOPY_EN.navimindIntro}
          </p>

          <p className="mt-4 text-sm text-zinc-400">
            Starting context: <span className="text-zinc-200 font-medium">{state}</span>
          </p>
        </header>

        <section
          id="navimind"
          className="rounded-2xl border border-zinc-800/70 bg-zinc-900/40 shadow-lg shadow-black/20 backdrop-blur overflow-hidden"
        >
          <div className="w-full h-[78dvh] md:h-[70dvh]">
            <iframe
              src={`https://navimind.app?state=${state}`}
              title="Navimind"
              className="w-full h-full border-0"
              allow="clipboard-write"
            />
          </div>
        </section>

        <p className="text-sm text-zinc-500 mt-4">
          No history saved. No judgment. You can leave anytime.
        </p>
      </div>
    </main>
  );
}

export default function NavimindPageEN(props: { searchParams?: { state?: string } }) {
  return (
    <Suspense>
      <NavimindContentEN {...props} />
    </Suspense>
  );
}