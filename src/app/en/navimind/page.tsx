import { Suspense } from "react";
import { MICROCOPY_EN } from "@/content/microcopy";

function NavimindContentEN({
  searchParams,
}: {
  searchParams?: { state?: string };
}) {
  const state = searchParams?.state ?? "unknown";

  return (
    <main className="min-h-screen px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <header className="mb-8">
          <p className="text-sm text-zinc-400">Waypoint · conversation</p>

          <h1 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">
            Pause for a moment
          </h1>

          <p className="mt-4 text-zinc-300 max-w-2xl leading-relaxed">
            {MICROCOPY_EN.navimindIntro}
          </p>

          <p className="mt-4 text-sm text-zinc-500">
            Starting context: <span className="text-zinc-200">{state}</span>
          </p>
        </header>

        <section className="rounded-2xl border border-zinc-800/70 bg-zinc-900/40 shadow-lg shadow-black/20 backdrop-blur overflow-hidden">
          <div className="w-full h-[70vh]">
            <iframe
              src={`https://navimind.app?state=${state}`}
              title="Navimind"
              className="w-full h-full border-0"
              allow="clipboard-write"
            />
          </div>
        </section>

        <p className="text-xs text-zinc-500 mt-4">
          No history saved. No judgment. You can leave anytime.
        </p>
      </div>
    </main>
  );
}

export default function NavimindPageEN(props: {
  searchParams?: { state?: string };
}) {
  return (
    <Suspense>
      <NavimindContentEN {...props} />
    </Suspense>
  );
}