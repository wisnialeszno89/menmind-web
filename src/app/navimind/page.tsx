import { Suspense } from "react";
import Link from "next/link";

function NavimindContent({
  searchParams,
}: {
  searchParams?: { state?: string };
}) {
  const state = searchParams?.state ?? "unknown";
  const iframeSrc = `https://navimind.app?state=${encodeURIComponent(state)}`;

  return (
    <main className="min-h-[100dvh] px-4 sm:px-6 py-6 md:py-12">
      <div className="mx-auto max-w-6xl">
        {/* ✅ Mobile-first header (smaller, less scroll) */}
        <header className="mb-4 md:mb-8">
          <p className="text-sm md:text-base text-zinc-300">MenMind · rozmowa</p>

          <h1 className="mt-2 text-2xl md:text-4xl font-semibold tracking-tight">
            Zatrzymaj się na chwilę
          </h1>

          <p className="mt-2 md:mt-4 max-w-2xl text-sm md:text-lg text-zinc-200 leading-relaxed">
            Wejdź w rozmowę bez presji, bez ocen i bez zbędnych etykiet.
          </p>

          <p className="mt-2 text-xs md:text-sm text-zinc-500">
            Kontekst startowy:{" "}
            <span className="text-zinc-200 font-medium">{state}</span>
          </p>
        </header>

        {/* ✅ Sticky controls: always visible */}
        <div className="sticky top-2 z-20 mb-4">
          <div className="rounded-2xl border border-zinc-800/60 bg-zinc-900/60 px-3 py-3 shadow-lg shadow-black/30 backdrop-blur">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="text-xs sm:text-sm text-zinc-300">
                Navimind.app • tryb rozmowy
              </div>

              <div className="flex flex-wrap gap-2">
                <a
                  href={iframeSrc}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-xl bg-cyan-500/15 px-3 py-2 text-xs sm:text-sm font-semibold text-cyan-200 ring-1 ring-cyan-400/20 hover:bg-cyan-500/20 transition"
                >
                  Otwórz na pełnym ekranie →
                </a>

                <Link
                  href="/"
                  className="inline-flex items-center justify-center rounded-xl bg-zinc-800/60 px-3 py-2 text-xs sm:text-sm font-semibold text-zinc-200 ring-1 ring-zinc-700/70 hover:bg-zinc-800/80 transition"
                >
                  ← Wróć
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* ✅ iframe wrapper */}
        <section
          id="navimind"
          className="rounded-2xl border border-zinc-800/60 bg-zinc-900/30 shadow-lg shadow-black/20 backdrop-blur overflow-hidden"
        >
          {/* 
            ✅ Better mobile height:
            - mobile: almost fullscreen
            - desktop: comfortable
          */}
          <div className="w-full h-[92dvh] md:h-[78dvh]">
            <iframe
              src={iframeSrc}
              title="Navimind"
              className="w-full h-full border-0"
              allow="clipboard-write"
            />
          </div>
        </section>

        <p className="text-xs sm:text-sm text-zinc-500 mt-4">
          Bez zapisu rozmów. Bez ocen. Możesz wyjść w każdej chwili.
        </p>
      </div>
    </main>
  );
}

export default function NavimindPage(props: {
  searchParams?: { state?: string };
}) {
  return (
    <Suspense>
      <NavimindContent {...props} />
    </Suspense>
  );
}