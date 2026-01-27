import { Suspense } from "react";

function NavimindContent({ searchParams }: { searchParams?: { state?: string } }) {
  const state = searchParams?.state ?? "unknown";

  return (
    <main className="min-h-[100dvh] px-6 py-12 md:py-16">
      <div className="mx-auto max-w-6xl">
        <header className="mb-8">
          <p className="text-base text-zinc-300">MenMind · rozmowa</p>

          <h1 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">
            Zatrzymaj się na chwilę
          </h1>

          <p className="mt-4 max-w-2xl text-lg text-zinc-200 leading-relaxed">
            To jest przestrzeń, w której możesz wejść w rozmowę bez presji,
            bez ocen i bez zbędnych etykiet.
          </p>

          <p className="mt-4 text-sm text-zinc-400">
            Kontekst startowy: <span className="text-zinc-200 font-medium">{state}</span>
          </p>
        </header>

        {/* ✅ iframe wrapper */}
        <section
          id="navimind"
          className="rounded-2xl border border-zinc-800/70 bg-zinc-900/40 shadow-lg shadow-black/20 backdrop-blur overflow-hidden"
        >
          {/* 
            ✅ Mobile fix: używamy dvh (dynamic viewport height)
            - 72dvh na desktop / większe okno
            - 78dvh na mobile, żeby user faktycznie "wszedł" w rozmowę
          */}
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
          Bez zapisu rozmów. Bez ocen. Możesz wyjść w każdej chwili.
        </p>
      </div>
    </main>
  );
}

export default function NavimindPage(props: { searchParams?: { state?: string } }) {
  return (
    <Suspense>
      <NavimindContent {...props} />
    </Suspense>
  );
}